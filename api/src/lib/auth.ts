import { type Decoded } from '@redwoodjs/api'
import { AuthenticationError, ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from './db'

type RedwoodUser = Record<string, unknown> & { roles?: string[] }
const namespace = 'http://localhost:8910'
export const getCurrentUser = async (
  decoded: Decoded
): Promise<RedwoodUser | null> => {
  if (!decoded) {
    return null
  }
  console.log(decoded)
  const user = await db.user.findUnique({
    where: {
      auth0id: decoded.sub,
    },
  })
  if (user) {
    console.log('returning existing user')
    return { ...decoded, ...user }
  } else {
    const newUser = await createUser(decoded)

    console.log('returning new user')
    return { ...decoded, ...newUser }
  }
}

const createUser = async (data) => {
  const name =
    data[`${namespace}/name`] === data[`${namespace}/email`]
      ? data[`${namespace}/nickname`]
      : data[`${namespace}/name`]

  return db.user.create({
    data: {
      auth0id: data.sub,
      name: name,
      email: data[`${namespace}/email`],
      picture: data[`${namespace}/picture`],
    },
  })
}

export const isAuthenticated = (): boolean => {
  return !!context.currentUser
}

type AllowedRoles = string | string[] | undefined

export const hasRole = (roles: AllowedRoles): boolean => {
  if (!isAuthenticated()) {
    return false
  }

  const currentUserRoles = context.currentUser?.roles

  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      return currentUserRoles === roles
    } else if (Array.isArray(currentUserRoles)) {
      return currentUserRoles?.some((allowedRole) => roles === allowedRole)
    }
  }

  if (Array.isArray(roles)) {
    if (Array.isArray(currentUserRoles)) {
      return currentUserRoles?.some((allowedRole) =>
        roles.includes(allowedRole)
      )
    } else if (typeof currentUserRoles === 'string') {
      return roles.some((allowedRole) => currentUserRoles === allowedRole)
    }
  }

  return false
}

export const requireAuth = ({ roles }: { roles?: AllowedRoles } = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}

// /**
//  * Represents the user attributes returned by the decoding the
//  * Authentication provider's JWT together with an optional list of roles.
//  */
// type RedwoodUser = Record<string, unknown> & { roles?: string[] }

// /**
//  * getCurrentUser returns the user information together with
//  * an optional collection of roles used by requireAuth() to check
//  * if the user is authenticated or has role-based access
//  *
//  * !! BEWARE !! Anything returned from this function will be available to the
//  * client--it becomes the content of `currentUser` on the web side (as well as
//  * `context.currentUser` on the api side). You should carefully add additional
//  * fields to the return object only once you've decided they are safe to be seen
//  * if someone were to open the Web Inspector in their browser.
//  *
//  * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
//  *
//  * @param decoded - The decoded access token containing user info and JWT
//  *   claims like `sub`. Note, this could be null.
//  * @param { token, SupportedAuthTypes type } - The access token itself as well
//  *   as the auth provider type
//  * @param { APIGatewayEvent event, Context context } - An optional object which
//  *   contains information from the invoker such as headers and cookies, and the
//  *   context information about the invocation such as IP Address
//  * @returns RedwoodUser
//  */
// export const getCurrentUser = async (
//   decoded: Decoded
// ): Promise<RedwoodUser | null> => {
//   if (!decoded) {
//     return null
//   }

//   const roles = decoded[process.env.AUTH0_AUDIENCE + '/roles']

//   if (roles) {
//     return { ...decoded, roles }
//   }

//   return { ...decoded }
// }

// /**
//  * The user is authenticated if there is a currentUser in the context
//  *
//  * @returns {boolean} - If the currentUser is authenticated
//  */
// export const isAuthenticated = (): boolean => {
//   return !!context.currentUser
// }

// /**
//  * When checking role membership, roles can be a single value, a list, or none.
//  * You can use Prisma enums too (if you're using them for roles), just import your enum type from `@prisma/client`
//  */
// type AllowedRoles = string | string[] | undefined

// /**
//  * Checks if the currentUser is authenticated (and assigned one of the given roles)
//  *
//  * @param roles: {@link AllowedRoles} - Checks if the currentUser is assigned one of these roles
//  *
//  * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
//  * or when no roles are provided to check against. Otherwise returns false.
//  */
// export const hasRole = (roles: AllowedRoles): boolean => {
//   if (!isAuthenticated()) {
//     return false
//   }

//   const currentUserRoles = context.currentUser?.roles

//   if (typeof roles === 'string') {
//     if (typeof currentUserRoles === 'string') {
//       // roles to check is a string, currentUser.roles is a string
//       return currentUserRoles === roles
//     } else if (Array.isArray(currentUserRoles)) {
//       // roles to check is a string, currentUser.roles is an array
//       return currentUserRoles?.some((allowedRole) => roles === allowedRole)
//     }
//   }

//   if (Array.isArray(roles)) {
//     if (Array.isArray(currentUserRoles)) {
//       // roles to check is an array, currentUser.roles is an array
//       return currentUserRoles?.some((allowedRole) =>
//         roles.includes(allowedRole)
//       )
//     } else if (typeof currentUserRoles === 'string') {
//       // roles to check is an array, currentUser.roles is a string
//       return roles.some((allowedRole) => currentUserRoles === allowedRole)
//     }
//   }

//   // roles not found
//   return false
// }

// /**
//  * Use requireAuth in your services to check that a user is logged in,
//  * whether or not they are assigned a role, and optionally raise an
//  * error if they're not.
//  *
//  * @param roles?: {@link AllowedRoles} - When checking role membership, these roles grant access.
//  *
//  * @returns - If the currentUser is authenticated (and assigned one of the given roles)
//  *
//  * @throws {@link AuthenticationError} - If the currentUser is not authenticated
//  * @throws {@link ForbiddenError} - If the currentUser is not allowed due to role permissions
//  *
//  * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
//  */
// export const requireAuth = ({ roles }: { roles?: AllowedRoles } = {}) => {
//   if (!isAuthenticated()) {
//     throw new AuthenticationError("You don't have permission to do that.")
//   }

//   if (roles && !hasRole(roles)) {
//     throw new ForbiddenError("You don't have access to do that.")
//   }
// }

// // export const getCurrentUser = async (decoded) => {
// //   console.log(decoded)
// //   const user =
// //     (await db.user.findUnique({ where: { id: sub } })) ||
// //     (await createUser(sub, name))
// //   return user
// // }

// // const createUser = (sub, name) => {
// //   console.log({ name })
// //   return db.user.create({
// //     data: {
// //       id: sub,
// //     },
// //   })
// // }

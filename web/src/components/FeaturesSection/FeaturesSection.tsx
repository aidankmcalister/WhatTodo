const Feature = ({ title, description }) => {
  return (
    <div className="rounded-md bg-neutral-100 p-5">
      <h1 className="mb-3 text-xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-800">{description}</p>
    </div>
  )
}

const FeaturesSection = () => {
  return (
    <section className="2-full flex flex-col items-center justify-center space-y-3">
      <Feature
        title="Easy Task Management"
        description="Quickly add, complete, and delete tasks with just a few clicks."
      />
      <Feature
        title="User-Friendly Interface"
        description="Intuitive design that makes navigating and organizing tasks a breeze."
      />
      <Feature
        title="Customizable Categories"
        description="Organize your tasks into customizable categories for better organization."
      />
    </section>
  )
}

export default FeaturesSection

// Features Section:

// Feature 1: "Easy Task Management"
// Description: "Quickly add, complete, and delete tasks with just a few clicks."
// Feature 2: "User-Friendly Interface"
// Description: "Intuitive design that makes navigating and organizing tasks a breeze."
// Feature 3: "Customizable Categories"
// Description: "Organize your tasks into customizable categories for better organization."

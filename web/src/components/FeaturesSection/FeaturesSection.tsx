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
      <h1 className="text-2xl font-bold">Features</h1>
      <div className="space-y-3  lg:columns-3 lg:space-y-0 ">
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
      </div>
    </section>
  )
}

export default FeaturesSection

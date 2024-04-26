const testimonials = [
  {
    body: "This app has transformed the way I manage my tasks. It's intuitive, efficient, and a joy to use.",
    author: {
      name: 'Emily Johnson',
      handle: 'emilyjohnson',
      imageUrl:
        'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "WhatTodo has been a game changer for me. I've never been more organized and on top of my tasks.",
    author: {
      name: 'David Smith',
      handle: 'davidsmith',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "I can't imagine my life without WhatTodo now. It's simple, powerful, and essential for my productivity.",
    author: {
      name: 'Sophia Lee',
      handle: 'sophialeee',
      imageUrl:
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const TestimonialSection = () => {
  return (
    <section className="2-full flex flex-col items-center justify-center">
      <h1 className="mb-3 text-2xl font-bold">Testimonials</h1>
      <div className="space-y-3 sm:columns-2 sm:text-[0] lg:columns-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.author.handle}
            className="sm:inline-block sm:w-full"
          >
            <figure className="rounded-md bg-neutral-100 p-5 text-sm leading-6">
              <p className="text-gray-900">
                <p>{`“${testimonial.body}”`}</p>
              </p>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-10 w-10 rounded-full bg-gray-50"
                  src={testimonial.author.imageUrl}
                  alt=""
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author.name}
                  </div>
                  <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection

import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        '"Scoped spend limits + agent-specific cards feels like the safest path for real autonomous workflows."',
      name: "Strakyo",
      handle: "@Strakyo",
      avatar: "/testimonials/client1.jpg",
    },
    {
      id: 2,
      quote:
        '"Giving agents scoped spending power, instead of full card access, is exactly the kind of guardrail this ecosystem needs to scale safely."',
      name: "EvanDataForge",
      handle: "@EvanDataForge",
      avatar: "/testimonials/client2.jpg",
    },
    {
      id: 3,
      quote:
        '"Smart approach. The token waste from agents navigating checkout forms was one of those costs nobody talks about."',
      name: "Brian Johnson",
      handle: "@_brian_johnson",
      avatar: "/testimonials/client3.jpg",
    },
    {
      id: 4,
      quote:
        '"Saler Support turned around our Amazon account health. Our ACoS dropped from 42% down to 14% while monthly revenue tripled in 90 days."',
      name: "Rajesh Sharma",
      handle: "@rajesh_apparel",
      avatar: "/testimonials/client4.jpg",
    },
  ];

  return (
    <section className="bg-surface-50 py-16 sm:py-20 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* Section Heading matching Hero Section font-heading typography */}
        <div className="text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-gray tracking-tight leading-[1.1] max-w-3xl mx-auto">
            What sellers are saying.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="agency-card p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 hover:border-tiffany/60 transition-all duration-300 flex flex-col justify-between space-y-8 group"
            >
              {/* Quote Text matching Hero Section font-sans paragraph typography */}
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {item.quote}
              </p>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-tiffany/40">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-dark-gray leading-tight truncate">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 font-semibold truncate mt-0.5">
                    {item.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

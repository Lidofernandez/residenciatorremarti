import { Heart, Home, Users, Utensils, Activity, Shield } from "lucide-react"

const features = [
  {
    name: "24/7 Care Support",
    description: "Our dedicated team is available around the clock to provide assistance whenever you need it.",
    icon: Heart,
  },
  {
    name: "Comfortable Living",
    description: "Beautifully appointed apartments with modern amenities designed for comfort and accessibility.",
    icon: Home,
  },
  {
    name: "Vibrant Community",
    description: "Join a welcoming community of neighbors who share interests, activities, and meaningful connections.",
    icon: Users,
  },
  {
    name: "Chef-Prepared Dining",
    description: "Enjoy delicious, nutritious meals prepared fresh daily by our culinary team in our elegant dining room.",
    icon: Utensils,
  },
  {
    name: "Wellness Programs",
    description: "Stay active and healthy with fitness classes, therapy services, and personalized wellness plans.",
    icon: Activity,
  },
  {
    name: "Peace of Mind",
    description: "Rest easy knowing your safety and security are our top priority with comprehensive safety features.",
    icon: Shield,
  },
]

export function FeaturesSection() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Our Amenities
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything You Need for a Fulfilling Life
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide comprehensive services and amenities designed to enhance your daily life.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl bg-card p-8 shadow-sm border border-border transition-all hover:shadow-md hover:border-primary/20"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-card-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

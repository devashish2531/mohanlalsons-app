import { Palette, Home, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Palette className="h-12 w-12 text-paint-red" />,
      title: "Quality Asian Paints",
      description:
        "Explore a wide range of Asian Paints products for every need, from interior walls to exterior surfaces.",
      color: "from-paint-red/20 to-paint-pink/20",
      borderColor: "border-paint-red/30",
    },
    {
      icon: <Home className="h-12 w-12 text-paint-purple" />,
      title: "Interior Decor Solutions",
      description:
        "Wide range of interior decor options available to complement your newly painted spaces.",
      color: "from-paint-purple/20 to-paint-blue/20",
      borderColor: "border-paint-purple/30",
    },
    {
      icon: <Users className="h-12 w-12 text-paint-blue" />,
      title: "Expert Painting Services",
      description:
        "Professional painting services for a flawless finish by our team of experienced painters.",
      color: "from-paint-blue/20 to-paint-purple/20",
      borderColor: "border-paint-blue/30",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-paint-red"></div>
              <span className="text-paint-red font-medium text-sm">
                OUR SERVICES
              </span>
              <div className="h-px w-8 bg-paint-red"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              At Mohan Lal Sons, we pride ourselves on offering the best
              painting solutions in Pataudi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 border ${service.borderColor} bg-gradient-to-br ${service.color} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

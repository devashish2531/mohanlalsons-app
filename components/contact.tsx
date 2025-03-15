import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-paint-blue"></div>
              <span className="text-paint-blue font-medium text-sm">
                GET IN TOUCH
              </span>
              <div className="h-px w-8 bg-paint-blue"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions about our products or services? Reach out to us
              today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-paint-blue/10 to-paint-purple/10 p-8 rounded-xl border border-paint-blue/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Mohan Lal & Sons
              </h3>
              <p className="text-foreground/70 mb-8">
                Your one-stop destination for all your painting needs in
                Pataudi, Haryana. Visit our store or contact us for a
                consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-paint-blue/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-paint-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a href="tel:+919991115565" className="text-foreground/70">
                      +91 999 111 5565
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-paint-purple/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-paint-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:mohanlalsonspataudi@gmail.com"
                      className="text-foreground/70"
                    >
                      mohanlalsonspataudi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-paint-red/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-paint-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <a
                      href="https://maps.app.goo.gl/fehSLhstiNpCFYPv6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70"
                    >
                      Main Market, Pataudi, Haryana, India
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">
                  Business Hours
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-foreground/70">Monday - Saturday:</div>
                  <div className="text-foreground">8:00 AM - 8:00 PM</div>
                  <div className="text-foreground/70">Sunday:</div>
                  <div className="text-foreground">9:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.0374884602493!2d76.77640397591394!3d28.327467175832826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4120123d8713%3A0x645ded0be9770652!2sMohan%20Lal%20%26%20Sons%20(ASIAN%20PAINTS%20Ezy%20Colour%20Store)!5e0!3m2!1sen!2sin!4v1726302878394!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                aria-label="Google Maps showing location of Mohan Lal and Sons Paint Store"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="mt-16 bg-gradient-to-r from-paint-red/5 to-paint-blue/5 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Get a Free Quote</h3>
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paint-blue text-foreground"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground/70 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paint-blue text-foreground"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paint-blue text-foreground"
                  placeholder="Your Email"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="service" className="block text-sm font-medium text-foreground/70 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paint-blue text-foreground"
                >
                  <option value="" disabled selected>
                    Select a Service
                  </option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="decorative">Decorative Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-paint-blue text-foreground"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full bg-paint-blue hover:bg-paint-blue/90 text-white py-6 h-auto text-lg">
                  Submit Request
                </Button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}

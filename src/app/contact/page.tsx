import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md'

export const metadata: Metadata = {
  title: 'Contact Us | R Marine Consultants',
  description: 'Get in touch with R Marine Consultants. We are ready to discuss your marine consulting needs. Email, phone, or visit our office.',
  openGraph: {
    title: 'Contact Us | R Marine Consultants',
    description: 'Get in touch with R Marine Consultants for expert marine consulting services.',
    type: 'website',
  },
}

const contactInfo = [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'info@rmarineconsultants.com',
    href: 'mailto:info@rmarineconsultants.com',
  },
  {
    icon: MdPhone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MdLocationOn,
    label: 'Address',
    value: 'Maritime Business District\nYour City, Country',
    href: undefined,
  },
  {
    icon: MdAccessTime,
    label: 'Business Hours',
    value: 'Monday – Friday\n09:00 – 17:00',
    href: undefined,
  },
]

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Have a question or want to discuss a project? We'd love to hear from you."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <ContactForm />
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2" delay={0.15}>
              <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-accent text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-gray-500 hover:text-accent transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-500 whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <MdLocationOn className="text-4xl text-muted mx-auto mb-2" />
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}

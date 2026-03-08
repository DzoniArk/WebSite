export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'R Marine Consultants',
    description: 'Professional marine consulting services providing expert technical advisory, project management, and regulatory compliance solutions for the maritime industry.',
    url: 'https://rmarineconsultants.com',
    email: 'info@rmarineconsultants.com',
    telephone: '+1234567890',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Your City',
      addressCountry: 'Country',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Marine Technical Advisory',
      'Maritime Project Management',
      'Regulatory Compliance Consulting',
      'Maritime Risk Assessment',
      'Fleet Management Consulting',
      'Maritime Safety Consulting',
    ],
    knowsAbout: [
      'Maritime Industry',
      'Naval Architecture',
      'Marine Engineering',
      'IMO Regulations',
      'Classification Societies',
      'Offshore Operations',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}

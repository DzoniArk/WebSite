import ScrollReveal from './ScrollReveal'

const certifications = [
  'IMO',
  "Lloyd's Register",
  'ClassNK',
  'DNV',
  'ABS',
  'Bureau Veritas',
]

export default function CertificationsBar() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-wider font-medium">
            Recognized by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {certifications.map((name) => (
              <div
                key={name}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-500 bg-white"
              >
                {name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

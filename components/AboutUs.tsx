"use client";

import Image from "next/image";

const counselors = [
  {
    name: "Mrudul Kulkarni",
    role: "Counsellor, Trainer, Parenting & Career Coach",
    image: "/images/mrudul.png",
  },
  {
    name: "Piyush Kulkarni",
    role: "Counsellor, Trainer, Parenting & Career Coach",
    image: "/images/piyush.png",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4
            bg-primary-100 dark:bg-primary-900/30
            text-primary-700 dark:text-primary-300 text-xs font-semibold">
            👥 OUR TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Meet Your <span className="text-primary-700 dark:text-primary-400">Counselors</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Experienced professionals dedicated to unlocking your potential through scientific analysis and personalized guidance.
          </p>
        </div>

        {/* Counselors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {counselors.map((person, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden
                bg-white dark:bg-slate-800/60
                border border-slate-100 dark:border-slate-700/50
                shadow-lg hover:shadow-2xl shadow-slate-200/60 dark:shadow-black/20
                transition-all duration-500 fade-in-up"
            >
              {/* Image */}
              <div className="relative h-80 sm:h-96 overflow-hidden bg-gradient-to-b from-primary-50 to-slate-100 dark:from-slate-700 dark:to-slate-800">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  {person.name}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shared Description */}
        <div className="max-w-3xl mx-auto text-center fade-in-up">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <svg className="w-10 h-10 mx-auto mb-4 text-primary-200/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg sm:text-xl leading-relaxed mb-6 text-white/90">
                At Dream Directors DMIT, we help individuals discover their true potential
                through scientific fingerprint analysis, providing clarity, confidence, and direction.
              </p>

              {/* Contact Numbers */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href="tel:9156485588"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  9156485588
                </a>
                <a
                  href="tel:9860075588"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  9860075588
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://chat.whatsapp.com/EAdx9vkewdb8IwOHEP359q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                  bg-[#25D366] hover:bg-[#20BD5A]
                  text-white font-semibold text-sm
                  shadow-lg hover:shadow-xl shadow-[#25D366]/30
                  transition-all duration-300 transform hover:scale-[1.03]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

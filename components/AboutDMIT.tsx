"use client";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "Career Guidance",
    description: "Identify the right career path based on innate strengths. Make informed decisions about education and professional choices for long-term fulfillment.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Life Direction",
    description: "Gain clarity on your life's purpose by understanding your intrinsic motivations, potential, and natural inclinations through scientific analysis.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Relationships",
    description: "Improve interpersonal dynamics by identifying compatibility factors, communication styles, and emotional intelligence metrics for personal and professional bonds.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm3.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" />
      </svg>
    ),
    title: "Mental Well-being",
    description: "Understand the psychological markers unique to your brain profile. Gain insights designed to nurture emotional stability, resilience, and inner peace.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Stress & Depression",
    description: "Identify inherent stress triggers and coping mechanisms. Equip yourself with personalized strategies to manage anxiety, overcome depression, and maintain balance.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Personal Development & Decision Making",
    description: "Enhance decision-making skills by knowing your cognitive style. Build confidence and interpersonal skills for lifelong personal and professional growth.",
  },
];

export default function AboutDMIT() {
  return (
    <section
      id="about-dmit"
      className="py-20 sm:py-28 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4
            bg-accent-400/10 dark:bg-accent-400/10
            text-accent-600 dark:text-accent-400 text-xs font-semibold">
            🧠 ABOUT DMIT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Unlock the Science Behind
            <br />
            <span className="text-primary-700 dark:text-primary-400">Fingerprint Analysis</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            DMIT combines neuroscience and dermatoglyphics to reveal your
            innate intelligence, potential, and personality traits.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800
                bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800/50 dark:to-slate-900/50
                hover:border-primary-200 dark:hover:border-primary-700
                hover:shadow-xl hover:shadow-primary-100/50 dark:hover:shadow-primary-900/20
                transition-all duration-500 fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5
                bg-primary-100 dark:bg-primary-900/40
                text-primary-600 dark:text-primary-400
                group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500
                transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

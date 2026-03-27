"use client";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-300/10 dark:from-slate-900 dark:via-slate-900 dark:to-primary-900/20" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-300/5 rounded-full blur-3xl" />

      {/* Floating Fingerprint Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-600" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-600" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-600" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-600" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-600" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-600" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary-600" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 text-center">


        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          <span className="text-slate-900 dark:text-white">Discover Your</span>
          <br />
          <span className="text-primary-700 dark:text-primary-400">True Potential</span>
          <br />
          <span className="text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl">
            with Fingerprint Analysis
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Career &bull; Education &bull; Personality Guidance
          <br />
          <span className="text-primary-600 dark:text-primary-400 font-semibold">
            for All Age Groups
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center mt-8">
          <a
            href="https://forms.gle/AVR3qhMDBynJNw1b6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl btn-shimmer cursor-pointer
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-700 hover:to-purple-700
              text-white shadow-xl hover:shadow-2xl shadow-blue-500/30 dark:shadow-purple-900/40
              transition-all duration-300 transform hover:scale-[1.03]
              flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Counseling Session
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 sm:mt-20 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:scale-105">
            <div className="p-2.5 bg-green-100 dark:bg-green-900/40 rounded-lg">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold text-slate-800 dark:text-gray-100 text-sm sm:text-base">Scientific Analysis</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:scale-105">
            <div className="p-2.5 bg-green-100 dark:bg-green-900/40 rounded-lg">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold text-slate-800 dark:text-gray-100 text-sm sm:text-base">Certified Counselors</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:scale-105">
            <div className="p-2.5 bg-green-100 dark:bg-green-900/40 rounded-lg">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold text-slate-800 dark:text-gray-100 text-sm sm:text-base">Personalized Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
}

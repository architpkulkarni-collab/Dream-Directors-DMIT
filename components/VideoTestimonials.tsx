"use client";

import { useState } from "react";

const videos = [
  {
    id: "h-j3VDK0pco",
    title: "DMIT Success Story — Career Clarity",
  },
  {
    id: "-Htox14sRaQ",
    title: "Parent Testimonial — Right Guidance",
  },
  {
    id: "cVCv7AXh15w",
    title: "Student Transformation — Confidence",
  },
];

const channels = [
  {
    label: "Know Yourself With Mrudul",
    url: "https://youtube.com/@knowyourselfwithmrudul",
    color: "from-red-500 to-red-600",
    hoverColor: "hover:from-red-600 hover:to-red-700",
  },
  {
    label: "Counselling for Joyful Living",
    url: "https://youtube.com/@counsellingforjoyfulliving896",
    color: "from-orange-500 to-red-500",
    hoverColor: "hover:from-orange-600 hover:to-red-600",
  },
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-white dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4
            bg-red-100 dark:bg-red-900/20
            text-red-600 dark:text-red-400 text-xs font-semibold">
            🎥 TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Real Guidance. <span className="text-primary-700 dark:text-primary-400">Real Impact.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg">
            Hear from families who have transformed their lives through DMIT counseling.
          </p>
        </div>

        {/* Video Player */}
        <div className="fade-in-up">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 dark:shadow-black/30
            border border-slate-200 dark:border-slate-700">
            {/* Video Embed */}
            <div className="video-container">
              <iframe
                key={videos[currentIndex].id}
                src={`https://www.youtube.com/embed/${videos[currentIndex].id}?rel=0`}
                title={videos[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video Title + Navigation */}
          <div className="flex items-center justify-between mt-6">
            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="p-3 rounded-xl cursor-pointer
                bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700
                text-slate-600 dark:text-slate-300
                transition-all duration-300"
              aria-label="Previous video"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Video Info */}
            <div className="text-center flex-1 mx-4">
              <p className="text-sm font-semibold text-slate-800 dark:text-white">
                {videos[currentIndex].title}
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? "bg-primary-600 dark:bg-primary-400 w-8"
                        : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="p-3 rounded-xl cursor-pointer
                bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700
                text-slate-600 dark:text-slate-300
                transition-all duration-300"
              aria-label="Next video"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* YouTube Channel Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 fade-in-up">
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl
                bg-gradient-to-r ${channel.color} ${channel.hoverColor}
                text-white font-semibold text-sm
                shadow-lg hover:shadow-xl
                transition-all duration-300 transform hover:scale-[1.03]`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {channel.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

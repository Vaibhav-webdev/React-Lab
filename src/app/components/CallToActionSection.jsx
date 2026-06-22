import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-[#060608] w-full py-18 px-4 flex justify-center">
      {/* Main Container - max-width set kiya hai for larger screens */}
      <div className="relative w-full max-w-6xl bg-[#121214] border border-gray-900 rounded-2xl p-8 md:p-14 overflow-hidden flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Background Ambient Glow - Performance friendly CSS glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Left Side: Graphic/Icon */}
        <div className="relative flex-shrink-0 flex justify-center items-center mt-8 lg:mt-0">
          {/* Outer glowing border/shape */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
             {/* Decorative lines (Reticle style) */}
             <div className="absolute inset-0 border border-purple-500/20 rounded-3xl rotate-45 transform transition-transform hover:rotate-90 duration-700 ease-in-out"></div>
             
             {/* Center Cube SVG */}
             <svg 
              className="w-20 h-20 md:w-28 md:h-28 text-white z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
        </div>

        {/* Right Side: Text and Buttons */}
        <div className="flex-1 z-10 text-center md:text-left">
          <p className="text-[#FF8A00] text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Ready to start?
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">NextJS</span> journey<br className="hidden md:block" /> starts now.
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">
            Join thousands of developers learning React the modern, practical way.
          </p>
          
          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group">
              Start Learning Now
              <svg 
                className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
              Try Mock Interviews
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
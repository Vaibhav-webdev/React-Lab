import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#030303] px-4 text-center my-18">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-orange-500 drop-shadow-[0_0_25px_rgba(147,51,234,0.4)]">
          404
        </h1>
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[60px]"></div>
      </div>
      
      <h2 className="mt-8 text-2xl font-bold tracking-wide text-white">
        Lost in the React Universe
      </h2>
      
      <p className="mt-4 max-w-md text-gray-400">
        The component or route you are looking for doesn't exist in this lab environment. Let's get you back on track.
      </p>
      
      <Link 
        href="/" 
        className="mt-10 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-purple-500 hover:to-purple-700 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] shadow-[0_0_15px_rgba(147,51,234,0.3)]"
      >
        Return to Base
      </Link>
    </div>
  );
}
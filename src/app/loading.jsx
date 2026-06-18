export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#030303]">
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border-y-2 border-purple-600 animate-[spin_2s_linear_infinite] drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div>
        
        {/* Inner orange ring */}
        <div className="absolute inset-3 rounded-full border-x-2 border-orange-500 animate-[spin_1.5s_linear_infinite_reverse] drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
        
        {/* Center glowing core */}
        <div className="h-4 w-4 rounded-full bg-purple-400 animate-pulse shadow-[0_0_15px_#a855f7]"></div>
        
        {/* Ambient background glow */}
        <div className="absolute h-12 w-12 rounded-full bg-purple-600/30 blur-xl"></div>
      </div>
    </div>
  );
}
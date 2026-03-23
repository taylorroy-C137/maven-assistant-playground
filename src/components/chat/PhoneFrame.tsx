"use client";

import { useEffect, useState } from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
}

function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      );
    }
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-maven-text">
      {/* Time */}
      <span className="text-[15px] font-semibold tabular-nums leading-none">
        {time}
      </span>

      {/* Right icons — signal, wifi, battery */}
      <div className="flex items-center gap-[6px]">
        {/* Cellular signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="7" width="3" height="5" rx="0.5" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
        </svg>
        {/* Wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
          <path
            fillRule="evenodd"
            d="M8 5.5a6 6 0 0 1 4.243 1.757l1.414-1.414A8 8 0 0 0 8 3.5a8 8 0 0 0-5.657 2.343l1.414 1.414A6 6 0 0 1 8 5.5z"
          />
          <path
            fillRule="evenodd"
            d="M8 7.5a3 3 0 0 1 2.121.879l1.415-1.415A5 5 0 0 0 8 5.5a5 5 0 0 0-3.536 1.464l1.415 1.415A3 3 0 0 1 8 7.5z"
          />
        </svg>
        {/* Battery */}
        <div className="flex items-center gap-[1px]">
          <div className="relative w-[25px] h-[12px] rounded-[3px] border-[1.5px] border-current">
            <div
              className="absolute inset-[1px] rounded-[1.5px] bg-current"
              style={{ width: "70%" }}
            />
          </div>
          <div className="w-[2px] h-[5px] rounded-r-[1px] bg-current opacity-40" />
        </div>
      </div>
    </div>
  );
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    /* Outer bezel */
    <div
      className="relative flex-shrink-0"
      style={{
        width: 393 + 24,   /* screen 393 + 12px bezel each side */
        borderRadius: 54,
        background: "linear-gradient(160deg, #2a2a2a 0%, #111 60%, #0a0a0a 100%)",
        padding: "14px 12px 10px",
        boxShadow:
          "0 0 0 1px #3a3a3a, 0 0 0 2px #111, inset 0 1px 0 #444, 0 40px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Left side buttons */}
      <div className="absolute left-0 top-[120px] flex flex-col gap-[10px] -translate-x-[5px]">
        {/* Silent switch */}
        <div
          style={{
            width: 4,
            height: 32,
            borderRadius: 2,
            background: "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)",
            boxShadow: "inset 0 1px 0 #444, 0 1px 2px rgba(0,0,0,0.8)",
          }}
        />
        {/* Volume up */}
        <div
          style={{
            width: 4,
            height: 64,
            borderRadius: 2,
            background: "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)",
            boxShadow: "inset 0 1px 0 #444, 0 1px 2px rgba(0,0,0,0.8)",
          }}
        />
        {/* Volume down */}
        <div
          style={{
            width: 4,
            height: 64,
            borderRadius: 2,
            background: "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%)",
            boxShadow: "inset 0 1px 0 #444, 0 1px 2px rgba(0,0,0,0.8)",
          }}
        />
      </div>

      {/* Right side power button */}
      <div
        className="absolute right-0 translate-x-[5px]"
        style={{ top: 160 }}
      >
        <div
          style={{
            width: 4,
            height: 80,
            borderRadius: 2,
            background: "linear-gradient(270deg, #1a1a1a 0%, #2a2a2a 100%)",
            boxShadow: "inset 0 1px 0 #444, 0 1px 2px rgba(0,0,0,0.8)",
          }}
        />
      </div>

      {/* Screen */}
      <div
        className="relative overflow-hidden bg-maven-bg"
        style={{
          width: 393,
          height: 780,
          borderRadius: 44,
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-50 bg-black"
          style={{
            top: 12,
            width: 126,
            height: 37,
            borderRadius: 20,
          }}
        />

        {/* Status bar sits above content, padded for Dynamic Island */}
        <div className="absolute top-0 left-0 right-0 z-40 pt-[52px]">
          <StatusBar />
        </div>

        {/* App content — padded top to clear status bar, fills rest of screen */}
        <div
          className="absolute left-0 right-0 bottom-0 overflow-hidden flex flex-col"
          style={{ top: 96 }}
        >
          {children}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 z-50">
          <div
            className="bg-maven-text opacity-20 rounded-full"
            style={{ width: 134, height: 5 }}
          />
        </div>
      </div>
    </div>
  );
}

import React from 'react';

interface IumeaLogoProps {
  className?: string;
  strokeWidth?: number;
}

export default function IumeaLogo({ className = 'w-16 h-16', strokeWidth = 2.5 }: IumeaLogoProps) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mathematically perfect, clean hand-drawn style arch */}
      <path
        d="M 30,70 A 40,40 0 0,1 110,70 L 110,102 A 8,8 0 0,1 102,110 L 38,110 A 8,8 0 0,1 30,102 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Center Motif (Evil Eye Protection Circle) */}
      {/* Outer Circle */}
      <circle
        cx="70"
        cy="52"
        r="13"
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.2}
        fill="none"
      />
      {/* Middle Circle */}
      <circle
        cx="70"
        cy="52"
        r="7"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.7}
        fill="none"
      />
      {/* Center Solid Dot */}
      <circle
        cx="70"
        cy="52"
        r="3"
        fill="currentColor"
      />

      {/* Left side dot */}
      <circle
        cx="44"
        cy="84"
        r="2"
        fill="currentColor"
      />

      {/* IUMÆ Stylized Text */}
      <text
        x="70"
        y="90"
        fill="currentColor"
        textAnchor="middle"
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '0.08em',
        }}
      >
        IUMÆ
      </text>

      {/* Right side dot */}
      <circle
        cx="96"
        cy="84"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}

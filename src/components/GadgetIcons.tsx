import React from 'react';

export function DoraemonCharacterSvg({
  className = 'w-24 h-24',
  isHappy = false,
}: {
  className?: string;
  isHappy?: boolean;
}) {
  return (
    <svg viewBox="0 0 120 128" fill="none" className={className} aria-hidden="true">
      {/* Blue Head */}
      <circle cx="60" cy="56" r="46" fill="#0096E6" stroke="#0B2239" strokeWidth="3.5" />
      {/* Subtle Head Highlight */}
      <path
        d="M28 28C36 18 48 15 58 15"
        stroke="#66C7FF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* White Face Patch */}
      <ellipse cx="60" cy="65" rx="38" ry="33" fill="#FFFFFF" stroke="#0B2239" strokeWidth="3" />

      {/* Eyes */}
      <ellipse cx="49" cy="34" rx="10.5" ry="13" fill="#FFFFFF" stroke="#0B2239" strokeWidth="3" />
      <ellipse cx="71" cy="34" rx="10.5" ry="13" fill="#FFFFFF" stroke="#0B2239" strokeWidth="3" />

      {isHappy ? (
        <>
          {/* Happy Laughing Arc Eyes */}
          <path
            d="M44 35C46 30 52 30 54 35"
            stroke="#0B2239"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M66 35C68 30 74 30 76 35"
            stroke="#0B2239"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          {/* Classic Pupils with Twinkle */}
          <ellipse cx="52" cy="35" rx="3.8" ry="5" fill="#0B2239" />
          <circle cx="53" cy="33" r="1.5" fill="#FFFFFF" />
          <ellipse cx="68" cy="35" rx="3.8" ry="5" fill="#0B2239" />
          <circle cx="67" cy="33" r="1.5" fill="#FFFFFF" />
        </>
      )}

      {/* Iconic Cherry Red Nose */}
      <circle cx="60" cy="46" r="7.5" fill="#E60012" stroke="#0B2239" strokeWidth="2.8" />
      <circle cx="57.5" cy="43.5" r="2.2" fill="#FF99A0" />

      {/* Nose-to-Mouth Vertical Line */}
      <path d="M60 53.5V74" stroke="#0B2239" strokeWidth="2.8" strokeLinecap="round" />

      {/* Whiskers (3 Left, 3 Right) */}
      <path d="M24 49L43 54" stroke="#0B2239" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M21 58L42 59" stroke="#0B2239" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 68L43 64" stroke="#0B2239" strokeWidth="2.4" strokeLinecap="round" />

      <path d="M96 49L77 54" stroke="#0B2239" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M99 58L78 59" stroke="#0B2239" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M96 68L77 64" stroke="#0B2239" strokeWidth="2.4" strokeLinecap="round" />

      {/* Big Cheerful Smile */}
      {isHappy ? (
        <path
          d="M38 70C44 86 76 86 82 70H38Z"
          fill="#E60012"
          stroke="#0B2239"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M36 69C44 82 76 82 84 69"
          stroke="#0B2239"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}

      {/* Lower Blue Torso Peek & 4D Pocket */}
      <path
        d="M26 95H94L98 122H22L26 95Z"
        fill="#0096E6"
        stroke="#0B2239"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M36 98H84C84 114 73 121 60 121C47 121 36 114 36 98Z"
        fill="#FFFFFF"
        stroke="#0B2239"
        strokeWidth="2.6"
      />
      <path
        d="M44 104H76C76 113 69 117 60 117C51 117 44 113 44 104Z"
        fill="#F4FAFF"
        stroke="#0B2239"
        strokeWidth="2.2"
      />

      {/* Red Collar */}
      <rect x="24" y="90" width="72" height="10" rx="5" fill="#E60012" stroke="#0B2239" strokeWidth="3" />

      {/* Golden Collar Bell */}
      <circle cx="60" cy="99" r="9.5" fill="#FFD700" stroke="#0B2239" strokeWidth="2.6" />
      <path d="M51 98H69" stroke="#0B2239" strokeWidth="2" />
      <circle cx="60" cy="102" r="2" fill="#0B2239" />
    </svg>
  );
}

export function GoldenBellSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* Red Collar Band */}
      <rect x="8" y="8" width="48" height="10" rx="5" fill="#E60012" stroke="#0B2239" strokeWidth="2.5" />
      {/* Bell Sphere */}
      <circle cx="32" cy="36" r="19" fill="#FFD700" stroke="#0B2239" strokeWidth="2.5" />
      {/* Highlight */}
      <path d="M21 26C24 22 28 21 32 21" stroke="#FFF9C4" strokeWidth="3" strokeLinecap="round" />
      {/* Bell Rim */}
      <rect x="12" y="32" width="40" height="5" rx="2.5" fill="#F4B400" stroke="#0B2239" strokeWidth="2.2" />
      {/* Bell Center Hole & Slit */}
      <circle cx="32" cy="44" r="3.5" fill="#0B2239" />
      <path d="M32 47.5V55" stroke="#0B2239" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

export function AnywhereDoorSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M12 10H52V56H12V10Z" fill="#FF5C8D" stroke="#0B2239" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="9" y="6" width="46" height="6" rx="2" fill="#FF3D77" stroke="#0B2239" strokeWidth="2.5" />
      <rect x="8" y="54" width="48" height="5" rx="2" fill="#FF3D77" stroke="#0B2239" strokeWidth="2.5" />
      <rect x="18" y="16" width="28" height="15" rx="1.5" fill="#FF85A9" stroke="#0B2239" strokeWidth="2" />
      <rect x="18" y="36" width="28" height="14" rx="1.5" fill="#FF85A9" stroke="#0B2239" strokeWidth="2" />
      <circle cx="42" cy="33.5" r="3" fill="#FFD700" stroke="#0B2239" strokeWidth="2" />
    </svg>
  );
}

export function BambooCopterSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <ellipse cx="32" cy="16" rx="24" ry="5" fill="#FFF3B0" stroke="#0B2239" strokeWidth="2.2" />
      <rect x="27" y="12" width="10" height="8" rx="3" fill="#FFD700" stroke="#0B2239" strokeWidth="2.2" />
      <rect x="30" y="20" width="4" height="22" fill="#F4B400" stroke="#0B2239" strokeWidth="2.2" />
      <path d="M20 50C20 43.3726 25.3726 38 32 38C38.6274 38 44 43.3726 44 50H20Z" fill="#FFD700" stroke="#0B2239" strokeWidth="2.5" />
    </svg>
  );
}

export function TimeKerchiefSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 16C22 10 42 22 54 14C50 28 56 42 50 52C36 46 24 56 10 48C14 36 8 26 10 16Z"
        fill="#E60012"
        stroke="#0B2239"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="28" r="7" fill="#FFFFFF" stroke="#0B2239" strokeWidth="2" />
      <path d="M24 24V28L26.5 30" stroke="#0B2239" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="37" r="7" fill="#FFFFFF" stroke="#0B2239" strokeWidth="2" />
      <path d="M40 33V37L37.5 39" stroke="#0B2239" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DorayakiSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <ellipse cx="32" cy="40" rx="22" ry="9" fill="#D97724" stroke="#0B2239" strokeWidth="2.5" />
      <ellipse cx="32" cy="35" rx="23" ry="6" fill="#6D213C" stroke="#0B2239" strokeWidth="2.2" />
      <path
        d="M10 33C10 22 20 17 32 17C44 17 54 22 54 33C54 37 44 40 32 40C20 40 10 37 10 33Z"
        fill="#E58E35"
        stroke="#0B2239"
        strokeWidth="2.5"
      />
      <path d="M20 24C24 21.5 30 21 35 22" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function MemoryBreadSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 26C13 22 15 14 23 14C27 14 30 16 32 18C34 16 37 14 41 14C49 14 51 22 48 26V50C48 52.2 46.2 54 44 54H20C17.8 54 16 52.2 16 50V26Z"
        fill="#D9822B"
        stroke="#0B2239"
        strokeWidth="2.5"
      />
      <path
        d="M20 27C18 24 19 18 24 18C28 18 30 20 32 22C34 20 36 18 40 18C45 18 46 24 44 27V48H20V27Z"
        fill="#FFFBEB"
        stroke="#0B2239"
        strokeWidth="1.8"
      />
      <path d="M25 32H39M25 38H39M25 43H34" stroke="#0096E6" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function IfPhoneBoothSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* Red Phone Booth Roof & Frame */}
      <path d="M16 14C16 9.5 23 7 32 7C41 7 48 9.5 48 14H16Z" fill="#E60012" stroke="#0B2239" strokeWidth="2.5" />
      <rect x="16" y="14" width="32" height="42" rx="2" fill="#E60012" stroke="#0B2239" strokeWidth="2.5" />
      {/* Glass Windows */}
      <rect x="21" y="19" width="10" height="10" rx="1" fill="#E0F4FF" stroke="#0B2239" strokeWidth="1.8" />
      <rect x="33" y="19" width="10" height="10" rx="1" fill="#E0F4FF" stroke="#0B2239" strokeWidth="1.8" />
      <rect x="21" y="32" width="10" height="10" rx="1" fill="#E0F4FF" stroke="#0B2239" strokeWidth="1.8" />
      <rect x="33" y="32" width="10" height="10" rx="1" fill="#E0F4FF" stroke="#0B2239" strokeWidth="1.8" />
      {/* Base */}
      <rect x="13" y="54" width="38" height="4" rx="2" fill="#0B2239" />
    </svg>
  );
}

export function TimeMachineSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* Floating Carpet Platform */}
      <path
        d="M8 40L20 28H52L56 44L14 48L8 40Z"
        fill="#E60012"
        stroke="#0B2239"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Control Console */}
      <rect x="24" y="20" width="16" height="14" rx="3" fill="#0096E6" stroke="#0B2239" strokeWidth="2.2" />
      {/* Control Levers */}
      <path d="M29 20V12" stroke="#0B2239" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="29" cy="11" r="3" fill="#FFD700" stroke="#0B2239" strokeWidth="2" />
      <path d="M36 20V14" stroke="#0B2239" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="13" r="2.5" fill="#FF5C8D" stroke="#0B2239" strokeWidth="2" />
      {/* Light Beacon */}
      <circle cx="15" cy="36" r="4" fill="#FFD700" stroke="#0B2239" strokeWidth="2" />
    </svg>
  );
}

export function BigLightSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* Light Beam */}
      <path d="M42 18L58 8V40L42 30V18Z" fill="#FFF59D" opacity="0.85" />
      {/* Flashlight Body */}
      <rect x="10" y="21" width="24" height="14" rx="4" fill="#E60012" stroke="#0B2239" strokeWidth="2.5" />
      {/* Flared Lens Cone */}
      <path
        d="M34 21L44 15V41L34 35V21Z"
        fill="#FFD700"
        stroke="#0B2239"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Switch */}
      <rect x="18" y="17" width="8" height="4" rx="1.5" fill="#0096E6" stroke="#0B2239" strokeWidth="2" />
    </svg>
  );
}

export function DressUpCameraSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* Camera Body */}
      <rect x="10" y="18" width="44" height="32" rx="6" fill="#0096E6" stroke="#0B2239" strokeWidth="2.5" />
      {/* Top Flash / Viewfinder */}
      <path d="M22 18L26 11H38L42 18H22Z" fill="#FFD700" stroke="#0B2239" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Lens */}
      <circle cx="32" cy="34" r="10" fill="#FFFFFF" stroke="#0B2239" strokeWidth="2.5" />
      <circle cx="32" cy="34" r="5" fill="#FF5C8D" stroke="#0B2239" strokeWidth="2" />
      {/* Shutter Button */}
      <rect x="44" y="13" width="6" height="5" rx="1.5" fill="#E60012" stroke="#0B2239" strokeWidth="2" />
    </svg>
  );
}

export function FourDPocketSvg({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="#0096E6" stroke="#0B2239" strokeWidth="2.5" />
      <circle cx="32" cy="35" r="21" fill="#FFFFFF" stroke="#0B2239" strokeWidth="2.2" />
      <path d="M16 33H48C48 42.5 40.8 50 32 50C23.2 50 16 42.5 16 33Z" fill="#F4FAFF" stroke="#0B2239" strokeWidth="2.5" />
      <path d="M13 15C20 19 44 19 51 15" stroke="#E60012" strokeWidth="5" strokeLinecap="round" />
      <circle cx="32" cy="19" r="5" fill="#FFD700" stroke="#0B2239" strokeWidth="2" />
    </svg>
  );
}

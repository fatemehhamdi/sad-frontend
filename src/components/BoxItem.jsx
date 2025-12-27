import React from 'react'

// Simple SVG vector shapes for lost items matching the design style
export const BoxItem = ({ type, className }) => {
  const items = {
    card: (
      <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="2" y="4" width="20" height="12" rx="2" fill="#FF6B6B" stroke="#fff" strokeWidth="1"/>
        <rect x="4" y="7" width="12" height="2" fill="#fff"/>
        <rect x="4" y="11" width="8" height="1" fill="#fff"/>
      </svg>
    ),
    watch: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="10" cy="10" r="8" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5"/>
        <line x1="10" y1="10" x2="10" y2="6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="10" x2="13" y2="10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="10" x2="4" y2="10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="10" x2="18" y2="10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    glasses: (
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="8" cy="8" r="6" fill="none" stroke="#6893BD" strokeWidth="2"/>
        <circle cx="20" cy="8" r="6" fill="none" stroke="#6893BD" strokeWidth="2"/>
        <line x1="14" y1="8" x2="14" y2="8" stroke="#6893BD" strokeWidth="2"/>
        <line x1="2" y1="8" x2="0" y2="6" stroke="#6893BD" strokeWidth="2" strokeLinecap="round"/>
        <line x1="26" y1="8" x2="28" y2="6" stroke="#6893BD" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    charger: (
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="4" y="2" width="8" height="18" rx="1" fill="#fff" stroke="#6893BD" strokeWidth="1"/>
        <rect x="6" y="4" width="4" height="2" fill="#6893BD"/>
        <rect x="7" y="18" width="2" height="4" rx="1" fill="#6893BD"/>
      </svg>
    ),
    bottle: (
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M6 2 L10 2 L10 4 L12 4 L12 20 L4 20 L4 4 L6 4 Z" fill="#D1E6FD" stroke="#6893BD" strokeWidth="1"/>
        <rect x="7" y="8" width="2" height="8" fill="#6893BD"/>
      </svg>
    ),
    wallet: (
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="2" y="4" width="20" height="14" rx="2" fill="#FFDDE9" stroke="#fff" strokeWidth="1"/>
        <rect x="4" y="7" width="12" height="2" fill="#fff"/>
        <rect x="15" y="12" width="6" height="6" rx="1" fill="#6893BD"/>
      </svg>
    ),
    keys: (
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="8" cy="8" r="5" fill="none" stroke="#fff" strokeWidth="2"/>
        <rect x="6" y="6" width="4" height="4" fill="#fff"/>
        <line x1="13" y1="10" x2="20" y2="3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="5" r="2" fill="#FFDDE9"/>
      </svg>
    ),
    earbuds: (
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="6" cy="8" r="5" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5"/>
        <circle cx="22" cy="8" r="5" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5"/>
        <path d="M11 8 Q14 6 17 8" stroke="#6893BD" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    powerbank: (
      <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="2" y="4" width="14" height="18" rx="2" fill="#6893BD" stroke="#fff" strokeWidth="1"/>
        <rect x="5" y="7" width="8" height="12" fill="#16476A"/>
        <rect x="7" y="2" width="4" height="4" rx="1" fill="#6893BD"/>
      </svg>
    ),
    phone: (
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="2" y="2" width="10" height="18" rx="2" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5"/>
        <rect x="4" y="5" width="6" height="10" fill="#6893BD"/>
        <circle cx="7" cy="18" r="1" fill="#fff"/>
      </svg>
    ),
  }

  return items[type] || null
}


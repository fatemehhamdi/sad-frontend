import React from 'react'
import { motion } from 'framer-motion'
import styles from './LostFoundBox.module.css'
import { BoxItem } from './BoxItem'

// Lost items with SVG vector shapes - increased spacing to avoid overlap
const items = [
  { id: 1, type: 'card', offset: -50, delay: 0 }, // Credit card
  { id: 2, type: 'watch', offset: -35, delay: 0.1 }, // Watch
  { id: 3, type: 'glasses', offset: -20, delay: 0.15 }, // Glasses
  { id: 4, type: 'charger', offset: -5, delay: 0.2 }, // Charger
  { id: 5, type: 'bottle', offset: 10, delay: 0.25 }, // Bottle
  { id: 6, type: 'wallet', offset: 25, delay: 0.3 }, // Wallet
  { id: 7, type: 'keys', offset: 40, delay: 0.15 }, // Keys
  { id: 8, type: 'earbuds', offset: -45, delay: 0.25 }, // Earbuds
  { id: 9, type: 'powerbank', offset: -30, delay: 0.2 }, // Power bank
  { id: 10, type: 'phone', offset: 0, delay: 0.3 }, // Phone
]

function LostFoundBox() {
  /**
   * Lid Animation Logic:
   * - The lid starts closed (rotateX: 0) with transform origin at bottom center (50% 100%)
   * - This creates a hinge effect where the lid rotates around its back edge
   * - When opening, rotateX: -110 rotates the lid backward (negative = backward rotation)
   * - The 3D perspective is applied via the parent container (boxContainer)
   * - Animation duration: 1.2s with smooth easing for realistic box opening
   */
  const lidVariants = {
    closed: {
      rotateX: 0,
      transformOrigin: '50% 100%', // Rotate around the bottom center (hinge point)
    },
    open: {
      rotateX: -110, // Rotate backward to open the lid upward
      transformOrigin: '50% 100%',
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier easing for smooth, natural opening
      },
    },
  }

  /**
   * Falling Items Animation Logic:
   * - Items start invisible (opacity: 0) above the box (y: -100)
   * - After the lid opens (1.2s) + stagger delay, items begin falling
   * - Each item falls with:
   *   - Gravity-like easing ([0.34, 1.56, 0.64, 1]) creates a bounce on landing
   *   - Random horizontal offsets (custom.offset) for natural scatter
   *   - Fade-in during fall (opacity transition)
   *   - Scale animation for visual interest
   * - Items land inside the box at y: 110 (inside the box container)
   */
  const itemVariants = {
    initial: {
      y: -100, // Start above the box
      x: 0,
      opacity: 0,
      scale: 0.8,
    },
    animate: (custom) => ({
      y: 95, // Landing position inside the box (adjusted for better fit)
      x: custom.offset, // Horizontal offset - increased spacing to avoid overlap
      opacity: 1,
      scale: 1,
      transition: {
        y: {
          duration: 0.8,
          delay: custom.delay, // Staggered delays (1.4s + index * 0.15s)
          ease: [0.34, 1.56, 0.64, 1], // Bounce easing simulates gravity and landing bounce
        },
        x: {
          duration: 0.8,
          delay: custom.delay,
          ease: 'easeOut', // Smooth horizontal movement
        },
        opacity: {
          duration: 0.3,
          delay: custom.delay,
        },
        scale: {
          duration: 0.8,
          delay: custom.delay,
          ease: [0.34, 1.56, 0.64, 1], // Match bounce for consistency
        },
      },
    }),
  }

  return (
    <div className={styles.container}>
      {/* Lost & Found badge/symbol */}
      <div className={styles.badge}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#80AFD0" />
              <stop offset="100%" stopColor="#FFDDE9" />
            </linearGradient>
          </defs>
          <circle cx="30" cy="30" r="28" fill="url(#badgeGradient)"/>
          <text x="30" y="38" textAnchor="middle" fill="#122942" fontSize="20" fontWeight="bold" fontFamily="Arial, sans-serif">L&F</text>
        </svg>
      </div>

      <div className={styles.boxContainer}>
        {/* Box base - cleaner 3D perspective */}
        <svg
          className={styles.box}
          viewBox="0 0 200 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Box side (right face) */}
          <polygon
            points="160,60 180,45 180,105 160,120"
            fill="#16476A"
            stroke="#6893BD"
            strokeWidth="2"
          />
          {/* Box front face */}
          <rect
            x="40"
            y="60"
            width="120"
            height="60"
            fill="#16476A"
            stroke="#6893BD"
            strokeWidth="2"
          />
          {/* Box top face (visible when lid is open) */}
          <polygon
            points="40,60 160,60 180,45 60,45"
            fill="#16476A"
            stroke="#6893BD"
            strokeWidth="2"
          />
          {/* Inner box depth lines */}
          <line
            x1="40"
            y1="60"
            x2="60"
            y2="45"
            stroke="#6893BD"
            strokeWidth="2"
          />
          <line
            x1="40"
            y1="120"
            x2="60"
            y2="105"
            stroke="#6893BD"
            strokeWidth="2"
          />
          <line
            x1="60"
            y1="45"
            x2="60"
            y2="105"
            stroke="#6893BD"
            strokeWidth="2"
          />
          {/* "Lost & Found" text - centered on front face */}
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#80AFD0" />
              <stop offset="100%" stopColor="#FFDDE9" />
            </linearGradient>
          </defs>
          <text
            x="100"
            y="100"
            fill="url(#textGradient)"
            fontSize="12"
            fontWeight="400"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
            textAnchor="middle"
          >
            Lost &amp; Found
          </text>
        </svg>

        {/* Box lid with 3D perspective */}
        <motion.div
          className={styles.lid}
          initial="closed"
          animate="open"
          variants={lidVariants}
        >
          <svg
            viewBox="0 0 200 45"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Lid top face */}
            <polygon
              points="40,0 160,0 180,-15 60,-15"
              fill="#16476A"
              stroke="#6893BD"
              strokeWidth="2"
            />
            {/* Lid front edge */}
            <polygon
              points="40,0 160,0 160,25 40,25"
              fill="#16476A"
              stroke="#6893BD"
              strokeWidth="2"
            />
            {/* Lid side edge */}
            <polygon
              points="160,0 180,-15 180,10 160,25"
              fill="#16476A"
              stroke="#6893BD"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Falling items container */}
        <div className={styles.itemsContainer}>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.item}
              custom={{
                offset: item.offset,
                delay: 1.4 + (item.delay || index * 0.1), // Start falling after lid opens (1.2s) + stagger
              }}
              initial="initial"
              animate="animate"
              variants={itemVariants}
            >
              <BoxItem type={item.type} className={styles.itemIcon} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LostFoundBox

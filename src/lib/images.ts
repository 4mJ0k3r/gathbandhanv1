/**
 * Shared photography. Remote Unsplash URLs are allow-listed in next.config.ts.
 * Replace these with owned photography before launch.
 */
export const IMAGES = {
  heroCouple: {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&q=80",
    alt: "Bride holding a bouquet at golden hour",
  },
  ceremonyRings: {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=500&fit=crop&q=80",
    alt: "Newly married couple holding hands",
  },
  balloonRelease: {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=900&fit=crop&q=80",
    alt: "Couple releasing balloons in front of their wedding guests",
  },
  ceremonyChairs: {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&h=900&fit=crop&q=80",
    alt: "Two flower-decorated chairs set up on a lawn for a ceremony",
  },
  receptionTable: {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop&q=80",
    alt: "Long reception table set with flowers and glassware",
  },
} as const;

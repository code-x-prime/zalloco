export const HERO_SLIDES = [
  { src: "/hero-1.jpg", alt: "Container ship at golden sunset — Zalloco Industries global import export" },
  { src: "/hero-2.jpg", alt: "Shipping container port terminal with gantry cranes — Zalloco Industries port logistics" },
  { src: "/hero-3.jpg", alt: "Modern warehouse interior with organized shelving — Zalloco Industries distribution" },
  { src: "/hero-4.jpg", alt: "Freight train loaded with shipping containers — Zalloco Industries cargo transport" },
  { src: "/hero-5.jpg", alt: "Cargo airplane being loaded at airport terminal — Zalloco Industries air freight" },
  { src: "/hero-6.jpg", alt: "Wholesale distribution center aerial view — Zalloco Industries logistics hub" },
] as const;

export const FLOAT_STATS = [
  { icon: "package" as const, value: "500+", label: "Premium Products" },
  { icon: "grid" as const, value: "15+", label: "Product Categories" },
  { icon: "users" as const, value: "100+", label: "Business Clients" },
  { icon: "map" as const, value: "Pan India", label: "Supply Network" },
] as const;

export const FEATURES = [
  { icon: "leaf" as const, label: "100% Quality Products" },
  { icon: "shield" as const, label: "Quality Assured" },
  { icon: "truck" as const, label: "Pan India Delivery" },
  { icon: "cog" as const, label: "Bulk Order Support" },
] as const;

export const BOTTOM_STATS = [
  { icon: "leaf" as const, value: "5+", label: "Years of Experience" },
  { icon: "package" as const, value: "500+", label: "Products" },
  { icon: "users" as const, value: "100+", label: "Business Partners" },
  { icon: "map" as const, value: "Pan India", label: "Distribution" },
  { icon: "clock" as const, value: "24/7", label: "Customer Support" },
] as const;

export const CAROUSEL_CONFIG = {
  autoplayDelay: 6000,
  transitionMs: 800,
  loop: true,
} as const;

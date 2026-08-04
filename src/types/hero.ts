export interface HeroSlide {
  readonly src: string;
  readonly alt: string;
}

export interface HeroStat {
  readonly icon: "package" | "grid" | "users" | "map" | "leaf" | "shield" | "truck" | "cog";
  readonly value: string;
  readonly label: string;
}

export interface FeatureItem {
  readonly icon: "leaf" | "shield" | "truck" | "cog";
  readonly label: string;
}

export interface BottomStat {
  readonly icon: "leaf" | "shield" | "truck" | "package" | "users" | "map" | "clock";
  readonly value: string;
  readonly label: string;
}

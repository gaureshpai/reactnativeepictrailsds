export type TileProps = {
    w?: number;
    h?: number;
    label: string;
    paragraph?: string;
    variant?: "variant-1" | "variant-2" | "variant-3" | "variant-4" | "variant-5" | "variant-6";
    icon?: "sheart" | "heart" | "box" | "label";
    enabled?: boolean;
    selected?: boolean;
  };
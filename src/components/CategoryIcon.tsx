import {
  Camera,
  Sparkles,
  Flower2,
  Landmark,
  Hand,
  Music,
  Mail,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import type { VendorCategory } from "@/lib/types";

const ICONS: Record<VendorCategory, LucideIcon> = {
  photographer: Camera,
  makeup: Sparkles,
  decor: Flower2,
  venue: Landmark,
  mehendi: Hand,
  choreographer: Music,
  cards: Mail,
  catering: Utensils,
};

interface CategoryIconProps {
  type: VendorCategory;
  className?: string;
}

export default function CategoryIcon({
  type,
  className = "w-8 h-8",
}: CategoryIconProps) {
  const Icon = ICONS[type];
  if (!Icon) return null;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}

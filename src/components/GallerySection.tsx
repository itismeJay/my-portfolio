import { ChevronLeft, ChevronRight } from "lucide-react";
import StaggeredReveal from "@/components/StaggeredReveal";

const galleryImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5f9cf1da3b43?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=200&fit=crop",
];

const GallerySection = () => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold text-foreground mb-4">Gallery</h2>
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <StaggeredReveal baseDelay={30} step={120}>
            {galleryImages.map((img, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-28 rounded-lg overflow-hidden border border-border">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </StaggeredReveal>
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center border border-border">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center border border-border">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default GallerySection;

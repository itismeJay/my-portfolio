"use client";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  { lat: 40.4168, lng: -3.7038, src: "https://assets.aceternity.com/avatars/1.webp", label: "Spain" },
  { lat: 14.5995, lng: 120.9842, src: "https://assets.aceternity.com/avatars/2.webp", label: "Philippines" },
];

export default function Globe3DDemo() {
  return (
    <div className="flex flex-col items-center">
      <Globe3D
        markers={sampleMarkers}
        className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]"
        config={{
          atmosphereColor: "#4da6ff",
          atmosphereIntensity: 20,
          bumpScale: 5,
          autoRotateSpeed: 0.3,
        }}
        onMarkerClick={(marker) => console.log("Clicked marker:", marker.label)}
        onMarkerHover={(marker) => { if (marker) console.log("Hovering:", marker.label); }}
      />
    </div>
  );
}

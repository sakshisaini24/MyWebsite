"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { mapPins } from "@/lib/data";
import type { MapPin } from "@/lib/data";
import "leaflet/dist/leaflet.css";

const pinColors = {
  home: { bg: "#e8b4b8", ring: "#f5c4a8" },
  current: { bg: "#b5c9a8", ring: "#c9d9bc" },
  visited: { bg: "#f5c4a8", ring: "#fae8dc" },
  international: { bg: "#c9b8e0", ring: "#e4d9f2" },
} as const;

function makeIcon(pin: MapPin, active: boolean) {
  const colors = pinColors[pin.type];
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width:${active ? 44 : 36}px;
        height:${active ? 44 : 36}px;
        background:${colors.bg};
        border:3px solid white;
        border-radius:50%;
        box-shadow:0 0 0 ${active ? 4 : 2}px ${colors.ring}, 0 4px 12px rgba(107,91,78,0.2);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:${active ? 18 : 15}px;
        transition:all 0.2s ease;
        cursor:pointer;
      ">${pin.emoji}</div>
    `,
    iconSize: [active ? 44 : 36, active ? 44 : 36],
    iconAnchor: [active ? 22 : 18, active ? 22 : 18],
  });
}

function FlyToPin({
  pin,
  activeId,
}: {
  pin: MapPin | null;
  activeId: string;
}) {
  const map = useMap();

  useEffect(() => {
    if (!pin) return;
    map.flyTo([pin.lat, pin.lng], pin.type === "international" ? 6 : 7, {
      duration: 1.2,
    });
  }, [activeId, pin, map]);

  return null;
}

type TravelMapLeafletProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export default function TravelMapLeaflet({
  activeId,
  onSelect,
}: TravelMapLeafletProps) {
  const activePin = mapPins.find((p) => p.id === activeId) ?? null;

  return (
    <MapContainer
      center={[22, 78]}
      zoom={5}
      minZoom={4}
      maxZoom={10}
      scrollWheelZoom={false}
      className="travel-map z-0 h-[380px] w-full rounded-2xl sm:h-[420px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <FlyToPin pin={activePin} activeId={activeId} />
      {mapPins.map((pin) => (
        <Marker
          key={pin.id}
          position={[pin.lat, pin.lng]}
          icon={makeIcon(pin, pin.id === activeId)}
          eventHandlers={{ click: () => onSelect(pin.id) }}
        >
          <Popup className="travel-popup">
            <div className="text-center">
              <p className="text-base font-bold">
                {pin.emoji} {pin.name}
              </p>
              <p className="mt-1 text-xs text-warm-brown/80">
                {pin.places.join(" · ")}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

"use client";

import { useMemo, useState } from "react";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

type Layer = {
  id: string;
  name: string;
  blurb: string;
  intensity: number; // 0..1
};

const LAYERS: Layer[] = [
  { id: "risk", name: "Risk Layer", blurb: "Identify hotspots and prioritize action.", intensity: 0.85 },
  { id: "trend", name: "Trend Layer", blurb: "See change over time, not just snapshots.", intensity: 0.65 },
  { id: "equity", name: "Equity Lens", blurb: "Compare access, impact, and exposure.", intensity: 0.75 },
];

export default function WowDemo() {
  const [active, setActive] = useState<string>("risk");

  const layer = useMemo(() => LAYERS.find((l) => l.id === active)!, [active]);

  return (
    <Card className="p-0 overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* faux “map” panel (no dependency) */}
        <div className="relative min-h-[280px] md:min-h-[360px]">
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 400px at 25% 35%, rgba(56,189,248,0.18), transparent 60%)," +
                "radial-gradient(700px 400px at 65% 55%, rgba(236,72,153,0.14), transparent 60%)," +
                "radial-gradient(900px 500px at 60% 20%, rgba(124,58,237,0.20), transparent 60%)",
            }}
          />

          {/* “contours” */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 35% 45%, rgba(255,255,255,0.07) 0 1px, transparent 1px 18px)",
              mixBlendMode: "overlay",
            }}
          />

          {/* intensity overlay based on selected layer */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: layer.intensity,
              background:
                "radial-gradient(420px 260px at 35% 45%, rgba(34,197,94,0.22), transparent 60%)," +
                "radial-gradient(420px 260px at 60% 55%, rgba(239,68,68,0.22), transparent 60%)," +
                "radial-gradient(420px 260px at 70% 35%, rgba(251,191,36,0.18), transparent 60%)",
            }}
          />

          {/* map UI chrome */}
          <div className="absolute top-4 left-4 glass rounded-2xl px-3 py-2 text-xs text-white/80 border-white/15">
            Interactive demo (mock)
          </div>

          <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3 border-white/15">
            <div className="text-sm font-semibold">{layer.name}</div>
            <div className="text-xs text-white/70 mt-1">{layer.blurb}</div>
          </div>
        </div>

        {/* controls */}
        <div className="p-6 md:p-8">
          <div className="kicker">Live-feel UI</div>
          <h3 className="text-2xl font-bold tracking-tight mt-2">
            The kind of interaction your stakeholders expect now
          </h3>
          <p className="p mt-3">
            Toggle layers, guide the narrative, and keep the experience fast and intuitive — without “GIS portal
            fatigue.”
          </p>

          <div className="mt-5 grid gap-2">
            {LAYERS.map((l) => (
              <button
                key={l.id}
                onClick={() => setActive(l.id)}
                className={cn(
                  "text-left rounded-2xl px-4 py-3 border transition",
                  active === l.id
                    ? "glass border-white/20 bg-white/10"
                    : "border-white/10 hover:bg-white/5 text-white/80"
                )}
              >
                <div className="font-semibold">{l.name}</div>
                <div className="text-xs text-white/65 mt-1">{l.blurb}</div>
              </button>
            ))}
          </div>

          <div className="mt-6 text-xs text-white/55">
            Next step: swap this mock for a real Leaflet/MapLibre embed once you pick the flagship demo.
          </div>
        </div>
      </div>
    </Card>
  );
}

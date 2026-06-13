export interface GlassSpec {
  title: string;
  description: string;
  x: number; // percentage from left for hotspot
  y: number; // percentage from top for hotspot
  connectorClass: string; // positioning classes for SVG lines
}

export interface FrameStyle {
  id: string;
  name: string;
  tagline: string;
  price: string;
  colorName: string;
  colorHex: string;
  fontAccent: string; // for unique title accenting
  modelImage: string; // main picture of model wearing glasses
  detailLeftImage: string; // left thumbnail (close up product shot)
  detailRightImage: string; // right thumbnail (alternate angle or lens detail)
  leftCardTitle: string;
  leftCardDesc: string;
  rightCardTitle: string;
  rightCardDesc: string;
  specs: {
    frame: GlassSpec;
    lenses: GlassSpec;
    bridge: GlassSpec;
  };
}

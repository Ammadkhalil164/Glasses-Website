import { FrameStyle } from "./types";

export const FRAME_STYLES: FrameStyle[] = [
  {
    id: "aurelia",
    name: "Aurelia Gold",
    tagline: "Timeless 18K Wiremesh",
    price: "$285",
    colorName: "Champagne Gold",
    colorHex: "#D4AF37",
    fontAccent: "font-serif italic",
    modelImage: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=1000",
    detailLeftImage: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600",
    detailRightImage: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=600",
    leftCardTitle: "18K PLATINUM SYSTEM",
    leftCardDesc: "Ultralight aerospace-grade Japanese titanium mesh plated in pure gold.",
    rightCardTitle: "AMBER GLARE REDUCTION",
    rightCardDesc: "ChromaTone high-contrast lenses designed for screen fatigue and night drives.",
    specs: {
      frame: {
        title: "Japanese Titanium Wire",
        description: "Pure beta-titanium wiremesh structure with active shape-memory alloy.",
        x: 35,
        y: 45,
        connectorClass: "left-1/3 top-[45%]"
      },
      lenses: {
        title: "Zeiss ChromaTone® Lenses",
        description: "Double-sided anti-reflective blue-blocking shield with oleophobic barrier.",
        x: 52,
        y: 43,
        connectorClass: "left-[52%] top-[43%]"
      },
      bridge: {
        title: "Ergonomic Saddle Bridge",
        description: "Zero-pressure micro-textured silicone cushion pads that sit comfortably all day.",
        x: 45,
        y: 46,
        connectorClass: "left-[45%] top-[46%]"
      }
    }
  },
  {
    id: "obsidian",
    name: "Obsidian Slate",
    tagline: "Chiseled Geometric Block",
    price: "$310",
    colorName: "Matte Absolute Black",
    colorHex: "#1C1C1C",
    fontAccent: "font-mono tracking-wider font-extrabold",
    modelImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1000",
    detailLeftImage: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=600",
    detailRightImage: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600",
    leftCardTitle: "MATTE MONOLITH DESIGN",
    leftCardDesc: "Monolith style acetate meticulously hand-finished on the Italian Alps.",
    rightCardTitle: "BLUESHIELD GLASS COAT",
    rightCardDesc: "Infused mineral crystal giving 99.8% UV blockage and near-perfect optical clarity.",
    specs: {
      frame: {
        title: "Chiseled Cellulose Acetate",
        description: "Organic wood pulp cellulose polymer, multi-layer laminated for structural perfection.",
        x: 32,
        y: 48,
        connectorClass: "left-[32%] top-[48%]"
      },
      lenses: {
        title: "BlueShield™ Mineral Glass",
        description: "Scratch-immune tempered lenses with integrated physical blue light filtering.",
        x: 58,
        y: 46,
        connectorClass: "left-[58%] top-[46%]"
      },
      bridge: {
        title: "Integrated Sculpted Fit",
        description: "Wide keyhole bridge integrated naturally, optimizing weight-distribution across bridge.",
        x: 48,
        y: 50,
        connectorClass: "left-[48%] top-[50%]"
      }
    }
  },
  {
    id: "tortoise",
    name: "Tortoise Craft",
    tagline: "Warm Handcrafted Amber",
    price: "$295",
    colorName: "Havanna Tortoiseshell",
    colorHex: "#704825",
    fontAccent: "font-serif font-semibold tracking-tight",
    modelImage: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1000",
    detailLeftImage: "https://images.unsplash.com/photo-1502472594-88dad022d2ee?auto=format&fit=crop&q=80&w=600",
    detailRightImage: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=600",
    leftCardTitle: "RESPONSIVE KEYHOLE",
    leftCardDesc: "Vintage keyhole notch styled to fit high and low nose contours seamlessly.",
    rightCardTitle: "ORGANIC GRILAMID INLAY",
    rightCardDesc: "Bio-based eco-congenial material designed to bend comfortably behind the ear.",
    specs: {
      frame: {
        title: "Hand-harvested Cellulose",
        description: "Hand-molded acetate in custom tortoiseshell resin curls, each piece globally unique.",
        x: 23,
        y: 40,
        connectorClass: "left-[23%] top-[40%]"
      },
      lenses: {
        title: "AmberView® Adaptive Tint",
        description: "Dynamic responsive lenses that transitions gently in daylight, maximizing vision sharpness.",
        x: 48,
        y: 38,
        connectorClass: "left-[48%] top-[38%]"
      },
      bridge: {
        title: "Traction-Locked Keyhole",
        description: "Subtly tapered bridge design preventing slip under moist or active conditions.",
        x: 36,
        y: 41,
        connectorClass: "left-[36%] top-[41%]"
      }
    }
  }
];

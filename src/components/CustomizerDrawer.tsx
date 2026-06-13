import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Check, ShoppingBag, CreditCard, Sparkles, Sliders, RefreshCw } from "lucide-react";
import { FrameStyle } from "../types";

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeFrame: FrameStyle;
  onAddToCart: (order: CustomizedOrder) => void;
}

export interface CustomizedOrder {
  frameId: string;
  frameName: string;
  frameColor: string;
  lensType: string;
  lensPrice: number;
  prescriptionType: string;
  prescriptionPrice: number;
  totalPrice: number;
  engraving: string;
}

export default function CustomizerDrawer({ isOpen, onClose, activeFrame, onAddToCart }: CustomizerDrawerProps) {
  // Customizable options state
  const [frameColor, setFrameColor] = useState({ name: activeFrame.colorName, hex: activeFrame.colorHex });
  const [lensType, setLensType] = useState("BlueShield™ Blue-Blocking Shield");
  const [lensPrice, setLensPrice] = useState(45);
  const [prescriptionType, setPrescriptionType] = useState("Single Vision (Corrective)");
  const [prescPrice, setPrescPrice] = useState(80);
  const [customEngraving, setCustomEngraving] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  // Sync state if activeFrame prop changes
  React.useEffect(() => {
    setFrameColor({ name: activeFrame.colorName, hex: activeFrame.colorHex });
  }, [activeFrame]);

  // Compute total
  const basePrice = parseInt(activeFrame.price.replace("$", ""));
  const totalPrice = basePrice + lensPrice + prescPrice;

  const lensOptions = [
    { name: "BlueShield™ Blue-Blocking Shield", desc: "Best for digital work and screen comfort", price: 45 },
    { name: "Zeiss Polarized Sun Glare Tint", desc: "Full sunglasses protection with organic color mapping", price: 60 },
    { name: "CrystalClear Dual-Sided Precision Lenses", desc: "Standard high index ultra-reflective-preventing coating", price: 0 },
    { name: "AmberView® Transition Adaptive Tint", desc: "Photochromic light-adapting organic lens", price: 90 }
  ];

  const prescriptionOptions = [
    { name: "Planar Non-Prescription (Fashion)", desc: "For style and protection only", price: 0 },
    { name: "Single Vision (Corrective)", desc: "Distance or reading support", price: 80 },
    { name: "Progressive (All-In-One Multi-Focal)", desc: "Fluid transitions between reading and distance", price: 150 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdded(true);
    
    // Construct order
    const order: CustomizedOrder = {
      frameId: activeFrame.id,
      frameName: activeFrame.name,
      frameColor: frameColor.name,
      lensType: lensType,
      lensPrice: lensPrice,
      prescriptionType: prescriptionType,
      prescriptionPrice: prescPrice,
      totalPrice: totalPrice,
      engraving: customEngraving
    };

    onAddToCart(order);

    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2E2F2E] z-50 pointer-events-auto"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            id="builder-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-[#F0EADF] text-[#2E2F2E] z-50 shadow-2xl flex flex-col pointer-events-auto border-l border-[#2E2F2E]/10"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#2E2F2E]/10 flex justify-between items-center bg-[#F0EADF]">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#2E2F2E]/80" />
                <h2 className="font-secondary text-xl font-bold tracking-tight text-[#2E2F2E]">
                  XL<span className="font-normal italic">Configure</span>
                </h2>
              </div>
              <button
                id="close-builder-drawer"
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#2E2F2E]/10 hover:border-[#2E2F2E] text-[#2E2F2E] hover:bg-[#2E2F2E] hover:text-[#F0EADF] transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 select-none">
              {/* Product preview and title info */}
              <div className="flex gap-4 p-4 rounded-2xl bg-[#2E2F2E]/5 border border-[#2E2F2E]/5">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-white/40 flex-shrink-0 border border-[#2E2F2E]/10">
                  <img
                    src={activeFrame.detailLeftImage}
                    alt={activeFrame.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="font-primary text-[10px] font-bold uppercase tracking-wider text-[#2E2F2E]/40">Active Baseline Frame</span>
                  <h3 className="font-secondary text-lg font-bold text-[#2E2F2E] mt-0.5">{activeFrame.name}</h3>
                  <p className="font-primary text-xs text-[#2E2F2E]/60 mt-1 italic">{activeFrame.tagline}</p>
                  <p className="font-primary text-sm font-semibold text-[#2E2F2E] mt-2">Frame value: {activeFrame.price}</p>
                </div>
              </div>

              {/* Step 1: Material/Colors */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-primary text-xs font-bold uppercase tracking-wider text-[#2E2F2E]">
                    1. Frame Plating & Acetate Finish
                  </h4>
                  <span className="font-primary text-[11px] text-[#2E2F2E]/50 font-medium">{frameColor.name}</span>
                </div>
                <div className="flex gap-3">
                  {/* Option Gold */}
                  <button
                    type="button"
                    onClick={() => setFrameColor({ name: activeFrame.colorName, hex: activeFrame.colorHex })}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                      frameColor.name === activeFrame.colorName
                        ? "border-[#2E2F2E] bg-[#2E2F2E] text-[#F0EADF]"
                        : "border-[#2E2F2E]/10 hover:border-[#2E2F2E]/40"
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-white" style={{ backgroundColor: activeFrame.colorHex }} />
                    Baseline ({activeFrame.colorName.split(" ")[0]})
                  </button>
                  {/* Option Dark Matte */}
                  <button
                    type="button"
                    onClick={() => setFrameColor({ name: "Brushed Solid Platinum", hex: "#E5E4E2" })}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                      frameColor.name === "Brushed Solid Platinum"
                        ? "border-[#2E2F2E] bg-[#2E2F2E] text-[#F0EADF]"
                        : "border-[#2E2F2E]/10 hover:border-[#2E2F2E]/40"
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-[#2E2F2E]/20" style={{ backgroundColor: "#E5E4E2" }} />
                    Platinum Accent
                  </button>
                  {/* Option Matte Jet Charcoal */}
                  <button
                    type="button"
                    onClick={() => setFrameColor({ name: "Obsidian Mineral", hex: "#1A1A1A" })}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                      frameColor.name === "Obsidian Mineral"
                        ? "border-[#2E2F2E] bg-[#2E2F2E] text-[#F0EADF]"
                        : "border-[#2E2F2E]/10 hover:border-[#2E2F2E]/40"
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-white" style={{ backgroundColor: "#1A1A1A" }} />
                    Obsidian Coat
                  </button>
                </div>
              </div>

              {/* Step 2: Optical Lenses */}
              <div className="space-y-3">
                <h4 className="font-primary text-xs font-bold uppercase tracking-wider text-[#2E2F2E]">
                  2. Smart Optical Lens Packages
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {lensOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => {
                        setLensType(opt.name);
                        setLensPrice(opt.price);
                      }}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-300 group flex justify-between items-start gap-4 ${
                        lensType === opt.name
                          ? "border-[#2E2F2E] bg-[#2E2F2E]/5"
                          : "border-[#2E2F2E]/10 hover:border-[#2E2F2E]/30 bg-[#2E2F2E]/[0.01]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 font-primary text-xs font-bold text-[#2E2F2E]">
                          {lensType === opt.name && <Check className="w-3.5 h-3.5 text-[#2E2F2E]" />}
                          {opt.name}
                        </div>
                        <p className="font-primary text-[11px] text-[#2E2F2E]/60 max-w-sm pl-5">
                          {opt.desc}
                        </p>
                      </div>
                      <span className="font-primary text-xs font-bold text-[#2E2F2E] whitespace-nowrap pl-2">
                        {opt.price === 0 ? "Included" : `+$${opt.price}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Prescription Type */}
              <div className="space-y-3">
                <h4 className="font-primary text-xs font-bold uppercase tracking-wider text-[#2E2F2E]">
                  3. Prescription Configuration
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {prescriptionOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => {
                        setPrescriptionType(opt.name);
                        setPrescPrice(opt.price);
                      }}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-300 group flex justify-between items-start gap-4 ${
                        prescriptionType === opt.name
                          ? "border-[#2E2F2E] bg-[#2E2F2E]/5"
                          : "border-[#2E2F2E]/10 hover:border-[#2E2F2E]/30 bg-[#2E2F2E]/[0.01]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 font-primary text-xs font-bold text-[#2E2F2E]">
                          {prescriptionType === opt.name && <Check className="w-3.5 h-3.5 text-[#2E2F2E]" />}
                          {opt.name}
                        </div>
                        <p className="font-primary text-[11px] text-[#2E2F2E]/60 max-w-sm pl-5">
                          {opt.desc}
                        </p>
                      </div>
                      <span className="font-primary text-xs font-bold text-[#2E2F2E] whitespace-nowrap pl-2">
                        {opt.price === 0 ? "Included" : `+$${opt.price}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Custom Laser Engraving */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-primary text-xs font-bold uppercase tracking-wider text-[#2E2F2E] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#2E2F2E]/70" />
                    4. Master Engraving
                  </h4>
                  <span className="font-primary text-[10px] text-[#2E2F2E]/40 font-bold uppercase">Complementary</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={10}
                    value={customEngraving}
                    onChange={(e) => setCustomEngraving(e.target.value)}
                    placeholder="Enter initials or name (max 10 chars, e.g. AMK)"
                    className="w-full px-4 py-3 rounded-xl border border-[#2E2F2E]/15 bg-white/20 text-[#2E2F2E] placeholder-[#2E2F2E]/40 text-xs font-primary focus:outline-none focus:border-[#2E2F2E] transition-colors"
                  />
                  <span className="absolute right-3.5 top-3 text-[10px] text-[#2E2F2E]/40 font-semibold">
                    {customEngraving.length}/10
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Summary & Add */}
            <div className="p-6 border-t border-[#2E2F2E]/10 bg-[#F0EADF] select-none">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="font-primary text-[10px] font-bold uppercase tracking-widest text-[#2E2F2E]/40">Configured Value</p>
                  <p className="font-secondary text-2xl font-black text-[#2E2F2E] mt-0.5">${totalPrice}</p>
                </div>
                <div className="text-right">
                  <p className="font-primary text-[10px] font-semibold text-[#2E2F2E]/60">Complete bespoke build</p>
                  <p className="font-primary text-[9px] text-[#2E2F2E]/40 mt-0.5">Free Premium Courier Shipping</p>
                </div>
              </div>

              {/* Custom submit action */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isAdded}
                className="w-full h-12 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F0EADF] bg-[#2E2F2E] hover:bg-[#2E2F2E]/90 active:scale-98 transition-all duration-200 cursor-pointer disabled:opacity-90 shadow-lg shadow-[#2E2F2E]/10"
              >
                {isAdded ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Assembling & Saving Order...
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Complete Bespoke Build & Add to Cart
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

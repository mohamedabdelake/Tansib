import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const TOTAL_FRAMES = 240;

export default function ScrollSequence() {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll();

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(5, '0');
      img.src = `/frames/${paddedIndex}.png`;
      
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };

      loadedImages[i] = img;
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let animationFrameId;
    let currentFrame = -1;

    const render = () => {
      let latestFrame = Math.round(frameIndex.get());
      if (latestFrame < 1) latestFrame = 1;
      if (latestFrame > TOTAL_FRAMES) latestFrame = TOTAL_FRAMES;
      
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect && (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr)) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(dpr, dpr);
        currentFrame = -1; 
      }

      if (latestFrame !== currentFrame) {
        currentFrame = latestFrame;
        const img = images[currentFrame];
        
        if (img && img.complete && img.naturalWidth > 0) {
          if (rect) {
            ctx.fillStyle = "#030712";
            ctx.fillRect(0, 0, rect.width, rect.height);

            const scale = Math.min(rect.width / img.width, rect.height / img.height);
            const x = (rect.width - img.width * scale) / 2;
            const y = (rect.height - img.height * scale) / 2;
            
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isLoaded, images, frameIndex]);

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden z-[-1] pointer-events-none">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-cyber z-50 pointer-events-auto">
          <div className="w-12 h-12 border-4 border-neonBlue/20 border-t-neonBlue rounded-full animate-spin mb-4 shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
          <p className="text-neonBlue text-sm font-mono tracking-widest neon-text">LOADING SONIC ENGINE... {loadProgress}%</p>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay to ensure UI elements pop against bright frames */}
      <div className="absolute inset-0 bg-[#030712]/60"></div>
    </div>
  );
}

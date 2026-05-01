import { motion, useMotionTemplate } from "framer-motion";

const GlassCard = ({ children, className = "", mouseX, mouseY }) => {
  let maskImage = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 80%)`;
  return (
    <div
      className={`relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-[0_25px_-12px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: maskImage }}
      />
      <div className="relative z-10 w-full h-full flex">{children}</div>
    </div>
  );
};

export default GlassCard;

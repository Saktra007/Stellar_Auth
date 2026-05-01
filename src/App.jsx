import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "./components/ui/GlassCard";
import { LoginForm, RegisterForm, SidePanel } from "./components/auth";
import { useMouseTilt } from "./hooks/useMouseTilt";

const Background3D = lazy(() => import("./components/visual/Background3D"));

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { rotateX, rotateY, mouseX, mouseY, onMouseMove, onMouseLeave } =
    useMouseTilt();

  return (
    <div className="relative min-h-screen bg-[#020617] flex items-center justify-center p-4 md:p-6 overflow-x-hidden select-none">
      {/* 3D Background Layer */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#020617]" />}>
        <Background3D />
      </Suspense>

      {/* Main Perspective Container */}
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-full max-w-md md:max-w-4xl h-auto md:h-150 min-h-48 group transition-all duration-300"
      >
        <GlassCard
          mouseX={mouseX}
          mouseY={mouseY}
          className="flex flex-col md:flex-row h-full"
        >
          <SidePanel isLogin={isLogin} setIsLogin={setIsLogin} />
          <div className="flex w-full md:h-full relative overflow-hidden">
            <RegisterForm isLogin={isLogin} setIsLogin={setIsLogin} />
            <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default App;

import { AnimatePresence, motion } from "framer-motion";
import { Orbit, Sparkles, Stars, Zap } from "lucide-react";
const SidePanel = ({ isLogin, setIsLogin }) => {
  return (
    <motion.div
      animate={{
        x: isLogin ? "0%" : "100%",
        borderTopRightRadius: isLogin ? "0px" : "40px",
        borderBottomRightRadius: isLogin ? "0px" : "40px",
        borderTopLeftRadius: isLogin ? "40px" : "0px",
        borderBottomLeftRadius: isLogin ? "40px" : "0px",
      }}
      transition={{ type: "spring", stiffness: 70, damping: 15, mass: 1 }}
      className="absolute top-0 left-0 hidden md:flex md:w-1/2 md:h-full bg-linear-to-br from-blue-700 via-indigo-800 to-purple-900 flex-col justify-center px-16 text-white shadow-[25px_0_60px_rgba(0,0,0,0.4)] z-50 overflow-hidden"
    >
      {/* Floating Icons Layer */}
      <div>
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[10%] text-blue-200"
        >
          <Sparkles size={40} />
        </motion.div>{" "}
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[15%] text-indigo-300/30"
        >
          <Orbit size={120} />
        </motion.div>{" "}
        <motion.div
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[15%] text-purple-200"
        >
          <Stars size={30} />
        </motion.div>{" "}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[20%] text-white/20"
        >
          <Zap size={50} />
        </motion.div>
      </div>
      {/* Background Decorations */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[60px]"
      />

      {/* Content  */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login-content" : "register-content"}
          initial={{ opacity: 0, x: isLogin ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isLogin ? 50 : -50 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          className="space-y-8 relative z-10"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.h2 className="text-6xl font-extrabold tracking-tighter leading-[1.1]">
              {isLogin ? "  Hello" : "Welcome"} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-indigo-100">
                {isLogin ? "Friend!" : "Back!"}
              </span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-blue-50/80 text-lg max-w-[320px] leading-relaxed font-medium"
            >
              {isLogin
                ? "   Enter your personal details and start your journey with us today."
                : "To keep connected with us please login with your personal info."}
            </motion.p>

            {/* Premium Button */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="group relative flex items-center justify-center px-12 py-4 border-2 bg-white/10 backdrop-blur-md border-white/20 rounded-2xl font-bold text-white overflow-hidden transition-all hover:border-white hover:text-indigo-900 active:scale-95 shadow-xl"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">
                {isLogin ? "Sign up" : "Sign In"}
              </span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-[-10%] left-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-black/20 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default SidePanel;

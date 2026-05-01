import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2, Lock, LogIn, Mail } from "lucide-react";
import { useState } from "react";

const LoginForm = ({ isLogin, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    let hasError = false;
    const newErrors = { email: "", password: "" };

    // Validation Logic
    if (!email) {
      newErrors.email = "Email address is required";
      hasError = true;
    }
    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    }
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    if (!email.includes("@")) {
      setErrors({ email: "Please enter a valid email address", password: "" });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (email !== "admin@gmail.com") {
        setErrors({ email: "Email address not found.", password: "" });
      } else if (password !== "123456") {
        setErrors({
          email: "",
          password: "Incorrect password. Please try again.",
        });
      } else {
        alert("Login Successful!");
      }
    }, 2000);
  };

  return (
    <div
      className={`w-full md:w-1/2 h-full flex items-center justify-center p-6 md:p-10 relative transition-all duration-500 ${isLogin ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:translate-x-20"}`}
    >
      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 text-blue-500/30 blur-[1px]"
      >
        <Mail size={40} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-10 text-indigo-500/30 blur-[1px]"
      >
        <Lock size={35} />
      </motion.div>

      {/* Form Content  */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isLogin ? 1 : 0,
          x: isLogin ? 0 : 20,
        }}
        transition={{ duration: 0.5, delay: isLogin ? 0.3 : 0 }}
        className="w-full max-w-xs space-y-6 text-white z-10 "
      >
        <div className="text-center space-y-2 h-16">
          <h3 className="text-4xl font-black text-blue-400 flex items-center justify-center gap-3">
            Sign In <LogIn size={32} />
          </h3>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div className="h-16">
            <div className="relative group">
              <Mail
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.email ? "text-red-400" : "text-blue-500/50 group-focus-within:text-blue-400"} transition-colors`}
                size={20}
              />
              <input
                className={`w-full bg-white/5 border ${errors.email ? "border-red-500/50" : "border-white/10"} p-3 pl-12 rounded-2xl outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all`}
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-[11px] ml-2 pt-1 font-medium"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Password Input */}
          <div className="h-16">
            <div className="relative group">
              <Lock
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${errors.password ? "text-red-400" : "text-blue-500/50 group-focus-within:text-blue-400"} transition-colors`}
                size={20}
              />
              <input
                className={`w-full bg-white/5 border ${errors.password ? "border-red-500/50" : "border-white/10"} p-3 pl-12 rounded-2xl outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all`}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-[11px] ml-2 pt-1.5 font-medium"
              >
                {errors.password}
              </motion.p>
            )}
          </div>

          {/* Remember ME & Forgot Password  */}
          <div className="flex items-center justify-between text-xs px-1 ">
            <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-blue-400 transition-colors">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-blue-500 w-4 h-4 rounded"
              />
              Remember me
            </label>
            <button className="text-blue-400 hover:underline" type="button">
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all uppercase flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Authentication...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* Social Login Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="px-2 text-slate-500">Or continue with</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-5">
          {/* Google Button */}
          <button
            type="button"
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <GoogleIcon /> Google
          </button>

          {/* Github Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <GithubIcon /> Github
          </button>
        </div>
        <div className="md:hidden w-full flex justify-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 font-medium text-sm underline underline-offset-4"
          >
            Don't have an account? Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="w-5 h-5"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);
const GithubIcon = () => (
  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
export default LoginForm;

import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  Phone,
  Rocket,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";

const RegisterForm = ({ isLogin, setIsLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation Login
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (formData.password.length < 8)
      newErrors.password = "Must be at least 8 chars";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeTerms) newErrors.terms = "Please accept our terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsLogin(true);
      }, 3000);
    }, 2000);
  };

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  return (
    <div
      className={`w-full md:w-1/2 h-full flex items-center justify-center p-10 absolute md:relative inset-0 md:inset-auto transition-all duration-500 ${!isLogin ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 md:-translate-x-20"}`}
    >
      {/* Floating Icon */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-12 text-emerald-500/30 blur-[1px]"
      >
        <User size={45} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-16 right-12 text-teal-500/20 blur-[1px]"
      >
        <Rocket size={50} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: !isLogin ? 1 : 0, x: !isLogin ? 0 : -20 }}
        transition={{ duration: 0.5, delay: !isLogin ? 0.2 : 0 }}
        className="w-full max-w-xs space-y-6 text-white z-10"
      >
        <div className="flex items-center justify-center gap-3">
          <h3 className="text-3xl font-bold text-emerald-400 italic">
            Create Account
          </h3>
          <ShieldCheck size={32} className="text-emerald-500" />
        </div>

        {isSuccess ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-emerald-500/20 border border-emerald-500/50 p-4 rounded-2xl text-center"
          >
            <p className="text-emerald-400">
              Account created successfully! Redirecting to Login...
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleRegister} className="flex flex-col gap-3">
            {/* Full Name Field */}
            <div className="space-y-1 h-16">
              <div className="relative group">
                <User
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${errors.name ? "text-red-400" : "text-emerald-500/50 group-focus-within:text-emerald-400"} text-emerald-500/50`}
                  size={18}
                />
                <input
                  className={`w-full bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10"} p-2.5 pl-10 rounded-xl outline-none focus:border-emerald-500 transition-all text-sm`}
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-[10px] ml-2">{errors.name}</p>
              )}
            </div>
            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1 h-16">
                <div className="relative group">
                  <Mail
                    className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? "text-red-400" : " text-emerald-500/50 group-focus-within:text-emerald-400"}`}
                    size={18}
                  />

                  <input
                    className={`w-full bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"} p-2.5 pl-10 rounded-xl outline-none focus:border-emerald-500 text-sm transition-all`}
                    type="text"
                    placeholder="Email"
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>{" "}
                {errors.email && (
                  <p className="text-red-400 text-[10px] ml-2">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-1 h-16">
                <div className="relative group">
                  <Phone
                    className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${errors.phone ? "text-red-400" : " text-emerald-500/50 group-focus-within:text-emerald-400"}`}
                    size={18}
                  />

                  <input
                    className={`w-full bg-white/5 border ${errors.phone ? "border-red-500" : "border-white/10"} p-2.5 pl-10 rounded-xl outline-none focus:border-emerald-500 text-sm transition-all`}
                    type="tel"
                    placeholder="Phone"
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-[10px] ml-2">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Password Fields */}
            <div className="space-y-1 h-16">
              <div className="relative group">
                <Lock
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${errors.password ? "text-red-400" : " text-emerald-500/50 group-focus-within:text-emerald-400"}`}
                  size={18}
                />
                <input
                  className={`w-full bg-white/5 border ${errors.password ? "border-red-500" : "border-white/10"} p-2.5 pl-10 pr-10 rounded-xl outline-none focus:border-emerald-500 text-sm transition-all`}
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => updateField("password", e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-[10px] ml-2">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="space-y-1 h-14">
              <div className="relative group">
                <Lock
                  className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${errors.confirmPassword ? "text-red-400" : " text-emerald-500/50 group-focus-within:text-emerald-400"}`}
                  size={18}
                />
                <input
                  className={`w-full bg-white/5 border ${errors.confirmPassword ? "border-red-500" : "border-white/10"} p-2.5 pl-10 pr-10 rounded-xl outline-none focus:border-emerald-500 text-sm transition-all`}
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    updateField("confirmPassword", e.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-[10px] ml-2">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            {/* Terms & Conditions */}
            <div className=" h-14">
              <div className="flex items-center gap-2 py-1 italic text-slate-400">
                <input
                  type="checkbox"
                  id="Terms"
                  className="accent-emerald-500 w-4 h-4 cursor-pointer"
                  onChange={(e) => updateField("agreeTerms", e.target.checked)}
                />
                <label
                  htmlFor="Terms"
                  className="text-[11px] text-slate-400 cursor-pointer hover:text-emerald-300 transition-colors leading-tight"
                >
                  I agree to the Terms & Privacy Policy
                </label>
              </div>
              {errors.terms && <p className="text-red-400 text-[10px] ml-1">
                {errors.terms}
              </p> }
            </div>
            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className="w-full bg-emerald-600 -mt-3 py-3 rounded-xl font-bold shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all uppercase flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Processing...
                </>
              ) : isSuccess ? (
                "Done"
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        )}
        <div className="md:hidden w-full flex justify-center pb-4 z-50">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 font-medium text-sm underline underline-offset-4"
          >
            Already have an account? Sign In
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;

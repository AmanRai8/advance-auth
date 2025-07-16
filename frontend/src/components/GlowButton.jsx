import { useRef, useState } from "react";
import { motion } from "framer-motion";

const GlowButton = () => {
  const buttonRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative mt-5 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white
        font-bold rounded-xl shadow-xl overflow-hidden
        focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 
        focus:ring-offset-gray-900 transition-all duration-300 ease-in-out"
    >
      {/* Glowing spot that follows the mouse */}
      <motion.span
        className="absolute w-32 h-32 bg-cyan-400 opacity-30 rounded-full blur-2xl pointer-events-none"
        animate={{ x: coords.x - 64, y: coords.y - 64 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
      {/* Button label */}
      <span className="relative z-10">Sign Up</span>
    </motion.button>
  );
};

export default GlowButton;

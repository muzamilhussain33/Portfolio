import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-background)]">
            <div className="relative flex items-center justify-center">
                {/* Outer rotating ring */}
                <motion.div
                    className="absolute w-32 h-32 rounded-full border-4 border-t-[var(--color-primary)] border-r-transparent border-b-[var(--color-primary)] border-l-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner pulsing circle */}
                <motion.div
                    className="absolute w-24 h-24 rounded-full border-2 border-[var(--color-primary)] opacity-20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="z-10"
                >
                    <img src={logo} alt="Loading..." className="w-16 h-auto" />
                </motion.div>
            </div>

            {/* Loading Text */}
            <motion.p
                className="mt-15 text-[var(--color-primary)] font-[Poppins] text-lg tracking-widest font-semibold"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                LOADING
            </motion.p>
        </div>
    );
};

export default Loader;

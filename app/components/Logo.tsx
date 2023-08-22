import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import { logoRotationVariant } from "~/config/animationConfig";

export const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <motion.img
        alt="Tatung Logo"
        src="/assets/images/logo.png"
        className="block w-[50px]"
        width="50"
        height="50"
        variants={logoRotationVariant}
        animate="rotate"
        layout="position"
      />
    </NavLink>
  );
};

export default Logo;

import { NavLink, useLocation } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "~/config/animationConfig";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className={activeStyleCallback}>
        首頁
      </NavLink>
      <NavLink to="/know" className={activeStyleCallback}>
        認識協會
      </NavLink>
      <NavLink to="/introduction" className={activeStyleCallback}>
        服務介紹
      </NavLink>
      <NavLink to="/donate" className={activeStyleCallback}>
        我要捐款
      </NavLink>
      <NavLink to="/story" className={activeStyleCallback}>
        協會大小事
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>
        <div className="w-[75px]">
          <ThemeToggle />
        </div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/" className={activeStyleCallback}>
                首頁
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/know" className={activeStyleCallback}>
                認識協會
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/introduction" className={activeStyleCallback}>
                服務介紹
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/donate" className={activeStyleCallback}>
                我要捐款
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/story" className={activeStyleCallback}>
                協會大小事
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

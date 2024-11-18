import React, { useState, useEffect, useRef } from "react";
import HaneefLogo from "../assets/Haneef_Logo3.png";
import ResumePDF from "../assets/MdHaneef_Resume.pdf";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 769);
    if (window.innerWidth > 769) setMenuOpen(false); // Close menu when resizing to desktop
  };

  const openResume = () => {
    window.open(ResumePDF, "_blank");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const routes = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Project", href: "#project" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div ref={ref} className="lg:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 p-5 bg-neutral-950 border-b border-b-white/20"
            >
              <ul className="grid gap-2">
                {routes.map((route, idx) => (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </a>
                  </motion.li>
                ))}
                {/* Resume Button in the toggle menu */}
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  }}
                  className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                >
                  <button
                    onClick={() => {
                      setOpen(false);
                      openResume();
                    }}
                    className="resume-btn-ham"
                  >
                    Resume →
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
          
      <div className="logo">
          <img src={HaneefLogo} alt="Logo" />
        </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {!isMobile && (
        <button className="resume-btn" onClick={openResume}>
          Resume →
        </button>
      )}
    </nav>
  );
};

export default Navbar;

import { useRef, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // close menu when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex justify-between items-center fixed bg-white z-30 w-full px-5 md:px-10 lg:px-18 shadow-lg  ">
      {/* logo */}
      <div className="flex items-center font-bold md:text-3xl text-xl">
        <div className="h-15 w-15 md:h-20 md:w-20 bg-[url(./assets/C-logo.png)] bg-center bg-cover"></div>
        <span>Codeofy</span>
      </div>
      {/* hamMenu */}
      <div
        className={`lg:hidden text-5xl cursor-pointer transition-all duration-300 ease-in-out `}
        onClick={toggleMenu}
      >
        {!open ? <GiHamburgerMenu /> : <ImCross className="text-4xl" />}
      </div>
      {/* Mobile menu list  */}
      <div
        ref={menuRef}
        className={`mx-auto lg:hidden absolute md:top-20 top-15 right-0 w-full md:max-w-2xl backdrop-blur-xl flex flex-col items-center gap-y-5 py-5 px-5 transform transition-transform duration-700 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} `}
      >
        <a
          onClick={() => setOpen(false)}
          href="#features"
          className="bg-white/30 rounded w-full py-2 text-center font-semibold"
        >
          Features
        </a>
        <a
          onClick={() => setOpen(false)}
          href="#working"
          className="bg-white/30 rounded w-full py-2 text-center font-semibold"
        >
          How it Works
        </a>
        <a
          onClick={() => setOpen(false)}
          href="#pricing"
          className="bg-white/30 rounded w-full py-2 text-center font-semibold"
        >
          Pricing
        </a>
        <a
          onClick={() => setOpen(false)}
          href="#community"
          className="bg-white/30 rounded w-full py-2 text-center font-semibold"
        >
          Community
        </a>
        <button
          onClick={() => setOpen(false)}
          className="bg-white/30 rounded w-full py-2 text-center font-semibold cursor-pointer"
        >
          Get Started Free
        </button>
      </div>
      {/* larger menu list */}
      <div className="hidden lg:flex items-center gap-x-10 font-semibold text-lg">
        <a href="#features">Features</a>
        <a href="#working">How it Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#community">Community</a>
        <button className="cursor-pointer rounded-lg border py-2 px-4 bg-linear-to-br from-[#032b7b] to-[#3b0373] text-white">
          Get Started Free
        </button>
      </div>
    </div>
  );
}

export default Navbar;

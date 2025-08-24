import { navLinks } from "../data";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import * as Icon from "../assets/icons";
import * as File from "../assets/files";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const handleHamburgerClick = () => {
    if (!toggleNav) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  };

  const handleNavLinkClick = (id: string) => {
    if (id != "#home") {
      setIsVisible(false);
    }
    setHash(id);
    const section = document.querySelector(id);
    if (section) {
      //   const yOffset = -96;
      const yOffset = 0;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", id);
    }
  };

  const resumeButton = () => {
    const pdfUrl = File.resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Benjamin_Tang_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleNavOff = (href: string) => {
    setToggleNav(false);
    handleNavLinkClick(href)
  };

  return (
    <>
      <header
        className={`${isVisible ? `block` : `hidden`} pg-padX py-5 fixed top-0 bg-primary-800 z-10 w-full`}
      >
        <nav className="flex justify-between items-center max-container">
          <a
            href={"#home"}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick("#home");
            }}
            className="hover:scale-100 duration-300 font-inter truncate text-secondary-200 font-bold text-4xl tracking-tighter flex-1 flex items-center justify-start gap-16"
          >
            <span className="hover:text-secondary-300 block sm:hidden hover:cursor-pointer">
              {" "}
              BEN T.
            </span>
            <span className="hover:text-secondary-300 hidden sm:block hover:cursor-pointer">
              {" "}
              BENJAMIN T.
            </span>
          </a>

          <div className="flex-1.5 flex gap-4 items-center justify-end">
            <img
              src={toggleNav ? Icon.xGreen : Icon.hamburger}
              alt="Hamburger"
              onClick={handleHamburgerClick}
              width={56}
              height={56}
              className="block lg:hidden hover:cursor-pointer lg:cursor-default"
            />

            <ul className="hidden lg:flex flex-1 items-center justify-end gap-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(item.href);
                    }}
                    className={`
                                    transform transition-transform duration-300
                                    hover:underline
                                    hover:text-secondary-200
                                    ${
                                      hash === item.href
                                        ? "underline text-secondary-300 font-bold hover:text-secondary-300"
                                        : ""
                                    }
                                    underline-offset-6 decoration-2
                                    font-inter font-semibold tracking-normal text-base hover:cursor-pointer text-neutral-25 px-5 py-4
                                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              outline={false}
              text={"Download CV"}
              paddingX={"px-5"}
              paddingY={"py-4"}
              radius={"rounded-[0.5em]"}
              feature={"hidden sm:block"}
              onClick={resumeButton}
            />
          </div>
        </nav>
      </header>
      {toggleNav && (
        <section className="overflow-y-auto lg:hidden flex flex-col pg-padX max-lg:block fixed w-full inset-0 min-h-screen z-9 bg-primary-800 ">
          <ul className="flex flex-col pt-30 gap-10 font-bold pb-14">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => toggleNavOff(item.href)}
                  className={`flex justify-center items-center leading-normal text-3xl font-inter ${item.href == hash ? `text-secondary-200` : `text-neutral-25`} font-light underline underline-offset-6 decoration-2`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center pb-20">
            <Button
              outline={false}
              text={"Download CV"}
              paddingX={"px-5"}
              paddingY={"py-4"}
              radius={"rounded-[0.5em]"}
              onClick={resumeButton}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Nav;

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

import { navigationItems, type SectionId } from "../data/navigation";

interface SiteHeaderProps {
  activeSection: SectionId;
}

const linkClasses = (isActive: boolean) =>
  `rounded-md px-3 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
    isActive
      ? "bg-red-600 text-white"
      : "text-base-content hover:bg-red-50 hover:text-red-700"
  }`;

const SiteHeader = ({ activeSection }: SiteHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-red-100 bg-base-100/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5">
        <a
          className="rounded-md text-xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600"
          href="#home"
          onClick={closeMenu}
        >
          Geoffrey Ameble
        </a>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    className={linkClasses(isActive)}
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-red-300 text-xl text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 md:hidden"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-red-100 bg-base-100 px-5 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    className={`block ${linkClasses(isActive)}`}
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;

import { useEffect, useState } from "react";

import { sectionIds, type SectionId } from "../data/navigation";

interface SectionObserverState {
  activeSection: SectionId;
  showBackToTop: boolean;
}

export const useSectionObserver = (): SectionObserverState => {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);
    const hero = document.getElementById("home");
    const visibleSections = new Map<string, IntersectionObserverEntry>();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const closestSection = [...visibleSections.values()].sort(
          (first, second) =>
            Math.abs(first.boundingClientRect.top - window.innerHeight * 0.2) -
            Math.abs(second.boundingClientRect.top - window.innerHeight * 0.2),
        )[0];

        if (closestSection) {
          setActiveSection(closestSection.target.id as SectionId);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
      },
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowBackToTop(!entry.isIntersecting),
      { threshold: 0.1 },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    if (hero) {
      heroObserver.observe(hero);
    }

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return { activeSection, showBackToTop };
};

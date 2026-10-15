export const sectionIds = [
  "home",
  "projects",
  "experience",
  "skills",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const navigationItems = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const satisfies ReadonlyArray<{
  id: Exclude<SectionId, "home">;
  label: string;
}>;

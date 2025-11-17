export type WindowId =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

// Provide titles and base coordinates so new windows fan out instead of stacking perfectly.
export const WINDOW_PRESETS: Record<
  WindowId,
  { title: string; initialPosition: { x: number; y: number } }
> = {
  about: { title: "About.txt", initialPosition: { x: 140, y: 120 } },
  experience: { title: "Experience.txt", initialPosition: { x: 220, y: 160 } },
  projects: { title: "Projects.exe", initialPosition: { x: 180, y: 220 } },
  skills: { title: "Skills.txt", initialPosition: { x: 260, y: 200 } },
  contact: { title: "Contact.vcf", initialPosition: { x: 200, y: 260 } },
} as const;

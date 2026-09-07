import type { Metadata } from "next";
import ProjectsPage from "@/views/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects - Rb Jay Salamanes",
};

export default function Page() {
  return <ProjectsPage />;
}

import type { Metadata } from "next";
import CertificationsPage from "@/views/CertificationsPage";

export const metadata: Metadata = {
  title: "Certifications - Rb Jay Salamanes",
};

export default function Page() {
  return <CertificationsPage />;
}

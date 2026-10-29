import type { Metadata } from "next";
import { ResourcesContent } from "./resources-content";

export const metadata: Metadata = {
  title: "Resources | Aman Jain",
  description: "Finance, CFA study and creator resources from Aman Jain. Listings are marked clearly until files and public links are available.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Punch the Monkey — Primate Tribute & AI Species Identifier",
  description:
    "An unofficial tribute to Punch, the baby Japanese macaque who went viral in 2026. Learn his real story, explore primate facts, and use our AI tool to identify monkey species from photos.",
  keywords: [
    "punch the monkey",
    "punch monkey",
    "punch macaque",
    "ichikawa city zoo",
    "japanese macaque",
    "baby monkey",
    "primate identifier",
    "monkey species",
    "animal welfare",
    "GanbarePanchi",
    "HangInTherePunch",
  ],
  openGraph: {
    title: "Punch the Monkey — Primate Tribute & AI Species Identifier",
    description:
      "An unofficial tribute to Punch, the viral baby macaque. Explore his story and identify primate species with AI.",
    url: "https://www.petshard.online/punch-the-monkey",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punch the Monkey — Primate Tribute & AI Species Identifier",
    description:
      "An unofficial tribute to Punch, the viral baby macaque. Explore his story and identify primate species with AI.",
  },
};

export default function PunchTheMonkeyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

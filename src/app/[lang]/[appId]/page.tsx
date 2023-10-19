import { Metadata } from "next";
import HomeApp from "./(web)/home";
import LayoutApp from "./(web)/layoutApp";
import { cookies } from "next/headers";

const META_OBJECT = {
  title: {
    en: "Ecom Loyalty",
    vi: "Ecom Loyalty",
  },
  description: {
    en: "Ecom Loyalty",
    vi: "NEcom Loyalty",
  },
} as any;

export const generateMetadata = ({
  params: { lang },
}: {
  params: { lang: string };
}): Metadata => {
  return {
    title: META_OBJECT.title[lang],
    description: META_OBJECT.description[lang],
  };
};
export default function Home({
  params: { appId },
}: {
  params: { appId: string };
}) {
  return (
    <LayoutApp>
      <HomeApp />
    </LayoutApp>
  );
}

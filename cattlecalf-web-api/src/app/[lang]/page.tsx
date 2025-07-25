import Image from "next/image";
import FeatureContainer from "./ui/main-page/feature-container";
import titlecalf from "@/../public/title_calf.svg";
import titlecalfConstruction from "@/../public/construction-title-calf.svg";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const dict = await getDictionary((await params).lang);

  return (
    <div className="mx-auto mt-39 max-w-6xl px-3 sm:px-6 md:mt-18 lg:px-12">
      <div className="relative grid w-full grid-cols-1 gap-0 border-x border-gray-200 md:grid-cols-2">
        <div className="xs:p-12 xs:px-6 xs:py-12 relative col-span-2 border-0 border-b border-gray-200 p-6 px-6 py-6 md:p-16">
          <Image
            src={
              process.env.NODE_ENV === "development"
                ? titlecalfConstruction
                : titlecalf
            }
            className="mx-auto size-90 dark:invert"
            aria-details="just a calf looking to the left."
            alt="title calf"
          />
          <div className="flex items-center">
            <p className="mx-auto max-w-6xl text-center text-lg">
              {dict["main-page"]["title-titlecow"]}
            </p>
          </div>
        </div>
        <div className="xs:p-12 xs:px-6 xs:py-10 col-span-2 h-fit p-6 px-6 py-14 md:px-9 lg:px-12">
          <p className="text-3xl font-semibold tracking-tighter">
            {dict["main-page"]["feature-title"]} ✨
          </p>
          <p className="py-6 text-2xl">
            {dict["main-page"]["feature-subtitle"]}
          </p>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <FeatureContainer
              src="/black-calf.webp"
              text={dict["main-page"]["feature-container-1"]}
            />
            <FeatureContainer
              src="/black-calf.webp"
              text={dict["main-page"]["feature-container-2"]}
            />
            <FeatureContainer
              src="/black-calf.webp"
              text={dict["main-page"]["feature-container-3"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import FeatureContainer from "./ui/main-page/feature-container";
import titlecalf from "@/../public/title_calf.svg";

export default function Home() {
  return (
    <div className="mx-auto mt-39 max-w-6xl px-3 sm:px-6 md:mt-18 lg:px-12">
      <div className="relative grid w-full grid-cols-1 gap-0 border-x border-gray-200 md:grid-cols-2">
        <div className="xs:p-12 xs:px-6 xs:py-12 relative col-span-2 border-0 border-b border-gray-200 p-6 px-6 py-6 md:p-16">
          <Image
            src={titlecalf}
            className="mx-auto size-90 dark:invert"
            aria-details="just a brown cow looking to the left."
            alt="title calf"
          ></Image>
          <div className="flex items-center">
            <p className="mx-auto max-w-6xl text-center text-lg">
              Graph stadistics of your ranch focused on calves and employees.
            </p>
          </div>
        </div>
        <div className="xs:p-12 xs:px-6 xs:py-10 col-span-2 h-fit p-6 px-6 py-14 md:px-9 lg:px-12">
          <p className="text-3xl font-semibold tracking-tighter">Features ✨</p>
          <p className="py-6 text-2xl">
            Under development, Plan to be realese in the near future...
          </p>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <FeatureContainer
              src="/black-calf.webp"
              text="Minimalistic disign, with appeling icons and graphs easy to understeand"
            />
            <FeatureContainer
              src="/black-calf.webp"
              text="Employees salary and basic information with graphs"
            />
            <FeatureContainer
              src="/black-calf.webp"
              text="Open source project"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

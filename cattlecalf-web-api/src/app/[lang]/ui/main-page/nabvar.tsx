// Copyright (C) 2025 theRightHoopRod
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
import Image from "next/image";
import MainLogo from "@/../public/logo.svg";
import Link from "next/link";

export default async function NavBar({
  lang,
  isLogged,
}: {
  lang: {
    "dashboard-button": string;
    "dashboard-logout": string;
  };
  isLogged: boolean;
}) {
  return (
    <div className="fixed top-0 right-0 left-0 z-2 flex flex-col items-center gap-2 border-b border-gray-200 bg-white p-2 md:flex-row md:place-content-between md:gap-0 md:px-5 dark:bg-[var(--background)]">
      <div className="relative">
        <div className="flex flex-col items-center gap-1 md:flex-row">
          <Image
            src={MainLogo}
            className="w-20 border dark:invert"
            alt="cattlecalf logo"
          />
          <p className="text-2xl">CattleCalf</p>
        </div>
        <Link
          className="absolute top-0 left-0 z-10 h-full w-full"
          href="/"
        ></Link>
      </div>
      {isLogged ? (
        <Link href="/dashboard">{lang["dashboard-logout"]}</Link>
      ) : (
        <Link href="/dashboard">{lang["dashboard-button"]}</Link>
      )}
    </div>
  );
}

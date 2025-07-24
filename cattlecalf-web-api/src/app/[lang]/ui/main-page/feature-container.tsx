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

export default function FeatureContainer({
  src,
  text,
}: {
  src: string;
  text: string;
}) {
  return (
    <div className="rounded-(--card-radius) border p-(--card-padding) [--card-padding:--spacing(1)] [--card-radius:var(--radius-4xl)]">
      <Image
        className="max-h-[200px] w-full rounded-t-[calc(var(--card-radius)-var(--card-padding))] object-cover"
        alt="black-calf"
        src={src}
        width={300}
        height={199}
      ></Image>
      <p className="py-3 text-center">{text}</p>
    </div>
  );
}

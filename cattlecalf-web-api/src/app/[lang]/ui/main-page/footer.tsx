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

export function Footer() {
  return (
    <div className="bg-background-100 flex w-full flex-col items-center border-t border-gray-200 py-13 md:items-end">
      <div className="pl-0 md:pr-6">
        <p>CattleCalf made with love by theRightHoopRod ❤️ </p>
        <p className="text-center">
          Open-Souce -{" "}
          <code>
            <a href="#">16b12j⇗</a>
          </code>
        </p>
      </div>
    </div>
  );
}

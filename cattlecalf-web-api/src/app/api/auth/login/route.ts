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

import prisma from "@/app/lib/prisma";
import { encrypt } from "@/app/lib/session";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const response = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (response) {
    const comparson = await bcrypt.compare(password, response.password);
    const token = await encrypt({});

    if (comparson) {
      return new Response(JSON.stringify({ success: true, token: token }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid credentials" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  } else {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid credentials" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

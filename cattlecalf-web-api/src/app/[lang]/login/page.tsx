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

"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";

export default function LoginPage() {
  const [state, action] = useActionState(login, undefined);

  return (
    <div className="mx-auto mt-39 max-w-6xl md:mt-18">
      <form
        className="flex flex-col items-center justify-center gap-2"
        action={action}
      >
        <input
          className="border border-white"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <input
          className="border border-white"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        {state?.message && <p>{state.message}</p>}
        <button className="rounded-xl border border-white px-5" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

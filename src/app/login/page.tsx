"use client";
import Link from "next/link";
import { useState } from "react";  // 👈 ये सही है

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      <form
        onSubmit={onLogin}
        className="w-72 flex flex-col gap-4 p-6 shadow-md rounded-xl bg-white"
      >
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        Create new account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Signup
        </Link>
      </p>
    </div>
  );
}

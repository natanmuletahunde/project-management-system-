"use client";

import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-6 rounded"
        />

        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Create Account
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?
          <a className="text-blue-600 ml-1" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

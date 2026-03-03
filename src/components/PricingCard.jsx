// import React from "react";

// function PricingCard() {
//   return <div className="border w-sm"></div>;
// }

// export default PricingCard;

import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="bg-[#0f172a] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Flexible Plans for Every Team
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {/* Starter */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-left hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-4 text-4xl font-bold">Free</p>
            <p className="text-gray-500 mb-6">1 project</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <FaCheck />
                Full Features
              </li>
              <li className="flex items-center gap-3">
                <FaCheck /> 1 project
              </li>
              <li className="flex items-center gap-3">
                <FaCheck /> Community support
              </li>
            </ul>

            <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition">
              CTA
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="bg-linear-to-b from-teal-400 to-emerald-500 text-white rounded-2xl shadow-2xl p-8 scale-105">
            <div className="bg-white text-emerald-600 text-xs px-3 py-1 rounded-full w-fit font-semibold mb-4">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-4 text-4xl font-bold">
              $29<span className="text-lg">/mo</span>
            </p>
            <p className="opacity-90 mb-6">10 projects</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check size={18} /> All Features
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} /> 10 projects
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} /> Priority support
              </li>
            </ul>

            <button className="w-full bg-white text-emerald-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              CTA
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-left hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-4 text-4xl font-bold">Custom</p>
            <p className="text-gray-500 mb-6">Unlimited support</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check size={18} /> All Features
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} /> Unlimited projects
              </li>
              <li className="flex items-center gap-3">
                <Check size={18} /> Dedicated support
              </li>
            </ul>

            <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition">
              CTA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

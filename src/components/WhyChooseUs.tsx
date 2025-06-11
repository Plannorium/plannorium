"use client";

import { User, MapPin, Users, Clock } from "lucide-react"; // Import icons
import React from "react";

export default function WhyTrustUsSection() {
  const items = [
    {
      title: "The right people",
      desc: "Our rigorous hiring process ensures only rock-solid, skilled individuals make it through.",
    },
    {
      title: "The right place",
      desc: "Our members know or are online when you are. Clear communication in English.",
    },
    {
      title: "The right team",
      desc: "From solo engineers to multi-team engagements. Flexible project management options.",
    },
    {
      title: "The right time",
      desc: "Teams that start when you need them. Scale up or down with ease.",
    },
  ];
  const icons = [User, MapPin, Users, Clock];

  return (
    <section className="py-20 bg-gradient-to-r from-black to-zinc-800 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-30 animate-pulse" />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-white">
          No need to wonder. <br className="md:hidden" />
          Working with us is wonderful.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg flex items-start" // Added flex for icon placement
            >
              <div className="mr-4">
                {React.createElement(icons[index], {
                  className: "w-6 h-6 text-blue-400",
                })}
              </div>
              <div>
                <h4 className="font-bold text-lg text-blue-400 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

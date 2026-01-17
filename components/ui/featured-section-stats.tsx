"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function FeaturedSectionStats() {
  const data = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 60 },
    { name: "Apr", value: 80 },
    { name: "May", value: 100 },
    { name: "Jun", value: 130 },
    { name: "Jul", value: 160 },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto text-left pt-8 pb-32">
      <div className="px-4">
        <h3 className="text-lg sm:text-xl lg:text-4xl font-medium text-gray-900 dark:text-white mb-16">
          Everything you need to take control of your health.{" "}
          <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-4xl">
            A step-by-step system for reading your wearable data, running personal experiments, and catching warning signs before your doctor does.
          </span>
        </h3>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div>
            <p className="text-3xl font-medium text-gray-900">12</p>
            <p className="text-gray-500 text-md">Actionable Frameworks</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-gray-900">30+</p>
            <p className="text-gray-500 text-md">Metrics Explained</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-gray-900">5</p>
            <p className="text-gray-500 text-md">Ready-to-Use Templates</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-gray-900">8 hrs</p>
            <p className="text-gray-500 text-md">Of In-Depth Content</p>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="w-full h-48 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorBlue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

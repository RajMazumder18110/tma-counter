"use client";
/** @notice Imports */
import { useState } from "react";

const Counter = () => {
  /// Counter state
  const [counter, setCounter] = useState(0);

  /// Handlers
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => (prev == 0 ? 0 : prev - 1));

  // UI
  return (
    <section className="w-96 h-96 flex flex-col items-center justify-center gap-20 rounded-xl border border-slate-800 border-opacity-50">
      {/* Counter Value */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium">{counter}</h1>
        <p className="text-gray-600">Counter</p>
      </div>

      {/* Counter Buttons */}
      <div className="w-full flex items-center justify-evenly">
        <button
          onClick={increment}
          className="px-5 py-1 rounded-lg border border-slate-600 border-opacity-50 hover:bg-slate-700"
        >
          Inc
        </button>
        <button
          onClick={decrement}
          className="px-5 py-1 rounded-lg border border-slate-600 border-opacity-50 hover:bg-slate-700"
        >
          Dec
        </button>
      </div>
    </section>
  );
};

export default Counter;

"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false
  );

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("flowbridge-theme", next ? "dark" : "light");
    } catch (e) {}
  }

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label="Toggle color theme"
      className="w-9 h-9 rounded-full border border-line bg-surface flex items-center justify-center text-inksoft hover:text-ink flex-none"
    >
      <Icon name={dark ? "i-sun" : "i-moon"} />
    </button>
  );
}

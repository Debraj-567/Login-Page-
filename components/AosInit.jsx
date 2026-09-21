"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Mounts once on the client to wire up scroll-reveal animations
// for every element carrying a data-aos attribute.
export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: () => new URLSearchParams(window.location.search).has("static"),
    });
  }, []);

  return null;
}

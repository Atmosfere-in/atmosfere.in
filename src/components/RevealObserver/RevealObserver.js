"use client";

import { useEffect } from "react";

const SELECTOR = ".reveal:not([data-revealed]), .reveal-image:not([data-revealed])";

// Quiet scroll animations: anything marked `.reveal` (fade up) or
// `.reveal-image` (photo unveils from the bottom) animates in once, the
// first time it scrolls into view. Without JavaScript, or with reduced
// motion, everything simply shows. Elements added later (client-side
// navigation, filtered lists) are picked up as they appear.
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // An attribute, not a class: React rewrites className whenever a
          // component re-renders (e.g. the Before/After slider while
          // dragging), which would hide the element again.
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const watch = (root) => {
      if (root.matches?.(SELECTOR)) observer.observe(root);
      root.querySelectorAll?.(SELECTOR).forEach((el) => observer.observe(el));
    };
    watch(document);

    const mutations = new MutationObserver((records) => {
      for (const record of records) record.addedNodes.forEach((node) => node.nodeType === 1 && watch(node));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}

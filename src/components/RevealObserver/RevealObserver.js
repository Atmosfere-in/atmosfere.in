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

    // Elements waiting to be revealed.
    const pending = new Set();
    // While true, nothing is revealed (see settle below).
    let settling = false;
    let settleFrame = 0;
    let settleTimer = 0;

    const reveal = (el) => {
      // An attribute, not a class: React rewrites className whenever a
      // component re-renders (e.g. the Before/After slider while
      // dragging), which would hide the element again.
      el.setAttribute("data-revealed", "");
      observer.unobserve(el);
      pending.delete(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (settling) return;
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target);
        }
      },
      // Reveal once the element's top edge has entered the lower 10% of the
      // viewport. A fixed line rather than a visible fraction, so tall blocks
      // (the concept palette on a phone) animate as soon as they arrive.
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    const observe = (el) => {
      pending.add(el);
      observer.observe(el);
    };
    const watch = (root) => {
      if (root.matches?.(SELECTOR)) observe(root);
      root.querySelectorAll?.(SELECTOR).forEach(observe);
    };

    // After a client-side navigation the new page is inserted while the
    // document still sits at the previous page's scroll position, and the
    // browser then scrolls (smoothly) back to the top. Anything that passes
    // through the viewport on the way would count as seen and never animate
    // when the reader actually reaches it. So whenever new elements arrive,
    // hold all reveals until the scroll position has been still for a few
    // frames, then look again at what is really in view.
    const settled = () => {
      settling = false;
      cancelAnimationFrame(settleFrame);
      clearTimeout(settleTimer);
      // Re-observing makes the observer report each element's current
      // intersection, so whatever is now in view reveals straight away.
      for (const el of pending) {
        observer.unobserve(el);
        if (el.isConnected) observer.observe(el);
        else pending.delete(el);
      }
    };
    const settle = () => {
      settling = true;
      cancelAnimationFrame(settleFrame);
      clearTimeout(settleTimer);
      const started = performance.now();
      let lastY = window.scrollY;
      let stillFrames = 0;
      const tick = () => {
        const y = window.scrollY;
        stillFrames = y === lastY ? stillFrames + 1 : 0;
        lastY = y;
        if (stillFrames >= 3 && performance.now() - started >= 250) settled();
        else settleFrame = requestAnimationFrame(tick);
      };
      settleFrame = requestAnimationFrame(tick);
      // Animation frames pause in a background tab; never hold reveals
      // for longer than this.
      settleTimer = setTimeout(settled, 2000);
    };

    watch(document);

    const mutations = new MutationObserver((records) => {
      const before = pending.size;
      for (const record of records) {
        record.addedNodes.forEach((node) => node.nodeType === 1 && watch(node));
      }
      if (pending.size > before) settle();
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(settleFrame);
      clearTimeout(settleTimer);
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}

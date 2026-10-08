"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LIST_KEY = "atmosfere:spaces-list";

// Where one step "up" from a page leads. Spaces project pages are reached
// from both Projects and Case Studies, so they return to whichever listing
// the visitor came from.
function parentOf(pathname) {
  if (/^\/spaces\/projects\/[^/]+$/.test(pathname)) {
    let list = null;
    try {
      list = sessionStorage.getItem(LIST_KEY);
    } catch {}
    return list || "/spaces/projects";
  }
  const trimmed = pathname.replace(/\/+$/, "");
  const parent = trimmed.slice(0, trimmed.lastIndexOf("/"));
  return parent || "/";
}

// The logo walks one level up per click: first to the top of the current
// page, then to its listing, then the vertical's homepage, then the
// atmosfere.in hub. e.g. Arch House → top → Case Studies → Spaces → Hub.
export default function BrandLink({ className, children }) {
  const pathname = usePathname();
  const router = useRouter();

  // Remember which Spaces listing led to a project page.
  useEffect(() => {
    if (pathname === "/spaces/projects" || pathname === "/spaces/case-studies") {
      try {
        sessionStorage.setItem(LIST_KEY, pathname);
      } catch {}
    }
  }, [pathname]);

  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();

    if (window.scrollY > 8) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      return;
    }
    if (pathname !== "/") router.push(parentOf(pathname));
  };

  return (
    <Link href="/" className={className} aria-label="Atmosfere — go back one level" onClick={onClick}>
      {children}
    </Link>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, site, sectionIds } from "@/content/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import {
  cn,
  lockBodyScroll,
  scrollToSection,
  unlockBodyScroll,
} from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    lockBodyScroll();

    // Auto-focus first menu link when menu opens
    setTimeout(() => {
      firstMenuLinkRef.current?.focus();
    }, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      // Trap focus within menu
      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          "a[href], button:not([hidden])",
        );
        const focusableArray = Array.from(focusableElements);
        const currentIndex = focusableArray.indexOf(
          document.activeElement as Element,
        );
        const isShiftKey = e.shiftKey;

        if (isShiftKey) {
          // Shift+Tab
          if (currentIndex === 0) {
            e.preventDefault();
            const lastElement = focusableArray[focusableArray.length - 1];
            (lastElement as HTMLElement).focus();
          }
        } else {
          // Tab
          if (currentIndex === focusableArray.length - 1) {
            e.preventDefault();
            (focusableArray[0] as HTMLElement).focus();
          }
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      unlockBodyScroll();
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  const navLinkClass = (href: string) => {
    const id = href.replace("#", "") as typeof activeSection;
    const isActive = activeSection === id;
    return cn(
      "nav-link relative py-1 text-sm transition-opacity duration-200",
      isActive
        ? "text-tier-1 opacity-100"
        : "text-tier-3 opacity-70 hover:opacity-100",
    );
  };

  return (
    <header
      className={cn(
        "nav-fade-in fixed left-0 right-0 top-0 z-40 h-16 transition-all duration-300",
        scrolled && "nav-scrolled",
      )}
    >
      <nav
        className="section-container flex h-full items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="border border-white/20 px-2 py-1 font-display text-sm font-bold tracking-tight text-primary"
        >
          DY
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={navLinkClass(link.href)}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <span
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-cyan transition-all duration-200"
                    style={{ animation: "none" }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={hamburgerRef}
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-full bg-primary transition-transform",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-primary transition-opacity",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-primary transition-transform",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed left-0 right-0 top-16 z-[200] bg-base opacity-100 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <ul className="flex flex-col gap-6 p-8">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstMenuLinkRef : null}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-display text-2xl font-bold text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-cyan"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

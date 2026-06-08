import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = (path: string) => (pathname === path ? "active" : "");

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="nav-logo">
        Spiceup<span>Café</span>
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className={linkCls("/")}>Home</Link></li>
        <li><Link to="/menu" className={linkCls("/menu")}>Menu</Link></li>
        <li><Link to="/about" className={linkCls("/about")}>About</Link></li>
        <li><Link to="/visit" className={linkCls("/visit")}>Visit Us</Link></li>
      </ul>
      <Link to="/visit" className="nav-cta">Reserve</Link>
    </nav>
  );
}

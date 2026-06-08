import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">Spiceup<span>Café</span></div>
          <p className="footer-tagline">
            A cozy neighborhood café serving bold flavours and good vibes every day on Jumbagi Road, Jamkhandi.
          </p>
        </div>
        <div className="footer-col">
          <h5>Navigate</h5>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About Us</Link>
          <Link to="/visit">Visit Us</Link>
        </div>
        <div className="footer-col">
          <h5>Hours</h5>
          <p>Mon – Sun</p>
          <p>12:00 PM – 10:00 PM</p>
          <p>Jumbagi Road, Jamkhandi</p>
          <p>Karnataka – 587301</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 SpiceupCafé · Jamkhandi, Karnataka</span>
        <span className="rating-badge"><span className="star">★</span> 4.3 · 6,340 Reviews on Google</span>
      </div>
    </footer>
  );
}

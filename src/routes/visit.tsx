import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { InstagramSection } from "@/components/InstagramSection";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — SpiceupCafé" },
      { name: "description", content: "Jumbagi Road, Jamkhandi. Open daily 12 PM – 10 PM. Dine-in, kerbside pickup, and delivery available." },
      { property: "og:title", content: "Visit Us — SpiceupCafé" },
      { property: "og:description", content: "Come taste the difference — Jumbagi Road, Jamkhandi." },
    ],
  }),
  component: VisitPage,
});

const LAT = 16.5173;
const LNG = 75.296515;
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;
const embedUrl = `https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;

function VisitPage() {
  return (
    <>
      <SiteNav />
      <section className="visit-hero">
        <div className="section-eyebrow" style={{ color: "var(--gold)" }}>Find Us</div>
        <h1>Come Taste the Difference</h1>
        <p>We're open seven days a week, noon to night. Drop by, sit back, and let us take care of the rest.</p>
      </section>

      <div className="visit-grid">
        <div className="visit-info">
          <div className="info-block">
            <h4>Address</h4>
            <div className="info-text">
              <strong>SpiceupCafé</strong>
              <span>Jamkhandi</span>
              <span>Karnataka – 587301</span>
              <a href={mapsUrl} target="_blank" rel="noreferrer" style={{ color: "var(--spice)", fontSize: ".85rem", marginTop: ".25rem" }}>
                {LAT}, {LNG} ↗
              </a>
            </div>
          </div>
          <div className="info-block">
            <h4>Hours</h4>
            <div className="info-text">
              <strong>Monday – Sunday</strong>
              <span>12:00 PM – 10:00 PM</span>
            </div>
          </div>
          <div className="info-block">
            <h4>Dining Options</h4>
            <div className="dining-tags">
              <span className="dining-tag">🍽️ Dine-In</span>
              <span className="dining-tag">🚗 Kerbside Pickup</span>
              <span className="dining-tag">🛵 Delivery</span>
            </div>
          </div>
          <div className="info-block">
            <h4>Budget</h4>
            <div className="info-text">
              <strong>₹1 – ₹150 per person</strong>
              <span>Affordable for all budgets</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href={directionsUrl} target="_blank" rel="noreferrer" className="btn-primary">Get Directions →</a>
            <Link to="/menu" className="btn-map" style={{ background: "transparent", color: "var(--spice)", border: "1px solid var(--spice)" }}>Browse Menu</Link>
          </div>
        </div>

        <div className="visit-map-embed">
          <iframe
            title="SpiceupCafé location map"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-map map-overlay-btn">Open in Google Maps ↗</a>
        </div>
      </div>

      <InstagramSection heading="Tag Us in Your Visit" />

      <section className="order-section">
        <div className="section-eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>Ready to Order?</div>
        <h2>We've Got You Covered</h2>
        <p>We deliver, we do pickup, and our doors are always open. However you like it, we've got you covered.</p>
        <div className="order-btns">
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-white">Get Directions →</a>
          <Link to="/menu" className="btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>View Menu</Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

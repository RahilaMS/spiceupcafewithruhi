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

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=SpiceupCafe+Jumbagi+Road+Jamkhandi";

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
              <span>Jumbagi Road, Jamkhandi</span>
              <span>Karnataka – 587301</span>
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
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-primary">Get Directions →</a>
            <Link to="/menu" className="btn-map" style={{ background: "transparent", color: "var(--spice)", border: "1px solid var(--spice)" }}>Browse Menu</Link>
          </div>
        </div>

        <div className="visit-map-placeholder">
          <div className="map-pin">📍</div>
          <div>
            <div className="map-address">SpiceupCafé</div>
            <div className="map-sub">Jumbagi Road, Jamkhandi<br />Karnataka – 587301</div>
          </div>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-map">Open in Google Maps ↗</a>
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

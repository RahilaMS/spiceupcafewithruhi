import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { InstagramSection } from "@/components/InstagramSection";
import heroLogo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SpiceupCafé — Cozy Café in Jamkhandi" },
      { name: "description", content: "Where every bite tells a story. Bold flavours, comforting food and great tea on Jumbagi Road, Jamkhandi." },
      { property: "og:title", content: "SpiceupCafé — Cozy Café in Jamkhandi" },
      { property: "og:description", content: "Where every bite tells a story." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-pattern" />
        <div className="hero-glow" />
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Open Daily · 12 PM – 10 PM
            </div>
            <h1>Where Every Bite<br /><em>Tells a Story</em></h1>
            <p className="hero-sub">
              A warm, cozy café in the heart of Jamkhandi — bringing bold spices, comforting flavours, and unforgettable moments to your table since day one.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn-primary">Explore Menu →</Link>
              <Link to="/visit" className="btn-outline">Find Us</Link>
            </div>
          </div>
          <div className="hero-logo-stage" aria-hidden="true">
            <div className="hero-logo-orb" />
            <div className="hero-logo-ring" />
            <span className="hero-spark s1" />
            <span className="hero-spark s2" />
            <span className="hero-spark s3" />
            <img src={heroLogo} alt="" className="hero-logo-img" />
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><span className="num">4.3★</span><span className="lbl">Google Rating</span></div>
          <div className="hero-stat"><span className="num">6,340+</span><span className="lbl">Happy Reviews</span></div>
          <div className="hero-stat"><span className="num">₹150</span><span className="lbl">Max per person</span></div>
          <div className="hero-stat"><span className="num">7 Days</span><span className="lbl">We're Open</span></div>
        </div>
      </section>

      <section className="about-strip">
        <div className="about-strip-text">
          <div className="section-eyebrow">Our Story</div>
          <h2>Small Café,<br />Big Heart</h2>
          <p>
            Nestled on Jumbagi Road in Jamkhandi, SpiceupCafé is where comfort food meets great company. We believe great food doesn't need to be expensive — just honest, fresh, and made with care. Whether you're here for a lazy chai or a full meal with friends, we promise you'll leave smiling.
          </p>
        </div>
        <div className="about-strip-visual">
          <div className="about-card">
            <span className="big">4.3★</span>
            <span className="sm">Google Star Rating</span>
          </div>
          <div className="about-card">
            <span className="big">6K+</span>
            <span className="sm">Reviews</span>
          </div>
          <div className="about-card">
            <span className="big">₹1–150</span>
            <span className="sm">Budget-Friendly</span>
          </div>
        </div>
      </section>

      <section className="menu-preview">
        <div className="section-header">
          <div className="section-eyebrow">What We Serve</div>
          <h2>A Menu Crafted for Every Craving</h2>
        </div>
        <div className="menu-grid">
          {[
            { icon: "🍕", title: "Pizzas & Snacks", desc: "Wood-fired flavours with local twists you won't find anywhere else" },
            { icon: "🍝", title: "Pasta & Mains", desc: "Hearty portions, comforting sauces, and bold seasonings" },
            { icon: "☕", title: "Tea & Beverages", desc: "A variety of flavorful teas and refreshing drinks all day long" },
            { icon: "🧀", title: "Starters & Sides", desc: "Cheese balls, wedges, and more — perfect for sharing" },
          ].map((c) => (
            <div key={c.title} className="menu-card">
              <div className="menu-card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/menu" className="btn-primary" style={{ background: "var(--spice)" }}>View Full Menu →</Link>
        </div>
      </section>

      <section className="reviews">
        <div className="section-header">
          <div className="section-eyebrow">What Guests Say</div>
          <h2>Loved by the Jamkhandi Community</h2>
        </div>
        <div className="review-grid">
          {[
            { text: "The ambience is great, service is good and fast — and the food tastes absolutely yummy!", author: "Verified Google Review" },
            { text: "Cosy place with good options — the variety of tea flavours is something else entirely.", author: "Verified Google Review" },
            { text: "Ordered potato wedges, pizza, pasta, cheese balls and drinks. Every single dish was a winner.", author: "Verified Google Review" },
          ].map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">— {r.author}</div>
            </div>
          ))}
        </div>
      </section>

      <InstagramSection />

      <section className="order-section">
        <div className="section-eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>Ready to Visit?</div>
        <h2>Come In, Sit Down,<br />Feel Right at Home</h2>
        <p>Open every day from 12 PM to 10 PM. Walk-ins always welcome. Kerbside pickup and delivery available.</p>
        <div className="order-btns">
          <Link to="/visit" className="btn-white">Get Directions →</Link>
          <Link to="/menu" className="btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>Browse Menu</Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

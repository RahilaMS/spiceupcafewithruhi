import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SpiceupCafé" },
      { name: "description", content: "A café born from passion, not convention. Honest food, welcoming space, and the heart of Jamkhandi's food culture." },
      { property: "og:title", content: "About — SpiceupCafé" },
      { property: "og:description", content: "Honest food, welcoming space — built for Jamkhandi." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SiteNav />
      <section className="about-hero">
        <div>
          <div className="section-eyebrow">About SpiceupCafé</div>
          <h1>A Café Born From Passion, Not Convention</h1>
          <p>
            SpiceupCafé started with one simple belief: great food should be accessible to everyone. Tucked away on Jumbagi Road in Jamkhandi, we've built a warm space where students, families, and foodies come together over good bites and better conversation.
          </p>
          <p>
            Our kitchen uses fresh, local ingredients to craft everything from crispy snacks to hearty pastas and a tea menu that regulars swear by. We keep our prices honest because we believe flavour — not expense — is what leaves an impression.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link to="/menu" className="btn-primary">See Our Menu →</Link>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-img-box">
            <div className="about-img-box-inner">SpiceupCafé</div>
          </div>
          <div className="about-mini-grid">
            <div className="about-mini"><div className="n">4.3★</div><div className="l">Rating</div></div>
            <div className="about-mini"><div className="n">6,340</div><div className="l">Reviews</div></div>
            <div className="about-mini"><div className="n">7 Days</div><div className="l">Open</div></div>
            <div className="about-mini"><div className="n">₹150</div><div className="l">Max spend</div></div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-header">
          <div className="section-eyebrow">What We Stand For</div>
          <h2>Our Values, Served Daily</h2>
        </div>
        <div className="values-grid">
          {[
            { t: "Honest Flavour", d: "Every dish is made with care from fresh ingredients. No shortcuts, no compromises — just real, honest food." },
            { t: "Welcoming Space", d: "Our café is a haven for everyone. Students, families, solo visitors — all are equally at home here." },
            { t: "Affordable Indulgence", d: "We believe the best meals shouldn't break the bank. Everything on our menu is priced for the everyday visitor." },
            { t: "Community First", d: "We're proud to be a part of Jamkhandi's food culture, and we're here to keep that spirit alive every day." },
          ].map((v) => (
            <div key={v.t} className="value-item">
              <h4>{v.t}</h4>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="order-section">
        <div className="section-eyebrow" style={{ color: "rgba(255,255,255,.7)" }}>Come See Us</div>
        <h2>We'd Love to Host You</h2>
        <p>Walk in anytime between noon and 10 PM. Dine-in, pickup or delivery — the choice is yours.</p>
        <div className="order-btns">
          <Link to="/visit" className="btn-white">Visit Us →</Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

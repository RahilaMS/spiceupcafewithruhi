const tiles = [
  "/insta/1.jpeg",
  "/insta/2.jpeg",
  "/insta/3.jpeg",
  "/insta/4.jpeg",
  "/insta/5.jpeg",
];

export function InstagramSection({ heading = "Life at SpiceupCafé" }: { heading?: string }) {
  return (
    <section className="insta-section">
      <div className="insta-header">
        <div>
          <div className="section-eyebrow" style={{ color: "var(--gold)" }}>Follow the Story</div>
          <h2>{heading}</h2>
        </div>
        <a href="https://instagram.com/spiceupcafe_" target="_blank" rel="noreferrer" className="insta-link">
          @spiceupcafe_ ↗
        </a>
      </div>
      <div className="insta-grid">
        {tiles.map((src, i) => (
          <a key={i} href="https://instagram.com/spiceupcafe_" target="_blank" rel="noreferrer" className="insta-tile">
            <img src={src} alt={`SpiceupCafé moment ${i + 1}`} loading="lazy" />
          </a>
        ))}
      </div>
      <p className="insta-handle">
        Follow us on Instagram:{" "}
        <a href="https://instagram.com/spiceupcafe_" target="_blank" rel="noreferrer">@spiceupcafe_</a>
        {" · Share your visit with #SpiceupCafe"}
      </p>
    </section>
  );
}

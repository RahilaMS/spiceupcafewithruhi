import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — SpiceupCafé" },
      { name: "description", content: "Fresh ingredients, bold seasonings, and honest portions — all under ₹150. Browse our full food and beverage menu." },
      { property: "og:title", content: "Menu — SpiceupCafé" },
      { property: "og:description", content: "Good food for every mood — all under ₹150." },
    ],
  }),
  component: MenuPage,
});

const veg = [
  "Paneer Pizza", "Margherita Pizza", "Corn & Capsicum Pizza", "Potato Wedges",
  "Cheese Balls", "Veg Pasta (Arrabbiata)", "Veg Pasta (White Sauce)", "Paneer Sandwich",
  "Veg Burger", "French Fries", "Masala Maggi", "Veg Noodles",
  "Pav Bhaji", "Aloo Tikki", "Onion Rings", "Veg Momos",
];
const nonveg = [
  "Chicken Pizza", "Spicy Chicken Pizza", "Chicken Burger", "Chicken Pasta",
  "Chicken Noodles", "Egg Sandwich", "Chicken Momos", "Egg Maggi",
];
const hot = [
  { icon: "☕", name: "Masala Chai" }, { icon: "🫖", name: "Lemon Ginger Tea" },
  { icon: "🌿", name: "Mint Tea" }, { icon: "🍃", name: "Green Tea" },
  { icon: "☕", name: "Black Coffee" }, { icon: "🥛", name: "Milk Coffee" },
  { icon: "☕", name: "Cappuccino" }, { icon: "☕", name: "Latte" },
];
const cold = [
  { icon: "🥤", name: "Cold Coffee" }, { icon: "🍓", name: "Strawberry Milkshake" },
  { icon: "🍫", name: "Chocolate Milkshake" }, { icon: "🥭", name: "Mango Shake" },
  { icon: "🍋", name: "Fresh Lemonade" }, { icon: "🧃", name: "Fresh Juice" },
  { icon: "🌊", name: "Mojito (Virgin)" }, { icon: "🫧", name: "Sodas & Coolers" },
];

function MenuPage() {
  const [tab, setTab] = useState<"food" | "bev">("food");
  return (
    <>
      <SiteNav />
      <section className="menu-page-hero">
        <div className="section-eyebrow" style={{ color: "var(--gold)" }}>Our Menu</div>
        <h1>Good Food for Every Mood</h1>
        <p>Fresh ingredients, bold seasonings, and honest portions — all under ₹150</p>
      </section>

      <div className="menu-tabs">
        <div className="menu-tabs-inner">
          <button className={`menu-tab ${tab === "food" ? "active" : ""}`} onClick={() => setTab("food")}>🍽️ Food</button>
          <button className={`menu-tab ${tab === "bev" ? "active" : ""}`} onClick={() => setTab("bev")}>☕ Beverages</button>
        </div>
      </div>

      {tab === "food" && (
        <section className="menu-content">
          <div className="food-section">
            <div className="food-section-title">
              <h3>Vegetarian</h3>
              <span className="food-badge badge-veg">🟢 Pure Veg</span>
            </div>
            <div className="food-list">
              {veg.map((v) => (
                <div key={v} className="food-item">
                  <span className="food-dot dot-veg" />
                  <span className="food-item-name">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="food-section">
            <div className="food-section-title">
              <h3>Non-Vegetarian</h3>
              <span className="food-badge badge-nonveg">🔴 Non-Veg</span>
            </div>
            <div className="food-list">
              {nonveg.map((v) => (
                <div key={v} className="food-item">
                  <span className="food-dot dot-nonveg" />
                  <span className="food-item-name">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "bev" && (
        <section className="menu-content">
          <div className="food-section">
            <div className="food-section-title"><h3>Hot Beverages</h3></div>
            <div className="bev-grid">
              {hot.map((b) => (
                <div key={b.name} className="bev-card">
                  <div className="bev-icon">{b.icon}</div>
                  <div className="bev-name">{b.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="food-section">
            <div className="food-section-title"><h3>Cold Beverages</h3></div>
            <div className="bev-grid">
              {cold.map((b) => (
                <div key={b.name} className="bev-card">
                  <div className="bev-icon">{b.icon}</div>
                  <div className="bev-name">{b.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="order-section">
        <h2>Hungry yet?</h2>
        <p>Come dine in, grab a kerbside pickup, or get it delivered. We're open seven days a week.</p>
        <div className="order-btns">
          <Link to="/visit" className="btn-white">Visit Us →</Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

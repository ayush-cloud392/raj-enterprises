import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [price, setPrice] = useState("210");

  useEffect(() => {
    setPrice("210");
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          background: "#111827",
          color: "white",
          padding: "15px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Raj Enterprises</h2>
        <div>Mustard Oil Mill</div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg,#f59e0b,#dc2626)",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "white",
            color: "#dc2626",
            fontSize: "50px",
            fontWeight: "bold",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          RE
        </div>

        <h1 style={{ fontSize: "60px", marginTop: "20px" }}>
          Raj Enterprises
        </h1>

        <h2>Mustard Oil Mill & Cyber Cafe Services</h2>

        <p style={{ fontSize: "20px" }}>
          Pure Mustard Oil Manufacturing, Supply & Complete Cyber Cafe Services
        </p>

        <a
          href="https://wa.me/919308486190"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{
              marginTop: "20px",
              padding: "15px 30px",
              border: "none",
              borderRadius: "10px",
              background: "#22c55e",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            WhatsApp Us
          </button>
        </a>
      </section>

      {/* Product Section */}
      <section style={{ padding: "50px" }}>
        <h1>Our Products</h1>

        <div
          style={{
            width: "280px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🛢️ Raj Enterprises Mustard Oil</h2>

          <p>Pack Size : 1 Litre</p>

          <h3>Price : ₹{price}</h3>
        </div>
      </section>

      {/* Contact */}
      <section
        style={{
          background: "#f3f4f6",
          padding: "50px",
        }}
      >
        <h1>Contact Us</h1>

        <p>📞 9308486190</p>
        <p>📞 9470079246</p>

        <p>
          📍 Nehru Nagar, Buxar, Bihar - 802101
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#111827",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>© 2026 Raj Enterprises</p>
      </footer>
    </div>
  );
}

export default App;
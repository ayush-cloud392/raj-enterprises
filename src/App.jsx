import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [price, setPrice] = useState("Loading...");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/price")
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.price);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#f59e0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "white",
              fontSize: "20px",
            }}
          >
            RE
          </div>

          <h2>Raj Enterprises</h2>
        </div>

        <div>Home | Products | Services | Contact</div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg,#f59e0b,#dc2626)",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "white",
            margin: "0 auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#dc2626",
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          RE
        </div>

        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          Raj Enterprises
        </h1>

        <p style={{ fontSize: "24px" }}>
          Mustard Oil Mill & Cyber Cafe Services
        </p>

        <p>
          Pure Mustard Oil Manufacturing, Supply &
          Complete Cyber Cafe Services
        </p>
      </section>

      {/* Products */}
      <section style={{ padding: "50px" }}>
        <h2>Our Products</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "250px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>🛢️ Raj Enterprises Mustard Oil</h3>
            <p>Pack Size: 1 Litre</p>

            <p>
              <strong>Price: ₹{price}</strong>
            </p>
          </div>

          {products.map((item, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <h3>{item.name}</h3>

              <p>
                <strong>Price: ₹{item.price}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        style={{
          padding: "50px",
          background: "#f3f4f6",
        }}
      >
        <h2>Our Services</h2>

        <ul
          style={{
            lineHeight: "2",
            fontSize: "18px",
          }}
        >
          <li>✅ PAN Card Services</li>
          <li>✅ Aadhaar Services</li>
          <li>✅ Online Form Filling</li>
          <li>✅ Railway Ticket Booking</li>
          <li>✅ Photocopy & Printing</li>
          <li>✅ Cyber Cafe Services</li>
        </ul>
      </section>

      {/* Contact */}
      <section
        style={{
          padding: "50px",
          textAlign: "center",
          background: "#f8f9fa",
        }}
      >
        <h2>Contact Us</h2>

        <p style={{ fontSize: "18px" }}>
          📞 9308486190
        </p>

        <p style={{ fontSize: "18px" }}>
          📞 9470079246
        </p>

        <p
          style={{
            fontSize: "18px",
            marginTop: "15px",
          }}
        >
          📍 Nehru Nagar, Buxar, Bihar - 802101
        </p>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:9308486190"
            style={{
              background: "#16a34a",
              color: "white",
              padding: "12px 20px",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919308486190"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#25D366",
              color: "white",
              padding: "12px 20px",
              textDecoration: "none",
              borderRadius: "8px",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
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
        <p>Mustard Oil Mill & Cyber Cafe Services</p>
      </footer>
    </div>
  );
}

export default App;
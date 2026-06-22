import { useState, useEffect } from "react";

function Dashboard() {
  const [price, setPrice] = useState("210");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const savePrice = () => {
    fetch("http://localhost:5000/price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: price,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Price Updated Successfully!");
      })
      .catch(() => {
        alert("Server Connection Failed");
      });
  };

  const addProduct = () => {
    if (!productName || !productPrice) {
      alert("Enter Product Name and Price");
      return;
    }

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: productName,
        price: productPrice,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setProducts([
          ...products,
          {
            name: productName,
            price: productPrice,
          },
        ]);

        setProductName("");
        setProductPrice("");

        alert("Product Added Successfully");
      });
  };

  const deleteProduct = (indexToDelete) => {
    fetch(`http://localhost:5000/products/${indexToDelete}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setProducts(
          products.filter(
            (_, index) => index !== indexToDelete
          )
        );
      });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Raj Enterprises Admin Dashboard</h1>

      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          marginBottom: "30px",
          maxWidth: "500px",
        }}
      >
        <h2>Update Mustard Oil Price</h2>

        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button onClick={savePrice}>
          Save Price
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          maxWidth: "500px",
        }}
      >
        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <button onClick={addProduct}>
          Add Product
        </button>

        <h3 style={{ marginTop: "20px" }}>
          Added Products
        </h3>

        {products.map((item, index) => (
          <div
            key={index}
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <strong>{item.name}</strong> - ₹{item.price}

            <button
              onClick={() => deleteProduct(index)}
              style={{
                marginLeft: "10px",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
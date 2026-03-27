"use client";

import { useState } from "react";

export default function UploadPage() {
  const [form, setForm] = useState({
    category: "",
    heading: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const res = await fetch(
        "https://c6zmgm327l.execute-api.ap-south-1.amazonaws.com/news/news",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: form.category,
            heading: form.heading,
            description: form.description,
            image: form.image,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to upload");
      }

      setMessage("✅ Upload successful!");
      setForm({
        category: "",
        heading: "",
        description: "",
        image: "",
      });
    } catch (err) {
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Upload News</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={form.heading}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          style={styles.textarea}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {loading && <div style={styles.loader}></div>}

      {message && <p style={styles.success}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    minHeight: "100px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  loader: {
    margin: "20px auto",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #0070f3",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    animation: "spin 1s linear infinite",
  },
  success: {
    color: "green",
    marginTop: "15px",
  },
  error: {
    color: "red",
    marginTop: "15px",
  },
};
"use client";

import { useEffect } from "react";

export default function NewsCard({ item }) {
  useEffect(() => {
    localStorage.setItem("lastSeenTime", item.time);
  }, [item.time]);

  return (
    <div
       style={{
        height: "100vh",              // ✅ full screen
        width: "100%",
        scrollSnapAlign: "start",     // ✅ snap point
        position: "relative",
        overflow: "hidden",           // ✅ prevents overflow issues
      }}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt=""
        style={{
          position: "absolute",
          width: "110%",
          height: "100%",
          objectFit: "cover",
          animation: "move 12s infinite alternate",
        }}
      />

      {/* Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          padding: 20,
        }}
      >
        <h1>{item.heading}</h1>
        <p>{item.description}</p>
      </div>

      <style jsx>{`
        @keyframes move {
          from {
            transform: translateX(-30px) scale(1.1);
          }
          to {
            transform: translateX(30px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
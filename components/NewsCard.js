// "use client";

// import { useEffect } from "react";

// export default function NewsCard({ item }) {
//   useEffect(() => {
//     localStorage.setItem("lastSeenTime", item.time);
//   }, [item.time]);

//   return (
//     <div
//        style={{
//         height: "100vh",              // ✅ full screen
//         width: "100%",
//         scrollSnapAlign: "start",     // ✅ snap point
//         position: "relative",
//         overflow: "hidden",           // ✅ prevents overflow issues
//       }}
//     >
//       {/* Background Image */}
//       <img
//         src={item.image}
//         alt=""
//         style={{
//           position: "absolute",
//           width: "110%",
//           height: "100%",
//           objectFit: "cover",
//           animation: "move 12s infinite alternate",
//         }}
//       />

//       {/* Gradient */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
//         }}
//       />

//       {/* Content */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: 40,
//           padding: 20,
//         }}
//       >
//         <h1>{item.heading}</h1>
//         <p>{item.description}</p>
//       </div>

//       <style jsx>{`
//         @keyframes move {
//           from {
//             transform: translateX(-30px) scale(1.1);
//           }
//           to {
//             transform: translateX(30px) scale(1.1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";

export default function NewsCard({ item }) {
  useEffect(() => {
    localStorage.setItem("lastSeenTime", item.time);
  }, [item.time]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        scrollSnapAlign: "start",
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: "#fff",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        news.
      </h1>

      {/* Card */}
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          height: "70vh",
          borderRadius: "25px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* Image */}
        <img
          src={item.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            right: "20px",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            {item.heading}
          </h2>

          <p
            style={{
              fontSize: "14px",
              color: "#ccc",
              lineHeight: "1.5",
              marginBottom: "10px",
            }}
          >
            {item.description}
          </p>

          <span
            style={{
              fontSize: "12px",
              color: "#aaa",
            }}
          >
            Few hours ago
          </span>
        </div>

        {/* Icons */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            display: "flex",
            gap: "15px",
            color: "#fff",
            fontSize: "18px",
          }}
        >
          <span>🔖</span>
          <span>🔗</span>
        </div>
      </div>

      {/* Bottom Hint */}
      <p
        style={{
          color: "#666",
          fontSize: "12px",
          marginTop: "20px",
          letterSpacing: "1px",
        }}
      >
        SWIPE UP TO READ THE NEXT NEWS
      </p>
    </div>
  );
}
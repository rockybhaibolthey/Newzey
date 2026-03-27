export default function FactCard({ item }) {
  const openLink = () => {
    window.open(item.heading, "_blank");
  };

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        scrollSnapAlign: "start",
      }}
    >
      <img
        src={item.image}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Bottom Panel */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: "white",
          padding: 20,
          borderTopLeftRadius: 20,
          paddingBottom: "100px",
          borderTopRightRadius: 20,
        }}
      >
        <h3>{item.category}</h3>
        <p>{item.description}</p>

        <button
          onClick={openLink}
          style={{
            background: "green",
            color: "white",
            padding: "10px 20px",
            borderRadius: 10,
            border: "none",
          }}
        >
          Go
        </button>
      </div>
    </div>
  );
}
export function Navabar() {
    return (
      <>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "1rem",
            margin: "0 auto",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", margin: "0", color: "#333" }}>ReactAuth</h1>
          <h1 style={{ fontSize: "1.5rem", margin: "0", color: "#333" }}>My Product</h1>
          <h1 style={{ fontSize: "1.5rem", margin: "0", color: "#333" }}>MySales</h1>
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </>
    );
  }
  
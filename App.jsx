import { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${userName} Hoş Geldiniz,
         ${password} olan şifreniz doğru `);
    setPassword("");
    setUserName("");
  };

  return (
    <div style={{ display: "flex", height: "400px" }}>
      {/* Sol taraf - Login Form */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "350px",
          }}
        >
          <h1
            style={{
              fontSize: 50,
              fontWeight: 700,
              textTransform: "uppercase",
              color: "transparent",
              WebkitTextStroke: "2px red",
              textAlign: "left",
            }}
          >
            LOGIN
          </h1>
          <input
            type="text"
            placeholder="Username"
            style={{
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              padding: "12px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            LOGIN
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <span>Forgot password</span>
            <span>Register</span>
          </div>
        </form>
      </div>

      {/* Sağ taraf - Skewed Red Background + Burger */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {/* Eğik kırmızı arka plan */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "150px",
            width: "160%",
            height: "100%",
            backgroundColor: "red",
            transform: "skewX(-30deg)",
          }}
        />
        {/* Resim merkezi */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/image%202.png"
            alt="Burger"
            style={{ width: "280px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

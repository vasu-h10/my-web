import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="app-layout" style={styles.container}>
      <Header />

      <main style={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: "1rem",
  },
};

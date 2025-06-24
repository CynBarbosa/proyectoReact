import { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";

let yaPidioNombre = false;
function App() {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (!yaPidioNombre) {
      const nombreUsuario = prompt("Ingrese su nombre");
      setNombre(nombreUsuario);
      yaPidioNombre = true;
    }
  }, []);
  return (
    <>
      <Header />
      <Main name={nombre} />
      <Footer />
    </>
  );
}

export default App;

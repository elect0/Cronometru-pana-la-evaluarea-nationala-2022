import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="ct">
      <h1 className="display-4">Numaratoarea inversa pana la:</h1>
      <div className="text-center mb-5">
        <Link className="d-block" to="/limba-romana">
          Limba si literatura romana.
        </Link>
        <Link className="d-block" to="/matematica">
          Matematica
        </Link>
        <Link className="d-block" to="/rezultate">
          Rezultate.
        </Link>
      </div>
    </div>
  );
}

export default Home;

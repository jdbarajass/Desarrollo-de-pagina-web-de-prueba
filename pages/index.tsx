import type { NextPage } from "next";
import React from "react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <p>Página de Index</p>
      <Link href="/ciencias">
        <a className="cursor-pointer">Ir a admin página ciencias</a>
      </Link>
      <Link href="/Login">
        <a className="cursor-pointer">Ir a aLogin</a>
      </Link>
      <Link href="/Navbar">
        <a className="cursor-pointer">Ir Navbar</a>
      </Link>
    </div>
  );
};

export default Home;

// Home: NextPage; = quiere decir que es una variable de tipo NextPage, entonces esta es la diferencia de trabajar con typescript y javascript ya que asi se declaran las variables en typescript porque con typescript defino el tipo de cada una de mis variables

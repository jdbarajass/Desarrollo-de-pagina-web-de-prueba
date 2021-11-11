import type { NextPage } from "next";
import React from "react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-green-500 flex flex-col justify-center">
      <p>Página de Index</p>
      <Link href="/ciencias">
        <a className="cursor-pointer">Ir a admin página ciencias</a>
      </Link>
      <Link href="login">
        <a className="cursor-pointer">Ir a Login</a>
      </Link>
      <Link href="/navbar">
        <a className="cursor-pointer">Ir Navbar</a>
      </Link>
      <Link href="/prueba">
        <a className="cursor-pointer">Ir Pruebas 1</a>
      </Link>
      <Link href="/admin/Diseno3D">
        <a className="cursor-pointer">Ir Diseno3D</a>
      </Link>
    </div>
  );
};

export default Home;

// Home: NextPage; = quiere decir que es una variable de tipo NextPage, entonces esta es la diferencia de trabajar con typescript y javascript ya que asi se declaran las variables en typescript porque con typescript defino el tipo de cada una de mis variables

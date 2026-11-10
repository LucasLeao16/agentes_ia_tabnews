"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Confete() {
  const [tamanho, setTamanho] = useState(null);

  useEffect(() => {
    function atualizar() {
      setTamanho({ largura: window.innerWidth, altura: window.innerHeight });
    }

    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, []);

  if (!tamanho) return null;

  return (
    <Confetti
      width={tamanho.largura}
      height={tamanho.altura}
      recycle={false}
      numberOfPieces={400}
      style={{ position: "fixed", inset: 0, pointerEvents: "none" }}
    />
  );
}

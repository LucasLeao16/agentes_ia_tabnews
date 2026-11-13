import { prefetchDNS } from "react-dom";
import Confete from "./Confete";

async function buscarTotalDeConteudos() {
  try {
    const resposta = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1",
      { next: { revalidate: 60 } },
    );

    if (!resposta.ok) return null;

    const cabecalho = resposta.headers.get("x-pagination-total-rows");
    if (cabecalho === null) return null;

    const total = Number(cabecalho);
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

async function TotalDeConteudos() {
  const total = await buscarTotalDeConteudos();

  return (
    <p className="total">
      {total !== null
        ? `${total.toLocaleString("pt-BR")} conteúdos publicados no TabNews`
        : "Não foi possível carregar o total de conteúdos publicados no TabNews"}
    </p>
  );
}

export default function Home() {
  prefetchDNS("https://www.tabnews.com.br");

  return (
    <main className="em-construcao">
      <Confete />
      <h1>Em Construção</h1>
      <p>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto.
      </p>
      <TotalDeConteudos />
      <a href="https://www.tabnews.com.br">Acesse o TabNews oficial</a>
    </main>
  );
}

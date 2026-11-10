import Confete from "./Confete";

async function buscarTotalDeConteudos() {
  try {
    const resposta = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1",
      { cache: "no-store" },
    );

    if (!resposta.ok) return null;

    const total = Number(resposta.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const total = await buscarTotalDeConteudos();

  return (
    <main className="em-construcao">
      <Confete />
      <h1>Em Construção</h1>
      <p>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto.
      </p>
      <p className="total">
        {total !== null
          ? `${total.toLocaleString("pt-BR")} conteúdos publicados no TabNews`
          : "Não foi possível carregar o total de conteúdos publicados no TabNews"}
      </p>
      <a href="https://www.tabnews.com.br">Acesse o TabNews oficial</a>
    </main>
  );
}

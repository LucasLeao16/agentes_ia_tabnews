const nomes = ["Lucas Leao", "Nicola Tesla", "Kyle Rayner", "Matt Murdock"];

export default function Home() {
  return (
    <ul>
      {nomes.map((nome) => (
        <li key={nome}>{nome}</li>
      ))}
    </ul>
  );
}

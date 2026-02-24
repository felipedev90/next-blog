import artigos from "@/data/artigos.json";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {artigos.map((artigo) => (
        <Link href={`/artigos/${artigo.slug}`} key={artigo.slug}>
          <div>
            <h2>{artigo.titulo}</h2>
            <span>{artigo.autor}</span>
            <data>{artigo.dataPublicacao}</data>
            <p>{artigo.descricao}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

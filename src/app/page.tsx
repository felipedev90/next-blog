import artigos from "@/data/artigos.json";
import { formatarDataPtBr } from "@/utils/dataFormatter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Nosso últimos artigos</h1>

      {artigos.map((artigo) => (
        <div key={artigo.slug}>
          <div>
            <h2>{artigo.titulo}</h2>
            <span>{artigo.autor}</span>
            <data>{formatarDataPtBr(artigo.dataPublicacao)}</data>
            <p>{artigo.descricao}</p>
          </div>
          <div>
            <Link href={`/artigos/${artigo.slug}`}>Ler mais</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

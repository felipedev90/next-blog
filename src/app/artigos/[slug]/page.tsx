import artigos from "@/data/artigos.json";
import Link from "next/link";
import { formatarDataPtBr } from "@/utils/dataFormatter";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((artigo) => artigo.slug === slug);

  if (!artigo) {
    notFound();
  }

  return (
    <div>
      <h2>{artigo.titulo}</h2>
      <span>{artigo.autor}</span>
      <data>{formatarDataPtBr(artigo.dataPublicacao)}</data>
      <p className="whitespace-pre-line">{artigo.conteudo}</p>
      <Link href="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
}

import artigos from "@/data/artigos.json";
import Link from "next/link";
import { formatarDataPtBr } from "@/utils/dataFormatter";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((artigo) => artigo.slug === slug);

  if (!artigo) {
    return { title: "Title not found", description: "Description not found" };
  }
  return { title: artigo.titulo, description: artigo.descricao };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((artigo) => artigo.slug === slug);

  if (!artigo) {
    notFound();
  }

  return (
    <div className="max-w-4xl min-h-10/12 flex justify-center content-center flex-col items-center m-8 px-0.5 py-2 md:m-auto md:mt-4 md:px-1 md:py-4">
      <div className="w-11/12 max-w-4xl flex justify-center flex-col gap-4 overflow-hidden">
        <h2 className="mb-2 text-lg font-bold text-emerald-600 md:mb-3 md:text-3xl">
          {artigo.titulo}
        </h2>
        <p className="whitespace-pre-line text-sm leading-relaxed text-gray-200  md:text-base">
          {artigo.conteudo}
        </p>
        <div className="mb-1 flex items-center gap-2 text-xs text-gray-300 px-2 py-6 md:text-sm">
          <span>{artigo.autor}</span>
          <span>·</span>
          <data>{formatarDataPtBr(artigo.dataPublicacao)}</data>
        </div>
        <Link href="/">
          <button className="rounded-full border border-emerald-800 px-4 py-1.5 text-xs text-emerald-400 transition-colors cursor-pointer hover:bg-emerald-800 hover:text-white md:px-5 md:text-sm">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}

import artigos from "@/data/artigos.json";
import { formatarDataPtBr } from "@/utils/dataFormatter";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative w-full h-[50vh] overflow-hidden md:h-screen">
        <Image
          src="/hero_img_1024p.webp"
          alt="Imagem de fundo do blog NextBlog"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-33 left-5 z-8  md:top-48 md:left-40">
          <div className="max-w-2xl flex gap-4">
            <span className="font-title text-3xl font-bold leading-tight tracking-wider md:text-5xl">
              {">Hello,"}
            </span>
            <span className="text-emerald-400 font-title text-3xl font-bold leading-tight tracking-wider md:text-5xl">
              world!_
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-8 font-text text-3xl font-extrabold tracking-wider md:text-5xl">
          Últimos artigos
        </h1>

        <div className="flex flex-col gap-6">
          {artigos.map((artigo, index) => (
            <div
              key={artigo.slug}
              className={`flex flex-col overflow-hidden border-b border-green-200 shadow-md pb-4 md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="relative aspect-video w-full md:aspect-auto md:w-2/5">
                <Image
                  src={artigo.imagem}
                  alt={artigo.titulo}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col justify-between p-5 md:w-3/5 md:p-6">
                <div>
                  <h2 className="mb-2 text-lg font-bold text-emerald-600 md:mb-3 md:text-xl">
                    {artigo.titulo}
                  </h2>

                  <p className="text-sm leading-relaxed text-gray-400 line-clamp-3 md:line-clamp-4">
                    {artigo.descricao}
                  </p>
                </div>

                <div className="mb-1 flex items-center gap-2 text-xs text-gray-300">
                  <span>Por: {artigo.autor}</span>
                  <span>·</span>
                  <data>{formatarDataPtBr(artigo.dataPublicacao)}</data>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={`/artigos/${artigo.slug}`}
                    className="rounded-full border border-emerald-800 px-4 py-1.5 text-xs text-emerald-400 transition-colors hover:bg-emerald-800 hover:text-white md:px-5 md:text-sm"
                  >
                    Leia mais
                  </Link>

                  <div className="flex items-center gap-3 text-xs text-gray-400 md:gap-4 md:text-sm">
                    <a href="#" className="text-lg hover:text-red-700">
                      ♡
                    </a>
                    <span>Share</span>
                    <div className="flex gap-2">
                      <a href="#" className="hover:text-gray-600">
                        f
                      </a>
                      <a href="#" className="hover:text-gray-600">
                        𝕏
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

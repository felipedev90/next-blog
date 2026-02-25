import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className=" w-full bg-black text-white border-b border-white px-4 py-6 flex flex-col justify-center items-center gap-2">
        <Link href="/">
          <h1 className="font-title text-2xl md:text-5xl">NextBlog</h1>
        </Link>
        <p className="font-text text-xl md:text-2xl tracking-wider text-center font-semibold">
          Do estudo à prática: artigos sobre Frontend moderno com React e
          Next.js.
        </p>
      </div>
    </header>
  );
}

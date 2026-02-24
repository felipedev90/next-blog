import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <h1>NextBlog</h1>
        </Link>
        <p>
          Do estudo à prática: artigos sobre Frontend moderno com React e
          Next.js.
        </p>
      </div>
    </header>
  );
}

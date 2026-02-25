export default function Hero() {
  return (
    <section className="relative w-full h-[50vh] overflow-hidden md:h-screen">
      <picture>
        <source media="(max-width: 768px)" srcSet="/hero_img_1024p.webp" />
        <img
          src="/hero_img_1024p.webp"
          alt="NextBlog_Hero_img"
          className="w-full h-full object-cover block"
        />
      </picture>

      <div className="absolute top-33 left-5 z-8  md:top-48 md:left-40">
        <div className="max-w-2xl">
          <h1 className="font-title text-3xl font-bold leading-tight tracking-wider md:text-5xl">
            Hello, world!_
          </h1>
        </div>
      </div>
    </section>
  );
}

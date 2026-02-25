import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="border-t border-white text-white p-2 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center">
          <p>Desenvolvido por:</p>
          <span>Felipe Augusto</span>
        </div>
        <div className="flex flex-row gap-2 text-2xl lg:text-3xl">
          <a
            href="https://www.github.com/felipedev90"
            target="blank"
            aria-label="Github de Felipe Augusto"
            rel="noopener noreferrer"
            className="hover:opacity-80 hover:scale-110 text-red-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/felipesilva90"
            target="blank"
            aria-label="LinkedIn de Felipe Augusto"
            rel="noopener noreferrer"
            className="hover:opacity-80 hover:scale-110 text-red-700 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

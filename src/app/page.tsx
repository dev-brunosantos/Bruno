import { Menu } from "../components/Menu";
import { Habilidades } from "./_components/Habilidades";
import { Home } from "./_components/Home";
import { Projetos } from "./_components/Projetos";

export default function App() {
  return (
    <>
      <Menu />

      <main>
        <Home />
        <Habilidades />
        <Projetos />
      </main>

      <footer>
        <div className="flex items-center justify-center">
          <p>Desenvolvido por Bruno Santos</p>
        </div>
      </footer>
    </>
  );
}


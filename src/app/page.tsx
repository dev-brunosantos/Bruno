import { Menu } from "../components/Menu";
import { Habilidades } from "./_components/Habilidades";
import { Home } from "./_components/Home";

export default function App() {
  return (
    <>
      <Menu />

      <main>
        <Home />
        <Habilidades />
      </main>

      <footer></footer>
    </>
  );
}


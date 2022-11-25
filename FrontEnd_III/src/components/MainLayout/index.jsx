import { Link, Outlet } from "react-router-dom";
import "./style.scss";
export function MainLayout() {
  return (
    <div className=" main-layout-component">
      <header className="main-layout-component-header">
        <h1>Layout Principal</h1>

        <div className="menu">
          
          <Link to="/SegundaAula">
            <button>SegundaAula</button>
          </Link>
          <Link to="/TerceiraAula">
            <button>TerceiraAula</button>
          </Link>
          <Link to="/QQuartaAulaa">
            <button>QuartaAula</button>
          </Link>
          <Link to="/QuintaAula">
            <button>QuintaAula</button>
          </Link>
          <Link to="/SetimaAula">
            <button>SetimaAula</button>
          </Link>
          <Link to="/SetimaAulaCardProduto">
            <button>SetimaAulaCard</button>
          </Link>
          <Link to="/OitavaAula">
            <button>OitavaAula</button>
          </Link>
          <Link to="/DecimaAula">
            <button>DecimaAula</button>
          </Link>
          <Link to="/DecimaAula">
            <button>Decima Aula</button>
          </Link>
          <Link to="/DecimaQuintaAula">
            <button>DecimaQuintaAula</button>
          </Link>
        </div>
      </header>
      <main className="main-layout-component-main">
        <p>O Componente chegou</p>
      </main>
      <Outlet />
    </div>
  );
}

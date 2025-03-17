import Menu from "../../images/menu.svg";
import Share from "../../images/share.svg";
import './Header.style.scss'

export default function Header() {
  return (
    <header className="header">
      <button className="header__button">
        <Menu />
      </button>
      <button className="header__button">
        <Share />
      </button>
      <nav className="header__navigation">
        <ul className="nav-list">
          <li className="nav-list__element nav-list__element_active"><p>Просмотр</p></li>
          <li className="nav-list__element"><p>Управление</p></li>
        </ul>
      </nav>
    </header>
  );
}

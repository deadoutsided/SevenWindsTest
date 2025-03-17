import "./SideNavbar.style.scss";
import ArrowIcon from "../../images/arrowDown.svg";
import { listData, ListItem, ListItemProps } from "../NavbarListItem";
import { useCallback, useMemo } from "react";

export default function SideNavbar() {

    const renderItems = useCallback((item: ListItemProps, i: number) => {
        return <ListItem title={item.title} selected={item.selected} key={i} />
    }, [])
    const itemsRendered = useMemo(() => {
        return listData.map((el, i) => renderItems(el, i))
    }, [listData])
  return (
    <nav className="side-navbar">
      <div className="select">
        <div className="select__text-wrapper">
          <p className="select__text_pos_top">Название проекта</p>
          <p className="select__text_pos_bottom">Аббревиатура</p>
        </div>
        <div className="select__arrow-icon-wrapper">
          <ArrowIcon />
        </div>
      </div>
      <div className="list-wrapper">
        <ul className="list">
            {itemsRendered}
        </ul>
      </div>
    </nav>
  );
}

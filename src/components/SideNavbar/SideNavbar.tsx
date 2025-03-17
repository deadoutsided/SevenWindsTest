import "./SideNavbar.style.scss";
import ArrowIcon from "../../images/arrowDown.svg";
import { listData, ListItem, ListItemProps } from "../ListItem";
import { useCallback, useMemo } from "react";

export default function SideNavbar() {

    const renderItems = useCallback((item: ListItemProps, i: number) => {
        return <ListItem title={item.title} selected={item.selected} key={i} />
    }, [])
    const itemsRendered = useMemo(() => {
        return listData.map((el, i) => renderItems(el, i))
    }, [listData])
  return (
    <nav className="SideNavbar">
      <div className="Select">
        <div className="Select__text-wrapper">
          <p className="Select__text_pos_top">Название проекта</p>
          <p className="Select__text_pos_bottom">Аббревиатура</p>
        </div>
        <div className="Select__arrow-icon-wrapper">
          <ArrowIcon />
        </div>
      </div>
      <div className="List-wrapper">
        <ul className="List">
            {itemsRendered}
        </ul>
      </div>
    </nav>
  );
}

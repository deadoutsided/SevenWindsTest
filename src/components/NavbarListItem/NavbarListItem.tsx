import "./NavbarListItem.style.scss";
import ListItemIcon from '../../images/ListItemIcon.svg'

export type ListItemProps = {
    title: string;
    selected: boolean;
}

export default function ListItem({title, selected} : ListItemProps) {
    return (
        <li className={"list-item" + " " + (selected ? "list-item_selected" : "")}>
            <ListItemIcon/>
            <p className="list-item__title">{title}</p>
        </li>
    )
}
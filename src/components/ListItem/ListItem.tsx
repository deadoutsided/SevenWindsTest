import "./ListItem.style.scss";
import ListItemIcon from '../../images/ListItemIcon.svg'

export type ListItemProps = {
    title: string;
    selected: boolean;
}

export default function ListItem({title, selected} : ListItemProps) {
    return (
        <li className={"ListItem" + " " + (selected ? "ListItem_selected" : "")}>
            <ListItemIcon/>
            <p className="ListItem__title">{title}</p>
        </li>
    )
}
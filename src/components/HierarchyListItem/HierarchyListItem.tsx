import "./HierarchyListItem.style.scss";
import FileIcon from '../../images/FileIcon.svg'
import LineVertical from '../../images/LineVertical.svg'
import LineHorizontal from '../../images/LineHorizontal.svg'

export type HierarchyListItemProps = {
  child: HierarchyListItemProps[] | null[];
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
};

export default function HierarchyListItem({
  item,
  level,
}: {
  item: HierarchyListItemProps;
  level: number;
}) {
  return (
    <div className="hierarchy-list-item">
      {/* <div className={`hierarchy-list-item__column `}>
        <button className={`hierarchy-list-item__add-button hierarchy-list-item__add-button_level_${level}`}>
            <FileIcon/>
            {item.child[0] !== null && <div className="line-wrapper line-wrapper_orientation_vertical"><LineVertical/></div>}
            {level !== 0 && <div className="line-wrapper line-wrapper_orientation_horizontal"><LineHorizontal/></div>}
        </button>
      </div> */}
      <p className="hierarchy-list-item__column hierarchy-list-item__row-name">{item.rowName}</p>
      <p className="hierarchy-list-item__column hierarchy-list-item__salary"> {item.salary} </p>
      <p className="hierarchy-list-item__column hierarchy-list-item__equipment-costs">
        {item.equipmentCosts}
      </p>
      <p className="hierarchy-list-item__column hierarchy-list-item__overheads"> {item.overheads} </p>
      <p className="hierarchy-list-item__column hierarchy-list-item__estimated-profit">
        {item.estimatedProfit}
      </p>
    </div>
  );
}

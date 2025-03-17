import { HierarchyListControls } from "../HierarchyListControls";
import { HierarchyListItem } from "../HierarchyListItem";
import "./HierarchyList.style.scss";

/* export type HierarchyListProps = {
    title: string;
    selected: boolean;
} */

export default function HierarchyList() {
  return (
    <section className="hierarchy-list">
      <div className="section-header">
        <div className="section-header__element-wrapper">
          <h4 className="section-header__title">
            Строительно-монтажные работы
          </h4>
        </div>
      </div>
      <div className="hierarchy-list__header">
        <p className="hierarchy-list__column-text">Уровень</p>
        <p className="hierarchy-list__column-text">Наименование работ</p>
        <p className="hierarchy-list__column-text">Основная з/п</p>
        <p className="hierarchy-list__column-text">Оборудование</p>
        <p className="hierarchy-list__column-text">Накладные расходы</p>
        <p className="hierarchy-list__column-text">Сметная прибыль</p>
      </div>
      <div className="hierarchy-list__table">
        <HierarchyListControls
          item={{
            child: [
              {
                child: [null],
                rowName: "name1",
                salary: 1000,
                equipmentCosts: 2000,
                overheads: 2500,
                estimatedProfit: 3000,
              },
            ],
            rowName: "name",
            salary: 1000,
            equipmentCosts: 2000,
            overheads: 2500,
            estimatedProfit: 3000,
          }}
          level={0}
        />
        <div className="hierarchy-list__items-container">
          <HierarchyListItem
            item={{
              child: [
                {
                  child: [null],
                  rowName: "name1",
                  salary: 1000,
                  equipmentCosts: 2000,
                  overheads: 2500,
                  estimatedProfit: 3000,
                },
              ],
              rowName: "name",
              salary: 1000,
              equipmentCosts: 2000,
              overheads: 2500,
              estimatedProfit: 3000,
            }}
            level={0}
          />
          <HierarchyListItem
            item={{
              child: [null],
              rowName: "name1",
              salary: 1000,
              equipmentCosts: 2000,
              overheads: 2500,
              estimatedProfit: 3000,
            }}
            level={8}
          />
        </div>
      </div>
    </section>
  );
}

import "./HierarchyListControls.style.scss";
import FileIcon from "../../images/FileIcon.svg";
import TrashIcon from "../../images/TrashFill.svg";
import LineVertical from "../../images/LineVertical.svg";
import LineHorizontal from "../../images/LineHorizontal.svg";
import { HierarchyListItemProps } from "../HierarchyListItem/HierarchyListItem";
import { useCallback, useMemo, useRef, useState } from "react";

export default function HierarchyListControls({
  item,
  level,
}: {
  item: HierarchyListItemProps;
  level: number;
}) {
  const [columnScrollWidth, setColumnScrollWidth] = useState(0);

  const scrollWidthRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setColumnScrollWidth(node.scrollWidth);
    }
  }, []);
  return (
    <div className="hierarchy-list-controls">
      <div ref={scrollWidthRef} className={`hierarchy-list-controls__column `}>
        <div
          className={`hierarchy-element hierarchy-element_level_${level}`}
          style={{ width: columnScrollWidth }}
        >
          <div className="hierarchy-button-wrapper">
            <div className="hierarchy-button-wrapper__hover-elem">
              <button className="hierarchy-button-wrapper__button">
                <FileIcon />
              </button>
              <button className="hierarchy-button-wrapper__button">
                <TrashIcon />
              </button>
            </div>
            {item.child[0] !== null && (
              <div className="line-wrapper line-wrapper_orientation_vertical">
                <LineVertical />
              </div>
            )}
            {level !== 0 && (
              <div className="line-wrapper line-wrapper_orientation_horizontal">
                <LineHorizontal />
              </div>
            )}
          </div>
        </div>
        <div
          className={`hierarchy-element hierarchy-element_level_${level + 1}`}
          style={{ width: columnScrollWidth }}
        >
          <div className="hierarchy-button-wrapper">
            <div className="hierarchy-button-wrapper__hover-elem">
              <button className="hierarchy-button-wrapper__button">
                <FileIcon />
              </button>
              <button className="hierarchy-button-wrapper__button">
                <TrashIcon />
              </button>
            </div>
            {true && (
              <div className="line-wrapper line-wrapper_orientation_vertical">
                <LineVertical />
              </div>
            )}
            {level + 1 !== 0 && (
              <div className="line-wrapper line-wrapper_orientation_horizontal">
                <LineHorizontal />
              </div>
            )}
          </div>
        </div>
        <div
          className={`hierarchy-element hierarchy-element_level_${level + 2}`}
          style={{ width: columnScrollWidth }}
        >
          <div className="hierarchy-button-wrapper">
            <div className="hierarchy-button-wrapper__hover-elem">
              <button className="hierarchy-button-wrapper__button">
                <FileIcon />
              </button>
              <button className="hierarchy-button-wrapper__button">
                <TrashIcon />
              </button>
            </div>
          {true && (
            <div className="line-wrapper line-wrapper_orientation_vertical">
              <LineVertical />
            </div>
          )}
          {level + 2 !== 0 && (
            <div className="line-wrapper line-wrapper_orientation_horizontal">
              <LineHorizontal />
            </div>
          )}
          </div>
        </div>
        <div
          className={`hierarchy-element hierarchy-element_level_${level + 3}`}
          /* style={{ width: columnScrollWidth }} */
        >
          <div className="hierarchy-button-wrapper">
            <div className="hierarchy-button-wrapper__hover-elem">
              <button className="hierarchy-button-wrapper__button">
                <FileIcon />
              </button>
              <button className="hierarchy-button-wrapper__button">
                <TrashIcon />
              </button>
            </div>
          {false && (
            <div className="line-wrapper line-wrapper_orientation_vertical">
              <LineVertical />
            </div>
          )}
          {level + 3 !== 0 && (
            <div className="line-wrapper line-wrapper_orientation_horizontal">
              <LineHorizontal />
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

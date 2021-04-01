import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import { statuses } from "../data/numbClasses";

const DropWrapper = ({ onDrop, children, status }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const destiStatus = statuses.filter(si => si.status === item.title);

            const desti = statuses.filter(si => si.status === status)

//             console.log(destiStatus, "nope", desti[0].status)
            
            if (desti[0].status === item.title) {
                return true
            } else {
                return false
            }

        },
        drop: (item, monitor) => {
            //Sets the new items state since mouse release
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div ref={drop} className={"drop-wrapper"}>
        <p className={"color-bar"} style={{ backgroundColor: status.color }}/>
        
            {React.cloneElement(children, { isOver })}
        </div>
    )
};

export default DropWrapper;

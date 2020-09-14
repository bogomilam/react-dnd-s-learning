import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import { statuses } from "../data/numbClasses";

const DropWrapper = ({ onDrop, children, status }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            //status indx
            // const itemIndex = statuses.findIndex(si => si.status === item.status);
            // const statusIndex = statuses.findIndex(si => si.status === status);
            // console.log(statusIndex)
            // return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
            
            // gives back the correct status title object of the item
            const itemTrueStatus = statuses.filter(st => st.status === item.title)
            // console.log(itemTrueStatus)
            
            // gives back the status index of the item title
            const statusIndex = statuses.findIndex(si => si.status === status);
            console.log(statusIndex)
            
            return itemTrueStatus
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
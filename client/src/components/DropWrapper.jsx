import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import { statuses } from "../data/numbClasses";

const DropWrapper = ({ onDrop, children, status }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            // indx of the items inital status pre drop
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            // object of destined status
            const destiStatus = statuses.filter(si => si.status === item.title);

            //index of the items post drop status
            // const status = statuses.findIndex(si => si.status === status)
            const desti = statuses.filter(si => si.status === status)

            // const IndexI = statuses.filter(s => s.status === item.status);
            // const statusIndex = statuses.findIndex(si => si.status === item.);
            //destination status of item
            // console.log(destiStatus[0].status , "yo")
            console.log(destiStatus, "nope", desti[0].status)
            
            // if (item.title === )
            if (desti[0].status === item.title) {
                return true
            } else {
                return false
            }

            // return [itemIndex + 1, itemIndex - 1, itemIndex].includes(status);

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
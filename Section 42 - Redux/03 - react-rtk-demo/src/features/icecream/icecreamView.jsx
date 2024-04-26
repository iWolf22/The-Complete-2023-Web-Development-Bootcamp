import React from "react";
import { ordered, restocked } from "./icecreamSlice";
import { useSelector, useDispatch } from "react-redux";

export const IcecreamView = () => {

    const [value, setValue] = React.useState(1)
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of ice cream - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
        </div>
    )
}
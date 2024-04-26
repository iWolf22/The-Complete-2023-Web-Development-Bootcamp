"use client";

import { useState } from "react";

export default function Dashboard() {
    const [ input, setInput ] = useState("");

    return (
        <div>
            <h1>{input}</h1>
            <input onChange={(e) => setInput(e.target.value)}></input>
        </div>
    )
}
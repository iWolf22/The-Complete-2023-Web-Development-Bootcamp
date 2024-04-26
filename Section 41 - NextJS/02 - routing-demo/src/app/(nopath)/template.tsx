"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLinks = [
    { name: "Page1", href: "/page1" },
    { name: "Page2", href: "/page2" },
    { name: "Page3", href: "/page3" }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const [input, setInput] = useState("");

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)}></input>
            {navLinks.map((element, index) => {
                const isActive = pathname.startsWith(element.href);
                return (<Link className={isActive ? "font-bold" : "text-blue-500"} key={index} href={element.href} style={{padding: "10px"}}>{element.name}</Link>)
            })}
            {children}
        </div>
    )
}

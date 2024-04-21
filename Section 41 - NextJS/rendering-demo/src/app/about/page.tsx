import { cookies } from "next/headers";

export default function AboutPage() {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);
    console.log("Server Component");
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}
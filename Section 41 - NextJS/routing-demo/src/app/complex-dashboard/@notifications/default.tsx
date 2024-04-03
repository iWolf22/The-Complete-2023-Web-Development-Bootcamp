import Link from "next/link";

export default function DefaultNotifications() {
    return (
        <div>
            <h1>Notifications Dashboard</h1>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </div>
    );
}
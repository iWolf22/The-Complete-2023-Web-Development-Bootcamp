// import UserAnalytics from "@/components/UserAnalytics";
// import RevenueMetrics from "@/components/RevenueMetrics";
// import Notifications from "@/components/Notifications";


export default function DashboardLayout(
    {children, users, revenue, notifications} :
    {children: React. ReactNode, users: React. ReactNode, revenue: React. ReactNode, notifications: React. ReactNode}) {
    return (
        <div>
            {children}
            {notifications}
            {revenue}
            {users}
        </div>
    )
}
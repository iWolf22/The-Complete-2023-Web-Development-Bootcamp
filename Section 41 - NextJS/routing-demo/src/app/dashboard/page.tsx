import LineChart from "@/components/line-chart";

function BarChart() {
    return <h1>Line Chart</h1>;
}

export default function Dashboard() {
    return (
    <div>
        <h1>Dashboard</h1>
        <BarChart />
        <LineChart />
    </div>);
}
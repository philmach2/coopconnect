import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Co-Op Dashboard</h1>
      <Link href="/dashboard/bylaws">Bylaws</Link>
      <Link href="/dashboard/financial">Financial</Link>
      <Link href="/dashboard/houseRules">House Rules</Link>
      <Link href="/dashboard/lease">Lease</Link>
      <Link href="/dashboard/meetingMinutes">Meeting Minutes</Link>
    </div>
  );
};

export default DashboardPage;

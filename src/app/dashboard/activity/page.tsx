import DashboardHeader from "@/components/DashboardHeader";
import ContributionGraph from "@/components/ContributionGraph";
import RecentActivity from "@/components/RecentActivity";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ActivityPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  if (session.error === "TokenRevoked") redirect("/");

  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Activity" 
        description="Browse your commit logs, event timeline, and daily summaries ⚡" 
      />

      {/* Annual Contribution Grid */}
      <ContributionGraph />

      {/* Activity Event Feed */}
      <RecentActivity />
    </div>
  );
}

import DashboardHeader from "@/components/DashboardHeader";
import GoalTracker from "@/components/GoalTracker";
import ActivityRingChart from "@/components/ActivityRingChart";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function GoalsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  if (session.error === "TokenRevoked") redirect("/");

  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Goals" 
        description="Set commit, PR, or time-based milestones and monitor your progress 🎯" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GoalTracker />
        </div>
        <div>
          <ActivityRingChart />
        </div>
      </div>
    </div>
  );
}

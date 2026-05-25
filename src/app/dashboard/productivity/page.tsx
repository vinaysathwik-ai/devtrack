import DashboardHeader from "@/components/DashboardHeader";
import { AIMentorWidget } from "@/components/AIMentorWidget";
import LocalCodingTime from "@/components/LocalCodingTime";
import PersonalRecords from "@/components/PersonalRecords";
import CodingActivityInsightsCard from "@/components/CodingActivityInsightsCard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProductivityPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  if (session.error === "TokenRevoked") redirect("/");

  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Productivity" 
        description="Optimize coding flows, consult the AI Mentor, and view achievements 🏆" 
      />

      {/* Row 1: AI mentor + Local Coding Time editor sync */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AIMentorWidget />
        </div>
        <div>
          <LocalCodingTime />
        </div>
      </div>

      {/* Row 2: Personal records & achievements milestones */}
      <PersonalRecords />

      {/* Row 3: Coding insights & patterns */}
      <CodingActivityInsightsCard />
    </div>
  );
}

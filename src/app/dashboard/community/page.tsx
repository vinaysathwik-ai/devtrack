import DashboardHeader from "@/components/DashboardHeader";
import FriendComparison from "@/components/FriendComparison";
import CommunityMetrics from "@/components/CommunityMetrics";
import DiscussionsWidget from "@/components/DiscussionsWidget";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function CommunityPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  if (session.error === "TokenRevoked") redirect("/");

  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Community" 
        description="Share stats, check rankings, and monitor discussions 🌐" 
      />

      {/* Row 1: Leaderboard/Friends Comparison + Repository Community metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FriendComparison />
        </div>
        <div>
          <CommunityMetrics />
        </div>
      </div>

      {/* Discussions Widget */}
      <DiscussionsWidget />
    </div>
  );
}

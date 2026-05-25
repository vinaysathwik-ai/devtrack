import DashboardHeader from "@/components/DashboardHeader";
import StreakTracker from "@/components/StreakTracker";
import PRMetrics from "@/components/PRMetrics";
import PRBreakdownChart from "@/components/PRBreakdownChart";
import CommitTimeChart from "@/components/CommitTimeChart";
import PRReviewTrendChart from "@/components/PRReviewTrendChart";
import CIAnalytics from "@/components/CIAnalytics";
import IssueMetrics from "@/components/IssueMetrics";
import CodingActivityInsightsCard from "@/components/CodingActivityInsightsCard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AnalyticsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  if (session.error === "TokenRevoked") redirect("/");

  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Analytics" 
        description="Deep dive into your pull requests, workflows, and commit schedules 📊" 
      />

      {/* Row 1: Coding Insights & Commit Streaks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CodingActivityInsightsCard />
        </div>
        <div>
          <StreakTracker />
        </div>
      </div>

      {/* Row 2: Pull Request Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PRMetrics />
        <PRBreakdownChart />
      </div>

      {/* Row 3: Commit and Review Time Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommitTimeChart />
        <PRReviewTrendChart />
      </div>

      {/* Row 4: Issues & Continuous Integration (Actions) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <IssueMetrics />
        </div>
        <CIAnalytics />
      </div>
    </div>
  );
}

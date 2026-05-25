import DashboardHeader from "@/components/DashboardHeader";
import TopRepos from "@/components/TopRepos";
import PinnedRepos from "@/components/PinnedRepos";
import ContributionHeatmap from "@/components/ContributionHeatmap";
import InactiveRepositoriesCard from "@/components/InactiveRepositoriesCard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RepositoriesPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  if (session.error === "TokenRevoked") redirect("/");

  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Repositories" 
        description="Monitor status, active branches, and codebases activity timelines 📦" 
      />

      {/* Pinned Repositories */}
      <PinnedRepos />

      {/* Grid: Top Repos & Inactivity reminders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopRepos />
        </div>
        <div>
          <InactiveRepositoriesCard />
        </div>
      </div>

      {/* Contribution Heatmap */}
      <ContributionHeatmap />
    </div>
  );
}

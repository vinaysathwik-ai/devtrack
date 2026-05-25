import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <Sidebar />
      <main className="flex-1 min-w-0 p-4 md:p-8 md:overflow-y-auto max-h-screen">
        {children}
      </main>
    </div>
  );
}

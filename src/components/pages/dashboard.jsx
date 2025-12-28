import { CTA } from "../sections/cta";
import { RecentlyAddedProducts } from "../sections/recently-added-products";
import { RecentActivity } from "../sections/recent-activity";
import { QuickActions } from "../sections/quick-actions";
import { StatSection } from "../sections/stat-section";

export const DashboardPage = () => {
  return (
    <>
      <CTA />
      <StatSection />
      <RecentlyAddedProducts />
      <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-2">
        <RecentActivity />
        <QuickActions />
      </div>
    </>
  );
};

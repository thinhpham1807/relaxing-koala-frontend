import { Suspense } from "react";
import { ProductsTab } from "@/components/products/tab";
import { TabsSkeleton } from "@/components/products/skeleton";

const Menu = () => {
  return (
    <div className="mx-3">
      <Suspense fallback={<TabsSkeleton />}>
        <ProductsTab />
      </Suspense>
    </div>
  );
};

export default Menu;

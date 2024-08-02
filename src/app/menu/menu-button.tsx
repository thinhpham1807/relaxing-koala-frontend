// components/MenuLink.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

export const MenuLink = () => {
  return (
    <Link href="/menu">
      <Button>
        <MenuIcon className="mr-2" />
        <p>Menu</p>
      </Button>
    </Link>
  );
};

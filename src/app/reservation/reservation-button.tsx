// components/MenuLink.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UtensilsCrossed  } from "lucide-react";

export const ReservationLink = () => {
  return (
    <Link href="/reservation">
      <Button>
        <UtensilsCrossed className="mr-2" />
        <p>Reservation</p>
      </Button>
    </Link>
  );
};

"use client";

import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "../ui/toast";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  product: Product;
};

export const ProductItem = ({ product }: Props) => {
  const { toast } = useToast();
  const { upsertCartItem } = useCartStore((state) => state);

  const handleAddButton = () => {
    upsertCartItem(product, 1);

    toast({
      title: "Item added to cart",
      description: product.name,
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">{product.name}</p>
        <p className="text-sm opacity-50">
          {new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
          }).format(product.price)}
        </p>
        <Button variant="outline" onClick={handleAddButton}>
          +
        </Button>
      </div>
    </div>
  );
};

import { Cart } from "@/types/cart";
import { CartItemQuantity } from "./item-quantity";

type Props = {
  item: Cart;
};

export const CartItem = ({ item }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden">
        <img
          className="w-full h-auto object-cover"
          src={item.product.image}
          alt={item.product.name}
        />
      </div>
      <div className="flex-1">
        <p className="text-md">{item.product.name}</p>
        <p className="text-xs opacity-50">
          {new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
          }).format(item.product.price)}
        </p>
      </div>
      <div>
        <CartItemQuantity cartItem={item} />
      </div>
    </div>
  );
};

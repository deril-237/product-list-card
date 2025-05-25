import { memo } from "react";

const Order = memo(({ name, price, image, quantity, removeProduct }) => {
  return (
    <div className="item flex flex-row justify-between pb-4 border-b">
      <div className="flex flex-col gap-2">
        <p className="capitalize font-medium text-md">{name}</p>
        <div className="flex flex-row gap-2">
          <span className="text-red text-base font-bold">{quantity}x</span>
          <span className="font-sans">@ ${price}</span>
          <span className="font-medium">${price * quantity}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button className="rounded-full border-2 p-1" onClick={removeProduct}>
          <img src="./assets/images/icon-remove-item.svg" alt="" className="w-3" />
        </button>
      </div>
    </div>
  );
})

export default Order; 
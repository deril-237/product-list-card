import { memo } from "react"

const Product = memo(({ name, category, price, image, quantity, incriment, decriment }) => {
  return (
    <div>
      <div className="relative">
        <div className={quantity !== 0 ? 'border-2 border-red rounded-xl' : ''}>
          <img src={image.mobile} alt={name} className='rounded-xl md:hidden' />
          <img src={image.desktop} alt={name} className='hidden lg:inline rounded-xl' />
          <img src={image.tablet} alt={name} className='hidden md:inline md:rounded-xl lg:hidden' />
        </div>
        <div className="absolute right-1/2 bottom-0 translate-x-1/2 translate-y-1/2">
          {quantity === 0 ?
            (<button className="flex flex-row text-base font-bold bg-white py-2 px-8 border-2 text-nowrap border-red rounded-full hover:text-red"
              onClick={incriment}>
              <img src="./assets/images/icon-add-to-cart.svg" alt="" />
              Add to card
            </button>
            ) :
            (
              <div className="bg-red text-white flex flex-row justify-around rounded-full gap-12 py-2 px-3">
                <button className="px-1 py-1 border-zinc-300 rounded-full border-2"
                  onClick={decriment}>
                  <img src="./assets/images/icon-decrement-quantity.svg" alt="" />
                </button>
                <p className="text-base">{quantity}</p>
                <button className="px-1 py-1 border-zinc-300 rounded-full border-2"
                  onClick={incriment}>
                  <img src="./assets/images/icon-increment-quantity.svg" alt="" />
                </button>
              </div>
            )}
        </div>
      </div>
      <div className="mt-9">
        <p className="text-base">{category}</p>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-lg font-bold text-red">{price}</p>
      </div>
    </div>
  )
});

export default Product; 
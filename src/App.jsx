import { useCallback, useState } from 'react';
import './index.css';
import { reducer, useProduct } from './hook';
import Product from './componens/Prdouct';
import Order from './componens/Oder';
import Modal from './componens/Modal';

function App() {

  const { products, total, ...dispatch } = useProduct();
  const [open, setOpen] = useState(false);
  const openModal = () => { setOpen(true) };
  const onCloseModal = () => { setOpen(false) };
  const startNewOrder = () => {
    dispatch.confirmOrder();
    onCloseModal();
  };

  const listProduct = [];
  const listOrders = [];
  const listOrdersThumbnails = [];

  products.forEach((product, index) => {
    listProduct.push(<Product {...product} key={index}
      incriment={() => { dispatch.incrimentProduct(index) }}
      decriment={() => { dispatch.decrimentProduct(index) }} />);
    if (product.quantity !== 0) {
      listOrders.push(<Order {...product} key={index}
        removeProduct={() => { dispatch.removeProduct(index) }} />)
      listOrdersThumbnails.push(
        <div key={index} className='gap-2 mb-2'>
          <div className='card-thumbnail flex justify-between gap-44'>
            <div className='flex gap-3'>
              <img src={product.image.thumbnail} alt="" className='rounded-md float-left md:w-16 md:h-16' />
              <div className='flex flex-col justify-between'>
                <p className='font-bold text-lg capitalize'>{product.name}</p>
                <p className='space-x-4'>
                  <span className='text-red text-lg font-bold'>{product.quantity}x</span>
                  <span className='text-base font-light'>@${product.price}</span>
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='text-base'>${product.price * product.quantity}</p>
            </div>
          </div>
          <hr className='mt-2' />
        </div>
      )
    }
  });

  return (
    <>
      {/* <!-- responsive --> */}
      {/* 
      <div className="fixed top-1 left-2 z-50">
        <span className="sm:hidden">XS</span>
        <span className="hidden sm:inline md:hidden">SM</span>
        <span className="hidden md:block lg:hidden">MD</span>
        <span className="hidden lg:block xl:hidden">LG</span>
        <span className="hidden xl:block">XL</span>
      </div>
      */}
      <button onClick={() => { console.log('ok sa marche ') }}>click me</button>
      <main className='bg-rose-100 flex flex-col justify-center gap-6 px-10 py-10 items-center min-h-screen w-full sm:flex-row sm:items-start sm:px-20'>
        {/* list product */}
        <div className="w-full flex flex-col gap-4 lg:w-4/5">
          <div className="w-full">
            {/* title */}
            <h1 className="text-3xl font-body">
              Dessert
            </h1>
          </div>
          <div className="flex flex-row flex-wrap gap-6 lg:grid lg:grid-cols-3 xl:grid-cols-4" id='list-menu'>
            {listProduct}
          </div>
        </div>
        {/* list oders */}
        <div id="list-order" className="w-full flex flex-col gap-4 bg-white rounded-sm p-4 sm:sticky sm:top-4 lg:w-2/5 lg:max-h-screen overflow-y-auto">
          {total === 0 ?
            (
              <div className='flex flex-col justify-center'>
                <img src="./assets/images/illustration-empty-cart.svg" alt="" />
                <p className='text-center text-rose-400 font-bold'>Your added items will appear here</p>
              </div>

            ) :
            (
              <>
                <p className="text-3xl font-bold capitalize text-red">your cart(7)</p>
                <div className="flex flex-col gap-4">
                  {listOrders}
                </div>
                <div className="w-full flex flex-row justify-between">
                  <p className="font-light text-lg">Order Total</p>
                  <p className="text-3xl font-bold">${total}</p>
                </div>
                <div className="flex justify-center bg-rose-50 text-lg py-2 rounded-md">
                  <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
                  This is a carbon-neutral delivery
                </div>
                <button className="rounded-full bg-red text-white p-4 capitalize text-base"
                  onClick={openModal}>confirm order</button>
              </>
            )}
        </div>
      </main>
      <Modal open={open} onClose={onCloseModal}>
        <div className='flex flex-col gap-6'>
          <div className=''>
            <img src="./assets/images/icon-order-confirmed.svg" alt="" className='mb-4' />
            <p className='font-bold text-3xl capitalize'>oder confirmed</p>
            <p className='text-rose-400 '>We hope you enjoy your food</p>
          </div>
          <div className='bg-rose-200 p-4 gap-2 rounded-sm'>
            {listOrdersThumbnails}
            <div className="flex justify-between">
              <p className="font-light capitalize text-base">oder total</p>
              <p>${total}</p>
            </div>
          </div>
          <button className="rounded-full w-full  bg-red text-white p-4 capitalize text-base"
            onClick={startNewOrder}>start new order</button>
        </div>
      </Modal>
    </>
  )
}

export default App;

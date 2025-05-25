import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose }) {
    return createPortal(
        <div className={open ? 'block' : 'hidden'}>
            <div className='opacity-50 flex justify-center items-center w-screen h-screen fixed left-0 top-0 bg-black z-20'>
            </div>
            <div className='w-full fixed left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/4 bg-white z-40 rounded-xl p-7 sm:w-auto'>
                <button className="rounded-md p-1 absolute right-4 top-4 hover:ring-rose-200 hover:ring-2" onClick={onClose}>
                    <img src="./assets/images/icon-remove-item.svg" alt="" className="w-5" />
                </button>
                {children}
            </div>
        </div>,
        document.body);
}
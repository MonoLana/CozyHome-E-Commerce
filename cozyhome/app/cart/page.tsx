'use client'
import React from "react";
import Navbar from "../components/Navbar";

const ShoppingCart: React.FC = () => {
  return (
    <div className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Item */}
            <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group">
              <div className="w-full md:max-w-[126px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  className="mx-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-2">
                  <div className="flex flex-col max-[500px]:items-center gap-3">
                    <h6 className="font-semibold text-base leading-7 text-black">Rose Petals Divine</h6>
                    <h6 className="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                    <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                  <div className="flex items-center h-full">
                    <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <svg
                        className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                      placeholder="1"
                    />
                    <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                      <svg
                        className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                  <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$120.00</p>
                </div>
              </div>
            </div>

            {/* Repeat the Product Item block for other items */}

            <div className="flex items-center justify-end mt-8">
              <button className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                Add Coupon Code
                <svg
                  className="transition-all duration-500 group-hover:translate-x-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                    stroke="#4F46E5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Order Summary
            </h2>
            <div className="mt-8">
              <div className="flex items-center justify-between pb-6">
                <p className="font-normal text-lg leading-8 text-black">3 Items</p>
                <p className="font-medium text-lg leading-8 text-black">$480.00</p>
              </div>
              <form>
                <label className="flex items-center mb-1.5 text-gray-600 text-sm font-medium">Shipping</label>
                <div className="flex pb-6">
                  <div className="relative w-full">
                    <div className="absolute left-0 top-0 py-3 px-4">
                      <span className="font-normal text-base text-gray-300">Second Delivery</span>
                    </div>
                    <input
                      type="text"
                      className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                      placeholder="$5.00"
                    />
                    <button
                      id="dropdown-button"
                      data-target="dropdown-delivery"
                      className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent rounded-r-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-0"
                      type="button"
                    >
                      <span className="inline-flex justify-center w-2">
                        <svg
                          className="transition-all duration-300 rotate-0"
                          strokeWidth="2"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M15.5 10.832L11 15.332L6.5 10.832"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="dropdown-menu dropdown-delivery hidden min-w-[226px] p-2 shadow-lg rounded-md mt-4 text-base font-normal text-gray-900 bg-white border border-gray-300 z-10">
                  <ul aria-labelledby="dropdown-button">
                    <li>
                      <a
                        href="#"
                        className="block py-3 px-4 text-base text-gray-900 hover:bg-gray-50 transition-all duration-300"
                      >
                        $5.00 - Standard Delivery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-3 px-4 text-base text-gray-900 hover:bg-gray-50 transition-all duration-300"
                      >
                        $10.00 - Next Day Delivery
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
              <div className="flex items-center justify-between pt-8 pb-8 border-b border-gray-300">
                <p className="font-normal text-lg leading-8 text-black">Discount</p>
                <p className="font-medium text-lg leading-8 text-black">-$10.00</p>
              </div>
              <div className="flex items-center justify-between pt-8 pb-8 border-b border-gray-300">
                <p className="font-normal text-lg leading-8 text-black">Subtotal</p>
                <p className="font-medium text-lg leading-8 text-black">$475.00</p>
              </div>
              <div className="flex items-center justify-between pt-8">
                <p className="font-semibold text-xl leading-8 text-black">Order Total</p>
                <p className="font-bold text-xl leading-8 text-black">$485.00</p>
              </div>
              <button
                type="button"
                className="mt-8 inline-flex items-center justify-center py-4 px-6 font-semibold text-base text-white bg-indigo-600 rounded-lg transition-all duration-300 shadow-sm hover:bg-indigo-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

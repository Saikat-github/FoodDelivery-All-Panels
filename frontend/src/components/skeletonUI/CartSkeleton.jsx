import React from 'react'

const CartSkeleton = () => {
  return (
    <div>
  <div className="grid grid-cols-5 sm:grid-cols-6 items-center my-2 gap-2 animate-pulse">

    {/* Image */}
    <div className="hidden sm:block w-16 h-16 bg-gray-300 rounded-md" />

    {/* Name */}
    <div className="h-3 sm:h-4 w-24 sm:w-40 bg-gray-300 rounded" />

    {/* Price */}
    <div className="h-3 sm:h-4 w-12 sm:w-16 bg-gray-300 rounded" />

    {/* Quantity */}
    <div className="h-3 sm:h-4 w-8 sm:w-12 bg-gray-300 rounded" />

    {/* Total */}
    <div className="h-3 sm:h-4 w-14 sm:w-20 bg-gray-300 rounded" />

    {/* Remove */}
    <div className="h-4 w-4 bg-gray-300 rounded-full mx-auto" />

  </div>
  <hr />
</div>

  )
}

export default CartSkeleton
import React from 'react'

const OrderSkeleton = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 border-2 border-b-0 items-center max-sm:text-sm gap-2 p-1 animate-pulse">

            {/* Date + Icon */}
            <div className="space-y-3">
                <div className="w-12 h-12 bg-gray-300 rounded-md" />
                <div className="h-3 w-20 bg-gray-300 rounded" />
            </div>

            {/* Items */}
            <div className="space-y-2 pr-4">
                <div className="h-3 w-full bg-gray-300 rounded" />
                <div className="h-3 w-3/4 bg-gray-300 rounded" />
            </div>

            {/* Amount + Payment */}
            <div className="space-y-2 text-center">
                <div className="h-3 w-16 mx-auto bg-gray-300 rounded" />
                <div className="h-3 w-24 mx-auto bg-gray-300 rounded" />
            </div>

            {/* Items Count */}
            <div className="h-3 w-16 bg-gray-300 rounded mx-auto" />

            {/* Status */}
            <div className="h-3 w-20 bg-gray-300 rounded mx-auto" />

            {/* Button */}
            <div className="flex justify-center">
                <div className="h-8 w-24 bg-gray-300 rounded-sm" />
            </div>
        </div>

    )
}

export default OrderSkeleton
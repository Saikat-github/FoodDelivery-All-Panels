import FoodItem from '../fooditems/FoodItem'
import { useSelector } from 'react-redux'



const FoodDisplay = ({ category }) => {
  const foodList = useSelector((state) => state.foodList);

  return (
    <div className='food-display mt-8 ' id='food-display'>
      <h1 className='text-2xl pb-4 font-semibold'>Top Dishes Near You</h1>
      <div className="food-display-list flex flex-wrap gap-6 justify-center items-center">
        {foodList?.length > 0
          ?
          foodList?.map((item, idx) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem key={idx} item={item} />
              )
            }
          }
          )
          :
          <p className='text-center text-xl px-4 py-1 border-2 border-red-600/50 rounded-full animate-pulse shadow-xl shadow-black/[0.20] max-sm:text-sm'>No items available, server may be down, please wait...</p>}
      </div>
    </div>
  )
}

export default FoodDisplay
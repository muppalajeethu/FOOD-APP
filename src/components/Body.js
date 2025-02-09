import Restaurant from "./Restaurant";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [ListofRestarurant, setListofRestarurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = ListofRestarurant.filter(
              (res) => res?.info?.avgRating > 4 
            );
            setListofRestarurant(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListofRestarurant.map((restaurant) => (
          <Restaurant key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

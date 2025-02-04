import { CDN_URL } from "../utils/Constants";

const Restaurant = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime } = {},
    cloudinaryImageId,
  } = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name || "Restaurant Name Not Available"}</h3>
      <h4>{cuisines?.join(", ") || "Cuisines not available"}</h4>
      <h4>{avgRating ? `${avgRating} Stars` : "No ratings yet"}</h4>
      <h4>{costForTwo || "Cost information not available"}</h4>
      <h4>
        {deliveryTime
          ? `${deliveryTime} minutes`
          : "Delivery time not available"}
      </h4>
    </div>
  );
};
export default Restaurant;

import { IMAGE_URL } from "../utils/constants";
import star from "../../Images/star.png";

const Restaurant = (props) => {

    const { restaurantList } = props;

    const { name, avgRating,  cuisines, cloudinaryImageId, deliveryTime } = restaurantList.info;

    return (
        <div className="restaurant-card">
            <img className="restaurant-img" 
                 src={IMAGE_URL+cloudinaryImageId}
                 alt="food-item"/>
            <div id="restaurant-details">
                <h4>{ name }</h4>
                <div className="rating-and-delivery-time">
                    <img className="star" src={star} alt="star"/>
                    <h4 className="rate">{avgRating} . {deliveryTime} minutes</h4>
                </div>
                <h4>{cuisines.join(", ")}</h4>
            </div>
        </div>
    )
}

export default Restaurant;
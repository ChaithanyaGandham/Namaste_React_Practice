import foodItem from "../../Images/food-logo.png";
import samosa from "../../Images/samosa.png";
import burger from "../../Images/burger.png";
import { restaurants } from "../utils/mockData";
import { useState } from "react";
import Restaurant from "./Restaurant";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

    const filteredList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.2);

    return (
        <div className="body">
            <div className="body-header">
                <div className="header-text">
                    <h3>Order food online!</h3>
                </div>
                <div className="food-logo">
                    <img className="food-item" src={foodItem} alt="all-dishes"/>
                    <img className="food-item" src={samosa} alt="samosa"/>
                    <img className="food-item" src={burger} alt="burger"/>
                </div>
            </div>
            <div className="top-restaurants">
                <h2>Top rated Restaurants!</h2>
                <div className="restaurant-container">
                    {
                        filteredList.map((restaurant) => <Restaurant key={restaurant.info.id} restaurantList={restaurant}/>)
                    }
               </div>
            </div>
            <div className="restaurantList">
               <h2>Restaurants with online food delivery</h2>
               <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}
                >
                filter
                </button>
               </div>
               <div className="restaurant-container">
                    {
                        listOfRestaurants.map((restaurant) => <Restaurant key={restaurant.info.id} restaurantList={restaurant}/>)
                    }
               </div>
            </div>
        </div>
    )
};

export default Body;
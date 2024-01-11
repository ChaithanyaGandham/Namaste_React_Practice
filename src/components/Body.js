import foodItem from "../../Images/food-logo.png";
import samosa from "../../Images/samosa.png";
import burger from "../../Images/burger.png";
import { restaurants } from "../utils/mockData";
import { useState } from "react";
import Restaurant from "./Restaurant";
import crossIcon from "../../Images/cross-icon.png";
import { restaurantList } from "../utils/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

    const [topRestaurants, setTopRestaurants] = useState(restaurantList);

    const [typedText, setTypedText] = useState("");

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
                        topRestaurants.map((restaurant) => <Restaurant key={restaurant.info.id} restaurantList={restaurant}/>)
                    }
               </div>
            </div>
            <div className="restaurantList">
               <h2>Restaurants with online food delivery</h2>
               <div className="filter">
                    <div className="search-bar">
                        <input type="text" className="search-bar" value={typedText}
                            onBlur={(input) => {
                                const filteredList = listOfRestaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(input.target.value.toLowerCase()));
                                setListOfRestaurants(filteredList);
                            }}

                            onChange={(input) => {
                                setTypedText(input.target.value);
                            }}
                        />
                        <img src={crossIcon} className="cross-icon" alt="cross-icon"
                            onClick={() => {
                                setTypedText("");
                                setListOfRestaurants(restaurants);
                            }}
                        />
                    </div>
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
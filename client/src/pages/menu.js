import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import NutritionDisclaimer from "../components/NutritionDisclaimer";

import PizzaMenuCard from "../components/PizzaMenuCard";
import WingsMenuCard from "../components/WingsMenuCard";
import SidesMenuCard from "../components/SidesMenuCard";
import DessertsMenuCard from "../components/DessertsMenuCard";
import DrinksMenuCard from "../components/DrinksMenuCard";

import Pizza from "../product-json/Pizzas.json";
import Wings from "../product-json/Wings.json";
import Sides from "../product-json/Sides.json";
import Desserts from "../product-json/Desserts.json";
import Drinks from "../product-json/Drinks.json";



const menu = ({ match }) => {

    const currentPage = match.params.food;

    const menuCards = currentPage === "pizza" ? (
        Pizza.map(data => (   
            <Fragment key={data.id}>
                <PizzaMenuCard
                    id={data.id} 
                    name={data.name} 
                    image={data.image}
                    description={data.description}
                    med_price={data.med_price}
                    med_cals={data.med_cals}
                    lar_price={data.lar_price}
                    lar_cals={data.lar_cals}
                />
            </Fragment>
        ))
    ) : currentPage === "wings" ? (
        Wings.map(data => (   
            <Fragment key={data.id}>
                <WingsMenuCard
                    id={data.id} 
                    name={data.name} 
                    image={data.image}
                    description={data.description}
                    small_price={data.small_price}
                    large_price={data.large_price}
                    cals={data.cals}
                />
            </Fragment>
        ))
    ) : currentPage === "sides" ? (
        Sides.map(data => (   
            <Fragment key={data.id}>
                <SidesMenuCard
                    id={data.id} 
                    name={data.name} 
                    image={data.image}
                    description={data.description}
                    price={data.price}
                    cals={data.cals}
                />
            </Fragment>
        ))
    ) : currentPage === "desserts" ? (
        Desserts.map(data => (   
            <Fragment key={data.id}>
                <DessertsMenuCard
                    id={data.id} 
                    name={data.name} 
                    image={data.image}
                    description={data.description}
                    price={data.price}
                    cals={data.cals}
                />
            </Fragment>
        ))
    ) : currentPage === "drinks" ? (
        Drinks.map(data => (   
            <Fragment key={data.id}>
                <DrinksMenuCard
                    id={data.id} 
                    name={data.name} 
                    image={data.image}
                    description={data.description}
                    price={data.price}
                    cals={data.cals}
                />
            </Fragment>
        ))
    ) : ( null )

    return (
        <div>
            <h1 style={{fontSize: "50px", textTransform: "uppercase"}} className="my-3 ml-4">{match.params.food}</h1> 
            
            <div className="row">
               <div className="menu-page-nav text-center col-12">
                    <Link to="/menu/pizza"><span>Pizza</span></Link>
                    <Link to="/menu/wings"><span>Wings</span></Link>
                    <Link to="/menu/sides"><span>Sides</span></Link>
                    <Link to="/menu/desserts"><span>Desserts</span></Link>
                    <Link to="/menu/drinks"><span>Drinks</span></Link>
                </div> 
            </div>
            

            <div className="row">
                {menuCards}
            </div>

            <div className="row">
                <NutritionDisclaimer />
            </div>
        </div>
    )
}

export default menu;

import React from 'react';
import { Link } from "react-router-dom";

const home = () => {
    return (
        <div>

            <div className="col-12 mt-4">
                <Link to="/menu/pizza">
                    <img width="100%" src="/images/home/home_hero.png" alt="home hero" />
                </Link>
            </div>

            <div className="col-12 home-deals mt-3">
                <h1>DEALS</h1>
                <Link to="/deals"><p>View All Deals</p></Link>
            </div>

            <div className="col-12">
                <div className="row">

                    <div className="col-6 home-deals-card">
                        <div className=" home-deals-border">
                            <img src="/images/home/home_deals_heart.jpg" alt="heart pizza" />
                            <h5>HEART PIZZA</h5>
                            <p>Here for a limited time</p>
                            <Link to="/deals"><button className="my-2 ml-2 btn btn-danger">Order Now</button></Link>
                        </div>
                    </div>

                    <div className="col-6 home-deals-card">
                        <div className=" home-deals-border">
                            <img src="/images/home/home_deals.png" alt="local deals" />
                            <h5>Local Deals</h5>
                            <p>Delivery or Carryout</p>
                            <Link to="/deals"><button className="my-2 ml-2 btn btn-danger">Order Now</button></Link>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className="col-12 home-deals mt-3">
                <h1>MENU</h1>
            </div>

            <div className="col-12">
                <div className="row">
                    <div className="home-menu-card col-6 col-md-4">
                        <img src="/images/home/home_menu_pizza.jpg" alt="home menu" />
                        <Link to="/menu/pizza"><p>Pizza</p></Link>
                    </div>

                    <div className="home-menu-card col-6 col-md-4">
                        <img src="/images/home/home_menu_wings.jpg" alt="home menu" />
                        <Link to="/menu/wings"><p>Wings</p></Link>
                    </div>

                    <div className="home-menu-card col-6 col-md-4">
                        <img src="/images/home/home_menu_sides.jpg" alt="home menu" />
                        <Link to="/menu/sides"><p>Sides</p></Link>
                    </div>

                    <div className="home-menu-card col-6 col-md-4">
                        <img src="/images/home/home_menu_pasta.jpg" alt="home menu" />
                        <Link to="/menu/pizza"><p>Pasta</p></Link>
                    </div>

                    <div className="home-menu-card col-6 col-md-4">
                        <img src="/images/home/home_menu_dessert.jpg" alt="home menu" />
                        <Link to="/menu/desserts"><p>Dessert</p></Link>
                    </div>

                    <div className="home-menu-card col-6 col-md-4">
                        <img src="/images/home/home_menu_drinks.jpg" alt="home menu" />
                        <Link to="/menu/drinks"><p>Drinks</p></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default home

import React, { Fragment } from 'react';
import Deals from "../product-json/Deals.json";
import DealsCard from "../components/DealsCard";
import NutritionDisclaimer from "../components/NutritionDisclaimer";


const deals = () => {
    return (
        <div>
           <h1 style={{fontSize: "50px"}} className="my-3 ml-4">DEALS</h1> 
           <div className="row">
               {Deals.map(deals => (
                   <Fragment key={deals.id}>
                       <DealsCard 
                            id={deals.id}
                            name={deals.name}
                            price={deals.price}
                            image={deals.image}
                            description={deals.description}
                       />
                   </Fragment>
               ))}
           </div>
           <div className="row">
               <NutritionDisclaimer />
           </div>
        </div>
    )
}

export default deals

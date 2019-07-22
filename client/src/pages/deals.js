import React, { Fragment } from 'react';
import Deals from "../Deals.json";
import DealsCard from "../components/DealsCard";


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
                            price={deals.display_price}
                            image={deals.image}
                            description={deals.description}
                       />
                   </Fragment>
               ))}
           </div>
        </div>
    )
}

export default deals

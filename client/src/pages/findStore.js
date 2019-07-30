import React from 'react';
import StoreSearch from "../components/StoreSearch";

const findStore = () => {

    return (
        <div>
            <h1 style={{fontSize: "40px"}} className="my-3 ml-4">Find A Pizza House</h1> 
            <StoreSearch />
        </div>
    )
}

export default findStore;

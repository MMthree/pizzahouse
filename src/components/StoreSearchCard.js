import React, { useContext } from 'react';
import { YourStoreContext } from "../context/YourStoreContext";

const StoreSearchCard = ({street, city, phone}) => {

    const { store, saveStore } = useContext(YourStoreContext);

    const chosenStore = () => {
        saveStore(street, city)
    };

    const selected = store.short === street ? "btn-danger" : "btn-outline-danger";

    return (
        <div className="col-12">
            <div className="row mt-5">

                <div className="store-card col-6">
                    <div>
                        <i style={{fontSize: "45px", color: "#DC3545"}}className="fas fa-map-marker"></i>
                    </div>
                    <div>
                        <p>{street}</p>
                        <p>{city}</p>
                        <p>{phone}</p>
                    </div>
                </div>    

                <div className="store-hours col-6">
                    <div>
                        <p>Carryout Hours:</p>
                        <p>10:00am - 11:00pm</p>
                        <p>Ready In:</p>
                        <p>15 minutes*</p>
                    </div>
                </div>  

                <button 
                    onClick={chosenStore} 
                    className={`btn ${selected} btn-block mt-3`}
                    >
                        Select Store
                </button>
            </div>          
        </div>
    )
}

export default StoreSearchCard;

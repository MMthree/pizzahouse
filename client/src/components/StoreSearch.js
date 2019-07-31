import React, { useState, useContext } from 'react';
import StoreSearchCard from "./StoreSearchCard";
import StoreSearchCardLoading from "./StoreSearchCardLoading";
import { YourStoreContext } from "../context/YourStoreContext";


const StoreSearch = () => {
    const {findStore, storeLocations, getLocation} = useContext(YourStoreContext);

    const [searchType, setSearchType] = useState(false);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(null);

    const handleSearchType = () => {
        setSearchType(!searchType);
        setSearch("");
    };

    const searchStoresWithLocation = e => {
        e.preventDefault();
        getLocation();
        setLoading(true);
        setSearch("");

        setTimeout(() => {
            setLoading(false);
        },3000)

    }

    const searchStoresWithZip = e => {
        if (search.trim() === "") {
            return
        } else {
            findStore(search);
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
            },3000)
        }
    };

    return (
        <div className="col-12 col-md-6 mt-5 mx-auto store-search">
            <button 
                onClick={searchStoresWithLocation}
                className="btn btn-danger btn-block"
            >
                <i className="fas fa-map-marker-alt"></i> Use My Location
            </button>

            <p className="or text-center">or</p>

            <input
                onChange={e => setSearch(e.target.value)}
                className="location-input"  
                name="location"
                type="text"
                value={search}
                placeholder={!searchType ? "Zip Code" : "City, State"}
            >
            </input>

            <p className="zip-or-city" onClick={handleSearchType}>{!searchType ? "Use City/State" : "Zip Code"}</p>

            <button 
                onClick={searchStoresWithZip}
                className="btn btn-danger btn-block"
            >
                Find A Store
            </button>

            <div className="row">
            {loading ? <StoreSearchCardLoading /> : storeLocations.map(data => (
                    <div className="col-12" key={data.id}>
                       <StoreSearchCard 
                            street={data.location.display_address[0]}
                            city={data.location.display_address[1]}
                            phone={data.display_phone}
                        /> 
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default StoreSearch;

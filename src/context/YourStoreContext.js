import React, { useState, createContext, useEffect } from 'react';
import axios from "axios";

export const YourStoreContext = createContext();

const apiBase = process.env.REACT_APP_API_BASE

export const StoreProvider = props => {
    const [storeLocations, setStoreLocations] = useState([]);
    const [store, setStore] = useState({
        short: "",
        full: ""
    });
    

    useEffect(() => {
        const myStore = JSON.parse(localStorage.getItem("myStore"));
        if (myStore) {
            setStore({ short: myStore.shortAddress, full: myStore.fullAddress });
        }
    },[]);

    // Yelp api headers
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API}`,
        }
      };
    
    // Find all nearby stores with geoLocation 
    const getLocation = () => {
        if (navigator.geolocation) { 
            navigator.geolocation.getCurrentPosition(searchWithCoordinates);
        } else { 
            alert("Oops! This browser does not support HTML Geolocation.");
        }
    };

    // get coordinates from getLocation function
    const searchWithCoordinates = position => {
        const url = `${apiBase}/businesses?term=pizzahut&latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;
        
        axios.get(url, config)
        .then(res => {
            setStoreLocations(res.data.data.businesses);
        })
        .catch(err => console.error(err));
    } ;
    
    // Find all nearby stores with zip or address
    const findStore = zip => {
        const url = `${apiBase}/businesses?term=pizzahut&location=${zip}`;
        
        axios.get(url, config)
        .then(res => {
            setStoreLocations(res.data.data.businesses);
        })
        .catch(err => console.error(err));
    };

    // Save chosen store address to local storage
    const saveStore = (address1, address2) => {
        const myStore = {
            shortAddress: address1,
            fullAddress: address1 + " " + address2
        };
        setStore({ short: myStore.shortAddress, full: myStore.fullAddress });
        localStorage.setItem("myStore", JSON.stringify(myStore));
    };

    return (
        <YourStoreContext.Provider value={{
                findStore: findStore, 
                storeLocations: storeLocations,
                getLocation: getLocation,
                saveStore: saveStore,
                store: store
            }}
        >
            {props.children}
        </YourStoreContext.Provider>
    )
};

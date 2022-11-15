import React, { createContext, useEffect, useState } from 'react';
import { RiCoinsLine } from 'react-icons/ri';

export const FilterContext = createContext();

export default function FilterContextProvider(props) {
    const [categories, setCategories] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [prices, setPrices] = useState({
        min: "",
        max: ""
    })

    useEffect(()=>{

    }, []);

    function addCategory(e) {
        const remove = categories.includes(e.target.id);
        if (remove) {
            const catFilter = categories.filter((cat) => cat !== e.target.id);
            setCategories(catFilter);
        } else {
            setCategories([...categories, e.target.id]);
        }
    }

    function addPlatform(e) {
        const remove = platforms.includes(e.target.id);
        if (remove) {
            const catFilter = platforms.filter((cat) => cat !== e.target.id);
            setPlatforms(catFilter);
        } else {
            setPlatforms([...platforms, e.target.id]);
        }
    }

    function addPrices(id, value){
        if(id == "minp"){
            setPrices({
                min: value,
                max: prices.max
            });
        }else{
            setPrices({
                min: prices.min,
                max: value
            });
        }
    }

    return (
        <FilterContext.Provider value={
            {
                categories,
                platforms,
                prices,
                addCategory,
                addPlatform,
                addPrices,
            }
        }>
            {props.children}
        </FilterContext.Provider>
    )

}

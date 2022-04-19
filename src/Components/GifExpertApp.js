import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];

    const [categories,setCategories] = useState(['One Punch']);

    /*const handleAdd = () =>{
        //setCategories([...categories,'HunterXHunter']);
        setCategories(cats => [...cats , 'HunterXHunter']);
    }*/
            //<button onClick={handleAdd} >Agregar</button>
    return (
            <>
                <h2>Gif Expert App</h2>
                <AddCategory setCategories = { setCategories } />
                <hr/>
                
                <ol>
                    {
                        categories.map( (category,index) => 
                        (
                            //return <li>{categories[i]}</li>}
                            //return <li key={category}>{category}</li>}
                            <GifGrid 
                                key = {category}
                                category={category}
                            />
                        ))
                    }
                </ol>

            </>
    )
}

export default GifExpertApp;
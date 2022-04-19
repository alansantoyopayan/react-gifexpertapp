import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);

    //console.log(loading)

    //const [ count,setCount ]=useState(0);
    /*
    const [images , setImages] = useState([]);

    useEffect(()=>
        {
            getGifs(category).then(
                //imgs => setImages(imgs)
                setImages
            );
        },[ category ]
    )
        */
    return(
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

           {/*loading ? 'Cargando....':'Data Cargada'*/}
           {loading && <p className="animate__animated animate__flash">Cargando....</p>}

            {<div className="card-grid">            
                { 
                   /* images.map(img =>
                        (
                            <li key={img.id}>{img.title}</li>
                        ))*/
                        images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                            //img={img} 
                        />
                    ))
                }
            </div>}
        </>
            //<h1>{count}</h1>
            //<button onClick={()=> setCount(count + 1)}></button>
    )
    /*return(
        <>
            <h3>{category}</h3>            
            <ol>
                { 
                    images.map(img =>
                        (
                            <li key={img.id}>{img.title}</li>
                        ))
                    images.map(({id,title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </>
            //<h1>{count}</h1>
            //<button onClick={()=> setCount(count + 1)}></button>
    )*/
}
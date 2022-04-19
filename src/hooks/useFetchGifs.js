import { useState ,useEffect } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) =>{
    const [state,setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>
        {
            getGifs(category).then(
                img =>{
                    setState({
                        data:img,
                        loading:false
                    });
                }
                //imgs => setImages(imgs)
                //setImages
            );
        },[ category ]
    )

/*    setTimeout(()=>{
        setState({
            data:[1,2,3,4,5],
            loading:false
        })
    },3000)*/

    return state;
}

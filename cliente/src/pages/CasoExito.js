import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { STRAPI_API, STRAPI_URL } from '../API';
import '../styles/CasoExito.css';


export const CasoExito = () => {
    
    const [data, setData] = useState();
    const [loading, setloading] = useState(true)
    
    const param = useParams()

    useEffect(() => {
        getData();
    }, [])
    

    const getData = async () => {
        console.log(param)
        const response = await fetch( `${STRAPI_API}casos-exitos/${param.id}?populate[0]=image` );
        const data = await response.json();

        console.log(data.data.attributes);
        setData(data.data.attributes);
        setloading(false);
    }

    return (
        <div className='caso-container'>        
            {
                !loading &&  (
                    <div className='caso-body'>
                        <div className='caso-text'>
                            <h2 className='caso-text--title'>{data.tittle}</h2>
                            <p className='caso-text--paragraph'>
                                {data.description}
                            </p>
                        </div>
                        <div className='caso-img-container'>
                            <img src={`${STRAPI_URL}${data.image.data.attributes.url.slice(1)}`}></img>
                        </div>
                    </div>  
                )
            }
        </div>
    )
}

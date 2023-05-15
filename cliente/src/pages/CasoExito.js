import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { STRAPI_API, STRAPI_URL } from '../API';
import '../styles/CasoExito.css';
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

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
                                <ReactMarkdown className='caso-text--paragraph' remarkPlugins={[remarkBreaks]}>
                                {data.description}

                                </ReactMarkdown>
                            {/* <p className='caso-text--paragraph'>
                            </p> */}
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

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {

    // const [count, setcount] = useState(0);

    const {data:images, loading} = useFetchGifs(category);
    
    // const [images, setimages] = useState([]);
    // useEffect(() => {
    //     getGifs(category)
    //     .then(setimages);
    // }, [category])
    // getGifs();

    return (
        <>
            <h3 className ="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className = "animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GiftGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

import { Link, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";

export default function PlacesPage() {
    const [places,setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/user-places').then(({data}) => {
            setPlaces(data);
        });
    }, []);

    function shortenDescription(str) {
        const elypsis = '...';
        let shortened = str.substring(0, 200);
        let shortElyp = shortened + elypsis;
        if (str.length <= 199) {
            return str;
        } else {
            return shortElyp;
        }
    }
    

    return(
        <div>
            <AccountNav />
            {/* {action !== 'new' && ( */}
                <div className="text-center">
                
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new place
                    </Link>
                </div>
            {/* )} */}
            <div className="mt-4">
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/'+place._id} className="flex cursor-pointer bg-gray-100 p-4 gap-4 rounded-2xl mt-4">
                        <div className="flex w-32 h-32 bg-gray-300 shrink-0">
                            {/* {place.photos.length > 0 && (
                                <img className="object-cover" src={'http://localhost:4000/uploads/' +place.photos[0]} alt="thumbnail photo"/>
                            )} */}
                            <PlaceImg place={place} />
                        </div>
                        <div className="grow-0">
                            <h2 className="text-xl">{place.title}</h2>
                            {/* <p className="text-sm mt-2 text-ellipsis overflow-hidden">{place.description}</p> */}
                            <p className="text-sm mt-2">{shortenDescription(place.description)}</p>
                            <div className="mt-3">
                                <span className="">Price per night: ${place.price}</span>
                            </div>
                        </div>
                    </Link>
                ))}
                <div className="view-more text-center mt-5">
                    <span>View More</span>
                </div>
            </div>
        </div>
    )
}
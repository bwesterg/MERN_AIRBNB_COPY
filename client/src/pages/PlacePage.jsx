import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
    const {id} = useParams();
    const [place,setPlace] = useState(null);
    // const [showAllPhotos,setShowAllPhotos] = useState(false);
    useEffect(() => {
        if (!id) {
            return;
        } 
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        })
    }, [id]);

    if (!place) return '';

    // if (showAllPhotos) {
    //     return (
    //         <div className="absolute inset-0 bg-black text-white min-h-screen">
    //             <div className="p-8 grid gap-4 bg-black">
    //                 <div>
    //                     <div className="mr-36">
    //                         <h2 className="text-3xl mr-8">Photos of {place.title}</h2>
    //                     </div>
    //                     <button onClick={()=>setShowAllPhotos(false)} className="right-12 top-8 fixed flex gap-1 py-2 px-4 rounded-2xl text-black shadow shadow-black bg-white">
    //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    //                             <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    //                         </svg>
    //                         Close Photos
    //                     </button>
    //                 </div>
    //                 {place?.photos?.length > 0 && place.photos.map(photo => (
    //                     <div>
    //                         <img className="w-full" src={'http://localhost:4000/uploads/'+photo} alt="" />
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     )
    // }

    return(
        <div className="mt-4 pt-8 bg-gray-100 -mx-8 px-8">
            <h1 className="text-3xl ">{place.title}</h1>
            <AddressLink>{place.address}</AddressLink>
            <PlaceGallery place={place}/>
            <div className="mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div className="">
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        {place.description}
                    </div>
                    Check-in: {place.checkIn}<br />
                    Check-out: {place.checkOut}<br />
                    Max guests: {place.maxGuests}
                </div>
                <div>
                    <BookingWidget place={place}/>
                </div>
            </div>
            <div className="bg-white -mx-8 px-8 py-8 border-t">
                <div>
                    <h2 className="font-semibold text-2xl">Extra Info</h2>
                </div>
                <div className="mb-4 mt-2 text-sm text-gray-600 leading-5">{place.extraInfo}</div>
            </div>
        </div>
    )
}
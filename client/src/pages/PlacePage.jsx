import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function PlacePage() {
    const {id} = useParams();
    const [place,setPlace] = useState(null);
    const [showAllPhotos,setShowAllPhotos] = useState(false);
    useEffect(() => {
        if (!id) {
            return;
        } 
        axios.get(`/places/${id}`).then(response => {
            setPlace(response.data);
        })
    }, [id]);

    if (!place) return '';

    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 bg-black text-white min-h-screen">
                <div className="p-8 grid gap-4 bg-black">
                    <div>
                        <h2 className="text-3xl">Photos of {place.title}</h2>
                        <button onClick={()=>setShowAllPhotos(false)} className="right-12 top-8 fixed flex gap-1 py-2 px-4 rounded-2xl text-black shadow shadow-black bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            Close Photos
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <div>
                            <img className="w-full" src={'http://localhost:4000/uploads/'+photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return(
        <div className="mt-4 py-8 bg-gray-100 -mx-8 px-8">
            <h1 className="text-3xl ">{place.title}</h1>
            <a className="flex gap-1 my-3 font-semibold underline" target="_blank" href={'https://maps.google.com?q=' + place.address} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                </svg>
                {place.address}
            </a>
            <div className="relative">
                <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
                    <div>
                        {place.photos?.[0] && (
                            <div className="">
                                <img className="aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos?.[0]} alt="main image for place" />
                            </div>
                        )}
                    </div>
                    <div className="grid">
                        {place.photos?.[1] && (
                            <img className="aspect-square object-cover" src={'http://localhost:4000/uploads/'+place.photos?.[1]} alt="main image for place" />
                        )}
                        <div className="overflow-hidden">
                            {place.photos?.[2] && (
                                <img className="aspect-square object-cover relative top-2" src={'http://localhost:4000/uploads/'+place.photos?.[2]} alt="main image for place" />
                            )}
                        </div>
                    </div>
                </div>
                <button onClick={()=>setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl border shadow-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                    </svg>
                    Show more pictures
                </button>
            </div>
            <div className="my-4">
                <h2 className="font-semibold text-2xl">Description</h2>
                {place.description}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div className="">
                    Check-in: {place.checkIn}<br />
                    Check-out: {place.checkOut}<br />
                    Max guests: {place.maxGuests}
                </div>
                <div>
                    <div className="bg-white shadow p-4 rounded-2xl">
                        <div className="text-2xl text-center">
                            Price: ${place.price} / per night
                        </div>
                        <div className="border rounded-2xl mt-4">
                            <div className="flex">
                                <div className="py-3 px-4">
                                    <label>Check in:</label>
                                    <input type="date" />
                                </div>
                                <div className="py-3 px-4 border-l">
                                    <label className="">Check out:</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="py-3 px-4 border-t">
                                <label className="">Number of Guests</label>
                                <input type="number" value={1} />
                            </div>
                        </div>
                        <button className="primary mt-4">Book It!</button>
                    </div>
                </div>


            </div>
        </div>
    )
}
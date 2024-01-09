import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
    const {action} = useParams();
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [photoLink,setPhotoLink] = useState('');
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);

    return(
        <div>
            {action !== 'new' && (

                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                        Add new place
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>

                    <form>
                        <h2 className="text-2xl mt-4">Title </h2>
                        <p className="text-gray-500 text-sm">Title for your place</p>
                        <input type="text" placeholder="title, e.g., 'My great apartment'" />
                        <h2 className="text-2xl mt-4">Address</h2>
                        <p className="text-gray-500 text-sm">Include details necessary to use with route finding/gps</p>
                        <input type="text" placeholder="address" />
                        <h2 className="text-2xl mt-4">Photos</h2>
                        <p className="text-gray-500 text-sm">The more the better...</p>
                        <div className="flex gap-2">
                            <input type="text" placeholder='Add photo using a link' />
                            <button className="bg-gray-200 px-4 rounded-2xl">Add photo</button>
                        </div>
                        <div className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            <button className="justify-center gap-1 flex border bg-transparent rounded-2xl p-8 text-xl text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pb-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                </svg>
                                Upload
                            </button>
                        </div>
                        <h2 className="text-2xl mt-4">Description</h2>
                        <p className="text-gray-500 text-sm">Describe your place</p>
                        <textarea />
                        <h2 className="text-2xl mt-4">Perks</h2>
                        <p className="text-gray-500 text-sm">Select the relevant perks</p>
                        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                                </svg>
                                <span>Wifi</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                                <span>Free Parking</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                                <span>TV</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>
                                <span>Pets</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                                <span>Private Entrance</span>
                            </label>
                            <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                                <input type="checkbox" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                                <span>Kitchen</span>
                            </label>
                        </div>
                        <h2 className="text-2xl mt-4">Extra info</h2>
                        <p className="text-gray-500 text-sm">Rules of the house, etc.</p>
                        <textarea />
                        <h2 className="text-2xl mt-4">Checkin & Checkout times</h2>
                        <p className="text-gray-500 text-sm">Remember to consider time for cleaning the unit</p>
                        <div className="grid gap-2 sm:grid-cols-3">
                            <div>
                                <h3 className="mt-2 -mb-2">Checkin time</h3>
                                <input type="text" placeholder="14:00"/>
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-2">Checkout time</h3>
                                <input type="text" />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-2">Max guests</h3>
                                <input type="text" />
                            </div>
                        </div>
                            <button className="primary my-4">Save</button>
                    </form>
                </div>
            )}
        </div>
    )
}
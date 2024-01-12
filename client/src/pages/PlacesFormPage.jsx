import PhotosUploader from "../PhotosUploader.jsx";
import Perks from "../Perks.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav.jsx";
import { Navigate, useParams } from "react-router-dom";


export default function PlacesFormPage() {
    const {id} = useParams();
    // console.log({id})
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);
    const [redirect,setRedirect] = useState(false);
    const [price,setPrice] = useState(100);
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/places/'+id).then(response => {
            const {data} = response;
            setTitle(data.title);
            setAddress(data.address);
            setAddedPhotos(data.photos);
            setDescription(data.description);
            setPerks(data.perks);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPrice(data.price);
        });

    },[id]);
    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
            // <p className="text-gray-500 text-sm">Title for your place</p>
        )
    };

    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        )
    };

    function preInput(header,description){
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        )
    };

    // async function addPhotoByLink(ev) {
    //     ev.preventDefault();
    //     const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
    //     setAddedPhotos(prev => {
    //         return [...prev, filename];
    //     });
    //     setPhotoLink('');
    // }

    // function uploadPhoto(ev) {
    //     const files = ev.target.files;
    //     const data = new FormData();
    //     for (let i = 0; i < files.length; i++) {
    //         data.append('photos', files[i]);
    //     }
    //     // data.set('photos', [...files]);
    //     axios.post('/upload', data, {
    //         headers: {'Content-type':'multipart/form-data'}
    //     }).then(response => {
    //         const {data:filenames} = response;
    //         setAddedPhotos(prev => {
    //             return [...prev, ...filenames];
    //         });
    //     })
    // }

    async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {
            title, address, addedPhotos, description, 
            perks, extraInfo, checkIn, checkOut, maxGuests, price
        }
        if (id) {
            //update
            await axios.put('/places/', {
                id, ...placeData
            });
            setRedirect(true);
        } else {
            //new place
            await axios.post('/places', placeData);
            // setRedirectToPlacesList(true);
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    // if (redirectToPlacesList && action!=='new') {
    //     return <Navigate to={'/account/places'} />
    // }
    return (
        <div>
            <AccountNav />
            <form onSubmit={savePlace}>
                {preInput('Title', 'Title for your place')}
                <input type="text" value={title} onChange={ev=>setTitle(ev.target.value)} placeholder="title, e.g., 'My great apartment'" />
                {preInput('Address', 'Include details necessary to use with route finding/gps')}
                <input type="text" value={address} onChange={ev=>setAddress(ev.target.value)} placeholder="address" />
                {preInput('Photos', 'The more the better...')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                {preInput('Description', 'Describe your place')}
                <textarea value={description} onChange={ev=>setDescription(ev.target.value)} />
                {preInput('Perks', 'Select the relevant perks')}
                <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <Perks selected={perks} onChange={setPerks}/>
                </div>
                {preInput('Extra info', 'Rules of the house, etc.')}
                <textarea value={extraInfo} onChange={ev=>setExtraInfo(ev.target.value)} />
                {preInput('Checkin & Checkout times', 'Remember to consider time for cleaning the unit')}
                <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                    <div>
                        <h3 className="mt-2 mb-1">Checkin time</h3>
                        <input type="text" 
                            value={checkIn} 
                            onChange={ev=>setCheckIn(ev.target.value)} 
                            placeholder="14"/>
                    </div>
                    <div>
                        <h3 className="mt-2 mb-1">Checkout time</h3>
                        <input type="text" 
                            value={checkOut} 
                            onChange={ev=>setCheckOut(ev.target.value)} 
                            placeholder="11" />
                    </div>
                    <div>
                        <h3 className="mt-2 mb-1">Max guests</h3>
                        <input type="number" 
                            value={maxGuests} 
                            onChange={ev=>setMaxGuests(ev.target.value)}/>
                    </div>
                    <div>
                        <h3 className="mt-2 mb-1">Price per night</h3>
                        <input type="number" 
                            value={price} 
                            onChange={ev=>setPrice(ev.target.value)}/>
                    </div>
                </div>
                <button className="primary my-4">Save</button>
            </form>
        </div>
    );
}
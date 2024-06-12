import { PrimeReactProvider } from 'primereact/api';
// import { Button } from 'primereact/button';
// import { Card } from "primereact/card";
import { useEffect, useState } from 'react';
import API from './../api/apiIndex';
import { NavLink, Outlet, RouterProvider } from 'react-router-dom';
import { Button } from 'primereact/button';



function GiftsPage() {
  const [gifts, setGifts] = useState([]);


  const getGifts = async () => {
    const giftResponse = await API?.ChristmasGift?.gifts();
    console.log(("gift get call:", giftResponse));
    setGifts(giftResponse);
  }

  useEffect(() => {
    getGifts();
  },[]);

  console.log('gifts data:', gifts.data)
  return (
    <PrimeReactProvider>
    <div className="Gifts">
      
      <p>test:</p>
        {gifts.data ? (gifts.data.map((g) => (<><ul key={g.id}>{g.giftName}</ul><NavLink to={`${g.id}`}>details</NavLink></>)))  : null}
      <NavLink to="/">Home</NavLink>
      <NavLink to="years">Years</NavLink>
    </div>
    <Outlet></Outlet>
    </PrimeReactProvider> 
  );
}

export default GiftsPage;

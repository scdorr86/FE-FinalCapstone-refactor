import { PrimeReactProvider } from 'primereact/api';
// import { Button } from 'primereact/button';
// import { Card } from "primereact/card";
import { useEffect, useState } from 'react';
import API from './../api/apiIndex';
import { NavLink, Outlet, RouterProvider } from 'react-router-dom';
import { Button } from 'primereact/button';



function GifteesPage() {
  const [giftees, setGiftees] = useState([]);


  const getGiftees = async () => {
    const gifteeResponse = await API?.ChristmasGiftee?.giftees();
    console.log(("giftee get call:", gifteeResponse));
    setGiftees(gifteeResponse);
  }

  useEffect(() => {
    getGiftees();
  },[]);

  console.log('giftees data:', giftees.data)
  return (
    <PrimeReactProvider>
    <div className="Gifts">
      
      <p>test giftees list:</p>
        {giftees.data ? (giftees.data.map((g) => (<><ul key={g.id}>{g.firstName}</ul><NavLink to={`${g.id}`}>details</NavLink></>)))  : null}
      <NavLink to="/">Home</NavLink>
      <NavLink to="years">Years</NavLink>
    </div>
    <Outlet></Outlet>
    </PrimeReactProvider> 
  );
}

export default GifteesPage;

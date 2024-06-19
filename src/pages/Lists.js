import { PrimeReactProvider } from 'primereact/api';
// import { Button } from 'primereact/button';
// import { Card } from "primereact/card";
import { useEffect, useState } from 'react';
import API from './../api/apiIndex';
import { NavLink, Outlet, RouterProvider } from 'react-router-dom';
import { Button } from 'primereact/button';



function ListsPage() {
  const [lists, setLists] = useState([]);


  const getLists = async () => {
    const listResponse = await API?.ChristmasList?.lists();
    console.log(("list get call:", listResponse));
    setLists(listResponse);
  }

  useEffect(() => {
    getLists();
  },[]);

  console.log('lists data:', lists.data)
  return (
    <PrimeReactProvider>
    <div className="Lists">
      
      <p>test listing lists:</p>
        {lists.data ? (lists.data.map((l) => (<><ul key={l.id}>{l.listName}</ul><NavLink to={`${l.id}`}>details</NavLink></>)))  : null}
        <br></br>
      <NavLink to="/">Home</NavLink>
      <NavLink to="years">Years</NavLink>
    </div>
    <Outlet></Outlet>
    </PrimeReactProvider> 
  );
}

export default ListsPage;

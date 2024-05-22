import { PrimeReactProvider } from 'primereact/api';
// import { Button } from 'primereact/button';
// import { Card } from "primereact/card";
import { useEffect, useState } from 'react';
import API from './../api/apiIndex';
import { NavLink } from 'react-router-dom';



function YearsPage() {
  const [years, setYear] = useState();


  const getYears = async () => {
    const yrResponse = await API.ChristmasYear.years();
    console.log(("year call:", yrResponse));
    setYear(yrResponse);
  }

  useEffect(() => {
    getYears();
  },[]);


  return (
    <PrimeReactProvider>
    <div className="Years">
      
      {years ? (years.map((y) => (
        <ul>{y.listYear}</ul>
      ))) : null}
      <NavLink to="/">Home</NavLink>
    </div>
    </PrimeReactProvider>
  );
}

export default YearsPage;

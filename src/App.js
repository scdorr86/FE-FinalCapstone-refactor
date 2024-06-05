import logo from './logo.svg';
import { NavLink } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import { useEffect } from 'react';
import API from './api/apiIndex';




function App() {
  //const [lists, setLists] = useState();

  const getLists = async () => {
    const response = await API.ChristmasList.lists();
    console.log("response", response);
    // if(response) {
    //   setLists(response);
    //   console.log("lists:", lists)
    // } else {
    //   console.log("no lists", response)
    // }
  }

  const getYears = async () => {
    const yrResponse = await API.ChristmasYear.years();
    console.log(("year call:", yrResponse));
  }

  useEffect(() => {
    getLists();
    getYears();
  },[]);


  return (
    <PrimeReactProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button icon="pi pi-user" severity="info">Sign-In!</Button>
        <NavLink to="/">Home</NavLink>
        <NavLink to="years">Years</NavLink>
        <NavLink to="gifts">Gifts</NavLink>
      </header>
    </div>
    </PrimeReactProvider>
  );
}

export default App;

// const handleAuthClick = (provider: string) => {
//   setApiUrl(`${BASE_URL}/account/externallogin?provider=${provider}`);
// };

// function Auth() {
//   return (
//     <div className="flex flex-column justify-content-center align-items-center h-screen pt-3 md:pt-0">

//       <Card className="h-full md:h-auto w-full md:w-28rem">
//         <div className="flex flex-column gap-2">
//           <p>
//             Please authenticate with google.
//           </p>
//           <form
//             action={apiUrl}
//             onSubmit={handleFormSubmit}
//             method="POST"
//             className="flex flex-column md:flex-row flex-wrap gap-2 md:gap-3"
//           >
            
//             <Button
//               className="google flex md:w-auto md:flex-1 flex-column justify-content-center h-4rem md:h-6rem"
//               onClick={() => handleAuthClick("Google")}
//               type="submit"
//             >
//               <i
//                 className="pi pi-google px-2"
//                 style={{ fontSize: "24px", margin: "5px" }}
//               />{" "}
//               Google
//             </Button>
            
//           </form>
//         </div>
//       </Card>
//     </div>
//   );
// }

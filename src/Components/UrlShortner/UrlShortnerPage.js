import { NavBar } from "./NavBarComponent";
import { ShortnerInputComponent } from "./ShortnerInputComponent";
import { ShortnerTableComponent } from "./ShortnerTableComponent";
import { api } from "../../utils/Api";
import { UserContext } from "../../Context/UserContext";
import { useState, useEffect, useContext } from "react";
import "./urlShortner.css";

export function UrlShortnerPage() {
  const [shortnerData, setShortnerData] = useState([]);

  const { user } = useContext(UserContext);

  const getShortnerdata = () => {
    fetch(`${api}/api/urlShortner/get-shortners`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user }),
    })
      .then((response) => response.json())
      .then((response) => {
        setShortnerData(response);
      });
  };

  useEffect(() => {
    getShortnerdata();
  }, []);
  return (
    <div>
      <NavBar username={user} />
      <ShortnerInputComponent getShortnerdata={getShortnerdata} />
      <ShortnerTableComponent
        shortnerData={shortnerData}
        getShortnerdata={getShortnerdata}
      />
    </div>
  );
}

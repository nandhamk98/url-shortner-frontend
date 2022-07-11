import { NavBar } from "./NavBarComponent";
import { ShortnerInputComponent } from "./ShortnerInputComponent";
import { ShortnerTableComponent } from "./ShortnerTableComponent";
import { api } from "../../utils/Api";
import { useState, useEffect } from "react";
import "./urlShortner.css";

export function UrlShortnerPage() {
  const [shortnerData, setShortnerData] = useState([]);
  const body = {
    username: "nandhamk",
  };

  const getShortnerdata = () => {
    fetch(`${api}/api/urlShortner/get-shortners`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
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
      <NavBar />
      <ShortnerInputComponent getShortnerdata={getShortnerdata} />
      <ShortnerTableComponent
        shortnerData={shortnerData}
        getShortnerdata={getShortnerdata}
      />
    </div>
  );
}

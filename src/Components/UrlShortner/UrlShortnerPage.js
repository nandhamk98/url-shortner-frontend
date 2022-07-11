import { NavBar } from "./NavBarComponent";
import { ShortnerInputComponent } from "./ShortnerInputComponent";
import { ShortnerTableComponent } from "./ShortnerTableComponent";
import { api } from "../../utils/Api";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./urlShortner.css";

function UrlShortnerPage({ username }) {
  const [shortnerData, setShortnerData] = useState([]);

  const getShortnerdata = () => {
    fetch(`${api}/api/urlShortner/get-shortners`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
    })
      .then((response) => response.json())
      .then((response) => {
        setShortnerData(response);
      });
  };

  useEffect(() => {
    console.log(username);
    getShortnerdata();
  }, []);
  return (
    <div>
      <NavBar username={username} />
      <ShortnerInputComponent getShortnerdata={getShortnerdata} />
      <ShortnerTableComponent
        shortnerData={shortnerData}
        getShortnerdata={getShortnerdata}
      />
    </div>
  );
}

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps, null)(UrlShortnerPage);

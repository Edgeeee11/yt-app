import React, { useState } from "react";

const SearchBar = ({ naOtpravkuVvedennoyFormy }) => {
  const [vvedennyPoisk, setVvedennyPoisk] = useState("");

  const naOtpravkuFormy = (e) => {
    e.preventDefault();
    naOtpravkuVvedennoyFormy(vvedennyPoisk);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={naOtpravkuFormy} className="ui form">
        <div className="field">
          <label>Search For a Video</label>
          <input type="text" value={vvedennyPoisk} onChange={(e) => setVvedennyPoisk(e.target.value)} />
        </div>
      </form>
    </div>
  );
};


export default SearchBar;

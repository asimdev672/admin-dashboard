import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import db from "./db.json";
export default function Chat() {
  const [inpVal, setInpVal] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleSearch = () => {
    setLoading(true)
    const value = db.find(el => el?.sr_no == inpVal);
    console.log('first',value)
    console.log('inpVal',inpVal)
    if (value) {
      setData(value);
      setInpVal('')
      setLoading(false)
    } else {
      setData({ text: "No data found" });
      setInpVal('')
      setLoading(false)
    }
    console.log(inpVal);
  };
  const heading = {
    fontSize: "large",
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginBottom: "13px",
    fontStyle: "oblique",
  };
  return (
    <>
      <div className="mdv">
        <div className="chat_header">
          <h3 style={heading}>you can search there</h3>
          <div className="border mx-5">
            <input
              type="number"
              className="border-0 py-2 px-2 border-end me-2"
              value={inpVal}
              style={{ width: "85%" }}
              onChange={(e) => setInpVal(e.target.value)}
            />
            <BsSearch
              onClick={handleSearch}
              style={{ cursor: "pointer" }}
              title="search there"
            />
          </div>
        </div>
       {loading?<p className="text-center text-white mt-3">loading...</p>:<div
          className="chat_body overflow-auto"
          style={{ height: "23rem", padding: "1rem" }}
        >
          {data?.sr_no ? (
            <div>
              <h5>Controller</h5>
              <p>{data?.controller}</p>
              <h5>Purpose</h5>
              <p>{data?.Purpose}</p>
              <h5>Guidance</h5>
              {data?.Guidance.split("\\n").map((line) => (
                <p>{line}</p>
              ))}
              <h5>Other information</h5>
              <p>{data?.Other_Information}</p>
            </div>
          ) : (
            <p style={{ color: "white" }}>{data?.text}</p>
          )}
        </div>}
        
      </div>
    </>
  );
}

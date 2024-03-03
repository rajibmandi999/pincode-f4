import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchItem from "./SearchItem";
const Search = () => {
    const [pincode, setPincode] = useState("");
    
    const [searchData, setSearchData] = useState([]);
    const [post, setPost] = useState([]);

    const [error, setError] = useState("");


    const [isData, setIsData] = useState(false);

    async function pindata(pin) {

            const res = await axios.get(` https://api.postalpincode.in/pincode/${pin}`)
            const data = res.data[0];
            setSearchData(data);
            setPost(res.data[0].PostOffice)
            setIsData(true);
            
            setError(data.Status);
            
    }
    


    function handelSubmit(e) {
        e.preventDefault();

        if (pincode.length == 0) {
            alert("Please enter 6 digit pincode")
        }
        if (pincode.length == 6) {

            pindata(pincode);
            
        }
        else {
            alert("Enter 6 digit pincode");
        }
        


    }
   


    return (
        <div>
            {isData  ?  (<div className="box2">
                <h2>Pincode : {pincode}</h2>
                <h2>Message : {searchData.Message}</h2>
               

                {error =="Error" ? "":<SearchItem posts={post} />}
                

            </div>) : (<div className="box1">
                <h1>Enter Pincode</h1>
                <form onSubmit={handelSubmit}>
                    <input type="text" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                
            </div>)}



        </div>
    )
}
export default Search;
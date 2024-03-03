import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchItem from "./SearchItem";
const Search = () => {
    const [pincode, setPincode] = useState("");
    const [fil, setFilter] = useState("");
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
            // console.log(data);
            setError(data.Status);
            
    }
    // console.log(error);


    function handelSubmit(e) {
        e.preventDefault();

        if (pincode.length == 0) {
            alert("Please enter 6 digit pincode")
        }
        if (pincode.length == 6) {

            pindata(pincode);
            // setIsData(true);
        }
        else {
            alert("Enter 6 digit pincode");
        }
        // console.log(pincode.length);


    }
    useEffect(() => {

        setPost(post)
        handelFilter();

    }, [fil])
    // setPost(searchData.PostOffice)
    // console.log(searchData);784161
    function handelFilter() {
        // console.log(fil);

        setPost(searchData.PostOffice)
        setPost(post.filter(data => data.Name.toLowerCase().includes(fil.toLowerCase())));

    }


    return (
        <div>
            {isData  ?  (<div className="box2">
                <h2>Pincode : {pincode}</h2>
                <h2>Message : {searchData.Message}</h2>
                {/* <input type="text" placeholder="filter" value={fil} onChange={(e) => setFilter(e.target.value)} /> */}

                {error =="Error" ? "":<SearchItem posts={post}  fil={fil}  setFilter={setFilter}/>}
                

                {/* {
                    searchData.PostOffice.map((data, index) => {
                        return (
                            <div key={index}>
                            <h3> Name : {data.Name}</h3>
                            <h3>Branch Type : {data.BranchType}</h3>
                            <h3>Delivery Status : {data.DeliveryStatus}</h3>
                            <h3>District : {data.District}</h3>
                            <h3>State : {data.State}</h3>
                            <hr />
                        </div>
                        )
                    })  
                } */}



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
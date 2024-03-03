import React,{useState,useEffect} from "react";

const SearchItem=({posts})=>{
    
    const [fil,setFilter] = useState("");

    const [final,setFinal] = useState(posts);

    useEffect(() => {
        
        const fina =posts.filter(data => data.Name.toLowerCase().includes(fil.toLowerCase()))
        setFinal(fina);
    }, [fil])


        return(
        <div className="searchitem">
            <input type="text" placeholder="filter"  onChange={(e) => setFilter(e.target.value)}  value={fil}/>
           { final.length>0 && final.map((item,index)=>{
            return (
                <div className="data_box" key={index}>
                <h3> Name : {item.Name}</h3>
                <h3>Branch Type : {item.BranchType}</h3>
                <h3>Delivery Status : {item.DeliveryStatus}</h3>
                <h3>District : {item.District}</h3>
                <h3>State : {item.State}</h3>
                <h3>Pincode : {item.Pincode}</h3>
                <h3>Region : {item.Region}</h3>

                <hr />
            </div>
            )
           })}
            
           
        </div>
    )
}

export default SearchItem;
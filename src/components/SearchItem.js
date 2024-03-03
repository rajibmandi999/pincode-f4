import React from "react";

const SearchItem=({posts,setFilter,fil})=>{
    // console.log(posts);


        return(
        <div className="searchitem">
            <input type="text" placeholder="filter" value={fil} onChange={(e) => setFilter(e.target.value)} />
           { posts.length>0 && posts.map((item,index)=>{
            return (
                <div className="data_box" key={index}>
                <h3> Name : {item.Name}</h3>
                <h3>Branch Type : {item.BranchType}</h3>
                <h3>Delivery Status : {item.DeliveryStatus}</h3>
                <h3>District : {item.District}</h3>
                <h3>State : {item.State}</h3>
                <h3>Pincode : {item.Pincode}</h3>
                <h3>Region : {item.Region}</h3>

                {/* <hr /> */}
            </div>
            )
           })}
            
           
        </div>
    )
}

export default SearchItem;
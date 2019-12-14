import React from "react";
const YDetails = ({details}) => {
    if (!details) { return null;}
    return (
        <div className="container">
         <div className="row">
                <div className="col-md-12">
                    <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"  src={`https://www.youtube.com/embed/${details}`}></iframe>

                    </div>
                </div>
            </div> 
        </div>
    )
};

export default YDetails;
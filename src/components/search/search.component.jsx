import React from "react";
const Search = ({placeholder,SearchYoutube}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">

                    <div className="form-group">
                        
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={SearchYoutube}
                        className="form-control"
                        
                    />

                    </div>
                  
                </div>
                <div className="col-md-3">
                <button type="button" className= "btn btn-primary btn-md">search</button>

                </div>
            </div>
        </div>
    )
};
export default Search;

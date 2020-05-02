import React from 'react';
 
const SearchInput = ({searchHandler, unSelectHandler}) => {
   
    return (
        <div className="search-area-input-icon">
            <div className="saii-inner">
            <input type="text" placeholder="Search..." onSelect={()=>searchHandler() } onBlur={() => unSelectHandler()}/>
            <i className="fas fa-search"></i>
            </div>
            
        </div>
    );
}

export default SearchInput;

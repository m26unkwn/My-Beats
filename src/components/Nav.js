import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";

export const Nav = ({setLibraryStatus,libraryStatus}) => {

    const chagneState=()=>{
        setLibraryStatus(!libraryStatus);
 
    }
    return (
        <nav>
            <h1>20zkid</h1>
            <button onClick={chagneState}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

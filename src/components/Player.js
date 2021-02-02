import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";

export const Player = () => {
    return (
        <div className="player" >
            <div className="time-control">
                <p>start Time</p>
                <input type="Range"/>
                <p>End Time</p>
                <div className='play-control'>
                    < FontAwesomeIcon className="skip-back" icon={faAngleLeft} />
                    <FontAwesomeIcon className="play" icon={faPlay} />
                    < FontAwesomeIcon className ="skip-forward" icon={faAngleRight} />
                </div>
            </div>
        </div>
    )
}

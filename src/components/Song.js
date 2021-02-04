import React from 'react';


export const Song = ( {currentSong} ) => {
    return (
        <div className = 'song-container'>
            <img src={currentSong.cover} alt="conver_song"></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}




'use strict';
// global variables
let songs;
let header;
let songsCount;
let allButtons;
const init = () => {
    songs = [
        {
            'title': 'Dirty',
            'artist': 'Me',
            'length': '-',
            'lengthElem': null,
            'location': 'audio/dirty.mp4',
            'audio': null,
        },

        {
            'title': 'SnakeBit',
            'artist': 'Me',
            'length': '-',
            'location': 'audio/Snakebit.mp4',
            'audio': null,
        },
        {
            'title': 'Lead Way',
            'artist': 'Me',
            'length': '-',
            'location': 'audio/leadWay.mp4',
            'audio': null,
        },
        {
            'title': 'Longest Road',
            'artist': 'Me',
            'length': '-',
            'location': 'audio/longestRoad.mp4',
            'audio': null,
        },
    ];
   

    songsCount = songs.length;
    // adds the buttons to the first cell
    addSongRows();
    // Gets the created buttons
    allButtons = document.getElementsByTagName('button');
    header = document.getElementById('page-top');
    header.innerText = "Simply Music";
};
document.addEventListener('DOMContentLoaded', init);
// adds a row and 4 data cells
const addSongRows = () => {
    for (let i = 0; i < songsCount; i++) {
        // gets element by ID then by Tag name
        let tableRef = document.getElementById('table-top').getElementsByTagName('tbody')[0];
        // adds a song row
        let newRow = tableRef.insertRow();
        // adds an html audio element for each song
        let newCell = newRow.insertCell();
        let newAudio = document.createElement('audio');
        newAudio.controls = true;
        newAudio.src = `${songs[i]['location']}`;
        newCell.appendChild(newAudio);
        // new cell for title
        newCell = newRow.insertCell();
        let cellEntry = document.createTextNode(`${songs[i]['title']}`);
        newCell.appendChild(cellEntry);
        // new cell for artist
        newCell = newRow.insertCell();
        cellEntry = document.createTextNode(`${songs[i]['artist']}`);
        newCell.appendChild(cellEntry);
        // cell for length (needs a duration function?)
        newCell = newRow.insertCell();
        cellEntry = document.createTextNode(`${songs[i]['length']}`);
        songs[i].lengthElem = newCell.appendChild(cellEntry);
        // Create audio objects so metadata can load
        addSong( songs[i] );
    }
};
const playSong = evt => {
    //console.log( evt );
    let songIndex = evt.target.id.substring( 5 );
    songs[songIndex].audio.play();
    //console.log( songs[songIndex].audio );
};
const pauseSong = evt => {
    //console.log( evt );
    let songIndex = evt.target.id.substring( 6 );
    songs[songIndex].audio.pause();
};
const addSong = song => {
    // Create a non-dom allocated Audio element
    song.audio = document.createElement('audio');
    // Define the URL of the MP3 audio file
    song.audio.src = song.location;
    // Once the metadata has been loaded, display the duration in the console
    song.audio.addEventListener('loadedmetadata', () => {
        // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
        let duration = song.audio.duration;
        song.length = juration.stringify( parseInt( duration ) ); // Convert the float to Integer, like rounding down.
        song.lengthElem.textContent = song.length;
    }, false);
   
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







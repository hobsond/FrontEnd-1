export function milliToMin(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export function toggleAudio(isPlaying, setIsPlaying){
    let audioPlayer = document.getElementById('audioPlayer');
    isPlaying ? audioPlayer.pause() : audioPlayer.play();
    setIsPlaying(!isPlaying)
    console.log('isPlaying set ' + isPlaying)
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/*                         EXAMPLE 
console.log("Hello");
sleep(2000).then(() => { console.log("World!"); });
*/





// this controls if the server is live or local
// uncomment whichever you want to use

// local server
//export const server = { base:'http://localhost:5000', id: '3' } // local backend

// live server
export const server = { base:'https://spotify-suggestions-backend.herokuapp.com', id: localStorage.getItem('userID') } 


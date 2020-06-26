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
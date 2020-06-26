import {atom} from 'recoil'

const currentSongState = atom({
    key: "currentSong",
    default: {
        id: '7ewwTDsyYPDGtUwcltLsCF',
        artist: 'Still Woozy',
        title: 'Window',
        album: 'Window',
        art: 'images/album-cover.jpg',
        artMedium: 'images/album-cover.jpg',
        audio: 'media/StillWoozy-Window.mp3',
        duration: '142262',
        uri: 'spotify:playlist:67FritYHDbyVOYkMiOLCrn',
        artistUrl: 'https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu', //artist page
        titleUrl: 'https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu', //song page
        albumUrl: 'https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu', //album page
    }
})

const credentialsState = atom({
    key:'credentials',
    default:{ phoneNumber: '', username: '' }
})

const isPlayingState = atom({ key: "isPlaying", default: false })

const queryState = atom({ key:'query', default: '' })


export { currentSongState, isPlayingState, credentialsState, queryState }
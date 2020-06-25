import {atom} from 'recoil'

const currentSongState = atom({
    key: "currentSong",
    default: {
        id: '0H39MdGGX6dbnnQPt6NQkZ',
        artist: 'Still Woozy',
        title: 'Window',
        art: 'images/album-cover.jpg',
        audio: 'https://p.scdn.co/mp3-preview/2f1f53828c68f3a2a6d7391ae6d3d51aa79a9d26?cid=34f0135d39e843f9ac42da7e5780d113',
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


export { currentSongState, isPlayingState, credentialsState }
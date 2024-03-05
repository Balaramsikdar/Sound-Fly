const previous=document.querySelector('#previous');
const play=document.querySelector('#play');
const next=document.querySelector('#next');

const title=document.querySelector('#title');
const image=document.querySelector('#image');

const track=document.createElement('audio');

let index = 0;
let playingSong = false;

let songs = [
    {
        name: 'O Maahi',
        path: 'O Maahi.mp3',
        image: 'audio1.jpg',
    },
    {
        name: 'Pehle Bhi Main',
        path: 'Pehle Bhi Main.mp3',
        image: 'audio2.jpg',
    },
    {
        name: 'Akhiyaan Gulaab',
        path: 'Akhiyaan Gulaab.mp3',
        image: 'audio3.jpg',
    },
    {
        name: 'Ishq Jaisa Kuch',
        path: 'Ishq Jaisa.mp3',
        image: 'audio4.jpg',
    },
    {
        name: 'Aziyat',
        path: 'Aziyat.mp3',
        image: 'audio5.jpg',
    }
];

function loadTrack(index){
    track.src = songs[index].path;
    title.innerHTML = songs[index].name;
    image.src = songs[index].image;
    track.load();
}

loadTrack(index);

function playSong() {
    track.play();
    playingSong = true;
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
    track.pause();
    playingSong = false;
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function nextSong() {
    if(index<songs.length-1){
        index += 1;
        loadTrack(index);
        playSong();
    }
    else
    {
        index=0;
        loadTrack(index);
        playSong();
    }
}

function previousSong(){
    if(index>0){
        index -= 1;
        loadTrack(index);
        playSong();
    }
    else{
        index=songs.length;
        loadTrack(index);
        playSong();
    }
}

function justPlay() {
    if (playingSong == false) {
        playSong();
    }
    else
    {
        pauseSong();
    }
}
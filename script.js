console.log("Welcome to Somify");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Paisa Hai Toh", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
    {songName: "Alone- Alan Walker", filePath: "songs/2.mp3", coverPath: "covers/2.webp"},
    {songName: "Alone-Pt-II- Alan Walker, Ava Max", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "The Nights- Avicil", filePath: "songs/4.mp3", coverPath: "covers/4.png"},
    {songName: "Carnivore- Starset", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Animals- Maroon 5", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Hello World- Alan Walker", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Lily- ALan Walker", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sing Me to sleep- Alan Walker", filePath: "songs/9.mp3", coverPath: "covers/9.jpeg"},
    {songName: "All Falls Down- Alan Walker", filePath: "songs/", coverPath: "covers/10.jpg"},
    {songName: "Tu hi meri shab hai", filePath: "songs/11.mp3", coverPath: "covers/11.webp"},
    {songName: "Ankiyaan Gulab", filePath: "songs/12.mp3", coverPath: "covers/12.webp"},
    {songName: "Aigiri Nandini", filePath: "songs/", coverPath: "covers/13.png"},
    {songName: "Paisa Paisa", filePath: "songs/14.mp3", coverPath: "covers/14.jpeg"},
    {songName: "Tumse Bhi Jyada", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Tum ho mera pyar", filePath: "songs/16.mp3", coverPath: "covers/16.jpeg"},
    {songName: "Asan Nahin Yahan", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Subha hone na de", filePath: "songs/", coverPath: "covers/18.jpg"},
    {songName: "Mann Mera", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Saadi Galli Aaja", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "Allah Maaf Kare", filePath: "songs/", coverPath: "covers/21.jpeg"},
    {songName: "Sunny Sunny", filePath: "songs/", coverPath: "covers/22.jpeg"},
    {songName: "Twist", filePath: "songs/", coverPath: "covers/23.webp"},
    {songName: "Zara Sa", filePath: "songs/", coverPath: "covers/24.jpeg"},
    {songName: "Tere Hokey Rahengay", filePath: "songs/", coverPath: "covers/25.jpeg"},
    {songName: "Bhool Bhulaiyaa", filePath: "songs/", coverPath: "covers/26.jpg"},
    {songName: "Jaane Kyun", filePath: "songs/", coverPath: "covers/27.jpg"},
    {songName: "Har Har Mahadev", filePath: "songs/", coverPath: "covers/28.jpeg"},
    {songName: "Tumse Milne ko dil", filePath: "songs/", coverPath: "covers/29.jpg"},
    {songName: "Perfect- ED Sheeran", filePath: "songs/", coverPath: "covers/30.jpg"},
    {songName: "Ride It- Jav Sean", filePath: "songs/", coverPath: "covers/31.jpg"},
    {songName: "Heer Aasmani", filePath: "songs/", coverPath: "covers/32.jpeg"},
    {songName: "Aao Milo Chalo", filePath: "songs/", coverPath: "covers/33.jpg"},
    {songName: "Bezubaan", filePath: "songs/", coverPath: "covers/34.jpeg"},
    {songName: "Drama Queen", filePath: "songs/", coverPath: "covers/35.jpg"},
    {songName: "Har Har Shambhu", filePath: "songs/", coverPath: "covers/36.jpg"},
    {songName: "Beat it", filePath: "songs/", coverPath: "covers/37.jpeg"},
    {songName: "Mat Aazma Re", filePath: "songs/", coverPath: "covers/38.jpg"},
    {songName: "Ordinary Person", filePath: "songs/", coverPath: "covers/39.jpg"},
    {songName: "Guzarish", filePath: "songs/", coverPath: "covers/40.jpg"},
    {songName: "Hasi(Male Version)", filePath: "", coverPath: "covers/41.jpeg"},
    {songName: "Choomantar", filePath: "songs/", coverPath: "covers/42.jpg"},
    {songName: "Mere Brother ki Dulhan", filePath: "songs/", coverPath: "covers/43.jpeg"},
    {songName: "Ilzaam", filePath: "songs/", coverPath: "covers/44.jpeg"},
    {songName: "Satisfya", filePath: "songs/", coverPath: "covers/45.jpg"},
    {songName: "Bewafa", filePath: "songs/", coverPath: "covers/46.jpg"},
    {songName: "Amplifier", filePath: "songs/", coverPath: "covers/47.jpg"},
    {songName: "Aaja We Mahiya", filePath: "songs/", coverPath: "covers/48.jpg"},
    {songName: "Pata Chalgea", filePath: "songs/", coverPath: "covers/49.jpg"},
    {songName: "Sheep- Alan walker", filePath: "songs/", coverPath: "covers/50.jpg"},
    {songName: "Greenlight- Pitbull", filePath: "songs/", coverPath: "covers/51.jpg"},
    {songName: "International Love- Pitbull", filePath: "songs/", coverPath: "covers/52.jpeg"},
    {songName: "Bloody Mary(slowed and reverb)", filePath: "songs/", coverPath: "covers/53.jpg"},
    {songName: "Love me Like you do", filePath: "songs/", coverPath: "covers/54.jpg"},
    {songName: "System pe system", filePath: "songs/", coverPath: "covers/55.jpg"},
];

const playSong = (index) => {
    songIndex = index;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
};

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=songs.length-1){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = songs.length-1
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

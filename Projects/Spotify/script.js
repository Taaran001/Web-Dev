console.log('JS');

let currentSong = new Audio();
let songs;


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}



async function getSongs(){
    try {
        let a = await fetch("song/")
        if (!a.ok) {
            throw new Error(`HTTP error! status: ${a.status}`);
        }
        let response = await a.text();
        let div = document.createElement("div")
        div.innerHTML = response;
        let as = div.getElementsByTagName("a")
        let songs = []
        for (let i = 0; i < as.length; i++) {
            const element = as[i];
            if (element.href.endsWith(".mp3")) {
                songs.push(element.href.split("/song/")[1])
            }
        }
        return songs
    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];
    }
}

const playMusic = async (track, pause=false)=>{
    try {
        // let audio = new Audio("song/" + track)
        currentSong.src = "song/" + track
        if (!pause) {
            await currentSong.play()
            play.src="img/pause.svg"
        }
        document.querySelector('.songinfo').innerHTML = decodeURI(track)
        document.querySelector('.songtime').innerHTML = "00:00 / 00:00"
    } catch (error) {
        console.error("Error playing music:", error);
    }
}

async function main() {
    try {
        let songs = await getSongs()
        if (songs.length === 0) {
            console.warn("No songs found");
            return;
        }
        playMusic(songs[0], true)
        // console.log(songs);

        let songUL = document.querySelector(".songList").getElementsByTagName('ul')[0]
        for (const song of songs) {
                songUL.innerHTML = songUL.innerHTML+ `<li>
                                <img src="img/music.svg" alt="music">
                                <div class="info">
                                    <div>${song.replaceAll("%20"," ")} </div>
                                    <div>Not me for sure</div>
                                </div>
                                <div class="playnow">
                                    <span>Play Now</span>
                                    <img src="img/play.svg" alt="play" class="invert">
                                </div> </li>`;
        }



        Array.from(document.querySelector('.songList').getElementsByTagName('li')).forEach(e=>{
            e.addEventListener('click', element=>{
                console.log(e.querySelector('.info').firstElementChild.innerHTML);
                playMusic(e.querySelector('.info').firstElementChild.innerHTML.trim());

            })

        })


        play.addEventListener('click', async ()=>{
            try {
                if (currentSong.paused) {
                    await currentSong.play()
                    play.src="img/pause.svg"
                }
                else {
                    currentSong.pause()
                    play.src="img/play.svg"
                }
            } catch (error) {
                console.error("Error with play/pause:", error);
            }
        })








        currentSong.addEventListener('timeupdate', ()=>{
            // console.log(currentSong.currentTime, currentSong.duration);
            if (currentSong.duration && isFinite(currentSong.duration)) {
                document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
                document.querySelector('.circle').style.left=(currentSong.currentTime/currentSong.duration)*100 + "%"
            }
        })

        document.querySelector('.seekbar').addEventListener('click', e=>{
            if (currentSong.duration && isFinite(currentSong.duration)) {
                let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100
                document.querySelector('.circle').style.left = percent + "%";
                currentSong.currentTime = (currentSong.duration)*percent /100
            }
        })


        document.querySelector(".hamburger").addEventListener("click", ()=>{
            document.querySelector(".left").style.left ="0"
        })


        document.querySelector(".close").addEventListener("click", ()=>{
            document.querySelector(".left").style.left ="-120%"
        })


        prev.addEventListener('click', ()=>{
            let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
            console.log(index);
            if ((index-1) >= 0) {
                playMusic(songs[index-1])
            }
        })
        next.addEventListener('click', ()=>{

            let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
            console.log(index);
            if ((index+1) < songs.length) {
                playMusic(songs[index+1])
            }
        })





        document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
            // console.log(e.target.value);
            currentSong.volume = parseInt(e.target.value) / 100
        })


        document.querySelector(".volume>img").addEventListener("click",(e)=>{
           if (e.target.src.includes("volume.svg")) {
                currentSong.volume = 0
                document.querySelector(".range").getElementsByTagName("input")[0].value = 0
                e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            } else {
                e.target.src = e.target.src.replace("mute.svg", "volume.svg")
                currentSong.volume = .10
                document.querySelector(".range").getElementsByTagName("input")[0].value = 10

                    }

        })
    } catch (error) {
        console.error("Error in main function:", error);
    }
}
main()

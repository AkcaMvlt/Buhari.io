function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [

 {
      name:" Al-Fatihah",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/001.mp3",
      duration:""
    },
 {
      name:" Al-Baqarah",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/002.mp3",
      duration:""
    },
 {
      name:"Al-Imran ",
      file:" https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/003.mp3",
      duration:""
    },
 {
      name:" An-Nisa",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/004.mp3",
      duration:""
    },
 {
      name:" Al-Ma'idah",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/005.mp3 ",
      duration:""
    },
 {
      name:"Al-An'am ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/006.mp3",
      duration:""
    },
 {
      name:" Al-A'raf ",
      file:" https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/007.mp3",
      duration:""
    },
 {
      name:" Al-Anfal ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/008.mp3",
      duration:""
    },
 {
      name:"At-Taubah ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/009.mp3 ",
      duration:""
    },
 {
      name:" Yunus ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/010.mp3 ",
      duration:""
    },
 {
      name:" Hood ",
      file:" https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/011.mp3",
      duration:""
    },
 {
      name:" Yusuf",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/012.mp3",
      duration:""
    },
 {
      name:"Ar-Ra'd ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/013.mp3",
      duration:""
    },
 {
      name:" Ibrahim ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/014.mp3 ",
      duration:""
    },
 {
      name:"Al-Hijr ",
      file:" https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/015.mp3",
      duration:""
    },
 {
      name:" An-Nahl",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/016.mp3",
      duration:""
    },
 {
      name:" Al-Isra",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/017.mp3",
      duration:""
    },
 {
      name:" Al-Kahf",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/018.mp3 ",
      duration:""
    },
 {
      name:"Maryam ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/019.mp3 ",
      duration:""
    },
 {
      name:"Ta­Ha ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/020.mp3 ",
      duration:""
    },
 {
      name:"Al-Anbiya ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/021.mp3",
      duration:""
    },
 {
      name:"Al-Hajj ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/022.mp3 ",
      duration:""
    },
 {
      name:"Al-Mu'minun ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/023.mp3 ",
      duration:""
    },
 {
      name:" An-Nur",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/024.mp3 ",
      duration:""
    },
 {
      name:" Al-Furqan",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/025.mp3",
      duration:""
    },
 {
      name:"Ash-Shu'ara ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/026.mp3",
      duration:""
    },
 {
      name:" An-Naml",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/027.mp3",
      duration:""
    },
 {
      name:"Al-Qasas ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/028.mp3",
      duration:""
    },
 {
      name:" Al-'Ankabut",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/029.mp3",
      duration:""
    },
 {
      name:" Ar­Room",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/030.mp3",
      duration:""
    },
 {
      name:" Luqman",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/031.mp3",
      duration:""
    },
 {
      name:" As­Sajdah",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/032.mp3 ",
      duration:""
    },


 {
      name:"Al­Ahzab ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/033.mp3",
      duration:""
    },

 {
      name:"Saba ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/034.mp3 ",
      duration:""
    },

 {
      name:"Fatir ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/035.mp3 ",
      duration:""
    },


 {
      name:"Ya­Sin ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/036.mp3",
      duration:""
    },

 {
      name:"As-Saffat ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/037.mp3",
      duration:""
    },
 {
      name:"Sad ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/038.mp3",
      duration:""
    },
 {
      name:" Az-Zumar",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/039.mp3",
      duration:""
    },
 {
      name:"Ghafir ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/040.mp3",
      duration:""
    },
 {
      name:"Fussilat ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/041.mp3 ",
      duration:""
    },
 {
      name:"Ash-Shura ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/042.mp3",
      duration:""
    },
 {
      name:"Az-Zukhruf ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/043.mp3",
      duration:""
    },
 {
      name:"Ad-Dukhan ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/044.mp3",
      duration:""
    },
 {
      name:"Al-Jathiya ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/045.mp3 ",
      duration:""
    },
 {
      name:" Al-Ahqaf",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/046.mp3",
      duration:""
    },
 {
      name:" Muhammad",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/047.mp3 ",
      duration:""
    },
 {
      name:"Al-Fath ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/048.mp3",
      duration:""
    },
 {
      name:"Al-Hujurat ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/049.mp3",
      duration:""
    },
 {
      name:"Qaf ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/050.mp3 ",
      duration:""
    },
 {
      name:" Az-Zariyat",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/051.mp3",
      duration:""
    },
 {
      name:"At-Tur ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/052.mp3",
      duration:""
    },
 {
      name:"An-Najm ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/053.mp3",
      duration:""
    },
 {
      name:"Al-Qamar ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/054.mp3 ",
      duration:""
    },
 {
      name:"Ar-Rahman ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/055.mp3 ",
      duration:""
    },
 {
      name:"Al-Waqi'ah ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/056.mp3 ",
      duration:""
    },
 {
      name:"Al-Hadid ",
      file:"https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/057.mp3",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },
 {
      name:" ",
      file:"https: ",
      duration:""
    },



 {
      name:"  ",
      file:" ",
      duration:""
    }

  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }
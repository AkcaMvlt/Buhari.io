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
      name:"Ayırmayın Yari Benden ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eb16cf00ef66793fdb6666e09dba8e6a.mp3 ",
      duration:""
    },

    {
      name:"Bana Neler Vadettin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/902c08ee9fdd6e29344ae63b5665dbc8.mp3",
      duration:""
    },


    {
      name:"Yalanmiş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/403fb29d90144de826afed7b9e85c4c0.mp3",
      duration:""
    },
 {
      name:"Hayırsız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0ec7475bee001e0656f50c16b5f68756.mp3",
      duration:""
    },
 {
      name:"Gelde Kurtar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cf88cf746843dcc7f6669a0f6a6eed6b.mp3",
      duration:""
    },
 {
      name:"Bilmiyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/079c2f21682d36c8b81b31df36e3d1e3.mp3",
      duration:""
    },
 {
      name:"Kör Olası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60252acd1ba5bad891a746fb42b3d526.mp3",
      duration:""
    },
 {
      name:"Tutkun Olurum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/66b2d59be7ea0fbd488e2a069123f19f.mp3",
      duration:""
    },
 {
      name:"Yanlış Yaptın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60662ad45761e0e65550298f32414e60.mp3",
      duration:""
    },
 {
      name:"Bilmiyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/079c2f21682d36c8b81b31df36e3d1e3.mp3",
      duration:""
    },
 {
      name:"İstemedimki",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7e035bef24bc4171d1befb981284ecc8.mp3",
      duration:""
    },
 {
      name:"Aman Başım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bca7a685610029be0c90a7be7414514e.mp3",
      duration:""
    },
 {
      name:"Allah",
      file:"https://cdn.muzikmp3indir.com/mp3_files/169793c6a63f11a35ec69e1c67f243bc.mp3",
      duration:""
    },
 {
      name:"Nasıl Unutayım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/687c86013810b70a97d5f7ce81042973.mp3",
      duration:""
    },
 {
      name:"Sevdalım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/06d5e446cb45bfe42a0cfac276e3a075.mp3",
      duration:""
    },
 {
      name:"Gelde Kurtar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cf88cf746843dcc7f6669a0f6a6eed6b.mp3",
      duration:""
    },
 {
      name:"Vay Başına Gelenler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8f6d0e8bd3793ee9fa6dcd33bc029854.mp3",
      duration:""
    },
 {
      name:"Alışkınım Fırtınaya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/747bb11ce4b297987d8e0cf5fb23f52f.mp3",
      duration:""
    },
 {
      name:"Korktuğum Başıma Geldi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f7a984e969c3753c5682fca5b5430143.mp3",
      duration:""
    },
 {
      name:"Eller Çaldı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/70b715edb33502998bd49c9c1dbc4c07.mp3",
      duration:""
    },
 {
      name:"Ayırmayın Yari Benden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eb16cf00ef66793fdb6666e09dba8e6a.mp3",
      duration:""
    },
 {
      name:"Oh Canıma Deysin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/695d64ba6554d0aa63ecde677a3e15ba.mp3",
      duration:""
    },
 {
      name:"Askerim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1c4d935b14a3875aac52dc53727853ca.mp3",
      duration:""
    },
 {
      name:"Annem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50e55f4f8171a094e884848b3d68deae.mp3",
      duration:""
    },
 {
      name:"Askerde Şimdi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3f38ec667b6c86086127d012ea0268a7.mp3",
      duration:""
    },
 {
      name:"Yalnızım Anne",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7b46d608463251875dc5a365101ba538.mp3",
      duration:""
    },
 {
      name:"Yalanmış (Ufuk Kaplan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/195c2cf44f778d15d43b3b97b485efc8.mp3",
      duration:""
    },
 {
      name:"Yalan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ac0c8e78de09092a6e7e9a47a29cf76d.mp3",
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
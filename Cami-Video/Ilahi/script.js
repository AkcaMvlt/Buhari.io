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
      name:"♫ Kundakta İmiş Gibi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c551a69d511840425baa20f1fff072e6.mp3 ",
      duration:""
    },

    {
      name:"♫ Abdulbaki ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/240c52db63a331ab742f5a785100b3b4.mp3",
      duration:""
    },


    {
      name:"♫ Geylani ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/58e916e150e9ae6af0da4a3918b8567d.mp3 ",
      duration:""
    },
 {
      name:"♫ Açıldı Cennet Kapısı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/14be9a550ff2dd9362dd2fe09713990a.mp3 ",
      duration:""
    },
 {
      name:"♫ Açılsında Yollar Sana Geleyim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/913f3f6aa656ef5eee53d23b657b1bf6.mp3",
      duration:""
    },
 {
      name:"♫ Adem Gibi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4254a94dc910798f9590331986418af7.mp3 ",
      duration:""
    },
 {
      name:"♫ Adı Vardır ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/282cb3ea72bcab4976b1fa96917fe6fa.mp3 ",
      duration:""
    },
 {
      name:"♫ Affet Yarap ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1adf4b3fd9a1311db56c017a769b2d1d.mp3 ",
      duration:""
    },
 {
      name:"♫ Ağla Gönül ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e37c0b4a623035442017e296ea252a6d.mp3 ",
      duration:""
    },
 {
      name:"♫ Ağlar Yakup ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1aaf9c8820986af4ed50d71b02f28ac9.mp3 ",
      duration:""
    },
 {
      name:"♫ Ağlıyor Kudüs ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/baf9e45907bd2622ce7119844088cdbe.mp3 ",
      duration:""
    },
 {
      name:"♫ Aldanma Dünyaya ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a31169c1f603c28849584d1f16c6ed34.mp3 ",
      duration:""
    },
 {
      name:"♫ Alem Sever Muhammedi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ec82ea542d4a1ccc4c0dec20bfebac7e.mp3 ",
      duration:""
    },
 {
      name:"♫ Alemlerin Sultanı  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c2840c09276495abf7082b4ea7925712.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah de Döne Döne ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9c491ffc27a425a67fe388558e3f144a.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah De Kalbim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bbb050b1660e842f05ae6e5749c3e68b.mp3",
      duration:""
    },
 {
      name:"♫ Allah Demeyince ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e8f2bda7bdb3a3d000268a6c0a83d783.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah Der ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/55f5186e2c056cde5cd4a9cabf72810f.mp3 ",
      duration:""
    },
 {
      name:"♫ Allah Diye ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fca3058007ffbfd44ce438076c6a5fe6.mp3",
      duration:""
    },
 {
      name:"♫ Allahümme Salli ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/193b667ba8bd55beee50a7c4a73f1d60.mp3 ",
      duration:""
    },
 {
      name:"♫ Aman Allahım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/23c0d344bc5fb86b04a075d2775b31c9.mp3 ",
      duration:""
    },
 {
      name:"♫ Aman Çeşme ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aman-cesme-H2YRP0AFfL-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Anam Anam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9fe2fa4fbce8030c352106e596c5754c.mp3",
      duration:""
    },
 {
      name:"♫ Anar Bu Gece",
      file:"https://cdn.muzikmp3indir.com/mp3_files/17e4c4b9f96ff92ff730cfefbb8c6b4c.mp3 ",
      duration:""
    },
 {
      name:"♫ Annem",
      file:" https://cdn.muzikmp3indir.com/mp3_files/91b0e237d139b80fec3001af8185c905.mp3",
      duration:""
    },
 {
      name:"♫ Arafat",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e0bbf693681ffb629bff6dad3802c9f3.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşığız Muhammede ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d8d2ed279b46c814eecdd524ee058671.mp3 ",
      duration:""
    },
 {
      name:"♫  Aşık Olan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5eb0490414ab095d760d5a002a65df23.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşk Çeşmesi ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/91e58169fbfd60be64b1b50038d7fc43.mp3",
      duration:""
    },

 {
      name:"♫ Aşka Gelerek ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5edc97717d1ff15d48ce807efb1bc817.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşkın İle Aşıklar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2bf09f6d5f0982f439d010d71a24145f.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşkın İle Meydane ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2914e115493465ccd7c4ef735f4bba9e.mp3 ",
      duration:""
    },
 {
      name:"♫ Avrupada",
      file:"https://cdn.muzikmp3indir.com/mp3_files/38e420b6a624abc50f9753db53366039.mp3 ",
      duration:""
    },
 {
      name:"♫ Ay Doğdu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bda036acb55db40448d06f9091b2540d.mp3",
      duration:""
    },
 {
      name:"♫ Ay Parçası ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b387531fb1badb6b37942edbfb172e1b.mp3 ",
      duration:""
    },
 {
      name:"♫ Bakın Seyda Gülüne ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0b7281168f34ebc6c22b9551ac61502b.mp3 ",
      duration:""
    },
 {
      name:"♫ Baş Örtüsü ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bas-ortusu-vs3ZOSLFMK-0.mp3",
      duration:""
    },
 {
      name:"♫ Başlayalım Zikre ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/555b9b363b3037bf8d42e72b6ab8ad9d.mp3 ",
      duration:""
    },
 {
      name:"♫ Ben de Geleyim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/379143ca88703e4da8c4bf505d73f843.mp3",
      duration:""
    },
 {
      name:"♫ Benim Sultanım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5648eaac7db09cb059394e5bb8133bf4.mp3",
      duration:""
    },
 {
      name:"♫ Beytullahın Etrafında ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2164ca6c0bf6e3744dc87588a5d8b72d.mp3 ",
      duration:""
    },
 {
      name:"♫ Bilir Abdulbakiyi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1db996c49aaeec4eb9d9c259e12ac13d.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Gün Gelin Dese Hak ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a7b675495ebcd9097c447f2c7dd28148.mp3",
      duration:""
    },
 {
      name:"♫ Bu Dünyanın Gurbetçisiyiz ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b4777e90038b3dcf9433be009d66f4e4.mp3 ",
      duration:""
    },
 {
      name:"♫ Bugün Ben Şahımı Gördüm ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fadc0f5c105f4d38ccaa99032c1ef085.mp3",
      duration:""
    },
 {
      name:"♫ Bülbül Gibi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d59334455db374a4c54aed8ccca56ad6.mp3 ",
      duration:""
    },
 {
      name:"♫ Bülbüller ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/83df7698ea49e17bfc169e2662f28078.mp3 ",
      duration:""
    },
 {
      name:"♫ Çağır Geleyim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/18e6989a17cfc153897cd25e237cc93e.mp3 ",
      duration:""
    },
 {
      name:"♫ Can Muhammed Mustafa",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8a7c21f7946c7a4d49a14c104c0ba4cc.mp3 ",
      duration:""
    },
 {
      name:"♫ Cananlar var ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/be2760151da47f3bfaf32768001cae3d.mp3 ",
      duration:""
    },
 {
      name:"♫ Canım Anam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fb7a42833dff509e71a1fc01099e69c4.mp3 ",
      duration:""
    },
 {
      name:"♫ Çare Varmıdır ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/861ae52ed3b345e9864507acd33ab24f.mp3 ",
      duration:""
    },
 {
      name:"♫ Çek Zinciri ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a28ee8ba7065b76b6acd8efe5eb0f2ba.mp3 ",
      duration:""
    },
 {
      name:"♫ Cem Olmuş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3c08eee36996f638315c404504426a28.mp3 ",
      duration:""
    },
 {
      name:"♫ Cemalullah ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8e175058e9575ebc3bc49189f28df5c3.mp3",
      duration:""
    },
 {
      name:"♫ Cennetine Cennetine ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4caf1943a5b751b9d98f0029bd8a92ef.mp3",
      duration:""
    },
 {
      name:"♫ Çıkar Gider ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/156ae3f9961c1b81f0f56c66ac9b30ae.mp3 ",
      duration:""
    },
 {
      name:"♫ Çıktık Kabe Yoluna ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed0824243d2db96a673c9979486fea8f.mp3 ",
      duration:""
    },
 {
      name:"♫ Çok Pişmanım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ef4cbb057cc2d5f0e9a21f377e166654.mp3 ",
      duration:""
    },
 {
      name:"♫ Çöllerde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/275342606bbb5b21eb0e9151603586e5.mp3 ",
      duration:""
    },

 {
      name:"♫ Demedim mi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e6307ca2c8fd8a9e34cd3af4b2e2f831.mp3 ",
      duration:""
    },
 {
      name:"♫ Derde Derman ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8735118765d08b9fd4953e05e878eaa0.mp3 ",
      duration:""
    },
 {
      name:"♫ Dermanımsın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/849da2bd3fd0714611cbd0288c600706.mp3",
      duration:""
    },
 {
      name:"♫ Dervişin Zikri ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/63b0eb9b15f2040f09996963192ccf5d.mp3 ",
      duration:""
    },
 {
      name:"♫ Dilim Tutulu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ec5c22e968b9162bc6c15b7e88e89deb.mp3 ",
      duration:""
    },
 {
      name:"♫ Dolaşırım Avare",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc825bc738aeef18ad520e819007d6d9.mp3 ",
      duration:""
    },
 {
      name:"♫ Doldur Sofi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/87c11db719a684820132317a00ae073a.mp3 ",
      duration:""
    },
 {
      name:"♫ Döndür Allahım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dondur-allahim-K0zMSxJZNI-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Döne Döne",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5ebdd79093e17a5c675f6e0f6d68ee4e.mp3 ",
      duration:""
    },
 {
      name:"♫ Döner Hacılar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/192b1832af76255580625a956a61bf4d.mp3 ",
      duration:""
    },
 {
      name:"♫ Dünya Dediğin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60ca2397442e69bf8435cef15758f95f.mp3 ",
      duration:""
    },
 {
      name:"♫ Durmaz Yanar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a02a2820a13c279f27c317f9e0ad8a1f.mp3 ",
      duration:""
    },
 {
      name:"♫ Ebeda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/14881986d36de21696d401ec2660133a.mp3 ",
      duration:""
    },
 {
      name:"♫ Ebu Bekir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/64d969c8b818748a1d432db4bea12dd6.mp3 ",
      duration:""
    },
 {
      name:"♫ Efendimin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3f11e0fadf4fea1e819f4f340e4d3bff.mp3",
      duration:""
    },
 {
      name:"♫ El Konyevi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bbb268ca93c56e1edcceffe5add31c4e.mp3",
      duration:""
    },
 {
      name:"♫ Erler Demine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7ddb6faf99f59a1a3b7c4158f94eece3.mp3 ",
      duration:""
    },
 {
      name:"♫ Ey Nebi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f3b0c667122eddb64ceadc09d585971b.mp3 ",
      duration:""
    },
 {
      name:"♫ Ey Sultanım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8bfac5e335a67873879e9dc53ae8b804.mp3 ",
      duration:""
    },
 {
      name:"♫ Ezan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e47b9dac0c7eefca2f0dfeae22c75384.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelenler Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2c5108c3a20cd632e32b07cdeed1b7aa.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelir Fatıma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/914453f922a9e4d20b6f8a4ccc4d0f2a.mp3 ",
      duration:""
    },
 {
      name:"♫ Getirdiler Burağı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d9a82f30cdadca4311245c2f533f052a.mp3",
      duration:""
    },
 {
      name:"♫ Gidiyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e6598f3dbf789cad37813a840d407484.mp3 ",
      duration:""
    },
 {
      name:"♫ Gitmem Kapıdan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/18cbcc0c987174b1cc25f646557d7190.mp3 ",
      duration:""
    },
 {
      name:"♫ Gönül Bahçesinde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9e04f6b7f8e14f3d9e0e96187b0dd8ef.mp3 ",
      duration:""
    },
 {
      name:"♫ Gönül Sarayım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/96e0f97cff74e4283a6dbd5e6f9bd4a1.mp3",
      duration:""
    },
 {
      name:"♫ Gönül Şehrim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f8a7fb25e62f40d5fd8a7dd35d7901d3.mp3 ",
      duration:""
    },
 {
      name:"♫ Gönüller Sultanı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/67caa14a314997560b78a499e6889ee4.mp3",
      duration:""
    },
 {
      name:"♫ Gör Nebi Sultan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f4087753a312f108bf2cf76e98c11700.mp3 ",
      duration:""
    },
 {
      name:"♫ Göremedim Muhammedi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e6ec20e323b0b933eb1d51eaf9d679d7.mp3 ",
      duration:""
    },
 {
      name:"♫ Görmez misin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4c20931865c6e0527f098863fa0d89d7.mp3",
      duration:""
    },
 {
      name:"♫ Gözüne Yazık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e299e0de996f31844dc016b7dcbb7fdc.mp3 ",
      duration:""
    },
 {
      name:"♫ Hak Yarap",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f69ef367fc16ddb556ee23b23ca21b39.mp3 ",
      duration:""
    },
 {
      name:"♫ Hakk'a Aşık Olanlar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2b87b9572eb12128165868f5980290e9.mp3",
      duration:""
    },
 {
      name:"♫ Halkayı Zikir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3f4f3686ad2a4934ccbd32d1f3a1ddb7.mp3 ",
      duration:""
    },
 {
      name:"♫ Gidelim Seydaya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eb0c0f3c81ec3737c13ee2ce122a4517.mp3 ",
      duration:""
    },
 {
      name:"♫ Himmet Eyle",
      file:"https://cdn.muzikmp3indir.com/mp3_files/40487577bd2750b635786e574f271cd6.mp3 ",
      duration:""
    },
 {
      name:"♫ Kabul Eder Misin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b1e96133b92432aff62f5366a9865be3.mp3 ",
      duration:""
    },
 {
      name:"♫ Kaldık Zulmet İçinde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/kaldik-zulmet-icinde-aXmc0SWBh8-0.mp3 ",
      duration:""
    },

 {
      name:"♫ Kapına Geldim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/46478fae2e5f4cba6cc862c478fb5716.mp3 ",
      duration:""
    },
 {
      name:"♫ Kendine Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f48e4b92da382f3a0d5520b8200f96d7.mp3 ",
      duration:""
    },

 {
      name:"♫ Küle Döndüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/43fec61bb2f4e11c0d7079b863d2b3dc.mp3",
      duration:""
    },

 {
      name:"♫ Medinem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f91ba6d02d1d5b80790a28ab796e20b8.mp3 ",
      duration:""
    },

 {
      name:"♫ Merhaba Ya Merhaba",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d90c2a16e6f4cc0bab1b958f2b7577ef.mp3 ",
      duration:""
    },

 {
      name:"♫ Muin Allah",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ec998d5c3e07391a6be7658fc92ccbcd.mp3",
      duration:""
    },

 {
      name:"♫ Namazını Kıl",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cfb6a6be041770470cd847a919aadc84.mp3 ",
      duration:""
    },

 {
      name:"♫ Şehitler Ölmez",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c58da9c143551b074300de1f94f8ef4b.mp3 ",
      duration:""
    },

 {
      name:"♫ Selamun Aleyküm Ve Aleyküm Selam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f4c4032a3a48541776c1f5af0321415a.mp3",
      duration:""
    },

 {
      name:"♫ Şu Kabirler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/acbbe851c25adb8071c14b5024b41fe3.mp3 ",
      duration:""
    },

 {
      name:"♫ Şükür Yarab",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c301d2ec651ff437c5b935d5374283c4.mp3 ",
      duration:""
    },
 {
      name:"♫ Sultan Geliyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/382878e1408d323811b9b11be03a9292.mp3 ",
      duration:""
    },
 {
      name:"♫ Taleal Bedru",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d21ccdbc89310c4542549d90fbe7ef7d.mp3 ",
      duration:""
    },
 {
      name:"♫ Tesbih Elimde",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d9e775d97556f2321db8ce0cef32e0e5.mp3",
      duration:""
    },
 {
      name:"♫ Vadesi Dolanla",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ce9384dd2fb5ce4c7bc553294e0be0f2.mp3 ",
      duration:""
    },
 {
      name:"♫ Ya Hu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/35005164af5bba4cfaa43f881a44d872.mp3",
      duration:""
    },
 {
      name:"♫ Yalancısın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1048f5118a2b8c89163069df1fc36086.mp3",
      duration:""
    },
 {
      name:"♫ Yanmadan",
      file:" https://cdn.muzikmp3indir.com/mp3_files/473c44bad9d241e3141a9552b90ad452.mp3",
      duration:""
    },
 {
      name:"♫ Yana Yana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/17428afc817d3f759b1d8a2328898e66.mp3 ",
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
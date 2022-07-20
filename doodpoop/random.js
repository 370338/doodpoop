function test() {
          
  const possibleVideos = ["index2.html", "index3.html", "index4.html", "index5.html", "index6.html", "index7.html", "index8.html","index9.html", "index10.html", "index11.html"];
  const randomVideo = possibleVideos[Math.floor(Math.random() * possibleVideos.length)];

  window.location.href = randomVideo;
}


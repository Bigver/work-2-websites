function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  var imgContainer = document.querySelector(".expose"),
  imgSeq = document.querySelectorAll(".shuffle img"),
  i = 1;
  
  imgContainer.classList.remove("expose");
  imgContainer.classList.add("webanim");
  
  function racknstack() {
    Array.prototype.forEach.call(imgSeq, function(photo) { 
          setTimeout(function(){ 
              photo.style.position = "absolute";
              photo.style.width = getRandom(33,45)+"%";
              photo.style.left = getRandom(-5,65)+"%";
              photo.style.top = getRandom(-6,60)+"vh";
              var animate = photo.animate([
                  { opacity: '0', transform: 'rotate('+getRandom(-12,12)+'deg) scale(1.2)', boxShadow: '0 0 12px 12px rgba(0,0,0,.3)' },
                  { opacity: '1', transform: 'rotate('+getRandom(-8,8)+'deg)', boxShadow: '0 0 6px 6px rgba(0,0,0,.3)' }
                ], {
          duration: 2000,
          fill: 'forwards'
        });                    
      }, 1800*i)
      i++;
    })
   }
   
  imagesLoaded(imgSeq, racknstack);
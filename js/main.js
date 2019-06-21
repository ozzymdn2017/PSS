//Responsive Nav
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 580 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 580 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

//Responsive Slider
(function() {
  var slider = function() {
    var backImg = [];
    backImg[0] =
      "/dist/img/IMG_0025.jpeg";
    backImg[1] =
      "/dist/img/IMG_2370.jpeg";
    backImg[2] =
      "/dist/img/IMG_2845-1.jpg";

    var i = 0;
    var x = backImg.length - 1;
    var int = 3500;

    interval = setInterval(showNext, int); // hoist?

    var elements = {
      slider: document.querySelector(".slider"),
      btn: {
        left: document.querySelector(".btnLeft"),
        right: document.querySelector(".btnRight")
      }
    };

    var startInterval = function() {
      interval = setInterval(showNext, int);
    };

    var stopInterval = function() {
      clearInterval(interval);
    };

    var attachEvents = function() {
      elements.btn.left.onclick = function() {
        showPrevious();
      };
      elements.btn.right.onclick = function() {
        showNext();
      };
      elements.slider.addEventListener("mouseenter", stopInterval);
      elements.slider.addEventListener("mouseleave", startInterval);
    };

    var changeImg = function() {
      elements.slider.style.backgroundImage = "url(" + backImg[i] + ")";
    };

    var initialize = (function() {
      attachEvents();
      changeImg(i);
    })();

    var showPrevious = function() {
      i <= 0 ? (i = 3) : i--;
      changeImg(i);
    };

    var showNext = function() {
      i >= x ? (i = 0) : i++;
      changeImg(i);
    };
  };

  slider();
})();
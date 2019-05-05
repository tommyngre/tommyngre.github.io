var bg = document.getElementById('bg');
var scene = document.getElementById('wrap');
// height of #wrap is 282px when rendered
var clientHeight = window.innerHeight;
var wrapOffset = .3 * (clientHeight - 282)
var parallaxMain;

let portfolio = [
  {
    name: 'Toger Trivia',
    description: "A slick, timed trivia game currently loaded with nonsense questions.",
    url: 'https://tommyngre.github.io/TriviaGame/',
    image: './gallery/Trivia.png',
  },
  {
    name: 'Legendary One-Up',
    description: "A tongue-in-cheek fighting game inspired by the oneupsmanship of co-workers.",
    url: 'https://tommyngre.github.io/week-4-game/',
    image: './gallery/RPG.png',
  },
  {
    name: 'My Reading List',
    description: "A full stack 'to-do'-type app built with node, express, handlebars, which reads and writes entries to a JawsDB.",
    url: 'https://blooming-beyond-98044.herokuapp.com/',
    image: './gallery/reading.png',
  },
  {
    name: '"Corporate Agenda In A Box"',
    description: "A product page for an aspiring subscription wellness box business, built with html/css/jquery.",
    url: 'https://corporateagendainabox.github.io/',
    image: './gallery/corporateagendainabox.png',
  },
  {
    name: 'Ultimate Match Survey',
    description: "A survey app built with node and express, which compares a user's responses to a survey with other users in the database, in order to find a 'match.'",
    url: 'https://powerful-brushlands-13053.herokuapp.com',
    image: './gallery/survey.png',
  },
  {
    name: "Giphy Search",
    description: "A nifty front-end for the Giphy API.",
    url: 'https://tommyngre.github.io/giphy-api-app/',
    image: './gallery/giphy.png',
  },
  {
    name: "Who Hangin?",
    description: "An irreverant take on hangman, where correctly guessing 'who hangin?' wins the game.",
    url: 'https://tommyngre.github.io/Hangman-Game/',
    image: './gallery/hangman.png',
  },
  {
    name: "Listen Hear",
    description: "a local music & dining app. spotify users can enter a zip, then preview nearby music acts performing that night. ",
    url: 'https://tommyngre.github.io/listen-hear/',
    image: './gallery/listenhear.png',
  }
]

function randomColor() {
  let r = Math.floor(Math.random() * 255)
  return r;
}

//risky but fun
function assignRandomColor() {
  let init = [1, 1, 1];
  let rgb = init.map(element => element * randomColor());
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`;
}

//this was more fun when font was monotype. now, eh.
function getDots(whichLink) {
  let dot = "&nbsp";
  let dots = "";
  let dotsNeeded = 12 - whichLink.length - 3;
  for (let i = 0; i < dotsNeeded; i++) {
    dots = dots + dot;
  }
  return `<span>${dots}</span>`;
}

function buildLink(whichLink) {
  let dots = getDots(whichLink);
  let html = `<span id="${whichLink}" data-name="${whichLink}" class="display-table load-section" style="color:${assignRandomColor()}">&lt;${whichLink}${dots}&gt;</span>`
  return html;
}

function getDiv(i, aboutmePos, portfolioPos) {
  let div = $('<div data-depth="0.2" class="display-table row animated bounce">')
  let html;
  switch (i) {
    case aboutmePos:
      html = buildLink("ABOUT");
      break;
    case portfolioPos:
      html = buildLink("PORTFOLIO");
      break;
    default:
      $(div).addClass('nuthin')
      html = `<span class="display-table" style="color:${assignRandomColor()}">&lt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>`
      break;
  }
  $(div).html(html);
  return div;
}

function loadingDialog() {
  $('#loading-dialog').addClass('bounce').css('display', 'table');
  //determine how many links
  ///will fit on pg w/o scrolling
  let dh = $('#loading-dialog').outerHeight(true) + $('#icons').outerHeight(true);
  let wh = window.innerHeight;
  let ww = window.innerWidth;
  let whByDh = 2; //Math.floor((wh - dh) / dh) - 1;

  let i = 0; //link position
  let t = 400; //speed links are drawn
  let ti = t; // initial t

  let aboutMePos = Math.floor(Math.random() * whByDh);
  let portfolioPos = Math.floor(Math.random() * whByDh);

  //make sure About and Portfolio not assigned same 'i'
  if (aboutMePos == portfolioPos) {
    do {
      portfolioPos = Math.floor(Math.random() * whByDh);
    } while (aboutMePos == portfolioPos)
  }

  do {
    let div = getDiv(i, aboutMePos, portfolioPos);

    setTimeout(function () {
      $('#loading-container').append($(div).clone())
    }, t);

    t = ti + t;
    i++;
  } while (i < whByDh);

  setTimeout(function () {
    $('#loading-container').append(`<div data-depth="0.2" id="signature" class="display-table row">~ <a id="hire-me" href="mailto:tommyn.gre@gmail.com"><b>HIRE </b><i class="fas fa-mouse-pointer"></i></a> TOMMY GREENFIELD ~</div>`);
  }, (i + 1) * ti);

}

function doParallaxMain() {
  parallaxMain = new Parallax(scene, {
    invertX: false,
    invertY: false,
  });
  scene.style.pointerEvents = "auto";

}

$(document).ready(function () {
  //vertical align
  bg.style.marginTop = (wrapOffset > 0) ? wrapOffset + "px" : "0px";

  loadingDialog();

  if (window.innerWidth > 600) {
    doParallaxMain()
  }

});

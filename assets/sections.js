var bg = document.getElementById('bg');
var sideScene = document.getElementById('loading-container');
var parallaxSection;

function getSectionContent(section) {
  let html = '';

  switch (section) {
    case "#ABOUT":
      html += `
      <div style="width:1px;color:white;padding-bottom:20px"></div>
      <ul class="sm-txt">
        <li>Grew up in Chicago suburbs</li>
        <li>Undergraduate at UW-Madison</li>
        <li>5+ years as <b>QA and Technical Support Engineer</b> on the MyChart team at <a class="underline-link" href="https://www.epic.com/" style="color:${assignRandomColor()}"><b>Epic</b></a>, an enterprise healthcare software vendor in Verona, Wisconsin. (MyChart is Epic's web and mobile application for patients.)</br>
        <li>Feb/2017 until Nov/2018 - <b>Senior EDA Analyst</b> at <a class="underline-link" href="https://www.labcorp.com/" style="color:${assignRandomColor()}"><b>LabCorp</b></a>, a clinical laboratory network headquartered in Burlington, North Carolina</li>
        <li>Feb/2018 until Aug/2018 - <b>Full Stack Web Dev</b> program through UNC Chapel Hill and Trilogy Education Services 
        <li>Since Dec/2018 - <b>Senior Application Analyst</b> at <a class="underline-link" href="https://www.dukehealth.org/" style="color:${assignRandomColor()}"><b>Duke</b></a> on its health system's <a class="underline-link" href="https://www.dukemychart.org/" style="color:${assignRandomColor()}"><b>MyChart</b></a> web and mobile applications.
      </ul> 
      `
      return html;
      break;

    case "#baby":
    html+=`  <div id="bg-baby" class="sm-txt" style="margin-top: 0px;">

    <div id="wrap" class="row">
      <div class="row">
        <div id="section-wrap" class="display-table animatedFast" style="margin: 5px auto;">
          <div id="sec">
            <div class="baby">
              <div style="width:1px;color:white;padding-bottom:20px"></div>
              <div>
                Wow, you really visited our page! Thank you!</div>
              <div>
                Grace and I are really excited to be expecting our second (son!) in October!</div>
              <div>
                We're really fortunate to be in the position where we are not in great need of baby supplies - 
                because our families and friends were so generous with Wylie, because Wylie will be so generous with his hand-me-downs,
                and because we try to be minimalist consumers (relativley
                <i class="far fa-laugh-wink"></i>).</div>
              <div>
                Still, if you visited because you're wondering how you can help support and celebrate the little one,
                here are some ideas:
              </div>
              <ul>
              <li>
              <b>For toys</b>, we are trying to steer clear of electronics - and many of you are aware
              the Greenfields are set for life with Cabbage Patch dolls
              <i class="far fa-grin-tongue-squint"></i>
            </li>
            <li>
              <b>For books</b>, we don't discriminate against used books, if you have old favorites,
              and are most excited about "morality tales" like fables and fairy tales - books that teach values.
            </li>
            <li>
              <b>For clothes</b>, we are pretty set by way of Wylie!
            </li>
              </ul>
              <div style="width:1px;color:white;padding-bottom:20px"></div>
    
              <div>
                Thank you thank you thank you for thinking of us!
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    <!-- <script src="https://use.fontawesome.com/releases/v5.0.10/js/all.js"></script> -->
    <script src="./assets/main.js"></script>
    <script src="./assets/sections.js"></script>
    
    </div>`;
    return html;
    break;

    case "#PORTFOLIO":
      portfolio.forEach(project => {

        html += `
        <div class="sm-txt t-card">
          
          <div class="row t-card-pad">
          <div class="obscure"></div>

            <div class="col l12 xl8">
            <p class="t-card-title center-align"><a class="plain-link" target="_blank" href="${project.url}">${project.name}</a></p>  
            <p class="t-card-desc">${project.description}</p>
            </div>
          
            <div class="col l12 xl4 proj-image-wrapper">
              <a class="valign-wrapper" href="${project.url}" target="_blank">
                <img alt="${project.name} gif" class="proj-pic" src="${project.image}">
              </a>
            </div>

          </div>
        </div>
        `

      });
      return html;
      break;

    default:
    //nothin
  }

}

function adjustParallax() {
  parallaxSection = new Parallax(sideScene, {
    invertX: false,
    invertY: false,
  });

  var c = sideScene.children;
  var i;
  for (i = 0; i < c.length; i++) {
    c[i].style.position = "";
    c[i].style.display = "";
    // c[i].style.backgroundColor = "red";
  }

  sideScene.style.pointerEvents = "auto";

}

function loadSection(section) {

  $('#section-wrap').html("");
  let sec = $('<div id="sec">')
    .css('color', 'black')

  let html = `
    <p id='sec-title'>${$(section).attr('data-name')}</p>
  `;

  html += getSectionContent(section);

  $(sec).html(html);

  $("#section-wrap").append(sec)
    .addClass('animatedFast fadeInDown')

  //remove fadeIn after delay, so can be reactivated
  setTimeout(function () {
    $("#section-wrap").removeClass('fadeInDown');
  }, 500);

  $("#loading-container")
    .addClass('animatedFast fadeInDown')

  if (window.innerWidth > 600) {
    adjustParallax();
  }

}

function toLeft(section) {
  $('.nuthin').removeClass('animated')
    .addClass('animatedFast fadeOutLeft');

  setTimeout(function () {
    bg.style.marginTop = "0px";
    $('#loading-container').addClass('fadeInLeft');

    $('.nuthin').remove();
    $('#tommy').remove();

    $('.display-table').css('margin', '5px auto');

    $('#loading-container').addClass('col s12 m6 l4')
      .append($('#icons-wrapper'))
      .append($('#signature').addClass('signature-sm').css('margin-top', '30px'));
    loadSection(section);

  }, 200);

}

$(document.body).on('click', '#baby', function () {
  if (typeof parallaxMain !== 'undefined') {
    if (parallaxMain.enabled !== false) {
      parallaxMain.destroy();
    }
  }
  toLeft('#baby');
});

$(document.body).on('click', '#ABOUT', function () {
  if (typeof parallaxMain !== 'undefined') {
    if (parallaxMain.enabled !== false) {
      parallaxMain.destroy();
    }
  }
  toLeft('#ABOUT');
});

$(document.body).on('click', '#PORTFOLIO', function () {
  if (typeof parallaxMain !== 'undefined') {
    if (parallaxMain.enabled !== false) {
      parallaxMain.destroy();
    }
  }
  toLeft('#PORTFOLIO');
});
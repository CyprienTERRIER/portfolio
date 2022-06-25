const header = $("header");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
var lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.removeClass(scrollUp);
    return;
  }
 
  if (currentScroll > lastScroll && !header.hasClass(scrollDown)) {
    // down
    header.removeClass(scrollUp);
    header.addClass(scrollDown);
  } 
  else if (currentScroll < lastScroll && header.hasClass(scrollDown)) {
    // up
    header.removeClass(scrollDown);
    header.addClass(scrollUp);
  }
  lastScroll = currentScroll;
});

$(document).ready(
  $('#logo_box').removeClass('d-none'),
  setTimeout(addDnone, 4000), 
  $(this).scrollTop(0),
  header.removeClass(scrollDown), 
  setTimeout(addVisible, 5000)
  );

function addDnone() {
    $('#logo_box').addClass('d-none')
};

function addVisible() {
    $('body').css("overflow", "visible")
};

var divSkills = $('#skills').children()
for (let index = 0; index < divSkills.length; index++) {
  if (divSkills[index].children[1].textContent == 'Débutant') {
    divSkills[index].children[3].style.animation = '1s ease forwards progressD'
  }
  if (divSkills[index].children[1].textContent == 'Intermédiaire') {
    divSkills[index].children[3].style.animation = '1s ease forwards progressI'
  }
  if (divSkills[index].children[1].textContent == 'Avancé') {
    divSkills[index].children[3].style.animation = '1s ease forwards progressA'
  }
  if (divSkills[index].children[1].textContent == 'Expert') {
    divSkills[index].children[3].style.animation = '.5s ease forwards progressE'
    divSkills[index].children[3].style.borderRadius = '10px'
  }
}

// var aboutDiv = $('#a_propos')[0]
// aboutDiv.style.animation = null
// window.addEventListener('scroll', () => {
//   var heightY = window.innerHeight
//   var aboutHeightY = $('#a_propos')[0].getBoundingClientRect().top
//   if ((heightY - aboutHeightY) > 0) {
//     console.log ((heightY - aboutHeightY))
//     aboutDiv.style.animation = '1s linear forwards appearsD'
//   }
//   else {
//     aboutDiv.style.animation = '1s linear forwards disappears'
//   }
// })

/*show the header when the mouse is on the top*/
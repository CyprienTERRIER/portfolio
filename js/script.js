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

$(document).ready($('#logo_box').removeClass('d-none'), setTimeout(addDnone, 4000), /*$(this).scrollTop(0),*/ header.removeClass(scrollDown), setTimeout(addVisible, 5000));

function addDnone() {
    $('#logo_box').addClass('d-none')
};

function addVisible() {
    $('body').css("overflow", "visible")
};

var divSkills = $('#skills').children()
for (let index = 0; index < divSkills.length; index++) {
  console.log(divSkills[index].children[1].textContent)
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
    divSkills[index].children[3].style.animation = '1s ease forwards progressE'
    divSkills[index].children[3].style.borderRadius = '10px'
  }
}
/*#region On scroll up or down, hide or show the header */
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
/*#endregion */

/*#region When the mouse is on the top of the page, show the header */
var headerSizeY = $('header')[0].clientHeight
function mousemove(event){
  if (event.clientY < headerSizeY) {
    header.removeClass(scrollDown);
    header.addClass(scrollUp);
  }
}
window.addEventListener('mousemove', mousemove);
/*#endregion */

/*#region When the page is ready, remove the C animation, scroll to the top, makes the sections in the body disappear then do a loop about giving the sections an animatino to appear*/
$(document).ready(
  setTimeout(() => {
    $('#logo_box').addClass('d-none')
  }, 4200),
  setTimeout(() => {
    $('body').css("overflow", "visible")
  }, 5000),
  $(this).scrollTop(0),
  () => { 
    for (let index = 0; index < $('section').length; index++) {
      if (window.pageYOffset == 0) {
        $('section')[index].style.animation = ''
        $('section')[3].children[0].style.animation = ''
      }
    }
  },
  setTimeout(() => {
    for (let index = 0; index < $('section').length; index++) {
      window.addEventListener('scroll', () => {
        var heightY = window.innerHeight
        var SectionHeightY = $('section')[index].getBoundingClientRect().top
        if ((heightY - SectionHeightY) > 0) {
          if ($('section')[index] == $('section')[3]) {
            $('section')[3].style.animation = '1s linear forwards appears .5s'
            $('section')[3].children[0].style.animation = '2s ease forwards popout 1.5s'
          }
          else {
            $('section')[index].style.animation = '1s linear forwards appearsDown .5s'
          }
        }
      })
    }
  }, 2000)
)
/*#endregion */

/*#region As the level of skills increases, so do the progress bars */
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
/*#endregion */

/*#region When you scroll down, the elements appears*/
function def() {
}
/*#endregion */

/*#region Menu Burger Animation + Clic*/
addAnim = () => {
  if ($('.menu-button').hasClass('menu-button-anim')) {
    $('.menu-button').removeClass('menu-button-anim')
  }
  else {
    $('.menu-button').addClass('menu-button-anim')
  }
};

function clickBurger() {
  $('.menu-button').click()
}
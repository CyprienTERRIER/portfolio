$(document).ready($('#logo_box').removeClass('d-none'), setTimeout(addDnone, 4000))
function addDnone() {
    $('#logo_box').addClass('d-none')
}
$(document).ready(setTimeout(addVisible, 5000))
function addVisible() {
    $("body").css("overflow", "visible")
}

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
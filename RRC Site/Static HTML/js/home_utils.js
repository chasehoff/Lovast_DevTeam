$(".menu-activator").on("click", function() {
    $("body").toggleClass("menu-active");
});

$(function() {
    var $el,
      leftPos,
      newWidth,
      $mainNav = $(".navbar-nav");
  
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
  
    //First Position chosen
    $magicLine
      .width($(".active").width())
      .css("left", $(".active").position().left)
      .data("origLeft", $magicLine.position().left)
      .data("origWidth", $magicLine.width());
    

    $(".navbar-nav li a").hover(
      function() {
        //Animate an calc new position.
        $el = $(this);
        leftPos = this.getBoundingClientRect().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
          left: leftPos,
          width: newWidth
        });
      },
      function() {
        //Animation to go to original location.
        $magicLine.stop().animate({
          left: $magicLine.data("origLeft"),
          width: $magicLine.data("origWidth")
        });
      }
    );
  });
  
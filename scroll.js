jQuery(window).ready(function () {
  jQuery("#content").css(
    "background-color",
    "#383734",
  );

  jQuery(".slide").scrollie({
    scrollOffset: -100,
    scrollingInView: function (elem) {
      var bgColor = elem.data("background");
      jQuery("#content").css(
        "background-color",
        bgColor,
      );
    },
  });
});

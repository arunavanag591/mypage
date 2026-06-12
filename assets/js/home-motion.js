/* Home-page motion: the experience timeline draw-in. Triggers on scroll via
   IntersectionObserver and degrades gracefully — without JS a static timeline
   is shown, and prefers-reduced-motion skips the animation entirely. */
(function () {
  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasObserver = "IntersectionObserver" in window;

  document.querySelectorAll("[data-timeline]").forEach(function (list) {
    if (reduceMotion) return; // leave static and fully visible
    list.classList.add("timeline-ready");
    if (hasObserver) {
      var tlObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-drawn");
              tlObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      tlObserver.observe(list);
    } else {
      list.classList.add("is-drawn");
    }
  });
})();

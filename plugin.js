jQuery(function ($) {
  var hasAnimatedStats = false;

  function animateCounter() {
    if (hasAnimatedStats) return;

    $(".stat-number").each(function () {
      var $counter = $(this);
      var target = parseInt($counter.attr("data-target"));
      if (isNaN(target)) return;
      var duration = 2000;
      var increment = target / (duration / 16);
      var current = 0;

      function updateCounter() {
        current += increment;
        if (current >= target) {
          $counter.text(formatNumber(target));
        } else {
          $counter.text(formatNumber(Math.ceil(current)));
          requestAnimationFrame(updateCounter);
        }
      }

      updateCounter();
    });

    hasAnimatedStats = true;
  }

  function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M+";
    if (num >= 1000) return Math.round(num / 1000) + "K+";
    return num + "+";
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector("#statistics");
  if (statsSection) {
    observer.observe(statsSection);
  }
});

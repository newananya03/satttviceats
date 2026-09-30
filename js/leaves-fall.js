/* ==================================================
   FALLING DRY FRUITS — decorative background
   Real photo cutouts of almond (badam), coffee bean,
   cashew, pistachio & raisin drift down the screen.

   To change the effect, edit the settings below:
     density -> particles spawned per tick (1 = light, 5 = heavy)
     tickMs  -> lower = particles spawn more often
   To turn it off on a page, just remove its <script> tag
   and the #particleLayer div from that page's HTML.
================================================== */

(function () {

  var settings = {
    density: 2,
    tickMs: 900
  };

  // Respect users who've asked for reduced motion
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var layer = document.getElementById("particleLayer");
  if (!layer) return;

  // Real cut-out photos of each dry fruit
  var foodImages = [
    { src: "images/falling/almond.png",      ratio: 93 / 200 },
    { src: "images/falling/coffee-bean.png", ratio: 200 / 150 },
    { src: "images/falling/cashew.png",      ratio: 200 / 196 },
    { src: "images/falling/pistachio.png",   ratio: 200 / 171 },
    { src: "images/falling/raisin.png",      ratio: 106 / 200 }
  ];

  function rand(min, max) { return Math.random() * (max - min) + min; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function spawnFood() {
    var item = pick(foodImages);

    var el = document.createElement("img");
    el.className = "particle food";
    el.src = item.src;
    el.alt = "";
    el.draggable = false;

    var width = rand(12, 20);
    el.style.width = width + "px";
    el.style.height = (width * item.ratio) + "px";

    var duration = rand(9, 16);
    var startX = rand(0, window.innerWidth);
    var drift = rand(-100, 100);
    var rotStart = rand(-30, 30);
    var rotEnd = rotStart + rand(180, 420) * (Math.random() > 0.5 ? 1 : -1);

    el.style.left = startX + "px";
    el.style.setProperty("--drift-end", drift + "px");
    el.style.setProperty("--rot-start", rotStart + "deg");
    el.style.setProperty("--rot-end", rotEnd + "deg");
    el.style.setProperty("--max-opacity", rand(0.35, 0.55).toFixed(2));
    el.style.animationDuration = duration + "s";

    layer.appendChild(el);
    el.addEventListener("animationend", function () { el.remove(); });
  }

  function spawnTick() {
    for (var i = 0; i < settings.density; i++) {
      spawnFood();
    }
  }

  spawnTick();
  setInterval(spawnTick, settings.tickMs);

})();

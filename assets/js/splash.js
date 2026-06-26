/* Brannan Shore splash — countdown + signup */
(function () {
  "use strict";

  var el = document.querySelector("[data-countdown]");
  if (el) {
    var target = new Date(el.getAttribute("data-countdown")).getTime();
    var fields = {
      d: el.querySelector("[data-d]"),
      h: el.querySelector("[data-h]"),
      m: el.querySelector("[data-m]"),
      s: el.querySelector("[data-s]")
    };
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function tick() {
      var diff = Math.max(0, target - Date.now());
      var sec = Math.floor(diff / 1000);
      var d = Math.floor(sec / 86400);
      var h = Math.floor((sec % 86400) / 3600);
      var m = Math.floor((sec % 3600) / 60);
      var s = sec % 60;
      if (fields.d) fields.d.textContent = pad(d);
      if (fields.h) fields.h.textContent = pad(h);
      if (fields.m) fields.m.textContent = pad(m);
      if (fields.s) fields.s.textContent = pad(s);
    }
    tick();
    setInterval(tick, 1000);
  }

  var form = document.querySelector("[data-signup]");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var note = document.querySelector(".note");
      var input = form.querySelector("input");
      if (input && input.value) {
        if (note) note.textContent = "You're on the list — see you at the shore. 🌊";
        form.reset();
      }
    });
  }
})();

/* Saeed Garfan — Digital Business Card
   Tiny script used by index.html and ar.html:
   1) keeps the footer year current (if it fails, the year written in the page stays)
   2) Share button: opens the phone's share menu, or copies the link on a computer */

document.addEventListener("DOMContentLoaded", function () {
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var btn = document.getElementById("share-btn");
  var msg = document.getElementById("share-msg");
  if (!btn || !msg) {
    return;
  }

  btn.addEventListener("click", function () {
    var url = btn.getAttribute("data-url");

    // Phones (and some browsers): native share menu (WhatsApp, Messages, Mail...)
    if (navigator.share) {
      navigator.share({ title: document.title, url: url }).catch(function () {
        // User closed the share menu: nothing to do
      });
      return;
    }

    // Computers: copy the link and show a short message
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(
        function () { msg.textContent = btn.getAttribute("data-copied"); },
        function () { msg.textContent = url; }
      );
      return;
    }

    // Last fallback: show the link so it can be copied by hand
    msg.textContent = url;
  });
});

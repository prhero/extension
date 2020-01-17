(function () {
  function watch(el, cb) {
    var observer = new MutationObserver(cb);
    observer.observe(el, { attributes: true, childList: true, subtree: true });
  }

  function addLink() {
    if (document.getElementById("prhero-pr-link")) {
      return;
    }
    var el = document.querySelectorAll('.tabnav-pr .tabnav-tabs')[0];
    if (!el) {
      return;
    }
    var spl = window.location.pathname.split("/");
    var a = document.createElement("a");
    a.id = "prhero-pr-link";
    a.href = "https://prhero.dev/pr?owner=" + spl[1] + "&repo=" + spl[2] + "&pr=" + spl[4];
    a.className = "tabnav-tab js-pjax-history-navigate";
    a.target = "_blank";
    a.innerText = "Review in PRHero";
    el.appendChild(a);
  }

  var el = document.querySelectorAll('.tabnav-pr .tabnav-tabs')[0];
  if (el) {
    watch(el, addLink);
    addLink();
  }
})();

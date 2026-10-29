// Web Skipjar v2: výběr stylu karty a motivu (předloha K-W-Web2). Bez knihoven; skupiny role="radio" s klávesnicí
// (šipky, Home / End, roving tabindex). Bez JS zůstane vybraná Holo a Noční modrá přímo v HTML.
(function () {
  function radioGroup(group, onPick) {
    var items = Array.prototype.slice.call(group.querySelectorAll('[role="radio"]'));
    function pick(i, focus) {
      items.forEach(function (el, j) {
        el.setAttribute('aria-checked', j === i ? 'true' : 'false');
        el.tabIndex = j === i ? 0 : -1;
      });
      if (focus) items[i].focus();
      onPick(items[i]);
    }
    items.forEach(function (el, i) {
      el.addEventListener('click', function () { pick(i, false); });
      el.addEventListener('keydown', function (e) {
        var n = items.length, to = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % n;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + n) % n;
        else if (e.key === 'Home') to = 0;
        else if (e.key === 'End') to = n - 1;
        else if (e.key === ' ' || e.key === 'Enter') to = i;
        if (to === null) return;
        e.preventDefault();
        pick(to, true);
      });
    });
  }

  var card = document.getElementById('bigcard');
  var chips = document.querySelector('.chips[role="radiogroup"]');
  if (card && chips) {
    radioGroup(chips, function (el) {
      var d = el.dataset;
      card.style.background = d.bg;
      card.style.boxShadow = '0 40px 70px -28px rgba(0,0,0,.95),inset 0 1.5px 0 rgba(255,255,255,.22),inset 0 0 0 1px ' + d.rim;
      card.classList.toggle('holo', d.holo === '1');
      card.querySelector('.tex').style.background = d.tex;
      Array.prototype.forEach.call(card.querySelectorAll('.ink'), function (s) { s.style.color = d.ink; });
      Array.prototype.forEach.call(card.querySelectorAll('.lab'), function (s) { s.style.color = d.label; });
      card.querySelector('.sub2').style.color = d.sub;
      card.querySelector('.name').textContent = d.name;
      card.setAttribute('aria-label', card.dataset.aria + d.name);
    });
  }

  var root = document.getElementById('sj');
  var themes = document.querySelector('.themes[role="radiogroup"]');
  if (root && themes) {
    radioGroup(themes, function (el) { root.style.setProperty('--glow', el.dataset.glow); });
  }
})();

/* =========================================================
   Empresa X — Interações
   Nav, menu mobile, scroll reveal, barra de progresso,
   links de WhatsApp e configurador "Monte seu plano".
   ========================================================= */
(function () {
  'use strict';

  /* Número do WhatsApp (formato internacional, sem símbolos) */
  var WA_NUMBER = '5592992866146';
  var WA_DEFAULT = 'Olá! Vim pelo site da Empresa X e gostaria de saber mais sobre os planos de conteúdo e redes sociais.';

  function waLink(message) {
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message || WA_DEFAULT);
  }

  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var progress = document.getElementById('scrollProgress');

  /* ---- Ano no rodapé ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Todos os links data-wa apontam para o WhatsApp ---- */
  document.querySelectorAll('[data-wa]').forEach(function (el) {
    el.setAttribute('href', waLink(el.dataset.waMessage));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  /* ---- Nav: estado ao rolar + barra de progresso ---- */
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle('is-scrolled', y > 24);
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  function setMenu(open) {
    toggle.classList.toggle('is-open', open);
    mobileMenu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      setMenu(!mobileMenu.classList.contains('is-open'));
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = Math.min(i * 70, 210) + 'ms';
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Âncoras suaves ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  /* ===================================================
     Configurador "Monte seu plano"
     =================================================== */
  var form = document.getElementById('builderForm');
  var listEl = document.getElementById('summaryList');
  var totalEl = document.getElementById('summaryTotal');
  var waBtn = document.getElementById('builderWa');

  function brl(value) {
    return 'R$ ' + value.toLocaleString('pt-BR');
  }

  function updateBuilder() {
    var items = [];
    var total = 0;

    form.querySelectorAll('input:checked').forEach(function (input) {
      var price = parseInt(input.value, 10) || 0;
      if (price > 0) {
        items.push({ label: input.dataset.label, price: price });
        total += price;
      }
    });

    /* Lista do resumo */
    if (items.length === 0) {
      listEl.innerHTML = '<li class="summary__empty">Selecione os serviços ao lado para montar sua estimativa.</li>';
    } else {
      listEl.innerHTML = items.map(function (it) {
        return '<li><span>' + it.label + '</span><span>' + brl(it.price) + '</span></li>';
      }).join('');
    }

    totalEl.textContent = brl(total);

    /* Botão do WhatsApp */
    if (items.length === 0) {
      waBtn.setAttribute('aria-disabled', 'true');
      waBtn.setAttribute('href', waLink());
    } else {
      var msg = 'Olá! Montei um plano personalizado no site da Empresa X:\n';
      msg += items.map(function (it) { return '• ' + it.label + ' — ' + brl(it.price); }).join('\n');
      msg += '\n\nEstimativa mensal: ' + brl(total);
      msg += '\n\nPodemos conversar sobre o orçamento?';
      waBtn.setAttribute('aria-disabled', 'false');
      waBtn.setAttribute('href', waLink(msg));
    }
  }

  if (form && listEl && totalEl && waBtn) {
    form.addEventListener('change', updateBuilder);
    updateBuilder();
  }
})();

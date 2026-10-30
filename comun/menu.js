/* Menú común de las herramientas de Malhuayza Motors.
   Para agregar una herramienta nueva, añádela a HERRAMIENTAS: aparece en el menú y en la página de inicio. */
(function(){
  var HERRAMIENTAS = [
    { id: "comprobantes", ruta: "comprobantes/", titulo: "Comprobantes",
      desc: "Convierte el XML de la boleta o factura de SUNAT en un comprobante con el diseño de la tienda y descárgalo en PDF.",
      icono: '<path d="M6 2h9l5 5v15H6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15 2v5h5M9 12h8M9 16h8M9 8h3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>' },
    { id: "carta-poder", ruta: "carta-poder/", titulo: "Carta de poder",
      desc: "Genera la carta para recoger la placa en la Cámara de Comercio, con los datos de la boleta, lista para imprimir.",
      icono: '<rect x="3" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 12h3M12.5 12h4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 7V5.5M16 7V5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>' }
  ];
  var src = document.currentScript && document.currentScript.src;
  var BASE = src ? new URL("..", src).href : "./";
  window.MM = { herramientas: HERRAMIENTAS, base: BASE };

  var css = document.createElement("link");
  css.rel = "stylesheet"; css.href = BASE + "comun/portada.css";
  document.head.appendChild(css);

  var actual = document.body ? document.body.getAttribute("data-tool") : "";
  if (actual === "inicio") return;

  var st = document.createElement("style");
  st.textContent =
    ".mm-head{position:relative;color:#fff;background:#0E1013 center 42%/cover no-repeat;font-family:'IBM Plex Sans','Segoe UI',Roboto,Arial,sans-serif}" +
    ".mm-head::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,11,14,.92) 0%,rgba(10,11,14,.72) 50%,rgba(10,11,14,.38) 100%)}" +
    ".mm-head::after{content:'';position:absolute;left:0;right:0;bottom:0;height:3px;background:#E3141D}" +
    ".mm-in{position:relative;max-width:1500px;margin:0 auto;padding:14px 16px 17px;display:flex;align-items:center;gap:18px 26px;flex-wrap:wrap}" +
    ".mm-logo{display:block;line-height:0;flex:none}.mm-logo img{height:56px;width:auto;display:block}" +
    ".mm-nav{display:flex;gap:6px;flex-wrap:wrap;flex:1 1 auto}" +
    ".mm-nav a{color:#E8EAED;text-decoration:none;font-weight:600;font-size:14px;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06)}" +
    ".mm-nav a:hover{background:rgba(255,255,255,.14)}" +
    ".mm-nav a[aria-current=page]{background:#E3141D;border-color:#E3141D;color:#fff}" +
    ".mm-nav a:focus-visible{outline:2px solid #fff;outline-offset:2px}" +
    ".mm-tel{font-size:12.5px;color:#C9CDD3;line-height:1.4;text-align:right}.mm-tel b{color:#fff;font-weight:600}" +
    "@media (max-width:700px){.mm-logo img{height:44px}.mm-tel{display:none}.mm-nav a{padding:7px 11px;font-size:13px}}" +
    "@media print{.mm-head{display:none!important}}";
  document.head.appendChild(st);

  var M = window.MARCA || {};
  var h = document.createElement("header");
  h.className = "mm-head mm-photo";
  var nav = '<a href="' + BASE + '"' + '>Inicio</a>' + HERRAMIENTAS.map(function(t){
    return '<a href="' + BASE + t.ruta + '"' + (t.id === actual ? ' aria-current="page"' : '') + '>' + t.titulo + '</a>';
  }).join("");
  h.innerHTML = '<div class="mm-in">' +
    '<a class="mm-logo" href="' + BASE + '" aria-label="Inicio">' + (window.MARCA_LOGO ? '<img src="' + window.MARCA_LOGO + '" alt="Malhuayza Motors">' : '<b>MALHUAYZA MOTORS</b>') + '</a>' +
    '<nav class="mm-nav" aria-label="Herramientas">' + nav + '</nav>' +
    '<div class="mm-tel">' + (M.telefonos ? 'Tel. <b>' + M.telefonos + '</b><br>' : '') + (M.whatsapp ? 'WhatsApp <b>' + M.whatsapp + '</b>' : '') + '</div>' +
    '</div>';
  document.body.insertBefore(h, document.body.firstChild);
})();

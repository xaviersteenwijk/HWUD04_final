// LEAFLET KAART
var map = L.map('map', {
  zoomControl: true,
  attributionControl: true
}).setView([45.87, 6.95], 11);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap © CARTO',
  maxZoom: 19
}).addTo(map);

// TOUR DU MONT BLANC 
var tmbCoords = [
  [6.8696,45.9237],[6.8620,45.9190],[6.8530,45.9150],[6.8440,45.9110],
  [6.8320,45.9050],[6.8200,45.9000],[6.8100,45.8960],[6.7983,45.8900],
  [6.7880,45.8840],[6.7780,45.8770],[6.7680,45.8700],[6.7580,45.8630],
  [6.7480,45.8550],[6.7400,45.8470],[6.7350,45.8400],[6.7300,45.8330],
  [6.7269,45.8208],[6.7240,45.8100],[6.7210,45.7990],[6.7180,45.7880],
  [6.7150,45.7780],[6.7120,45.7690],[6.7080,45.7600],[6.7050,45.7600],
  [6.7060,45.7520],[6.7080,45.7440],[6.7110,45.7370],[6.7150,45.7300],
  [6.7200,45.7240],[6.7270,45.7200],[6.7350,45.7180],[6.7430,45.7180],
  [6.7530,45.7190],[6.7630,45.7200],[6.7720,45.7200],[6.7820,45.7200],
  [6.7920,45.7200],[6.8000,45.7200],[6.8080,45.7220],[6.8150,45.7260],
  [6.8220,45.7310],[6.8300,45.7360],[6.8380,45.7410],[6.8450,45.7460],
  [6.8500,45.7500],[6.8570,45.7560],[6.8640,45.7620],[6.8720,45.7680],
  [6.8820,45.7730],[6.8920,45.7770],[6.9020,45.7800],[6.9120,45.7840],
  [6.9220,45.7870],[6.9320,45.7900],[6.9420,45.7920],[6.9520,45.7940],
  [6.9620,45.7950],[6.9720,45.7960],[6.9794,45.7964],[6.9870,45.8010],
  [6.9940,45.8060],[7.0010,45.8100],[7.0090,45.8130],[7.0170,45.8150],
  [7.0260,45.8160],[7.0350,45.8170],[7.0440,45.8180],[7.0500,45.8200],
  [7.0540,45.8260],[7.0570,45.8330],[7.0590,45.8400],[7.0610,45.8470],
  [7.0620,45.8540],[7.0630,45.8610],[7.0640,45.8680],[7.0645,45.8750],
  [7.0648,45.8820],[7.0650,45.8900],[7.0660,45.8970],[7.0680,45.9040],
  [7.0710,45.9100],[7.0750,45.9160],[7.0790,45.9210],[7.0830,45.9250],
  [7.0870,45.9280],[7.0900,45.9300],[7.0930,45.9370],[7.0950,45.9440],
  [7.0960,45.9510],[7.0970,45.9580],[7.0980,45.9650],[7.0990,45.9720],
  [7.1000,45.9790],[7.1010,45.9860],[7.1030,45.9930],[7.1060,46.0000],
  [7.1090,46.0060],[7.1120,46.0120],[7.1150,46.0180],[7.1170,46.0240],
  [7.1200,46.0300],[7.1180,46.0360],[7.1130,46.0400],[7.1060,46.0420],
  [7.0990,46.0420],[7.0920,46.0400],[7.0860,46.0370],[7.0800,46.0330],
  [7.0760,46.0280],[7.0730,46.0230],[7.0710,46.0200],[7.0700,46.0200],
  [7.0660,46.0170],[7.0600,46.0150],[7.0540,46.0140],[7.0470,46.0130],
  [7.0400,46.0120],[7.0330,46.0120],[7.0260,46.0130],[7.0190,46.0140],
  [7.0120,46.0150],[7.0050,46.0150],[6.9980,46.0150],[6.9950,46.0150],
  [6.9900,46.0130],[6.9850,46.0110],[6.9800,46.0100],[6.9750,46.0080],
  [6.9700,46.0060],[6.9650,46.0030],[6.9600,45.9990],[6.9550,45.9950],
  [6.9500,45.9910],[6.9450,45.9870],[6.9400,45.9840],[6.9350,45.9810],
  [6.9283,45.9767],[6.9220,45.9720],[6.9160,45.9670],[6.9100,45.9620],
  [6.9040,45.9570],[6.8980,45.9520],[6.8920,45.9470],[6.8860,45.9420],
  [6.8810,45.9380],[6.8770,45.9340],[6.8740,45.9300],[6.8720,45.9270],
  [6.8696,45.9237]
];

var tmbLatLng = tmbCoords.map(function(c) { return [c[1], c[0]]; });

var route = L.polyline(tmbLatLng, {
  color: '#c0392b',
  weight: 4,
  opacity: 0.9,
  lineJoin: 'round',
  lineCap: 'round'
}).addTo(map);

route.bindPopup(
  '<div style="font-family:sans-serif; min-width:180px">' +
  '<b style="font-size:15px">🥾 Tour du Mont Blanc</b><br><hr style="margin:6px 0">' +
  '📏 Afstand: ~170 km<br>' +
  '⛰️ Hoogteverschil: +10.000 m<br>' +
  '🌍 FR · IT · CH<br>' +
  '🏕️ 11 etappes · ~11 dagen' +
  '</div>'
);

// TEKST LABELS OP DE KAART 
function maakLabel(naam, kleur) {
  var stip = kleur === 'rood'
    ? '<div style="width:10px;height:10px;background:#c0392b;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.4);margin:0 auto 4px;"></div>'
    : '<div style="width:8px;height:8px;background:#2c3e50;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.3);margin:0 auto 4px;"></div>';
  return L.divIcon({
    className: '',
    html: '<div style="text-align:center;">' +
          stip +
          '<div style="' +
            'background:rgba(30,30,30,0.82);' +
            'color:#fff;' +
            'font-family:Poppins,sans-serif;' +
            'font-size:11px;' +
            'font-weight:600;' +
            'letter-spacing:0.04em;' +
            'padding:3px 8px;' +
            'border-radius:4px;' +
            'white-space:nowrap;' +
            'box-shadow:0 2px 6px rgba(0,0,0,0.35);' +
          '">' + naam + '</div>' +
          '</div>',
    iconSize: null,
    iconAnchor: [-4, 5],
    popupAnchor: [0, -20]
  });
}

// Start/eindpunt
L.marker([45.9237, 6.8696], {icon: maakLabel('Chamonix', 'rood')})
  .addTo(map)
  .bindPopup('<b>Chamonix-Mont-Blanc</b><br>Start & eindpunt TMB<br>1035m · Frankrijk');

var etappes = [
  { ll:[45.8900, 6.7983], naam:'Les Houches',      info:'Etappe 1 · 1008m · Frankrijk' },
  { ll:[45.8208, 6.7269], naam:'Les Contamines',   info:'Etappe 2 · 1164m · Frankrijk' },
  { ll:[45.7964, 6.9794], naam:'Courmayeur',       info:'Etappe 4 · 1224m · Italië' },
  { ll:[45.8200, 7.0500], naam:'Rifugio Bonatti',  info:'Etappe 5 · 2025m · Italië' },
  { ll:[45.9300, 7.0900], naam:'La Fouly',         info:'Etappe 7 · 1593m · Zwitserland' },
  { ll:[46.0300, 7.1200], naam:'Champex',          info:'Etappe 8 · 1466m · Zwitserland' },
  { ll:[46.0200, 7.0700], naam:'Trient',           info:'Etappe 9 · 1297m · Zwitserland' },
  { ll:[45.9767, 6.9283], naam:'Argentière',       info:'Etappe 10 · 1252m · Frankrijk' }
];
etappes.forEach(function(e) {
  L.marker(e.ll, {icon: maakLabel(e.naam, 'donker')})
    .addTo(map)
    .bindPopup('<b>' + e.naam + '</b><br>' + e.info);
});

var passen = [
  { ll:[45.7200, 6.8000], naam:'Col de la Seigne', info:'2516m · Grens FR–IT' },
  { ll:[45.8900, 7.0650], naam:'Grand Col Ferret', info:'2537m · Grens IT–CH' },
  { ll:[46.0150, 6.9950], naam:'Col de Balme',     info:'2204m · Grens CH–FR' }
];
passen.forEach(function(p) {
  L.marker(p.ll, {icon: maakLabel(p.naam, 'rood')})
    .addTo(map)
    .bindPopup('<b>' + p.naam + '</b><br>' + p.info);
});

L.marker([45.8326, 6.8652], {icon: maakLabel('Mont Blanc 4808m', 'rood')})
  .addTo(map)
  .bindPopup('<b>Mont Blanc</b><br>4808m · Hoogste berg Europa');

L.control.scale({ imperial: false, metric: true }).addTo(map);

// GRAFIEK
var GRAFIEK_DATA = [
  { label: 'Rotsklimmen',     waarde: 38, kleur: '#E8A87C' },
  { label: 'Alpinisme',       waarde: 27, kleur: '#7EC8E3' },
  { label: 'Ice Climbing',    waarde: 18, kleur: '#A8D5A2' },
  { label: 'Trad Klimmen',    waarde: 11, kleur: '#F0C27F' },
  { label: 'Boulderen',       waarde: 6,  kleur: '#C9A0DC' }
];

function tekenGrafiek() {
  var data    = GRAFIEK_DATA;
  var svgW    = 620, svgH = 160;
  var offsetX = 70, offsetY = 10;
  var maxWaarde = 40; // Y-as loopt tot 40%

  var grafiekEl = document.getElementById('rope-chart');
  while (grafiekEl.firstChild) { grafiekEl.removeChild(grafiekEl.firstChild); }

  var ns = 'http://www.w3.org/2000/svg';

  // Assen 
  function lijn(x1,y1,x2,y2,kleur,dikte) {
    var l = document.createElementNS(ns,'line');
    l.setAttribute('x1',x1); l.setAttribute('y1',y1);
    l.setAttribute('x2',x2); l.setAttribute('y2',y2);
    l.setAttribute('stroke', kleur||'white');
    l.setAttribute('stroke-width', dikte||1.5);
    return l;
  }
  function tekst(x,y,inhoud,anchor,kleur,grootte) {
    var t = document.createElementNS(ns,'text');
    t.setAttribute('x',x); t.setAttribute('y',y);
    t.setAttribute('text-anchor', anchor||'middle');
    t.setAttribute('fill', kleur||'rgba(255,255,255,0.75)');
    t.setAttribute('font-size', grootte||12);
    t.setAttribute('font-family','Poppins,sans-serif');
    t.textContent = inhoud;
    return t;
  }

  // Y-as
  grafiekEl.appendChild(lijn(offsetX, offsetY, offsetX, offsetY+svgH, 'white', 2));
  // X-as
  grafiekEl.appendChild(lijn(offsetX, offsetY+svgH, offsetX+svgW, offsetY+svgH, 'white', 2));

  [0,10,20,30,40].forEach(function(pct) {
    var y = offsetY + svgH - (pct/maxWaarde)*svgH;
    grafiekEl.appendChild(lijn(offsetX-6, y, offsetX, y));
    grafiekEl.appendChild(tekst(offsetX-10, y+4, pct+'%', 'end'));
    // Horizontale hulplijn
    var hl = document.createElementNS(ns,'line');
    hl.setAttribute('x1', offsetX); hl.setAttribute('y1', y);
    hl.setAttribute('x2', offsetX+svgW); hl.setAttribute('y2', y);
    hl.setAttribute('stroke','rgba(255,255,255,0.1)');
    hl.setAttribute('stroke-width','1');
    grafiekEl.appendChild(hl);
  });

  var barBreedte = 70;
  var spatie     = (svgW - data.length * barBreedte) / (data.length + 1);

  data.forEach(function(item, i) {
    var barH = (item.waarde / maxWaarde) * svgH;
    var x    = offsetX + spatie + i * (barBreedte + spatie);
    var y    = offsetY + svgH - barH;

    var rect = document.createElementNS(ns,'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', barBreedte);
    rect.setAttribute('height', barH);
    rect.setAttribute('fill', item.kleur);
    rect.setAttribute('rx', '6');
    rect.setAttribute('opacity', '0.9');
    grafiekEl.appendChild(rect);

    grafiekEl.appendChild(tekst(x + barBreedte/2, y - 6, item.waarde+'%', 'middle', '#fff', 13));

    grafiekEl.appendChild(tekst(x + barBreedte/2, offsetY+svgH+18, item.label, 'middle', 'rgba(255,255,255,0.75)', 11));
  });

  grafiekEl.appendChild(tekst(offsetX + svgW/2, offsetY - 2, 'Ongevallen per klimdiscipline (%)', 'middle', 'rgba(255,255,255,0.5)', 11));
}

// NAVIGATIE 
function showPanel(id) {
  document.querySelectorAll('.text-panel').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
}

function goToDetail(id) {
  ['slide1','slide2','slide-map','slide-video'].forEach(function(sid) {
    document.getElementById(sid).classList.add('slide-hidden');
  });
  document.querySelectorAll('.detail').forEach(function(s) { s.classList.add('slide-hidden'); });
  var target = document.getElementById(id);
  target.classList.remove('slide-hidden');
  target.scrollIntoView({ behavior: 'smooth' });
  if (id === 'detail-rope') { tekenGrafiek(); }
}

function goBack() {
  document.querySelectorAll('.detail').forEach(function(s) { s.classList.add('slide-hidden'); });
  ['slide1','slide2','slide-map','slide-video'].forEach(function(sid) {
    document.getElementById(sid).classList.remove('slide-hidden');
  });
  document.getElementById('slide2').scrollIntoView({ behavior: 'smooth' });
}

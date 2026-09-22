import "./style.css";

const eras = [
  ["MÖ 3000","ANTİK","Taş, oran, ritüel ve kent."],
  ["MÖ 500","KLASİK","Geometri ve insan ölçeği."],
  ["500","BİZANS","Kubbe, ışık ve anıtsal mekân."],
  ["1400","RÖNESANS","Perspektif ve klasik dünyanın dönüşü."],
  ["1600","BAROK","Hareket, drama ve ışık."],
  ["1920","MODERNİZM","Yeni malzeme ve yeni yaşam."],
  ["1950","BRUTALİZM","Beton, strüktür ve doğrudan ifade."],
  ["2000","ÇAĞDAŞ","Dijital üretim ve ekoloji."]
];

document.querySelector("#app").innerHTML = `
<header class="nav"><b>ARCH / MİMARLIK TARİHİ</b><nav>
<a href="#timeline">TARİH</a><a href="#architects">MİMARLAR</a><a href="#buildings">YAPILAR</a><a href="#turkey">TÜRKİYE</a><a href="#interior">İÇ MİMARLIK</a>
</nav><span>⌕</span></header>
<main>
<section class="hero"><div class="hero-grid"></div><div class="hero-copy">
<p class="eyebrow">A DIGITAL ARCHITECTURAL ARCHIVE</p>
<h1>MİMARLIK<br>TARİHİNİ<br><em>KEŞFET.</em></h1>
<p class="intro">Antik dünyanın taş yapılarından çağdaş mimarlığın deneysel sınırlarına uzanan görsel bir tarih.</p>
</div><div class="hero-meta">01 / 2026<br>41°00N<br>28°58E</div><div class="hero-image">ARCHIVE / 001</div><div class="scroll">SCROLL TO EXPLORE ↓</div></section>
<section class="manifesto"><div class="giant">5000+</div><div><p class="eyebrow">BİR DİSİPLİNİN HAFIZASI</p><h2>Yapılar değişti.<br>Şehirler değişti.<br><span>Mimarlık da değişti.</span></h2></div></section>
<section id="timeline" class="timeline-section"><p class="eyebrow">01 / ZAMAN</p><h2>ZAMANIN<br>İÇİNDEN GEÇ.</h2><div class="timeline">${eras.map((e,i)=>`<article class="era ${i===5?"active":""}"><div>${e[0]}</div><i></i><strong>${e[1]}</strong><p>${e[2]}</p></article>`).join("")}</div></section>
<section id="architects" class="dark-section"><p class="eyebrow">02 / ETKİ</p><h2>MİMARLIĞIN<br>AKIŞINI<br>DEĞİŞTİRENLER.</h2><div class="architects"><div class="architect">01 <strong>MİMAR SİNAN</strong></div><div class="architect">02 <strong>PALLADIO</strong></div><div class="architect">03 <strong>LE CORBUSIER</strong></div><div class="architect">04 <strong>MIES</strong></div><div class="architect">05 <strong>ZAHA HADID</strong></div></div></section>
<section id="buildings" class="buildings"><p class="eyebrow">03 / YAPI</p><h2>AKIŞI DEĞİŞTİREN<br>YAPILAR.</h2><div class="building-grid"><div class="building large"><span>01</span><h3>AYASOFYA</h3><p>İstanbul / 537</p></div><div class="building"><span>02</span><h3>VILLA ROTONDA</h3><p>Vicenza / 1567</p></div><div class="building"><span>03</span><h3>UNITE D'HABITATION</h3><p>Marseille / 1952</p></div></div></section>
<section id="turkey" class="turkey"><p class="eyebrow">04 / COĞRAFYA</p><h2>TÜRKİYE’NİN<br>MİMARLIK<br><em>HİKÂYESİ.</em></h2><p class="atlas">ANADOLU — ROMA — BİZANS — SELÇUKLU — OSMANLI — CUMHURİYET</p></section>
<section id="interior" class="interior"><div><p class="eyebrow">05 / İÇ MİMARLIK</p><h2>MEKÂNIN<br>TARİHİ.</h2></div><p>Mobilya, ışık, malzeme, oran ve insan ölçeğinin değişen hikâyesi.</p></section>
</main><footer><span>ARCH / 2026</span><span>MİMARLIK TARİHİNİ KEŞFET.</span></footer>`;

document.querySelectorAll(".era").forEach(el=>el.addEventListener("mouseenter",()=>{document.querySelectorAll(".era").forEach(x=>x.classList.remove("active"));el.classList.add("active")}));
window.addEventListener("scroll",()=>document.querySelector(".nav").classList.toggle("scrolled",scrollY>80));

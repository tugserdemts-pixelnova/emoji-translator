// Core English dictionary
const EMOJI = {
  love:"❤️",heart:"❤️",like:"👍",happy:"😊",smile:"😄",laugh:"😂",sad:"😢",cry:"😭",angry:"😠",mad:"😠",scared:"😱",tired:"😴",sleep:"😴",cool:"😎",think:"🤔",wow:"😮",kiss:"😘",sick:"🤒",crazy:"🤪",shy:"😳",
  dog:"🐶",cat:"🐱",mouse:"🐭",rabbit:"🐰",fox:"🦊",bear:"🐻",panda:"🐼",lion:"🦁",tiger:"🐯",cow:"🐮",pig:"🐷",frog:"🐸",monkey:"🐵",chicken:"🐔",bird:"🐦",penguin:"🐧",horse:"🐴",unicorn:"🦄",bee:"🐝",fish:"🐟",whale:"🐳",snake:"🐍",turtle:"🐢",butterfly:"🦋",camel:"🐫",sheep:"🐑",goat:"🐐",
  pizza:"🍕",burger:"🍔",fries:"🍟",coffee:"☕",tea:"🍵",cake:"🍰",apple:"🍎",banana:"🍌",grape:"🍇",lemon:"🍋",watermelon:"🍉",strawberry:"🍓",bread:"🍞",cheese:"🧀",egg:"🥚",milk:"🥛",beer:"🍺",wine:"🍷",rice:"🍚",noodles:"🍜",taco:"🌮",cookie:"🍪",chocolate:"🍫",icecream:"🍨",candy:"🍬",water:"💧",meat:"🍖",dumpling:"🥟",
  sun:"☀️",moon:"🌙",star:"⭐",cloud:"☁️",rain:"🌧️",snow:"❄️",fire:"🔥",wind:"💨",rainbow:"🌈",tree:"🌳",flower:"🌸",rose:"🌹",leaf:"🍃",mountain:"⛰️",beach:"🏖️",ocean:"🌊",sea:"🌊",earth:"🌍",world:"🌍",lightning:"⚡",
  morning:"🌅",night:"🌃",time:"⏰",clock:"🕒",day:"📅",today:"📅",birthday:"🎂",party:"🎉",gift:"🎁",christmas:"🎄",halloween:"🎃",
  car:"🚗",bus:"🚌",train:"🚆",plane:"✈️",bike:"🚲",rocket:"🚀",ship:"🚢",go:"➡️",run:"🏃",walk:"🚶",home:"🏠",house:"🏠",school:"🏫",hospital:"🏥",city:"🏙️",
  phone:"📱",computer:"💻",book:"📖",music:"🎵",song:"🎶",movie:"🎬",camera:"📷",game:"🎮",ball:"⚽",football:"⚽",soccer:"⚽",basketball:"🏀",money:"💰",idea:"💡",key:"🔑",lock:"🔒",mail:"✉️",letter:"✉️",gem:"💎",
  i:"👤",me:"👤",you:"👉",we:"👥",friend:"🧑‍🤝‍🧑",friends:"🧑‍🤝‍🧑",family:"👨‍👩‍👧",baby:"👶",boy:"👦",girl:"👧",man:"👨",woman:"👩",teacher:"🧑‍🏫",student:"🧑‍🎓",doctor:"🧑‍⚕️",king:"🤴",queen:"👸",
  yes:"✅",no:"❌",ok:"👌",hello:"👋",hi:"👋",bye:"👋",thanks:"🙏",please:"🙏",strong:"💪",eye:"👀",eyes:"👀",look:"👀",see:"👀",hand:"✋",clap:"👏",
  good:"👍",bad:"👎",big:"🐘",new:"🆕",hot:"🥵",cold:"🥶",fast:"⚡",win:"🏆",question:"❓",warning:"⚠️",stop:"🛑",top:"🔝",hundred:"💯",magic:"✨",ghost:"👻",robot:"🤖",alien:"👽",skull:"💀",poop:"💩",bomb:"💣"
};
// Synonyms → canonical key (bonus feature)
const SYN = {
  adore:"love",joyful:"happy",glad:"happy",cheerful:"happy",grin:"smile",lol:"laugh",haha:"laugh",unhappy:"sad",upset:"sad",furious:"angry",afraid:"scared",frightened:"scared",sleepy:"tired",exhausted:"tired",
  puppy:"dog",doggo:"dog",kitten:"cat",kitty:"cat",bunny:"rabbit",bunnies:"rabbit",
  espresso:"coffee",latte:"coffee",hamburger:"burger",dessert:"cake",sweets:"candy",
  sunshine:"sun",sunny:"sun",flame:"fire",lit:"fire",storm:"lightning",blossom:"flower",
  automobile:"car",airplane:"plane",aeroplane:"plane",bicycle:"bike",jog:"run",
  smartphone:"phone",mobile:"phone",laptop:"computer",pc:"computer",film:"movie",cash:"money",
  buddy:"friend",pal:"friend",mate:"friend",kid:"baby",child:"baby",guy:"man",lady:"woman",
  hey:"hi",goodbye:"bye","thank":"thanks",thx:"thanks",great:"good",awesome:"good",nice:"good",terrible:"bad",awful:"bad",huge:"big",quick:"fast",victory:"win",cozy:"home"
};
// Small foreign dictionaries → English key
const LANG = {
  es:{amor:"love",amo:"love",feliz:"happy",triste:"sad",enojado:"angry",perro:"dog",gato:"cat",café:"coffee",cafe:"coffee",pizza:"pizza",sol:"sun",luna:"moon",fuego:"fire",casa:"home",playa:"beach",mañana:"morning",noche:"night",amigo:"friend",amigos:"friends",hola:"hello",gracias:"thanks",sí:"yes",si:"yes",no:"no",coche:"car",libro:"book",música:"music",dinero:"money",agua:"water",flor:"flower",árbol:"tree",yo:"i",tú:"you",pastel:"cake",manzana:"apple",bueno:"good",malo:"bad",fiesta:"party"},
  fr:{amour:"love",aime:"love",heureux:"happy",heureuse:"happy",triste:"sad",chien:"dog",chat:"cat",café:"coffee",soleil:"sun",lune:"moon",feu:"fire",maison:"home",plage:"beach",matin:"morning",nuit:"night",ami:"friend",amis:"friends",bonjour:"hello",salut:"hi",merci:"thanks",oui:"yes",non:"no",voiture:"car",livre:"book",musique:"music",argent:"money",eau:"water",fleur:"flower",arbre:"tree",je:"i",tu:"you",gâteau:"cake",pomme:"apple",bon:"good",fête:"party"},
  mn:{"хайр":"love","хайртай":"love","баяртай":"happy","аз жаргалтай":"happy","гунигтай":"sad","уурласан":"angry","нохой":"dog","муур":"cat","кофе":"coffee","цай":"tea","нар":"sun","сар":"moon","гал":"fire","гэр":"home","байшин":"house","өглөө":"morning","шөнө":"night","найз":"friend","найзууд":"friends","сайн":"good","сайнуу":"hello","баярлалаа":"thanks","тийм":"yes","үгүй":"no","машин":"car","ном":"book","хөгжим":"music","мөнгө":"money","ус":"water","цэцэг":"flower","мод":"tree","би":"i","чи":"you","бялуу":"cake","алим":"apple","муу":"bad","үдэшлэг":"party","морь":"horse","тэмээ":"camel","хонь":"sheep","ямаа":"goat","уул":"mountain","цас":"snow","бууз":"dumpling","мах":"meat","сургууль":"school","багш":"teacher","сурагч":"student","хүүхэд":"baby"}
};
const KEYCAP = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];

const $ = id => document.getElementById(id);
const input=$("input"), output=$("output"), warn=$("warn"), chips=$("chips"), stat=$("stat"), lang=$("lang");
let lastTranslated = null;

function lookup(raw, code){
  const w = raw.toLowerCase();
  const tryKey = k => {
    if (code !== "en" && LANG[code][k]) return {key:LANG[code][k], via:k};
    if (EMOJI[k]) return {key:k};
    if (SYN[k]) return {key:SYN[k], via:k};
    return null;
  };
  let r = tryKey(w);
  if (!r && code==="en"){ // simple plural / -ing handling
    for (const s of [w.replace(/ies$/,"y"), w.replace(/es$/,""), w.replace(/s$/,""), w.replace(/ing$/,""), w.replace(/ing$/,"e")]){
      if (s!==w && (r = tryKey(s))) { r.via = r.via || w; break; }
    }
  }
  if (!r) return null;
  return {emoji:EMOJI[r.key], key:r.key, via:r.via};
}

function codepoints(e){
  return [...e].map(c=>c.codePointAt(0)).filter(c=>c!==0xFE0F && c!==0x200D).map(c=>"U+"+c.toString(16).toUpperCase()).join(" ");
}
function esc(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}

function translate(text, code){
  // Multi-word phrases for Mongolian first
  let pre = text;
  // Tokenize into words (letters incl. Cyrillic/accents, apostrophes) and everything else
  const tokens = pre.match(/[\p{L}\p{M}']+|\d|[^\p{L}\p{M}\d']+/gu) || [];
  const found = new Map(); let html="", hits=0, words=0;
  for (const t of tokens){
    if (/^\d$/.test(t)){ html += `<mark>${KEYCAP[+t]}</mark>`; hits++; words++; continue; }
    if (/^[\p{L}\p{M}']+$/u.test(t)){
      words++;
      const clean = t.replace(/'s$/i,"").replace(/'/g,"");
      const r = lookup(clean, code);
      if (r){ hits++; html += `<mark title="${esc(t)}">${r.emoji}</mark>`; if(!found.has(r.key)) found.set(r.key,{...r,orig:t}); }
      else html += esc(t);
      continue;
    }
    html += esc(t);
  }
  return {html, found, hits, words};
}

function run(){
  const text = input.value;
  const sig = text + "|" + lang.value;
  warn.hidden = true;
  if (!text.trim()){ showWarn("Type some text first, then press Translate."); return; }
  if (sig === lastTranslated){ showWarn("This text is already translated. Change it to translate again."); return; }
  const {html, found, hits, words} = translate(text, lang.value);
  output.innerHTML = html;
  lastTranslated = sig;
  stat.textContent = `${hits} of ${words} words matched`;
  chips.innerHTML = found.size ? [...found.values()].map(f =>
    `<span class="chip"><span class="e">${f.emoji}</span><span><span class="w">${esc(f.orig.toLowerCase())}</span>${f.via && f.via.toLowerCase()!==f.key ? ` <span class="via">→ ${esc(f.key)}</span>`:""}<br><code>${codepoints(f.emoji)}</code></span></span>`
  ).join("") : `<p class="hint">No words matched. Try simpler words like dog, sun, pizza or love.</p>`;
}
function showWarn(msg){ warn.textContent = msg; warn.hidden = false; }

$("translate").addEventListener("click", run);
$("clear").addEventListener("click", ()=>{
  input.value=""; output.innerHTML='<span class="empty">Your translation appears here.</span>';
  chips.innerHTML='<p class="hint">Translate something to see which words became emoji, with their Unicode codepoints.</p>';
  stat.textContent=""; warn.hidden=true; lastTranslated=null; updateCount(); input.focus();
});
$("copy").addEventListener("click", async ()=>{
  const txt = output.querySelector(".empty") ? "" : output.textContent;
  const b = $("copy");
  try { await navigator.clipboard.writeText(txt); b.textContent="Copied"; }
  catch { const r=document.createRange(); r.selectNodeContents(output); const s=getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent="Selected"; }
  setTimeout(()=>b.textContent="Copy",1400);
});
const SAMPLES = {
  en:"I love pizza and coffee in the morning! My dog is happy, but the cat is angry at 3 o'clock. Let's go to the beach with friends ☀",
  es:"Hola amigo! Amo el café y la pizza en la mañana. Mi perro está feliz, el gato triste.",
  fr:"Bonjour! J'aime le café et la pizza le matin. Mon chien est heureux, le chat est triste.",
  mn:"Сайнуу найз! Би өглөө кофе уух хайртай. Нохой баяртай, муур гунигтай. Уул, морь, тэмээ!"
};
lang.addEventListener("change", ()=>{
  if (!input.value.trim() || Object.values(SAMPLES).includes(input.value)) input.value = SAMPLES[lang.value];
  updateCount();
});
function updateCount(){ $("count").textContent = input.value.length + " chars"; }
input.addEventListener("input", ()=>{ updateCount(); warn.hidden = true; });
input.addEventListener("keydown", e=>{ if(e.key==="Enter" && (e.metaKey||e.ctrlKey)){ e.preventDefault(); run(); }});
updateCount(); run();


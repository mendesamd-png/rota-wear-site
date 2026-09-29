const summerProducts=[
  {
    "id": "01",
    "name": "Rota Pace",
    "label": "Camiseta de corrida",
    "type": "camisa",
    "description": "Branco-gelo e azul, recortes laterais e uma linha de percurso nas costas.",
    "production": "Malha técnica microperfurada, mangas raglan e caimento confortável. Composição, ventilação e desempenho a validar."
  },
  {
    "id": "02",
    "name": "Sol de Rota",
    "label": "Camisa de verão",
    "type": "camisa",
    "description": "Gola cubana e pequenos desenhos de sol, câmera e estrada sobre base areia.",
    "production": "Tecido leve com textura de linho e viscose como proposta, modelagem boxy e manga curta. Composição e encolhimento a definir."
  },
  {
    "id": "03",
    "name": "Fora de Quadro",
    "label": "Camiseta lifestyle",
    "type": "camisa",
    "description": "Um pôr do sol visto pelo visor de uma câmera. Azul e coral em uma base branco-osso.",
    "production": "Algodão, corte boxy e gola azul. Arte para serigrafia a finalizar e aprovar em amostra."
  },
  {
    "id": "04",
    "name": "Vento de Frente",
    "label": "Corta-vento de corrida",
    "type": "casaco",
    "description": "Azul ROTA, laterais claras e vivos finos. Uma camada leve para começar cedo.",
    "production": "Nylon leve, zíper integral, gola alta e recorte de ventilação. Não há desempenho impermeável ou refletivo validado."
  },
  {
    "id": "05A",
    "name": "Horizonte Essential",
    "label": "Corta-vento minimalista",
    "type": "casaco",
    "description": "Preto, assinatura pequena e um ponto de azul no puxador. O essencial aparece na construção.",
    "production": "Nylon micro-ripstop leve, capuz e mangas articuladas, bolsos discretos e zíper integral. Modelagem e desempenho a testar."
  },
  {
    "id": "05B",
    "name": "Horizonte Contour",
    "label": "Corta-vento com recortes",
    "type": "casaco",
    "description": "Azul ROTA com costuras diagonais e marca em pequena escala. Personalidade pelo corte.",
    "production": "Nylon leve, capuz, zíper integral e bolsos discretos. Recortes tonais e caimento sujeitos a protótipo."
  },
  {
    "id": "06",
    "name": "Depois do Corre",
    "label": "Moletom careca leve",
    "type": "casaco",
    "description": "Cinza mescla, gola azul e um convite nas costas: corrida, café e encontro.",
    "production": "Moletom sem felpa pesada, de gola careca e ombros relaxados. Provar toque, gramatura e estabilidade da gola."
  },
  {
    "id": "07",
    "name": "Rota Intervalo",
    "label": "Moletom com zíper",
    "type": "casaco",
    "description": "Preto lavado, mangas cinza e vivos azuis. Na mesma Rota, entre uma atividade e outra.",
    "production": "Moletom leve com capuz e zíper integral. Acabamento lavado, composição e encolhimento a desenvolver."
  },
  {
    "id": "08",
    "name": "Pace Cap",
    "label": "Boné de corrida",
    "type": "acessorio",
    "description": "Cinco painéis, laterais perfuradas e aba curta. Assinatura discreta para acompanhar o ritmo.",
    "production": "Tecido técnico leve, ajuste traseiro por fita e detalhe prata. Validar ventilação e ajuste; proteção UV e refletividade não ensaiadas."
  },
  {
    "id": "09",
    "name": "Solto no Mundo",
    "label": "Boné lifestyle",
    "type": "acessorio",
    "description": "Sarja areia, aba azul e um sol bordado. Uma peça para seguir sem roteiro.",
    "production": "Boné desestruturado de seis painéis, aba curva e regulagem por fivela. Bordado e profundidade da copa a provar."
  },
  {
    "id": "10",
    "name": "Primeira Luz",
    "label": "Gorro leve",
    "type": "acessorio",
    "description": "Branco-osso, duas linhas azuis e uma etiqueta pequena. Para as manhãs mais frescas.",
    "production": "Malha fina canelada, formato fisherman curto e dobra baixa. Mistura de fibras, elasticidade e recuperação a definir."
  }
];
const summerGrid=document.querySelector('#summer-products');
function renderSummer(type='all'){
 summerGrid.innerHTML=summerProducts.filter(p=>type==='all'||p.type===type).map(p=>`<article class="summer-card"><button class="summer-image" data-summer-id="${p.id}" aria-label="Ver ${p.name}: frente, costas e aplicação"><img src="assets/r04-${p.id}.webp" alt="${p.name}: proposta completa de frente e costas, com modelo usando a peça" width="1536" height="1024" loading="lazy"><span class="zoom-hint">Ver peça +</span></button><div class="summer-meta"><div><p class="eyebrow">${p.label}</p><h3>${p.name}</h3></div><span class="product-index">R04 / ${p.id}</span></div><p>${p.description}</p></article>`).join('');
 summerGrid.querySelectorAll('[data-summer-id]').forEach(button=>button.addEventListener('click',()=>{
  const p=summerProducts.find(p=>p.id===button.dataset.summerId);lastTrigger=button;
  const content=document.querySelector('#detail-content');
  content.innerHTML=`<div class="explore-detail"><img src="assets/r04-${p.id}.webp" alt="${p.name}: frente, costas e aplicação no corpo"><div class="explore-detail-copy"><p class="eyebrow">CORRIDA & VERÃO / R04 ${p.id} / ${p.label}</p><h2 id="detail-title">${p.name}</h2><p>${p.description}</p><dl><dt>Desenvolvimento proposto</dt><dd>${p.production}</dd></dl><p class="caption">Imagem ilustrativa gerada por IA. Cor, arte-final, materiais e medidas precisam de aprovação em amostra física.</p></div></div>`;
  enableImageZoom(content);dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;
 }));
}
document.querySelectorAll('[data-summer-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-summer-filter]').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});
 renderSummer(button.dataset.summerFilter);
 if(!document.documentElement.classList.contains('motion-paused'))summerGrid.animate([{opacity:.3,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,easing:'cubic-bezier(.22,1,.36,1)'});
}));
renderSummer();

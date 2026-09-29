const products = [
  {
    "id": "16",
    "name": "Rota em cena",
    "type": "camiseta",
    "label": "Camiseta básica de set",
    "file": "16-rota-em-cena",
    "phrase": "TODA ROTA RENDE FILME.",
    "fit": "Regular confortável, levemente solta, manga de comprimento convencional e gola de ribana. Mobilidade sem excesso de tecido.",
    "fabric": "Proposta: meia-malha 100% algodão penteado, 200–220 g/m², preto fosco. Validar conforto térmico, encolhimento e durabilidade em uso.",
    "print": "ROTA / EM CENA pequeno no peito; TODA ROTA RENDE FILME. discreto na nuca. Serigrafia fosca em branco-osso, sem grande estampa nas costas.",
    "finish": "Reforço de ombro a ombro, costura dupla e etiqueta confortável. Evitar aviamentos soltos e aplicações de alto relevo em áreas de contato. Testar a peça em uma diária real.",
    "color": "Preto fosco / branco-osso",
    "scene": "BASTIDOR DE SET",
    "new": true
  },
  {
    "id": "14",
    "name": "Jogo coletivo",
    "type": "camiseta",
    "label": "Camisa de futebol vintage",
    "file": "14-jogo-coletivo-vintage",
    "phrase": "NINGUÉM FAZ FILME SOZINHO.",
    "fit": "Caimento amplo inspirado no futebol dos anos 1990, gola polo contrastante, abertura em V e mangas soltas.",
    "fabric": "Proposta: poliéster jacquard de aproximadamente 160–190 g/m², preto com trama geométrica tonal de prismas. Desenvolver amostra da trama e avaliar toque e brilho.",
    "print": "ROTA em branco-osso no peito, prisma e CREW como assinaturas. Costas com NINGUÉM FAZ FILME SOZINHO., número 24 contornado em branco-osso e azul, e FRAMES POR SEGUNDO.",
    "finish": "Gola e punhos azuis com filete branco-osso. Aplicações compatíveis com poliéster; testar migração de cor, aderência e estabilidade da gola.",
    "color": "Preto / grafite tonal / azul ROTA / branco-osso",
    "new": true
  },
  {
    "id": "15",
    "name": "Em movimento",
    "type": "corta-vento",
    "label": "Corta-vento com capuz",
    "file": "15-em-movimento-azul",
    "phrase": "KEEP ROLLING",
    "fit": "Amplo, com capuz, zíper frontal completo, mangas raglan, punhos elásticos e ajuste na barra.",
    "fabric": "Proposta: nylon ripstop leve, aproximadamente 100–130 g/m². Reproduzir o toque visual levemente amassado e o brilho discreto do estudo original em amostra física.",
    "print": "Assinatura ROTA pequena no peito. Costas com KEEP ROLLING, CAMERA • BODY • MIND e linha de percurso, preservando a composição original.",
    "finish": "Recortes em azul ROTA #2160D0, filetes creme e puxadores laranja. Bolsos com zíper. Aplicação compatível com nylon a testar; impermeabilidade não validada.",
    "color": "Grafite / azul ROTA / creme / detalhes laranja",
    "new": true
  },
  {
    "id": "09",
    "name": "Filmmaker On Set",
    "type": "camiseta",
    "label": "Camiseta oversized",
    "file": "09-filmmaker-duas-linhas",
    "phrase": "FILMMAKER ON SET",
    "fit": "Oversized boxy, ombro deslocado, manga ampla próxima ao cotovelo e gola alta de ribana.",
    "fabric": "Proposta: 100% algodão penteado, 260 g/m², pré-encolhido. Confirmar estabilidade dimensional com a confecção.",
    "print": "Serigrafia monocromática em branco-osso. Duas linhas nas costas: FILMMAKER em sans serif alta e condensada; ON SET em serifa itálica. Filetes finos, prisma entre as linhas e assinatura ROTA discreta no peito.",
    "finish": "Costura dupla em barra e mangas; reforço de ombro a ombro; etiqueta tecida na lateral.",
    "color": "Preto / branco-osso",
    "new": true
  },
  {
    "id": "01",
    "name": "Olhar livre",
    "type": "camiseta",
    "label": "Camiseta oversized",
    "file": "01-olhar-livre",
    "phrase": "Let your eyes wander.",
    "fit": "Oversized, ombros deslocados e manga ampla.",
    "fabric": "Proposta: meia-malha 100% algodão penteado, 240 g/m².",
    "print": "Serigrafia azul sobre base branco-osso; ilustração de câmera e fotógrafo. Prisma discreto na nuca.",
    "finish": "Gola em ribana, reforço interno e barra com costura dupla.",
    "color": "Branco-osso / azul"
  },
  {
    "id": "02",
    "name": "Pronto pro REC",
    "type": "camiseta",
    "label": "Camiseta oversized",
    "file": "02-pronto-pro-rec",
    "phrase": "Outside the frame.",
    "fit": "Oversized boxy, corpo amplo e gola de ribana.",
    "fabric": "Proposta: 100% algodão penteado, 260 g/m², preto com efeito lavado a validar.",
    "print": "Serigrafia branco-osso e azul. Câmera sobre tripé nas costas; assinatura pequena no peito.",
    "finish": "Teste de lavagem e migração de cor antes de aprovar o efeito lavado.",
    "color": "Preto lavado / branco-osso / azul"
  },
  {
    "id": "03",
    "name": "Repertório de rua",
    "type": "camiseta",
    "label": "Camiseta ringer",
    "file": "03-repertorio-de-rua",
    "phrase": "Street-fed creativity.",
    "fit": "Ringer de caimento amplo, gola e punhos contrastantes.",
    "fabric": "Proposta: 100% algodão penteado, 240 g/m²; ribana azul compatível com a malha.",
    "print": "Serigrafia azul, com videomaker no skate. Aplicação frontal de maior formato.",
    "finish": "Validar encolhimento entre ribana e corpo; reforço de ombro a ombro.",
    "color": "Branco-osso / azul"
  },
  {
    "id": "04",
    "name": "Encontro",
    "type": "camiseta",
    "label": "Camiseta oversized",
    "file": "04-encontro",
    "phrase": "Tem coisa que só acontece quando a gente se encontra.",
    "fit": "Oversized, ombro deslocado e comprimento confortável.",
    "fabric": "Proposta: 100% algodão penteado, 240 g/m², tingido em azul.",
    "print": "Serigrafia branco-osso nas costas, com ilustração de amigos à mesa; assinatura frontal pequena.",
    "finish": "Aprovar opacidade da tinta, fidelidade do azul e toque no tecido tingido.",
    "color": "Azul / branco-osso"
  },
  {
    "id": "05",
    "name": "Polo de produção",
    "type": "moletom",
    "label": "Moletom polo",
    "file": "05-moletom-polo",
    "phrase": "Outside the frame.",
    "fit": "Polo ampla, ombros caídos, gola estruturada e abertura de três botões.",
    "fabric": "Proposta: moletom de 350 g/m², 80% algodão / 20% poliéster; gola com estrutura a validar.",
    "print": "Bordado ROTA no peito; aplicações menores no punho e nas costas. Detalhe azul horizontal.",
    "finish": "Carcela reforçada, punhos e barra em ribana; testar volume do bordado no avesso.",
    "color": "Preto / grafite / azul"
  },
  {
    "id": "06",
    "name": "Same crew",
    "type": "moletom",
    "label": "Moletom gola careca",
    "file": "06-moletom-same-crew",
    "phrase": "Same crew. Different scene.",
    "fit": "Amplo, gola careca, ombros deslocados e punhos em ribana.",
    "fabric": "Proposta: moletom de 350 g/m², 80% algodão / 20% poliéster, interior felpado.",
    "print": "Serigrafia azul com sequência ilustrada de set, skate e litoral. Prisma pequeno na nuca.",
    "finish": "Testar legibilidade dos traços e resistência à lavagem no tecido escolhido.",
    "color": "Branco-osso / azul"
  },
  {
    "id": "07",
    "name": "Motion",
    "type": "corta-vento",
    "label": "Corta-vento com zíper",
    "file": "07-corta-vento-motion",
    "phrase": "Always in motion.",
    "fit": "Regular amplo para sobreposição, gola alta e zíper frontal completo; sem capuz.",
    "fabric": "Proposta: nylon ripstop, 100–130 g/m², acabamento repelente à água. Resistência ao vento a validar.",
    "print": "Transfer compatível com nylon ou serigrafia específica, mediante teste. Faixas azuis nas mangas e ROTA nas costas.",
    "finish": "Punhos elásticos, ajuste na barra e proteção interna do zíper. Sem alegação de impermeabilidade.",
    "color": "Preto / azul / branco-osso"
  },
  {
    "id": "08",
    "name": "Location",
    "type": "corta-vento",
    "label": "Anoraque com capuz",
    "file": "08-location-rota",
    "phrase": "Let your eyes wander.",
    "fit": "Anoraque amplo, capuz ajustável, meio zíper e bolso frontal com aba.",
    "fabric": "Proposta: nylon ripstop, 100–130 g/m², com acabamento repelente à água a validar. Corpo preto, capuz e ombros azul ROTA, aba do bolso grafite.",
    "print": "Aplicação compatível com o acabamento do nylon. Ilustração olho/diafragma nas costas e assinatura no peito.",
    "finish": "Testar costuras nos recortes e aderência da estampa. Uma versão impermeável exige outra especificação e ensaios.",
    "color": "Preto / azul ROTA / grafite; estampa em branco-osso",
    "new": true
  }
];
const pieceConcepts={
  "16": [
    "Presença de equipe, no volume certo",
    "Uma básica para atravessar a diária de gravação. A assinatura pequena no peito identifica a crew e a frase na nuca cria um detalhe para quem chega perto. O preto e a aplicação discreta deixam a peça fácil de repetir e combinar, com o pertencimento expresso em poucos elementos."
  ],
  "14": [
    "O audiovisual como jogo coletivo",
    "A referência ao futebol vintage aparece na gola polo, no jacquard tonal e nos acabamentos contrastantes. O número 24 aproxima a linguagem de uniforme dos quadros por segundo do cinema, enquanto a frase nas costas coloca a equipe no centro. Azul ROTA e preto trazem esse repertório esportivo para a identidade da marca."
  ],
  "15": [
    "Continuar em movimento",
    "A frase Keep Rolling vale para a câmera e para o corpo. O azul ROTA ocupa a peça, combinado ao grafite e a linhas de percurso que sugerem deslocamento. Os pontos de cor nos puxadores dão ritmo ao conjunto e conectam o equipamento de trabalho à roupa de sair para explorar."
  ],
  "09": [
    "Vestir o ofício",
    "A tipografia assume o papel principal. FILMMAKER em uma linha e ON SET em outra criam uma leitura direta da profissão, com contraste entre letras e o prisma como ponto de ligação. A base escura deixa a mensagem nas costas funcionar como assinatura de quem vive a produção."
  ],
  "01": [
    "Olhar antes de enquadrar",
    "A câmera e o fotógrafo traduzem a curiosidade que vem antes de qualquer imagem. Azul sobre branco-osso mantém a ilustração legível e a peça leve visualmente. A modelagem ampla reforça a proposta de circular com liberdade, do trabalho aos encontros que alimentam o repertório."
  ],
  "02": [
    "O que acontece fora do quadro",
    "A câmera no tripé é um símbolo do set, mas a frase convida a perceber o que existe ao redor dele. O preto lavado dá um aspecto vivido, enquanto a arte clara e azul concentra a narrativa nas costas. A frente pequena permite usar a camiseta no dia a dia sem perder esse vínculo com o ofício."
  ],
  "03": [
    "A rua como repertório",
    "Skate e audiovisual se encontram pela observação e pelo movimento. A gola e os punhos azuis retomam a camiseta ringer, com um caráter esportivo e casual. A ilustração transforma a rua em assunto da peça, lembrando que ideias também surgem longe da mesa de trabalho."
  ],
  "04": [
    "Criar começa no encontro",
    "A mesa e os amigos representam a troca que faz uma ideia avançar. A frase ocupa as costas como um convite, e o azul faz da própria camiseta um campo de identidade ROTA. É uma peça de pertencimento para momentos compartilhados dentro e fora do trabalho."
  ],
  "05": [
    "Uma outra postura no set",
    "A gola polo propõe uma presença mais arrumada, combinada ao conforto visual do moletom. Preto, grafite e uma faixa azul organizam a peça com poucos elementos. O bordado pequeno mantém a identificação discreta, para circular entre preparação, reunião e gravação."
  ],
  "06": [
    "A mesma equipe em outros cenários",
    "A sequência de set, skate e litoral conta uma rotina que não termina quando a câmera desliga. Ilustrações azuis sobre a base clara costuram esses momentos como pequenas cenas. O moletom vira uma camada comum para pessoas que compartilham trabalho e repertório."
  ],
  "07": [
    "Direção em cada linha",
    "As faixas azuis nas mangas desenham trajetórias e dão ritmo à silhueta. Preto, azul e branco-osso fazem a ponte entre roupa esportiva e identidade de equipe. O zíper integral e a construção sem capuz propõem uma camada simples para acompanhar deslocamentos."
  ],
  "08": [
    "Levar o olhar para fora",
    "O olho combinado ao diafragma da câmera transforma a observação em símbolo. A construção de anoraque, com capuz e bolso frontal, aproxima a peça do universo de explorar locações. Azul, preto e grafite distribuem a identidade pelos recortes e deixam a ilustração clara se destacar nas costas."
  ]
};
function conceptMarkup(id, collection=pieceConcepts){const [title,copy]=collection[id];return `<section class="piece-concept"><p class="eyebrow">POR TRÁS DA PEÇA</p><h3>${title}</h3><p>${copy}</p></section>`;}
const trailViews = {"15": "15-em-movimento-doug-trilha-frente-verso", "08": "08-location-doug-trilha-frente-verso", "07": "07-motion-doug-trilha-frente-verso", "06": "06-same-crew-doug-trilha-frente-verso"};
const lifestyle = p => `assets/${p.file}${p.id==='09'?'-life':'-lifestyle'}.webp`;
const locationName = p => p.scene || (((Number(p.id)>=6 && Number(p.id)<=8)||p.id==='15') ? 'DOLOMITAS' : 'SÃO PAULO');
const grid=document.querySelector('#products');
const dialog=document.querySelector('#product-dialog');
let lastTrigger;
function render(type='all'){
 grid.innerHTML=products.filter(p=>type==='all'||p.type===type).map(p=>`<article class="product"><button class="product-visual" data-id="${p.id}" aria-label="Ver ${p.name}: imagens, conceito e proposta de produção"><img src="${lifestyle(p)}" alt="Campanha conceitual: modelo com ${p.name}, ${p.label.toLowerCase()} ROTA" loading="lazy" width="800" height="1000"><span class="product-tag ${p.new?'new':''}">${p.new?'NOVA PEÇA':locationName(p)}</span><span class="product-plus" aria-hidden="true">+</span></button><div class="product-info"><div><h3>${p.name}</h3><p>${p.label}</p></div><span class="product-index">/${p.id}</span></div></article>`).join('');
 grid.querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',()=>openProduct(b.dataset.id,b)));
}
function openProduct(id,trigger){const p=products.find(p=>p.id===id);lastTrigger=trigger;document.querySelector('#detail-content').innerHTML=`<div class="detail-layout"><div class="detail-gallery"><img src="${lifestyle(p)}" alt="Modelo vestindo ${p.name}; campanha conceitual em ${locationName(p)}">${trailViews[p.id]?`<figure class="trail-product"><img class="flat" src="assets/${trailViews[p.id]}.webp" alt="${p.name} na trilha: frente à esquerda e costas à direita, peça completa"><figcaption>NA TRILHA / FRENTE + COSTAS</figcaption></figure>`:''}<img class="flat" src="assets/${p.file}.webp" alt="Mockup de frente e costas de ${p.name}"><p class="gallery-caption">CAMPANHA CONCEITUAL / ${locationName(p)}<br>MOCKUP DE FRENTE E COSTAS / ROTA WEAR</p></div><div class="detail-copy"><p class="eyebrow">ROTA WEAR / ${p.id} / ${p.label.toUpperCase()}</p><h2 id="detail-title">${p.name}</h2><p class="detail-phrase">${p.phrase}</p>${conceptMarkup(p.id)}<p class="detail-status">ESPECIFICAÇÃO PROPOSTA · A VALIDAR EM PROTÓTIPO</p><dl>${[['Modelagem',p.fit],['Material',p.fabric],['Estampa e marca',p.print],['Construção e acabamento',p.finish],['Paleta',p.color]].map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl><p class="caption">Gramaturas e composições são pontos de partida para cotação. Medidas, grade, consumo, aplicações e desempenho precisam de ficha técnica e amostra aprovadas.</p></div></div>`;enableImageZoom(document.querySelector('#detail-content'));dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});render(b.dataset.filter);}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus();});
render();

const explorations = [
 {id:'10',file:'10-filmmaker-vinho',name:'Filmmaker / Cinema',subtitle:'Vinho lavado + amarelo-manteiga',colors:['#642735','#eee1a7'],phrase:'FILMMAKER ON SET',direction:'Letras largas, arredondadas e irregulares, com clima de cartaz de cinema dos anos 1970. A frase ocupa as costas; a frente recebe uma assinatura pequena.',production:'Proposta: algodão penteado de aproximadamente 260 g/m², oversized boxy. Serigrafia em amarelo-manteiga. Provar cobertura da tinta clara e estabilidade do efeito lavado.',fit:'Camiseta oversized · estampa tipográfica'},
 {id:'11',file:'11-olhar-musgo',name:'Olhar / Traço livre',subtitle:'Verde-musgo + marfim + laranja',colors:['#555e3e','#f0e4c6','#b75429'],phrase:'Let your eyes wander.',direction:'Desenho de câmera e fotógrafo com traço solto de marcador. A escrita manual aproxima a peça de um caderno de ideias, com uma cor de destaque na lente.',production:'Proposta: algodão penteado de aproximadamente 240 g/m², ombro deslocado. Serigrafia em marfim e laranja. Finalizar espessuras mínimas dos traços e validar a legibilidade no tecido.',fit:'Camiseta oversized · ilustração manual'},
 {id:'12',file:'12-filmmaker-manteiga',name:'Filmmaker / Editorial',subtitle:'Amarelo-manteiga + roxo-berinjela',colors:['#eee0a1','#57234c'],phrase:'Filmmaker / ON SET',direction:'Serifa itálica de alto contraste com “ON SET” pequeno e espaçado. O prisma entra como assinatura; a expressão vem das letras e da combinação de cores.',production:'Proposta: algodão penteado de aproximadamente 240 g/m², corpo amplo. Serigrafia roxa. Ajustar os filetes mais finos da serifa para a impressão e aprovar a cor do tingimento.',fit:'Camiseta oversized · serifa editorial'},
 {id:'13',file:'13-same-crew-marrom',name:'Same crew / Arquibancada',subtitle:'Marrom-café + bege-areia + marfim',colors:['#654a3a','#cdbb9b','#f0e4c6'],phrase:'SAME CREW / DIFFERENT SCENE.',direction:'Letras esportivas e número gráfico 24 sobre corpo marrom-café, com mangas inteiras em bege-areia e ribana chocolate. A câmera nas costas conecta a linguagem de time ao universo da produção audiovisual. O número é um elemento visual desta proposta.',production:'Proposta: algodão penteado de aproximadamente 240 g/m², modelagem ringer ampla. Corpo marrom-café, mangas em bege-areia, ribana chocolate e serigrafia em marfim. Testar encolhimento e solidez da cor entre os diferentes tecidos.',fit:'Camiseta ringer · grafismo esportivo'}
];
const explorationConcepts={
  "10": [
    "O cinema também veste",
    "A proposta trata a camiseta como um pequeno cartaz. Letras de inspiração setentista e o contraste de vinho com amarelo-manteiga dão calor e personalidade ao nome do ofício, deixando a frente mais discreta para equilibrar a estampa das costas."
  ],
  "11": [
    "Uma ideia ainda no papel",
    "O desenho solto valoriza o momento de rascunhar e descobrir. Câmera, escrita manual e um detalhe laranja trazem o vocabulário de um caderno de criação para o tecido. A combinação com verde-musgo propõe uma leitura mais orgânica desse universo."
  ],
  "12": [
    "Tipografia com voz própria",
    "A serifa itálica aproxima o nome do ofício da linguagem de uma revista. Amarelo-manteiga e berinjela dão contraste sem recorrer ao preto, enquanto o prisma pequeno mantém a conexão com a ROTA. A personalidade está na escala e no desenho das letras."
  ],
  "13": [
    "Vestir a mesma equipe",
    "Corpo marrom e mangas areia retomam a linguagem de uma camiseta de time, com um clima cotidiano e vivido. Letras esportivas, número 24 e câmera aproximam arquibancada e crew. O contraste entre tecidos dá identidade à peça mesmo antes de ler a frase."
  ]
};
document.querySelector('#explorations').innerHTML=explorations.map(p=>`<article class="exploration-card"><button class="exploration-image" data-explore="${p.id}" aria-label="Ampliar estudo ${p.name}"><img src="assets/${p.file}.webp" width="1536" height="1024" loading="lazy" alt="Estudo ${p.name}: frente, costas e modelo vestindo; ${p.subtitle.toLowerCase()}"><span aria-hidden="true">Ampliar +</span></button><div class="exploration-meta"><p class="eyebrow">ESTUDO / ${p.id}</p><div class="swatches" aria-label="${p.subtitle}">${p.colors.map(c=>`<span style="background:${c}"></span>`).join('')}</div></div><h3>${p.name}</h3><p class="exploration-color">${p.subtitle}</p><p>${p.direction}</p></article>`).join('');
document.querySelectorAll('[data-explore]').forEach(button=>button.addEventListener('click',()=>{
 const p=explorations.find(p=>p.id===button.dataset.explore);lastTrigger=button;
 document.querySelector('#detail-content').innerHTML=`<div class="explore-detail"><img src="assets/${p.file}.webp" alt="Frente, costas e modelo vestindo o estudo ${p.name}"><div class="explore-detail-copy"><p class="eyebrow">RODADA 02 / ESTUDO ${p.id}</p><h2 id="detail-title">${p.name}</h2><p class="detail-phrase">${p.phrase}</p>${conceptMarkup(p.id,explorationConcepts)}<p>${p.direction}</p><dl><dt>Paleta</dt><dd>${p.subtitle}</dd><dt>Modelagem e linguagem</dt><dd>${p.fit}</dd><dt>Produção proposta</dt><dd>${p.production}</dd></dl><p class="caption">Imagem gerada com IA. Cores, arte-final, posição da estampa e medidas precisam de aprovação em protótipo. Este estudo amplia as possibilidades da coleção.</p></div></div>`;
 enableImageZoom(document.querySelector('#detail-content'));dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;
}));

// Editorial images use the same accessible dialog as the collection.
document.querySelectorAll('[data-editorial]').forEach(button=>button.addEventListener('click',()=>{
 lastTrigger=button;
 const img=button.querySelector('img');
 const content=document.querySelector('#detail-content');
 content.replaceChildren();
 const figure=document.createElement('figure');figure.className='editorial-detail';
 const heading=document.createElement('h2');heading.id='detail-title';heading.textContent=button.dataset.title;
 const large=document.createElement('img');large.src=img.src;large.alt=img.alt;
 const caption=document.createElement('figcaption');caption.textContent='Imagem ilustrativa gerada por IA. Peças, modelos e cenários conceituais.';
 figure.append(large,heading,caption);content.append(figure);
 enableImageZoom(document.querySelector('#detail-content'));dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;
}));
document.querySelector('[data-open-basic]').addEventListener('click',event=>openProduct('16',event.currentTarget));

// A second dialog keeps the product information and its scroll position intact.
const imageDialog=document.querySelector('#image-dialog');
const zoomImage=document.querySelector('#zoom-image');
const imageViewport=document.querySelector('#image-viewport');
const imageStage=document.querySelector('#image-stage');
const zoomLevel=document.querySelector('#zoom-level');
const zoomIn=document.querySelector('#zoom-in');
const zoomOut=document.querySelector('#zoom-out');
let imageTrigger, imageScale=1, imageDrag;

function enableImageZoom(container){
 container.querySelectorAll('img').forEach(img=>{
  if(img.closest('button,a'))return;
  const button=document.createElement('button');
  button.type='button';button.className='zoom-trigger';
  button.setAttribute('aria-label',`Ampliar imagem: ${img.alt}`);
  const hint=document.createElement('span');hint.className='zoom-hint';hint.textContent='Ver imagem +';hint.setAttribute('aria-hidden','true');
  img.before(button);button.append(img,hint);
  button.addEventListener('click',()=>openImageZoom(img,button));
 });
}

function layoutZoom(center=true){
 if(!zoomImage.naturalWidth||!imageDialog.open)return;
 const oldWidth=imageStage.offsetWidth,oldHeight=imageStage.offsetHeight;
 const centerX=(imageViewport.scrollLeft+imageViewport.clientWidth/2)/Math.max(1,oldWidth);
 const centerY=(imageViewport.scrollTop+imageViewport.clientHeight/2)/Math.max(1,oldHeight);
 const fit=Math.min((imageViewport.clientWidth-24)/zoomImage.naturalWidth,(imageViewport.clientHeight-24)/zoomImage.naturalHeight,1);
 const width=Math.round(zoomImage.naturalWidth*fit*imageScale),height=Math.round(zoomImage.naturalHeight*fit*imageScale);
 zoomImage.style.width=`${width}px`;zoomImage.style.height=`${height}px`;
 imageStage.style.width=`${Math.max(imageViewport.clientWidth,width+24)}px`;
 imageStage.style.height=`${Math.max(imageViewport.clientHeight,height+24)}px`;
 zoomLevel.value=`${Math.round(imageScale*100)}%`;
 zoomOut.disabled=imageScale<=1;zoomIn.disabled=imageScale>=4;
 imageViewport.classList.toggle('is-zoomed',imageScale>1);
 if(center){imageViewport.scrollLeft=centerX*imageStage.offsetWidth-imageViewport.clientWidth/2;imageViewport.scrollTop=centerY*imageStage.offsetHeight-imageViewport.clientHeight/2;}
}
function changeZoom(next){imageScale=Math.max(1,Math.min(4,next));layoutZoom();}
function openImageZoom(img,trigger){
 imageTrigger=trigger;imageScale=1;
 document.querySelector('#image-title').textContent=img.alt||'Imagem ampliada';
 document.querySelector('#image-original').href=img.dataset.full||img.src;
 zoomImage.alt=img.alt;zoomImage.onload=()=>layoutZoom(false);
 zoomImage.src=img.dataset.full||img.src;
 imageDialog.showModal();document.body.style.overflow='hidden';
 imageViewport.scrollLeft=0;imageViewport.scrollTop=0;layoutZoom(false);
 document.querySelector('#image-close').focus();
}
zoomIn.addEventListener('click',()=>changeZoom(imageScale+.5));
zoomOut.addEventListener('click',()=>changeZoom(imageScale-.5));
document.querySelector('#zoom-fit').addEventListener('click',()=>changeZoom(1));
document.querySelector('#image-close').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('keydown',event=>{
 if(['+','=','-','0'].includes(event.key)){
  event.preventDefault();changeZoom(event.key==='0'?1:imageScale+(event.key==='-'?-.5:.5));
 }
});
imageDialog.addEventListener('close',()=>{
 imageDrag=null;imageViewport.classList.remove('is-dragging');
 if(!dialog.open)document.body.style.overflow='';
 imageTrigger?.focus({preventScroll:true});
});
imageViewport.addEventListener('pointerdown',event=>{
 if(event.pointerType!=='mouse'||event.button!==0||imageScale<=1)return;
 imageDrag={x:event.clientX,y:event.clientY,left:imageViewport.scrollLeft,top:imageViewport.scrollTop};
 imageViewport.setPointerCapture(event.pointerId);imageViewport.classList.add('is-dragging');event.preventDefault();
});
imageViewport.addEventListener('pointermove',event=>{
 if(!imageDrag)return;
 imageViewport.scrollLeft=imageDrag.left+imageDrag.x-event.clientX;
 imageViewport.scrollTop=imageDrag.top+imageDrag.y-event.clientY;
});
for(const name of ['pointerup','pointercancel','lostpointercapture'])imageViewport.addEventListener(name,()=>{imageDrag=null;imageViewport.classList.remove('is-dragging');});
window.addEventListener('resize',()=>layoutZoom());
enableImageZoom(document.querySelector('.hero-image'));
enableImageZoom(document.querySelector('.set-layout'));

// Keep motion optional and preserve the operating system's accessibility preference.
const motionButton=document.querySelector('.motion-toggle');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let savedMotion;
try{savedMotion=localStorage.getItem('rota-motion');}catch{}
function syncMotion(){
 const paused=reducedMotion.matches||savedMotion==='paused';
 document.documentElement.classList.toggle('motion-paused',paused);
 motionButton.setAttribute('aria-pressed',String(paused));
 motionButton.setAttribute('aria-label',paused?'Ativar movimento':'Pausar movimento');
 motionButton.querySelector('[aria-hidden]').textContent=paused?'▶':'Ⅱ';
 motionButton.disabled=reducedMotion.matches;
 motionButton.title=reducedMotion.matches?'Movimento reduzido nas preferências do dispositivo':'';
}
motionButton.addEventListener('click',()=>{
 savedMotion=document.documentElement.classList.contains('motion-paused')?'playing':'paused';
 try{localStorage.setItem('rota-motion',savedMotion);}catch{}
 syncMotion();
});
reducedMotion.addEventListener('change',syncMotion);syncMotion();
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});
 },{threshold:.08});
 document.querySelectorAll('.hero-copy,.hero-media,.section-heading,.editorial-grid>figure,.set-layout,.phrase-grid article,.exploration-card,.material-grid article,.funding-grid article').forEach((element,index)=>{
  element.classList.add('reveal-ready');element.style.setProperty('--reveal-delay',`${index%3*60}ms`);revealObserver.observe(element);
 });
}
const pageHeader=document.querySelector('.header');
const sectionLinks=[...document.querySelectorAll('.header nav a')].map(link=>({link,section:document.querySelector(link.getAttribute('href'))}));
let scrollPending=false;
function updatePagePosition(){
 const distance=document.documentElement.scrollHeight-window.innerHeight;
 pageHeader.style.setProperty('--progress',distance>0?Math.min(1,Math.max(0,window.scrollY/distance)):0);
 pageHeader.classList.toggle('is-scrolled',window.scrollY>30);
 let current;
 sectionLinks.forEach(item=>{if(item.section.getBoundingClientRect().top<window.innerHeight*.45)current=item;});
 sectionLinks.forEach(item=>{item.link.classList.toggle('is-active',item===current);if(item===current)item.link.setAttribute('aria-current','location');else item.link.removeAttribute('aria-current');});
 scrollPending=false;
}
window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updatePagePosition);}},{passive:true});
window.addEventListener('resize',updatePagePosition);updatePagePosition();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 if(!document.documentElement.classList.contains('motion-paused')){
  grid.getAnimations().forEach(animation=>animation.cancel());
  grid.animate([{opacity:.3,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:480,easing:'cubic-bezier(.22,1,.36,1)'});
 }
}));

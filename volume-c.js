// Selected capsule. IDs are scoped to Volume C, independent of earlier collections.
const volumeCProducts = [
  {
    id: '03', name: 'História pra rodar', label: 'Camiseta oversized',
    phrase: 'Toda Rota tem uma história pra rodar.',
    description: 'O filme se transforma em estrada. Cinema e percurso na mesma camiseta.',
    conceptTitle: 'Uma história em movimento',
    concept: 'Rodar é fazer um filme e também seguir caminho. A película desenha essa passagem nas costas, enquanto o pequeno rolo no peito funciona como assinatura. A base branco-osso dá espaço ao azul e ao grafite da ilustração.',
    material: 'Algodão penteado branco-osso, com gola de ribana e caimento amplo. Escolher a gramatura e as medidas a partir de uma peça-base ou amostra.',
    application: 'Arte em azul e grafite. Finalizar o desenho e as retículas antes de cotar serigrafia ou impressão digital; testar leitura, toque e resistência à lavagem.',
    development: 'Para o primeiro lote, comparar uma camiseta lisa pronta com modelagem própria. Conferir a área disponível para a arte em P, M, G e GG.',
    palette: 'Branco-osso / azul / grafite', view: 'Frente e costas'
  },
  {
    id: '13', name: 'A Rota sobe', label: 'Fleece meio zíper',
    phrase: 'A Rota sobe. A cabeça esvazia.',
    description: 'Textura clara, bolso azul e uma linha de altitude. Uma camada para sair cedo.',
    conceptTitle: 'Subir para desacelerar',
    concept: 'A textura do fleece é o elemento principal. O bolso azul cria um ponto de cor e a linha de altitude traduz a caminhada em poucos traços. A frase pequena nas costas guarda a ideia de encontrar silêncio enquanto o corpo se move.',
    material: 'Fleece de textura sherpa em branco-osso e tecido plano azul no bolso. Selecionar toque, composição e espessura em amostras reais.',
    application: 'Desenvolver bordado para a linha de altitude e a frase, testando a leitura sobre o pelo. A assinatura do bolso pode usar aplicação compatível com o tecido plano.',
    development: 'Modelagem ampla, gola alta, meio zíper e bolso com zíper. O primeiro protótipo deve validar volume, mobilidade, acabamento interno e estabilidade entre os tecidos.',
    palette: 'Branco-osso / azul / preto', view: 'Frente e costas'
  },
  {
    id: '15', name: 'Levo pouco', label: 'Colete dobrável + bolsinha',
    phrase: 'Levo pouco. Volto com uma Rota inteira.',
    description: 'Um colete leve que propõe guardar a si mesmo. O percurso cabe na bagagem.',
    conceptTitle: 'Carregar menos, viver mais',
    concept: 'O cinza-pedra e a marca pequena deixam a construção conduzir o colete. A bolsinha concentra a frase e o detalhe azul. A proposta é que o bolso traseiro receba a peça dobrada, fazendo da transformação parte da experiência.',
    material: 'Tecido leve de nylon ou poliéster, com toque macio e volume reduzido. Escolher o material junto à modelagem, sem pressupor impermeabilidade.',
    application: 'Assinatura e frase azuis em aplicação compatível com o tecido escolhido. Testar aderência e dobra da área estampada.',
    development: 'Zíper frontal, bolsos laterais e bolso traseiro. Validar em piloto se o colete inteiro cabe na bolsinha, como ela vira e onde ficam cursor, costuras e alça.',
    palette: 'Cinza-pedra / azul / preto', view: 'Frente, costas e proposta da bolsinha'
  },
  {
    id: '15A', name: 'Pochete transversal', label: 'Acessório / Levo pouco',
    phrase: 'Levo pouco. Volto com uma Rota inteira.',
    description: 'A bolsinha ganha alça, compartimentos e um desenho próprio para acompanhar o dia.',
    conceptTitle: 'O essencial vai junto',
    concept: 'A ideia de levar pouco vira uma pochete de uso transversal. O cinza-pedra recebe uma base azul, linhas de relevo e a frase. A alça ajustável, os puxadores e o interior colorido fazem a identidade aparecer também nos detalhes de uso.',
    material: 'Ripstop para o corpo, forro azul, fita de alça, regulador, fivela e zíperes. Definir espessura, estrutura e largura da fita no protótipo.',
    application: 'Grafismo e frase azuis, preparados em arte final. Testar impressão sobre o ripstop escolhido e aplicar antes da montagem quando o processo exigir.',
    development: 'Tamanho único com alça ajustável. Provar conforto junto ao corpo, abertura dos bolsos, resistência da alça e acesso aos objetos. Dimensões finais a definir.',
    palette: 'Cinza-pedra / azul / preto', view: 'Frente, costas e interior'
  },
  {
    id: '15B', name: 'Carteira de percurso', label: 'Acessório / Levo pouco',
    phrase: 'Levo pouco. Volto com uma Rota inteira.',
    description: 'Compacta por fora, azul por dentro. A frase se completa quando a carteira abre.',
    conceptTitle: 'Uma história que se abre',
    concept: '“Levo pouco” aparece no exterior e “Volto com uma Rota inteira” é descoberta por dentro. O relevo desenhado conecta as duas faces. Cinza, azul e zíper preto aproximam a carteira da pochete, formando uma pequena família de acessórios.',
    material: 'Ripstop cinza, forro azul e zíper de contorno. Estrutura interna leve, com porta-cartões e bolso para moedas, a desenvolver.',
    application: 'Arte azul no exterior e clara no interior. Finalizar escala e espessura das linhas para preservar a leitura numa peça pequena.',
    development: 'Tamanho único. Prototipar aberta e fechada, com cartões reais, para conferir capacidade, espessura, cantos do zíper e acesso ao bolso interno.',
    palette: 'Cinza-pedra / azul / preto', view: 'Exterior e interior'
  }
];

const volumeCGrid = document.querySelector('#volume-c-products');
volumeCGrid.innerHTML = volumeCProducts.map(p => `<article class="summer-card volume-c-card"><button type="button" class="summer-image" data-volume-c="${p.id}" aria-label="Ver Volume C ${p.id}: ${p.name}"><img src="assets/volume-c-${p.id}.webp" alt="${p.name}: ${p.view.toLowerCase()}" width="1536" height="1024" loading="lazy"><span class="zoom-hint">Peça + conceito</span></button><div class="summer-meta"><div><p class="eyebrow">${p.label}</p><h3>${p.name}</h3></div><span class="product-index">C / ${p.id}</span></div><p>${p.description}</p></article>`).join('');

volumeCGrid.querySelectorAll('[data-volume-c]').forEach(button => button.addEventListener('click', () => {
  const p = volumeCProducts.find(item => item.id === button.dataset.volumeC);
  lastTrigger = button;
  const content = document.querySelector('#detail-content');
  content.innerHTML = `<div class="detail-layout"><div class="detail-gallery"><figure><img src="assets/volume-c-${p.id}.webp" alt="Volume C / ${p.name}: ${p.view.toLowerCase()}" width="1536" height="1024"><figcaption class="gallery-caption">VOLUME C / ${p.view.toUpperCase()}</figcaption></figure></div><div class="detail-copy"><p class="eyebrow">VOLUME C / ${p.id} / ${p.label}</p><h2 id="detail-title">${p.name}</h2><p class="detail-phrase">${p.phrase}</p><section class="piece-concept"><p class="eyebrow">POR TRÁS DA PEÇA</p><h3>${p.conceptTitle}</h3><p>${p.concept}</p></section><p class="detail-status">DESENVOLVIMENTO PROPOSTO · A VALIDAR EM AMOSTRA</p><dl>${[['Material',p.material],['Estampa e marca',p.application],['Construção e primeiro protótipo',p.development],['Paleta',p.palette]].map(([label,value]) => `<dt>${label}</dt><dd>${value}</dd>`).join('')}</dl><p class="caption">Mockup ilustrativo gerado por IA. A seleção visual orienta o desenvolvimento; arte final, materiais, medidas e acabamento dependem de amostra física.</p></div></div>`;
  enableImageZoom(content);
  dialog.showModal();
  document.body.style.overflow = 'hidden';
  dialog.scrollTop = 0;
}));

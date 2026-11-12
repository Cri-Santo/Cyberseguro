const IC={
shield:'<path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
alert:'<path d="M12 3L2 20h20z"/><path d="M12 10v5M12 17.3v.4"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3M12 15v2"/>',
list:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 9l1.5 1.5L12 8M8 15l1.5 1.5L12 13M14 9h3M14 15h3"/>',
pc:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
book:'<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19V5M8 7h7M8 11h7"/>',
law:'<path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V7z"/><path d="M14 2v5h5M12 10v6M9.5 12h5M9 17h6"/>',
wifi:'<path d="M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0"/><circle cx="12" cy="19.5" r=".8"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
firm:'<rect x="4" y="3" width="10" height="18"/><path d="M14 9h6v12h-6M7 7h4M7 11h4M7 15h4"/>',
gov:'<path d="M3 10l9-6 9 6zM5 10v8M9 10v8M15 10v8M19 10v8M3 21h18"/>',
school:'<path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2.5 9 2.5 12 0v-5"/>'};
const svg=n=>`<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-hidden="true">${IC[n]}</svg>`;
const tile=(n,i)=>`<div class="tile p${i%5}">${svg(n)}</div>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

document.getElementById('heroico').innerHTML=svg('shield');

const S=[
{id:'o-que-e',t:'O que é Cibersegurança?',k:'list',ic:['shield'],it:[
'Conjunto de práticas, tecnologias e políticas destinadas à proteção de dados, sistemas e redes.',
'Garante maior segurança e privacidade nas atividades realizadas pela internet.',
'Protege informações contra acessos não autorizados, fraudes e ataques virtuais.',
'Fundamenta-se em quatro pilares: confidencialidade, integridade, disponibilidade e autenticidade.']},
{id:'golpes',t:'Tipos de Golpes',k:'cards',ic:'alert',it:[
['Phishing','Mensagens falsas utilizadas para roubar informações pessoais e bancárias.'],
['Smishing','Golpes realizados por mensagens SMS.'],
['Vishing','Fraudes aplicadas por meio de ligações telefônicas.'],
['Ransomware','Sequestro de arquivos e dados mediante pedido de resgate.'],
['Engenharia social','Manipulação psicológica para induzir vítimas a fornecer informações ou realizar ações.'],
['Spoofing','Falsificação de identidade digital para transmitir confiança e enganar usuários.'],
['Deepfakes','Utilização de inteligência artificial para criar conteúdos falsos que imitam pessoas reais.']]},
{id:'ameacas',t:'Ameaças Digitais',k:'cards',ic:'lock',it:[
['Roubo e vazamento de dados pessoais'],['Invasões de contas e dispositivos'],['Clonagem de cartões e fraudes financeiras'],
['Disseminação de programas maliciosos (malwares)'],['Ataques a sistemas e serviços digitais'],['Falsificação de identidade e extorsão virtual']]},
{id:'protecao',t:'Como se Proteger',k:'check',it:[
'Utilizar senhas fortes e diferentes para cada conta.','Ativar a autenticação de dois fatores (MFA).',
'Evitar clicar em links e arquivos de origem desconhecida.','Verificar a autenticidade de mensagens, sites e remetentes.',
'Manter sistemas operacionais e aplicativos atualizados.','Utilizar antivírus e ferramentas de proteção.',
'Realizar backups periódicos de arquivos importantes.','Evitar compartilhar informações pessoais e bancárias sem verificar a confiabilidade do destinatário.']},
{id:'educacao',t:'Educação Digital',k:'list',ic:['pc','book'],it:[
'Desenvolve a capacidade de identificar ameaças e comportamentos suspeitos.','Incentiva o uso consciente, ético e responsável da internet.',
'Reduz a vulnerabilidade de usuários diante de fraudes virtuais.','Promove o pensamento crítico sobre informações compartilhadas nas redes sociais.',
'Contribui para a inclusão digital e o exercício da cidadania.','Deve ser incentivada em escolas, universidades, empresas e instituições públicas.']},
{id:'legislacao',t:'Legislação',k:'cards',ic:'law',it:[
['Lei Carolina Dieckmann (Lei nº 12.737/2012)','Criminaliza determinadas práticas de invasão de dispositivos informáticos.','https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm'],
['Marco Civil da Internet (Lei nº 12.965/2014)','Estabelece princípios, direitos e deveres para o uso da internet no Brasil.','https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm'],
['LGPD (Lei nº 13.709/2018)','Regulamenta o tratamento de dados pessoais.','https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'],
['Política Nacional de Educação Digital (Lei nº 14.533/2023)','Incentiva o letramento digital e o desenvolvimento de competências tecnológicas.','https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14533.htm']]},
{id:'sociedade',t:'Papel da Sociedade',k:'agents',it:[
['user','Usuários','Adotar práticas seguras e desenvolver consciência digital.'],
['firm','Empresas','Investir na proteção de sistemas e na orientação dos clientes.'],
['gov','Governo','Fortalecer políticas públicas, legislação e canais de denúncia.'],
['school','Instituições de ensino','Promover educação digital e conscientização sobre ameaças virtuais.']]},
{id:'consideracoes',t:'Considerações Finais',k:'final',ic:['shield'],it:[
'A cibersegurança é fundamental para proteger dados, informações e a privacidade dos usuários.',
'A tecnologia, isoladamente, não é suficiente para impedir golpes digitais.',
'O fator humano continua sendo uma das principais vulnerabilidades da segurança digital.',
'A educação digital é indispensável para prevenir fraudes e fortalecer a proteção dos usuários.',
'A segurança na internet depende da colaboração entre indivíduos, empresas, instituições e governo.']}
];
const ul=a=>`<ul class="lst">${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
let html='';
S.forEach(s=>{
  let b='';
  if(s.k==='list'||s.k==='final'){
    b=`<div class="split"><div class="icons">${s.ic.map((n,i)=>tile(n,i+(s.k==='final'?2:0))).join('')}</div>${ul(s.it)}</div>`;
    if(s.k==='final')b+=`<div class="destaque"><h3>Mensagem principal</h3><p>A segurança digital começa com a informação. Conhecer os riscos, reconhecer ameaças e adotar hábitos seguros são atitudes fundamentais para prevenir golpes e proteger sua identidade no ambiente virtual.</p></div>`;
  }else if(s.k==='cards'){
    b=`<div class="grid">${s.it.map((x,i)=>`<article class="card t${i%5}">${tile(s.ic,i)}<h3>${esc(x[0])}</h3>${x[1]?`<p>${esc(x[1])}</p>`:''}${x[2]?`<p><a class="lei" href="${esc(x[2])}" target="_blank" rel="noopener">Ler a lei completa no Planalto<span class="sr"> (abre em nova aba): ${esc(x[0])}</span></a></p>`:''}</article>`).join('')}</div>`;
  }else if(s.k==='check'){
    b=`<div class="check"><header class="p2">${svg('list')}<h3>Checklist de segurança</h3></header><div class="prog"><i id="pb"></i></div>${s.it.map((x,i)=>`<label><input type="checkbox" class="ck"><span>${esc(x)}</span></label>`).join('')}<div class="pm" id="pm"></div></div>`;
  }else if(s.k==='agents'){
    b=`<div class="agents"><div class="grid">${s.it.map((x,i)=>`<div class="ag">${tile(x[0],i+1)}<h3>${esc(x[1])}</h3><p>${esc(x[2])}</p></div>`).join('')}</div></div>`;
  }
  html+=`<section id="${s.id}"><div class="wrap"><h2>${esc(s.t)}</h2><div class="bar"></div>${b}</div></section>`;
});
document.getElementById('main').innerHTML=html;
document.getElementById('nav').innerHTML=S.map(s=>`<a href="#${s.id}">${esc(s.t)}</a>`).join('')+'<a href="#boletim">Boletim</a><a href="#verificador">Verificador</a>';

// checklist
const cks=[...document.querySelectorAll('.ck')],pb=document.getElementById('pb'),pm=document.getElementById('pm');
function upd(){const n=cks.filter(c=>c.checked).length,t=cks.length;pb.style.width=(n/t*100)+'%';
  pm.textContent=n===t?'Parabéns! Você adota todos os hábitos de proteção.':`${n} de ${t} hábitos adotados. Marque os que você já pratica.`}
cks.forEach(c=>c.addEventListener('change',upd));upd();

// XposedOrNot
const API='https://api.xposedornot.com/v1',out=document.getElementById('out'),inp=document.getElementById('email');
async function get(u){const r=await fetch(u);if(r.status===404)return null;if(r.status===429)throw new Error('Muitas consultas em pouco tempo. Aguarde alguns segundos e tente de novo.');if(!r.ok)throw new Error('A API respondeu com erro '+r.status+'.');return r.json()}
const busy=m=>{out.innerHTML=`<div class="res"><p>${esc(m)}</p></div>`};
const fail=e=>{out.innerHTML=`<div class="res bad"><h3>Não foi possível consultar</h3><p>${esc(e.message&&e.message!=='Failed to fetch'?e.message:'Verifique sua conexão com a internet e tente novamente.')}</p></div>`};
document.getElementById('bCheck').onclick=async()=>{
  const v=inp.value.trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){out.innerHTML='<div class="res bad"><h3>E-mail inválido</h3><p>Digite um endereço no formato nome@exemplo.com.</p></div>';inp.focus();return}
  busy('Consultando…');
  try{
    const e=encodeURIComponent(v),d=await get(`${API}/check-email/${e}`);
    const names=d&&d.breaches?[].concat(...d.breaches):[];
    if(!names.length){out.innerHTML='<div class="res"><h3>Nenhum vazamento encontrado</h3><p>Este e-mail não consta na base consultada. Mantenha os bons hábitos: senhas únicas e autenticação de dois fatores.</p></div>';return}
    out.innerHTML=`<div class="res bad"><h3>E-mail encontrado em ${names.length} vazamento(s)</h3><p>${names.map(n=>`<span class="chip">${esc(n)}</span>`).join('')}</p><p>Troque as senhas dessas contas e ative a autenticação de dois fatores.</p></div><div id="det"></div>`;
    try{
      const a=await get(`${API}/breach-analytics?email=${e}`);
      const dt=a&&a.ExposedBreaches&&a.ExposedBreaches.breaches_details||[];
      const limit=15,slice=dt.slice(0,limit);
      const note=dt.length>limit?`<p class="edn">Exibindo os primeiros ${limit} vazamentos de um total de ${dt.length}.</p>`:'';
      document.getElementById('det').innerHTML=note+slice.map(x=>`<div class="br"><b>${esc(x.breach)}</b> ${x.domain?'('+esc(x.domain)+')':''}<br>${esc(x.details||'')}<br>${x.xposed_data?'Dados expostos: '+esc(x.xposed_data)+'<br>':''}${x.xposed_date?'Ano: '+esc(x.xposed_date)+' · ':''}${x.xposed_records?'Registros: '+Number(x.xposed_records).toLocaleString('pt-BR')+' · ':''}${x.password_risk?'Risco da senha: '+esc(x.password_risk):''}</div>`).join('');
    }catch(_){}
  }catch(err){fail(err)}
};
document.getElementById('bList').onclick=async()=>{
  busy('Carregando vazamentos…');
  try{
    const d=await get(`${API}/breaches`);
    const l=(d&&d.exposedBreaches||[]).slice().sort((a,b)=>String(b.breachedDate||'').localeCompare(String(a.breachedDate||''))).slice(0,12);
    if(!l.length){out.innerHTML='<div class="res"><p>Nenhum dado retornado.</p></div>';return}
    out.innerHTML='<div class="res"><h3>Vazamentos mais recentes na base</h3></div>'+l.map(x=>`<div class="br"><b>${esc(x.breachID)}</b> ${x.domain?'('+esc(x.domain)+')':''}<br>${x.industry?'Setor: '+esc(x.industry)+' · ':''}${x.breachedDate?'Data: '+esc(String(x.breachedDate).slice(0,10))+' · ':''}${x.exposedRecords?'Registros: '+Number(x.exposedRecords).toLocaleString('pt-BR')+'<br>':''}${x.exposedData?'Dados expostos: '+esc([].concat(x.exposedData).join(', ')):''}</div>`).join('');
  }catch(err){fail(err)}
};

// Boletim: filtro de temas
const CAT={golpes:['Golpes','p3'],protecao:['Proteção','p0'],leis:['Leis','p2'],noticias:['Notícias','p1']};
const ED=[
['golpes','Phishing e smishing: desconfie antes de clicar','Mensagens por e-mail ou SMS que pedem dados pessoais ou bancários são a porta de entrada de muitos golpes. Verifique remetente e link antes de agir.'],
['golpes','Deepfakes: rosto e voz também podem ser falsos','A inteligência artificial já cria conteúdos que imitam pessoas reais. Diante de um pedido urgente, confirme por outro canal.'],
['protecao','Uma senha forte para cada conta','Senhas diferentes limitam o estrago de um vazamento. Ative também a autenticação de dois fatores (MFA).'],
['protecao','Atualizações e backups em dia','Manter sistemas e aplicativos atualizados e fazer backups periódicos ajuda a se recuperar de ataques como o ransomware.'],
['leis','LGPD: seus dados têm regras','A Lei nº 13.709/2018 regulamenta o tratamento de dados pessoais no Brasil.'],
['leis','Lei Carolina Dieckmann','A Lei nº 12.737/2012 criminaliza determinadas práticas de invasão de dispositivos informáticos.'],
['noticias','Binance alerta para falha do iOS que pode expor carteiras de criptomoedas','Uma técnica divulgada por um pesquisador contorna o isolamento entre aplicativos em versões recentes do iOS e pode dar a um app acesso a arquivos de outros apps, inclusive frases de recuperação e chaves de carteiras.','https://www.cybersecbrazil.com.br/post/binance-alerta-para-falha-no-ios-que-pode-expor-chaves-de-carteiras-de-criptomoedas'],
['noticias','Apple corrige falhas no iMessage que davam acesso a grupos','As atualizações tratam de falhas que permitiam entrar em conversas em grupo sem autorização e ler mensagens anteriores, além de problemas em Bluetooth, AirPlay e na biblioteca Brotli. Instalar atualizações faz diferença.','https://www.cybersecbrazil.com.br/post/falha-no-imessage-permite-que-hackers-entrem-em-grupos-e-recebam-mensagens-privadas'],
['noticias','SAP corrige quatro falhas críticas em servidores empresariais','Todas têm nota máxima (10.0) e podem ser exploradas à distância, sem login; duas permitem executar código remotamente e comprometer todo o sistema.','https://www.cybersecbrazil.com.br/post/sap-lança-correções-urgentes-para-falhas-críticas-em-autenticação-e-servidores-empresariais'],
['noticias','Black Friday exige segurança e continuidade nas empresas','Em artigo de opinião, o CEO do Grupo NTSec, Bruno Nóbrega, defende que o aumento de acessos e transações na data pede preparo para manter as operações funcionando diante de imprevistos.','https://www.cybersecbrazil.com.br/post/black-friday-e-cibersegurança-devem-caminhar-juntas-e-isso-não-é-sobre-o-consumidor-final']];
const tabs=document.getElementById('tabs'),ed=document.getElementById('edicao');
let cur='todos';
function drawEd(){
  tabs.innerHTML=[['todos','Todos']].concat(Object.entries(CAT).map(([k,v])=>[k,v[0]])).map(([k,v])=>`<button type="button" class="tab${k===cur?' on':''}" data-k="${k}" aria-pressed="${k===cur}">${v}</button>`).join('');
  ed.innerHTML='<p class="edn">Edição nº 1, novembro de 2026</p>'+ED.filter(x=>cur==='todos'||x[0]===cur).map(x=>`<article class="nw"><span class="tag ${CAT[x[0]][1]}">${CAT[x[0]][0]}</span><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p>${x[3]?`<a class="lei" href="${esc(x[3])}" target="_blank" rel="noopener">Ler a notícia completa no Cyber Security Brazil<span class="sr"> (abre em nova aba): ${esc(x[1])}</span></a>`:''}</article>`).join('');
}
tabs.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;cur=b.dataset.k;drawEd();tabs.querySelector('.on').focus()});
drawEd();

// Boletim: formulário com validação
const nf=document.getElementById('nlForm'),$=id=>document.getElementById(id);
let tried=false;
function bad(id,el,msg){$(id).textContent=msg;el.setAttribute('aria-invalid',msg?'true':'false');return msg?el:null}
function validar(){
  const n=$('nNome').value.trim(),m=$('nMail').value.trim(),t=nf.querySelectorAll('input[name=tema]:checked').length;
  return [
    bad('eNome',$('nNome'),n.length<3||!/^[A-Za-zÀ-ÿ'’ -]+$/.test(n)?'Digite seu nome com pelo menos 3 letras, sem números.':''),
    bad('eMail',$('nMail'),!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m)?'Digite um e-mail válido, como nome@exemplo.com.':''),
    bad('eTemas',nf.querySelector('input[name=tema]'),t?'':'Escolha pelo menos um tema.'),
    bad('eOk',$('nOk'),$('nOk').checked?'':'Marque a caixa para autorizar o envio do boletim.')
  ].filter(Boolean);
}
nf.addEventListener('input',()=>{if(tried)validar()});
nf.addEventListener('submit',async e=>{
  e.preventDefault();tried=true;
  const er=validar();
  if(er.length){er[0].focus();$('nlMsg').innerHTML='';return}
  const reg={nome:$('nNome').value.trim(),email:$('nMail').value.trim().toLowerCase(),temas:[...nf.querySelectorAll('input[name=tema]:checked')].map(c=>c.value),freq:$('nFreq').value};
  const submitBtn=nf.querySelector('button[type=submit]');
  submitBtn.disabled=true;
  submitBtn.textContent='Enviando…';
  try{
    const fd=new FormData(nf);
    const body=new URLSearchParams(fd).toString();
    await fetch('/',{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body
    });
    let lista=[];
    try{lista=JSON.parse(localStorage.getItem('assinantes')||'[]')}catch(_){}
    if(!lista.some(x=>x.email===reg.email)){lista.push(reg);try{localStorage.setItem('assinantes',JSON.stringify(lista))}catch(_){}}
    $('nlMsg').innerHTML=`<div class="okm"><b>Inscrição confirmada, ${esc(reg.nome.split(' ')[0])}!</b><br>Você receberá o boletim ${esc(reg.freq.toLowerCase())} sobre: ${esc(reg.temas.join(', '))}.</div>`;
    nf.reset();tried=false;nf.querySelectorAll('[aria-invalid]').forEach(x=>x.removeAttribute('aria-invalid'));['eNome','eMail','eTemas','eOk'].forEach(i=>$(i).textContent='');
  }catch(err){
    $('nlMsg').innerHTML='<div class="okm warn">Não foi possível enviar no momento. Verifique sua conexão e tente novamente.</div>';
  }finally{
    submitBtn.disabled=false;
    submitBtn.textContent='Assinar boletim';
  }
});
inp.addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('bCheck').click()});

// ===== Acessibilidade: fonte, contraste, tema e VLibras =====
const root=document.documentElement,aMsg=$('a11yMsg');
const A={fs:100,theme:'',contrast:false};
try{Object.assign(A,JSON.parse(localStorage.getItem('acessibilidade')||'{}'))}catch(_){}
if(A.theme!=='dark'&&A.theme!=='light')A.theme=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
A.fs=Math.min(150,Math.max(80,Number(A.fs)||100));
function aplicar(aviso){
  root.style.setProperty('--fs',A.fs+'%');
  root.dataset.theme=A.theme;
  if(A.contrast)root.dataset.contrast='on';else delete root.dataset.contrast;
  $('fsLbl').textContent='Fonte '+A.fs+'%';
  $('bMenos').disabled=A.fs<=80;$('bMais').disabled=A.fs>=150;
  $('bContr').setAttribute('aria-pressed',String(!!A.contrast));
  $('bTema').textContent=A.theme==='dark'?'Tema claro':'Tema escuro';
  try{localStorage.setItem('acessibilidade',JSON.stringify(A))}catch(_){}
  if(aviso)aMsg.textContent=aviso;
}
$('bMais').onclick=()=>{A.fs=Math.min(150,A.fs+10);aplicar('Fonte aumentada para '+A.fs+'%')};
$('bMenos').onclick=()=>{A.fs=Math.max(80,A.fs-10);aplicar('Fonte reduzida para '+A.fs+'%')};
$('bContr').onclick=()=>{A.contrast=!A.contrast;aplicar('Alto contraste '+(A.contrast?'ativado':'desativado'))};
$('bTema').onclick=()=>{A.theme=A.theme==='dark'?'light':'dark';aplicar('Tema '+(A.theme==='dark'?'escuro':'claro')+' ativado')};
aplicar();
if(window.VLibras)new window.VLibras.Widget('https://vlibras.gov.br/app');



const MENU = [
  {href:'index.html', icon:'bi-speedometer2', label:'Dashboard'},
  {href:'produtos.html', icon:'bi-box-seam', label:'Produtos'},
  {href:'operadores.html', icon:'bi-people', label:'Operadores'},
  {href:'testes.html', icon:'bi-clipboard-check', label:'Testes'},
  {href:'logs.html', icon:'bi-file-text', label:'Logs Evidência'},
  {href:'historico.html', icon:'bi-clock-history', label:'Histórico'},
  {href:'etiquetas.html', icon:'bi-printer', label:'Etiquetas'},
];
export function renderLayout(activeFile){
  const sidebar = document.getElementById('sidebarMount');
  if(!sidebar) return;
  const current = activeFile || location.pathname.split('/').pop() || 'index.html';
  sidebar.innerHTML = `
    <h3><i class="bi bi-upc-scan"></i> Leitores PRO</h3>
    <ul>${MENU.map(m=>`<li><a href="${m.href}" class="${current===m.href?'active':''}"><i class="bi ${m.icon}"></i> ${m.label}</a></li>`).join('')}
    <li style="margin-top:auto"><a href="#" onclick="window._appLogout()"><i class="bi bi-box-arrow-left"></i> Sair</a></li></ul>
  `;
}
window._appLogout = () => { sessionStorage.clear(); location.href='index.html'; }

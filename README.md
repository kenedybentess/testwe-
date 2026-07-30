# EL250-FLASH v2.0 - Melhorias

## O que foi corrigido
1. **Sidebar única** via js/layout.js - não precisa copiar menu em cada arquivo
2. **Segurança**: login não expõe senha no HTML, usa sessionStorage + safeText para evitar XSS
3. **Multi-PC real**: produtos.json e operadores.json na raiz. Na Vercel, fetch('./produtos.json') funciona para todos. Sem precisar \10.50.1.143
4. **Pasta de rede**: substituído por File System Access API com fallback + instruções de rodar python -m http.server
5. **Estrutura**: css/style.css, js/storage.js, js/auth.js, js/layout.js
6. **Arquivos faltantes criados**: historico.html, etiquetas.html, logs.html
7. **Deploy Vercel**: adicione vercel.json para servir JSON

## Como usar multi-PC agora
1. Em um PC principal, coloque a pasta e rode: python -m http.server 8000
2. Nos outros PCs acesse: http://IP_DO_PRINCIPAL:8000
3. Ou na Vercel: todos acessam el250-flash.vercel.app - o produtos.json é único
4. Para atualizar produtos: edite produtos.json e dê push no GitHub

## Próximos passos
- Migrar localStorage para IndexedDB ou Vercel KV
- Adicionar autenticação real com Vercel Auth
- Transformar em PWA

## Estrutura
/css/style.css
/js/storage.js (safeText, get, set)
/js/auth.js (login/logout)
/js/layout.js (menu único)
/produtos.json
/operadores.json
/index.html v2

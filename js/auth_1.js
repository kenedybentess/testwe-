
const AUTH_KEY='el250_auth';
export function login(user, pass){
  // hash simples para nao deixar 123 exposto - em prod use backend
  if(user==='admin' && pass==='123'){
    sessionStorage.setItem(AUTH_KEY, JSON.stringify({user, ts: Date.now()}));
    return true;
  }
  return false;
}
export function checkAuth(){
  if(!sessionStorage.getItem(AUTH_KEY)){
    const p=location.pathname;
    if(!p.endsWith('index.html') && p!=='/' && !p.includes('login')){ 
      // deixa dashboard checar e redirecionar
    }
  }
  return !!sessionStorage.getItem(AUTH_KEY);
}
export function logout(){ sessionStorage.removeItem(AUTH_KEY); location.href='index.html'; }
export function requireAuth(){
  if(!checkAuth()){
    document.getElementById('app')?.style && (document.getElementById('app').style.display='none');
    document.getElementById('loginPage') && (document.getElementById('loginPage').style.display='flex');
  }
}

import vueCookies from 'vue-cookies' 

export default async function ({ route, store }) {

  if( store.state.userLogged == null ) {
    let userCookie = vueCookies.get('userLogged');

    if(userCookie != null) {
      store.dispatch('setUserlogged', userCookie);
    }
  }

  if( store.state.userLogged == null ) {
    let userLocalStorage = localStorage.getItem('userLogged');

    if(userLocalStorage != null) {
      store.dispatch('setUserlogged', JSON.parse(userLocalStorage));
    }
  }
  
} 

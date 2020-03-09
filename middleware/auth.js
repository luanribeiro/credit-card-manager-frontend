import vueCookies from 'vue-cookies' 

export default function ({ store, redirect }) {

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

  if(store.state.userLogged == null) {
  	redirect('/');
  }
}
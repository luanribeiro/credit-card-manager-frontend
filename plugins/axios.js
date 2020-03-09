import vueCookies from 'vue-cookies' 

export default function ({ $axios, redirect }) {
  let user = null;

  if( user == null ) {
    let userCookie = vueCookies.get('userLogged');

    if(userCookie != null) {
      user = userCookie;
    }
  }

  if( user == null ) {
    let userLocalStorage = localStorage.getItem('userLogged');

    if(userLocalStorage != null) {
      user = JSON.parse(userLocalStorage);
    }
  }

  if( user != null ) {
  	$axios.setHeader('Authorization', `Bearer ${user.token}`)
  }
  
}
import axios from 'axios' 
import vueCookies from 'vue-cookies' 

class HttpService {
  constructor(url) {
    this.user = null;

    if( this.user == null ) {
      let userCookie = vueCookies.get('userLogged');

      if(userCookie != null) {
        this.user = userCookie;
      }
    }

    if( this.user == null ) {
      let userLocalStorage = localStorage.getItem('userLogged');

      if(userLocalStorage != null) {
        this.user = JSON.parse(userLocalStorage);
      }
    }
  }

  async loadPage(page) {
    let pagination = await axios.get(this.url, {
      params: { page : page}
    }); 
    
    this.data = pagination.data;
  }
}

export { 
  PaginationService
};
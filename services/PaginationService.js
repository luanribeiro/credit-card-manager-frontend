

class PaginationService {
  constructor(httpProvider, url) {
    this.httpProvider = httpProvider;
    this.url = url;
    
    this.params = { page : 1 }

    this.data = { data : undefined, current_page : 0 };
  }

  async loadPage(page) {
    this.params.page = page;
    
    let pagination = await this.httpProvider.get(this.url, {
      params: this.params
    }); 
    
    this.data = pagination.data;
  }

  addParam(attr, value) {
    this.params[attr] = value;
  }
}

export { 
  PaginationService
};
import axios from 'axios';
const KEY = '28545575-c63076a40237c8f3b0a7ed946';
const API_URL = 'https://pixabay.com/api/';

export default class FetchPictures {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }

  async fetchPicures() {
    const options = new URLSearchParams({
      key: KEY,
      q: this.query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: this.per_page,
      page: this.page,
    });
    try {
      const url = `${API_URL}?${options}`;
      const responce = await axios(url);
      this.totalHits = responce.data.totalHits;
      return responce.data.hits;
    } catch (error) {
      console.log(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
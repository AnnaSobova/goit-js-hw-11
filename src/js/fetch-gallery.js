import axios from 'axios';
import Notiflix from 'notiflix';
const API_KEY = '30281232-70811b4bf68f3f563b5d60fb4';

export default class PixabayImages {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
    }
    get query() {
      return this.searchQuery;
    }
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
    incrementPage() {
      this.page += 1;
    }
    resetPage() {
      this.page = 1;
    }
    getGalleryImages(name) {
      return axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
      );
    }
  }
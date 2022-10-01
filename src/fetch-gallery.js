const API_KEY = '30281232-70811b4bf68f3f563b5d60fb4';
const BASE_URL = 'https://pixabay.com/api';

export default class ImagesApiService { 
constructor () {
this.searchQ = "";
this.page = 1;
this.PER_PAGE = 40;
}
fetchImages() {
 console.log ("до запроса", this);
 const url = `${BASE_URL}/?key=${API_KEY}&
 q=${this.searchQ}&page=${this.page}&per-page=${this.PER_PAGE}
 &image_type=photo`;

  return fetch(url)
   .then(response => response.json())
   .then(({ hits }) => {
     console.log(hits)
   this.incrementPage();
    console.log("если ок", this)
    return hits;
   });
};

incrementPage() {
 this.page += 1;
}
 
resetPage() {
 this.page = 1;
}

get searchQuery() {
return this.searchQ;
}

set searchQuery(newQuery){
 this.searchQ = newQuery;
 }
}
import axios from '../utils/axios'

export const newsCategory = {
    technology: 'technology',
    science: 'science',
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    health: 'health',
    sports: 'sports'
};

const MAX_ITEM_PER_PAGE = 10

export default class News {
    constructor(category){
        this._category = category;
        this._searchItem = '';
        this._pageSize = MAX_ITEM_PER_PAGE;
        this._currentPage = 1;
        this._totalPage = 1;
    }
}

getNews() {}

next() {}

prev() {}

setCurrentPage() {}

changeCategory() {}

search() {}





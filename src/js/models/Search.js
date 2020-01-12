export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`)
            .then(resp => resp.json())
            .catch(console.log);
        this.result = res.recipes;
    }
}
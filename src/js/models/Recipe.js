export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`)
            .then(resp => resp.json())
            .catch(error => alert(error));
        this.title = res.recipe.title;
        this.author = res.recipe.publisher;
        this.img = res.recipe.image_url;
        this.url = res.recipe.source_url;
        this.ingredients = res.recipe.ingredients;
    }

    calcTime() {
        //Assuming that we need 15 mins for every 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servigs = 4;
    }
}
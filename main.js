const app = Vue.createApp({
    data() {
        return {
            apiUrlBase: 'https://www.thecocktaildb.com/api/json/v1/1/',
            apiSearch: 'search.php?s=',
            apiRandom: 'random.php',
            queryText: "",
            incorrectQueryText: "",
            noResults: false,
            drinks: []
        }
    },

    methods: {
        fetchFromApi(){

            fetch(this.searchUrl)
            .then(res => res.json())
            .then((out) => {
            this.drinks = out.drinks;
            this.noResults = out.drinks == null;
            this.incorrectQueryText = this.noResults? this.queryText : "";
            //console.log('Checkout this JSON! ', out);
            })
            .catch(err => { throw err });
        },

        fetchRandomFromApi(){
            fetch(this.randomUrl)
            .then(res => res.json())
            .then((out) => {
            this.drinks = out.drinks;
            //console.log('Checkout this JSON! ', out);
            })
            .catch(err => { throw err });
        }
    },


    computed:{
        searchUrl(){
            return this.apiUrlBase + this.apiSearch + this.queryText;
        },

        randomUrl(){
            return this.apiUrlBase + this.apiRandom;
        }
    }
})
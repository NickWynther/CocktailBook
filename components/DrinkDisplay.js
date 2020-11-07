app.component('drink-display' , {
    props:{
        drink:{
            required:true
        },
    },

    template:
    /*html*/
    `
    <article class="drink-dispaly">
        <img :src="drink.strDrinkThumb">

        <attribute-display label="Name: " :value="drink.strDrink"></attribute-display>
        <attribute-display label="Category: " :value="drink.strCategory"></attribute-display>
        <attribute-display label="Glass: " :value="drink.strGlass"></attribute-display>
        <attribute-display label="Instructions: " :value="drink.strInstructions"></attribute-display>

    </article>
    `
})
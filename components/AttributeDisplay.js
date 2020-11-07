app.component('attribute-display' , {
    props:{
        label:{
            required:true
        },

        value:{
            required:true
        }
    },

    template:
    /*html*/
    `
    <div class="atr">
        <label>{{label}}</label>
        <span> {{value}}</span>
    </div>
    `
})
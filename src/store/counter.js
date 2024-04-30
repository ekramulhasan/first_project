import { defineStore } from "pinia";


export const useCounterStore = defineStore('counter',{

    state: () => {

        return {

            count: 0,
            title: "new item avaiable",
        }
    },

    actions: {

        increment(n){
            this.count += n;
        }
    },

    getters: {

        doubleCount: (state) => state.count *2,
    }

});
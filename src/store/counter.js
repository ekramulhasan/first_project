import { defineStore } from "pinia";


export const useCounterStore = defineStore('counter',{

    state: () => {

        return {

            count: 0,
            title: "new item avaiable",
        }
    }

});
import { defineStore } from "pinia";

export const useServiceStore = defineStore('service',{

    state: () => ({

        services : [

            { id: 1, name: 'web application' },
            { id: 2, name: 'app application' },
            { id: 3, name: 'desktop application' },
            { id: 4, name: 'customize application' },
            { id: 5, name: 'digital marketing' },
        
        ]

    })

});

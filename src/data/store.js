import { reactive } from "vue";

export const store = reactive({

    baseUrl: 'http://127.0.0.1:8000/api/',

    pagination: {

        prev: null,
        next: null,
        links: null,

    },

    projects: [],
});

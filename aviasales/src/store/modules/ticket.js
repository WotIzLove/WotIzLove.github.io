import axios from 'axios';
import {
    _
} from "vue-underscore";

export default {
    actions: {
        getSearchId(ctx) {
            return axios
                .get("https://front-test.beta.aviasales.ru/search")
                .then((response) => {
                    let searchId = response.data.searchId;
                    ctx.commit('updateSearchId', searchId);
                    return searchId;
                })
                .catch((error) => console.log(error));
        },
        getTicketList(ctx, id) {
            axios
                .get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
                .then((response) => {
                    let ticketList = response.data;
                    ctx.commit('updateTicketList', ticketList);
                    return ticketList;
                })
                .catch((error) => console.log(error));
        },
        changeSort(ctx, key) {
            ctx.commit('updateSelectSort', key);
        },
        sortTickets(ctx, sort) {
            let filtered = sort.ticketList;
            let sorted = [];

            if (sort.key == "duration") {
                sorted =
                    _.sortBy(filtered, (ticket) => {
                        return Number(ticket.segments[0][sort.key]);
                    })
                    .filter((ticket) => {
                        if (sort.stops.indexOf(ticket.segments[0].stops.length) !== -1 || sort.stops.indexOf(ticket.segments[1].stops.length) !== -1) {
                            return true
                        }
                    });
            } else {
                sorted =
                    _.sortBy(filtered, (ticket) => {
                        return Number(ticket[sort.key]);
                    })
                    .filter((ticket) => {
                        if (sort.stops.indexOf(ticket.segments[0].stops.length) !== -1 || sort.stops.indexOf(ticket.segments[1].stops.length) !== -1) {
                            return true
                        }
                    });
            }


            if (sort.dir === "desc") {
                sorted = sorted.reverse();
            }

            ctx.commit('updateSorted', sorted);
        }
    },
    mutations: {
        updateSearchId(state, searchId) {
            state.searchId = searchId;
        },
        updateTicketList(state, ticketList) {
            state.ticketList = ticketList;
        },
        updateSelectSort(state, key) {
            state.selectSort = key;
        },
        updateSorted(state, sorted) {
            state.sorted = sorted;
        }
    },
    state: {
        searchId: null,
        ticketList: [],
        selectSort: "",
        sortRules: [{
                key: "price:asc",
                title: "Самый дешёвый",
                active: false
            },
            {
                key: "duration:asc",
                title: "Самый быстрый",
                active: false
            },
        ],
        filters: {
            all: {
                id: "all",
                sectionText: "Все",
                status: true,
                stops: [0, 1, 2, 3],
            },
            sections: [{
                    id: "without-stops",
                    sectionText: "Без пересадок",
                    status: false,
                    stops: 0,
                },
                {
                    id: "one-stop",
                    sectionText: "1 пересадка",
                    status: false,
                    stops: 1,
                },
                {
                    id: "two-stop",
                    sectionText: "2 пересадки",
                    status: false,
                    stops: 2,
                },
                {
                    id: "three-stop",
                    sectionText: "3 пересадки",
                    status: false,
                    stops: 3,
                },
            ],
        },
        sorted: []
    },
    getters: {
        searchId(state) {
            return state.searchId
        },
        ticketList(state) {
            return state.ticketList
        },
        sortRules(state) {
            return state.sortRules
        },
        selectSort(state) {
            return state.selectSort
        },
        filters(state) {
            return state.filters
        },
        sectionsWithAll(state) {
            return [state.filters.all].concat(state.filters.sections);
        },
        stops(state, getters) {
            return getters.sectionsWithAll.filter((n) => n.status).map((n) => n.stops);
        },
        sorted(state) {
            return state.sorted
        }
    },
}
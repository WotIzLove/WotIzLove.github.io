let LOAD_NUM = 4;
let watcher;

new Vue({
    el: "#app",
    data: {
        total: 0,
        products: [],
        cart: [],
        search: "cat",
        lastSearch: "",
        loading: false,
        results: []
    },
    methods: {
        addToCart(product) {
            let found = false;
             this.total += product.price;
             this.cart.forEach(element => {
                 if (element.id === product.id) {
                     element.qty ++;
                     found = true;
                 }
             });
             if (!found) {
                this.cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1
                });   
             }
        },
        inc(item) {
            item.qty++;
            this.total += item.price;
        },
        dec(item) {
            item.qty--;
            this.total -= item.price;
            if (item.qty <= 0) {
                let i = this.cart.indexOf(item);
                this.cart.splice(i, 1);
            }
        },
        onSubmit() {
            this.products = [];
            this.results = [];
            this.loading = true;
            let path = `/search?q=${this.search}`;
            this.$http.get(path)
                .then ((response) => {
                    this.results = response.body;
                        this.products = response.body.slice(0, LOAD_NUM);
                        this.lastSearch = this.search;
                        this.appendResults();
                        this.loading = false;
                });
        },
        appendResults() {
            if(this.products.length < this.results.length) {
                let toAppend = this.results.slice(
                    this.products.length,
                    LOAD_NUM + this.products.length);
                this.products = this.products.concat(toAppend);
            }
        }
    },
    filters: {
        currency(price) {
            return `$${price.toFixed(2)}`;
        }
    },
    created() {
        this.onSubmit();
    },
    updated() {
        let sensor = document.querySelector("#product-list-bottom");
        watcher = scrollMonitor.create(sensor);
        watcher.enterViewport(this.appendResults);
    },
    beforeUpdate() {
        if(watcher) {
            watcher.destroy();
            watcher = null;
        }
    }
});


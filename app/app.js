const app = Vue.createApp({
    data() {
        return {
            num: 0,
            bol: false,
            bol1: false,
            bol2: false,
            txt: ""
        }
    },
    methods: {
        addFive() {
            console.log("executing addOne Function");
            this.num = this.num + 5
        },
        addOne() {
            console.log("executing addTwo Function");
            this.num++
        }
    },
    watch: {
        num() {
            if (this.num < 37) {
                this.bol1 = true;
                this.txt = "Not there yet";
            } else if (this.num > 37) {
                this.bol2 = true;
                this.txt = "Too much!";
            } else {
                this.bol = true;
            }

        }
    }
})

app.mount("#assignment")
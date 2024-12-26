const jsonServer = "http://localhost:3000";

export const getData = {
    mounted() {
        this.$store.dispatch("setIsLoading", true);
        fetch(`${jsonServer}/${this.name}${this.id ? "/" + this.id : ""}`)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    this.$store.dispatch("setIsLoading", false);
                    this.setDataTo(data)
                }, 3000)
            })
            .catch(() => {

            })
    },
    computed: {
        isLoading() {
            return this.$store.getters["getIsLoading"];
        },
    },
}

export const sendData = (message, callback = () => null) => {

    fetch(`${jsonServer}/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    }).then((res) => {
        callback(res)
    });

}
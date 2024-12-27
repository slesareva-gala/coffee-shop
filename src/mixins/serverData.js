const jsonServer = "http://localhost:3000";

export const getData = ({ name = "", id = "", q = "", callback = () => null, delay = 0 }) => {
    const request =
        `${jsonServer}
        ${name ? "/" + name : ""}
        ${id ? "/" + id : ""}
        ${q ? "?q=" + q : ""}`.replace(/\s+/g, '')

    fetch(request)
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
                callback(data)
            }, delay)
        })
}

export const sendData = ({ message, callback = () => null }) => {

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
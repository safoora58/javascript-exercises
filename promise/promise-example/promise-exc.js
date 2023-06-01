
const loadcss = cdn => {
    return new Promise((resolve, reject) => {

        const linkTag = document.createElement('link')

        linkTag.rel = 'stylesheet'
        linkTag.href = cdn

        linkTag.onload = () => resolve("file loaded successfully")
        linkTag.onerror = () => reject(new Error("file not loaded successfully"))

        document.head.append(linkTag)

    })

}


loadcss("css/style.css")
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })


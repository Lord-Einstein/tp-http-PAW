export const etapebonus = () => {
    fetch('https://jsonplaceholder.typicode.com/photos/418', {
        method: 'PATCH',
        body: JSON.stringify({
            url : "https://live.staticflickr.com/7006/6508102407_a4de65687b_c.jpg",
            albumId: 42,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
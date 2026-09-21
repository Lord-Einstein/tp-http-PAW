export const etape3 = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos", {
        method: 'POST',
        body: JSON.stringify({     
            "userId": 1,
            "title": "new todos",
            "completed": false
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .then((json) => console.log(json));
}
export const etape4 = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: 'PUT',
        body: JSON.stringify({     
            "userId": 1,
            "id": 1,
            "title": "I replace it",
            "completed": true
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
    .then((json) => console.log(json));
}
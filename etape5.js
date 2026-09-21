export const etape5 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/2', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'I replace it again',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
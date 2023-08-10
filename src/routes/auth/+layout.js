export async function load({}) {
    let result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = result.json();
    return {
        data,
    };
}

(async function () {
    const promSource = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const promJson = await promSource.json();
    console.log(promJson)
        
})();
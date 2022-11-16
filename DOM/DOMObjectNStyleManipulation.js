(function(window, document) {
    // select the element with the id lightSabers
    var lightSabers = document.querySelector('#lightSabers');

    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

    const ul = document.createElement('ul');
    

    const handleClick = $event => {
        $event.target.parentElement.parentElement.remove();
    };
    
    // for of loop: loop over an array
    for (const color of colors) {
        const li = document.createElement('li');
        li.style.color = color;
        const span = document.createElement('span');
        
        // build quote
        const quote = document.createElement(`quote`);
        quote.append('❌');
        
        // quote.classList.add('danger');
        
        // class ex 1: on every hover event on the quote element add the class danger
        // on every onmouseleave event remove the class danger 
        // mouseover 
        // mouseleave 
        quote.addEventListener('mouseover', () => {
            quote.classList.add('danger');
        });
        quote.addEventListener('mouseleave', () => {
            quote.classList.remove('danger');
        });

        // class ex 2: on every click event on the quote element remove the li 
        //             element from the DOM:
        //               * the li is quote's parent of parent
        //               * you can get the parent using the 'parent' field in the element
        //               * you can remove the element from the DOM using the 'remove' method
        //               * you can get the quote element from the $event argument
        quote.addEventListener('click', handleClick);
        
        // append quote
        span.append(color);
        span.appendChild(quote);

        li.appendChild(span);
        ul.appendChild(li);
    }

    

    lightSabers.appendChild(ul);

})(window, document);
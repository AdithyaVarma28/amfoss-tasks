//fix the errors and complete the code.

document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput=document.querySelector('.terminal-output');
    const terminalInput=document.querySelector('input[type="text"]');
    const shopLink=document.getElementById('shop');
    const aboutLink=document.getElementById('about');
    const contactLink=document.getElementById('contact');
    const searchIcon=document.querySelector('.options[src*="search"]');
    const heartIcon=document.querySelector('.options[src*="heart"]');
    const cartIcon=document.querySelector('.options[src*="cart"]');
    
    let cart=JSON.parse(localStorage.getItem('cart')) || [];

    function handleInput(command) {

        const [action,...args]=command.trim().split(' ');

        switch (action) {

            case 'help':
                viewCommand();
                break;
            case 'list':
                listCommand();
                break;
            case 'details':
                viewDetails(args[0]);
                break;
            case 'add':
                addCommand(args[0]);
                break;
            case 'remove':
                removeCommand(args[0]);
                break;
            case 'cart':
                viewCart();
                break;
            case 'buy':
                buyCommand();
                break;
            case 'clear':
                clearTerminal();
                break;
            case 'search':
                searchProducts(args.join(' '));
                break;
            case 'sort':
                sortProducts(args[0]);
                break;
            default:
                terminalOutput.textContent+=`Invalid command: ${command}\n`;
                break;
        }

        terminalInput.value='';
    }

    function viewCommand() {
        terminalOutput.innerHTML+=`
            Available Commands:<br>
            <code>list</code>: Display all available products.
            <br>
            <code>details 'product_id'</code>: View details of a specific product by its ID.
            <br>
            <code>add 'product_id'</code>: Add a specific product to your cart using its ID.
            <br>
            <code>remove 'product_id'</code>: Remove the product from the cart.
            <br>
            <code>cart</code>: View the current items in your cart.
            <br>
            <code>buy</code>: Proceed to a new webpage where you can review items in your cart.
            <br>
            <code>clear</code>: Clear the terminal screen.
            <br>
            <code>search 'product_name'</code>: Search a product by name.
            <br>
            <code>sort 'price/name'</code>: Sort products by price or name.
            <br>
        `;
    }

    function listCommand() {
        fetch("https://fakestoreapi.com/products/")
            .then(res=>res.json())
            .then(products=> {
                terminalOutput.textContent+='Available Products:\n';
                products.forEach(product=> {
                    terminalOutput.textContent+=`${product.id}: ${product.title} - $${product.price}\n`;
                });
            })
            .catch(err => console.error(err));
    }

    function viewDetails(input) {
        if(parseInt(input)>=0) {
            viewDetailsById(input);
        }
        else {
            viewDetailsByName(input);
        }
    }

    function viewDetailsById(productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(product=> {
                terminalOutput.innerHTML += `
                    <h3>Product Details:</h3>
                    <strong>ID:</strong> ${product.id}
                    <br>
                    <strong>Title:</strong> ${product.title}
                    <br>
                    <strong>Description:</strong> ${product.description}
                    <br>
                    <strong>Price:</strong> $${product.price}
                    <br>
                    <strong>Category:</strong> ${product.category}
                    <br>
                `;
            })
            .catch(err=>console.error(err));
    }

    function viewDetailsByName(productName) {
        fetch(`https://fakestoreapi.com/products/${productName}`)
            .then(res=>res.json())
            .then(product=> {
                terminalOutput.innerHTML += `
                    <h3>Product Details:</h3>
                    <strong>ID:</strong> ${product.id}
                    <br>
                    <strong>Title:</strong> ${product.title}
                    <br>
                    <strong>Description:</strong> ${product.description}
                    <br>
                    <strong>Price:</strong> $${product.price}
                    <br>
                    <strong>Category:</strong> ${product.category}
                    <br>
                `;
            })
            .catch(err=>console.error(err));
    }

    function addCommand(productId,quantity=1) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(product => {
                const existing=cart.find(item=>item.id.toString()===product.id.toString());
                if(existing) {
                    existing.quantity+=quantity;
                } 
                else {
                    cart.push({...product,quantity });
                }
                localStorage.setItem('cart',JSON.stringify(cart));
                terminalOutput.textContent+=`Added ${quantity} of ${product.title} to cart.\n`;
                updateCartTotal();
            })
            .catch(err=>console.error(err));
    }
    
    
    function updateCartTotal() {
        const total=cart.reduce((sum,product)=>sum+(product.price*product.quantity),0);
        document.getElementById('amount').textContent=total.toFixed(2);
    }  

    function removeCommand(productId) {
        productId=productId.toString();
        cart=cart.filter(item=>item.id.toString()!==productId);
        localStorage.setItem('cart',JSON.stringify(cart));
        terminalOutput.textContent+=`Product ${productId} removed from cart.\n`;
        updateCartTotal();
    }    

    function viewCart() {
        if(cart.length===0) {
            terminalOutput.textContent='Your cart is empty.\n';
        } 
        else {
            terminalOutput.textContent='Your Cart:\n';
            cart.forEach(product=> {
                terminalOutput.textContent+=`${product.quantity} x ${product.title} - $${(product.price*product.quantity).toFixed(2)}\n`;
            });
        }
    }

    function buyCommand() {
        if(cart.length===0) {
            terminalOutput.textContent+='Your cart is empty.\n';
        } 
        else {
            terminalOutput.textContent+='Proceeding to checkout...\n';
            localStorage.setItem('cart',JSON.stringify(cart));
            window.location.href='checkout.html'; 
        }
    }

    function clearTerminal() {
        terminalOutput.textContent='';
    }

    function searchProducts(query) {
        fetch("https://fakestoreapi.com/products/")
            .then(res=>res.json())
            .then(products=> {
                const search=products.filter(product=>product.title.toLowerCase().includes(query.toLowerCase()));
                terminalOutput.innerHTML+='Search Results:\n';
                if(search.length>0) {
                    search.forEach(product=> {
                        terminalOutput.innerHTML+=`${product.id}: ${product.title} - $${product.price}\n`;
                    });
                } 
                else {
                    terminalOutput.textContent+='No products found.\n';
                }
            })
            .catch(err=>console.error(err));
    }

    function sortProducts(criteria) {
        fetch("https://fakestoreapi.com/products/")
            .then(res=>res.json())
            .then(products=> {
                let sorted;
                if(criteria==='price') {
                    sorted=products.sort((a,b)=>a.price-b.price);
                } 
                else if(criteria==='name') {
                    sorted=products.sort((a,b)=>a.title.localeCompare(b.title));
                } 
                else {
                    terminalOutput.textContent+='Invalid sort criteria. Use "price" or "name".\n';
                    return;
                }
                terminalOutput.textContent+=`Products sorted by ${criteria}\n`;
                displayProducts(sorted);

            })
            .catch(err=>console.error(err));
    }

    shopLink.addEventListener('click',(e)=> {
        e.preventDefault();
        listCommand();
    });

    aboutLink.addEventListener('click',(e)=> {
        e.preventDefault();
        alert('This is an e-commerce platform to purchase products from our hypermarket.');
    });

    contactLink.addEventListener('click',(e)=> {
        e.preventDefault();
        alert('For any assistance, please call: +91 9876543210(The number does not work).');
    });

    searchIcon.addEventListener('click',()=> {
        alert('Use the command "search product_name" in the terminal to search for a product.');
    });

    heartIcon.addEventListener('click',()=> {
        alert('Thank You! I am glad you are happy with the webpage. Happy shopping!');
    });

    cartIcon.addEventListener('click',(e)=> {
        e.preventDefault();
        viewCart();
    });

    const productCatalog=document.getElementById('productCatalog');

    fetch("https://fakestoreapi.com/products/")
        .then(res=>res.json())
        .then(data=> {
            displayProducts(data);
        })
        .catch(err=>console.error(err));

        function displayProducts(products) {
            productCatalog.innerHTML='';
            products.forEach(product=> {
                const productBox=document.createElement('div');
                productBox.classList.add('productBox');
                productBox.innerHTML = `
                    <img src="${product.image}" alt="Loading..." class="product-image">
                    <h2>${product.title}</h2>
                    <span>$${product.price}</span>
                    <label for="quantity-${product.id}">Quantity:</label>
                    <input type="number" id="quantity-${product.id}" class="quantity-input" value="1" min="1" max="10">
                    <br>
                    <img src="img/cart logo.png" alt="Loading..." class="addtocart" data-id="${product.id}">
                `;
                productCatalog.appendChild(productBox);
            });
            document.querySelectorAll('.addtocart').forEach(button=> {
                button.addEventListener('click',(e)=> {
                    const productId=e.target.getAttribute('data-id');
                    const quantityInput=document.getElementById(`quantity-${productId}`);
                    const quantity=parseInt(quantityInput.value);
                    addCommand(productId,quantity);
                });
            });
        }

    terminalInput.addEventListener('keydown',(e)=> {
        if(e.key==='Enter') {
            handleInput(terminalInput.value);
        }
    });
});
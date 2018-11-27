window.addEventListener("DOMContentLoaded", function(){
    let products = document.getElementsByClassName('product'),
        buttons = document.getElementsByTagName("button"),
        open = document.getElementsByClassName('open')[0];

        function createCart(){
            let cart = document.createElement("div"),
                field = document.createElement("field"),
                heading = document.createElement("h2"),
                close = document.createElement("button");

            cart.classList.add("cart");
            field.classList.add("cart-field");
            close.classList.add("close");

            close.textContent = "Закрыть";
            heading.textContent = "В нашей корзине";

            document.body.appendChild(cart);
            cart.appendChild(heading);
            cart.appendChild(field);
            cart.appendChild(close);
           
        }

        createCart();

        let field = document.querySelector(".cart-field"),
            cart = document.querySelector(".cart"),
            close = document.querySelector(".close");
            closeItm = document.createElement("button");
            shop = document.querySelector(".shop");

            for(let i = 0; i < buttons.length; i++){

                buttons[i].addEventListener("click", function(){

                    let item = products[i].cloneNode(true),
                        btn = item.querySelector("button");
                    
                        btn.remove();
                        field.appendChild(item);
                        products[i].remove();

                        item.appendChild(closeItm);
                        closeItm.textContent = "Закрыть";
                        

                    
                        closeItm.addEventListener("click", function(){
                            item.remove();
                            closeItm.remove();
                            shop.appendChild(item);
                            item.appendChild(btn);
                        });
                })

            }


        function openCart(){
            cart.style.display = "block"
        }

        function closeCart(){
            cart.style.display = "none"
        }
        
        open.addEventListener("click", openCart);
        close.addEventListener("click", closeCart);
       
        
});

      function goToSource(quote) {
        console.log(quote.innerHTML);
        window.open(quote.cite);
    }

    function translatePhrase(phrase){
        let text= phrase.target.innerHTML;
        let url="https://translate.google.com/?sl=en&tl=sv&op=translate&text=" + encodeURI(text)
        window.open (url);

    }

    document.querySelectorAll(".english").forEach((element) => {
	element.addEventListener("click", translatePhrase);
    });
    
    let textnode = document.createTextNode("The busy have no time for tears.");
    document.querySelector('#quotes').appendChild(textnode);
    document.querySelector('#quotes').removeChild(textnode);

    let test= document.createTextNode("test");
    document.querySelector('#links').appendChild(test);
/*
    function booleify(element){
        element.innerHTML = "George Boole was here";
        element.classList.add('english');
    }

    document.querySelectorAll("h3").forEach((element) => {
    	element.addEventListener("click", (event) => {
    		booleify(event.target);
    	});
    });
*/

let boolCounter=0;
const boolePhrase = "George Boole was here";
function booleify(element){
    if (element.innerHTML !== boolePhrase){
        element.innerHTML=boolePhrase
        element.classList.add('english');
    	boolCounter++;
    }

    if (boolCounter===4){
        document.querySelectorAll(".english").forEach((element)=>{
            element.style.color='pink'
        })
    }
}

document.querySelectorAll("h3").forEach((element) => {
    	element.addEventListener("click", (event) => {
    		booleify(event.target);
    	});
    });


    test.remove();
  
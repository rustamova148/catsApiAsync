const catsContainer = document.querySelector(".cats");
const getData = async function() {
    try{
        const response = await fetch(`https://catfact.ninja/fact`);
        const data = await response.json();
        console.log(data);
        console.log(data.fact);
        console.log(data.length);
        const html = `<p class="facts">${data.fact}</p>`;
        catsContainer.insertAdjacentHTML("beforeend",html);
        catsContainer.style.opacity = 1;
    }catch(error){
     console.log(error.message);
    }
}; 
getData();
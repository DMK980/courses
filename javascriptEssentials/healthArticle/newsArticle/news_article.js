
// setting up the xhr object
let xhr = new XMLHttpRequest();
xhr.open('GET','./news_article.json',true);
xhr.responseType = 'json';


// news articles container element 
const newsArticleContainer = document.getElementById('newsArticles');
newsArticleContainer.classList.add('newsArticles');

// getting response
xhr.onload = ()=>{

    //get data
    let data = xhr.response.news;
    createElements(data);
}
xhr.send();

function createElements(data){
    /*
        This function creates the elements 
        to be set into the DOM accepts json
    */
   data.forEach(element => {

    let title = document.createElement('h1');
    title.textContent = element.id + ' ' + element.title;

    let description = document.createElement('p');
    description.textContent = element.description;

    let _break = document.createElement('br');
    addElementToDom(title)
    addElementToDom(description)
    addElementToDom(_break)
   });
}

function addElementToDom(element){
    /* 
        adds element to news container 
        in the DOM
    */
    newsArticleContainer.appendChild(element);
}

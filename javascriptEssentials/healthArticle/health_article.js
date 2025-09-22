

// xhr variable
let xhr = new XMLHttpRequest();

let url = './health_article.json';

xhr.open('GET',url,true);
xhr.responseType = 'json';

xhr.onload = ()=>{
    /* 
        getting articles and creating elements 
        aswell as appending the elements to the 
        DOM
    */
    let articles = xhr.response.articles;
    let articlesDiv = document.getElementById('articles');
    articlesDiv.classList.add('article');

    articles.forEach(article => {
        /*
            The creation and appending of elements to 
            the DOM for each article 
            (elements created and appended in the order 
            they should be displayed)
        */

        let title = document.createElement('h2');
        title.textContent = article.title;
        articlesDiv.appendChild(title);

        let description = document.createElement('p');
        description.textContent = article.description;
        articlesDiv.appendChild(description);

        let waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
        articlesDiv.appendChild(waysHeader);

        let waysList = document.createElement('ul');
        article.ways_to_achieve.forEach((way)=>{
            let listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });
        articlesDiv.appendChild(waysList);

        let benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
        articlesDiv.appendChild(benefitsHeader);

        let benefitsList = document.createElement('ul');
        article.benefits.forEach((benefit)=>{
            let listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        articlesDiv.appendChild(benefitsList);

    });
}
xhr.send();
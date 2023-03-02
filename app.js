const fetchCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayNewsCategory(data.data.news_category))
}

const displayNewsCategory = (categories) =>{
// console.log(categories);
// capture category container to append all the category links
const categoriesContainer = document.getElementById('categories-container');

categories.forEach(singleCategory => {
    // console.log(singleCategory.category_id);

    // 1st way to display category
    categoriesContainer.innerHTML += `
    <a class="nav-link" href="#" onclick="fetchNews('${singleCategory.category_id}', '${singleCategory.category_name}')">${singleCategory.category_name}</a>
    `
    // 2nd way to display category
    // let linkContainer = document.createElement('p');
    // linkContainer.innerHTML = `<a class="nav-link" href="#">${singleCategory.category_name}</a>`;
    // categoriesContainer.appendChild(linkContainer);
});

}
// fetch all news available in a category

const fetchNews = (categoryId, categoryName) =>{
    // console.log(categoryId);
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data, categoryName));
}

const displayNews = (data, categoryName) =>{
    // console.log(data, categoryName);
    
    const newsArray = data.data;
    newsArray.forEach(news =>{
        console.log(news);

        
    })

    // news count
    const newsArrayLength = newsArray.length;
    const newsCount = document.getElementById('news-count');
    newsCount.innerText = newsArrayLength;
    // news category name
    const newsCategoryName = document.getElementById('category-name');
    newsCategoryName.innerText = categoryName;
}



// fetchCategories();
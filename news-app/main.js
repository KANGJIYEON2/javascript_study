let newList = [];

const API_KEY = config.apikey;
const menus = document.querySelectorAll(".menus button");
menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByCategory(event))
);

console.log(menus);
const getLatesNews = async () => {
  let url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
  );
  const response = await fetch(url);
  const data = await response.json();
  newList = data.articles;
  render();
  console.log(data);
};
const getNewsByCategory = async () => {
  const category = event.target.textContent.toLowerCase();
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`
  );
  const respose = await fetch(url);
  const data = await respose.json();
  newList = data.articles;
  render();
};

const render = () => {
  const newsHTML = newList
    .map(
      (news) => `<div class="row news">
          <div class="col-lg-4">
            <img
              class="news-img"
              src=${news.urlToImage}
              alt=""
            />
          </div>
          <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>
            ${news.description}
            </p>
            <div>${news.source.name} * ${news.publishedAt}</div>
          </div>
        </div>`
    )
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};

//1.버튼에 클릭이벤트주기
//2. 카테고리별 뉴스 가져오기
//3. 그 뉴스 보여주기

getLatesNews();

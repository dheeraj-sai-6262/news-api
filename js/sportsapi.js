// 
let SportsApi = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0b614f7cd01d4932a6ddb0fb8205fc82";

// // let healthApi = "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0b614f7cd01d4932a6ddb0fb8205fc82";
// // let businessApi = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0b614f7cd01d4932a6ddb0fb8205fc82";
// // let technologyApi = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0b614f7cd01d4932a6ddb0fb8205fc82";
// // let scienceApi = "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=0b614f7cd01d4932a6ddb0fb8205fc82";
// // --sports section starts here
window
    .fetch(SportsApi)
    .then((sportsData) => {
        // console.log(sportsData)
        sportsData
            .json()
            .then((sports) => {
                console.log(sports.articles);
                let SportsFeed = sports.articles;
                let firstSportsBlock = sports.articles;

                let sportsnewsBlockOne = firstSportsBlock[0];
                document.getElementById("sportsFirstTemplate").innerHTML = `<ul>
                <img src="${sportsnewsBlockOne.urlToImage}"  />
                <a href ="${sportsnewsBlockOne.url}"  target="_blank>

                </a>
                </ul>
                `;

                let output = [];
                for (let sport of SportsFeed) {
                    output += `
                                    <ul class="list-group">
                                   <a href="${sport.url}"  target="_blank">
                                    <li class="text-dark">
                                    ${sport.title}</li></a>
                                    </ul>
                                    `;
                    document.getElementById("sportsAllTemplate").innerHTML = output;
                    // console.log(sports.article)
                }
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
// // sports section ends here
//
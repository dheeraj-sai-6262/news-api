let entertainmentApi = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0b614f7cd01d4932a6ddb0fb8205fc82";

// // entertainment section starts here

window
    .fetch(entertainmentApi)
    .then((EntertainmentData) => {

        EntertainmentData
            .json()
            .then((entertainment) => {
                console.log(entertainment.articles);
                let EntertainmentFeed = entertainment.articles;
                let output = [];
                for (let enter of EntertainmentFeed) {
                    console.log(enter);
                    let date = new Date(enter.publishedAt).toString();
                    output += `
                             <div class ="row">
                             <div class="col-md-5">
                             <img src ="${enter.urlToImage}"  class="enterImg"  />
                             </div>
                                                <div class="col-md-7">
                                                        <ul class="list-group">
                                                       <a href="${enter.url}"  target="_blank">
                                                        <li class="text-dark">
                                                        ${enter.title}</li></a>
                                                        <span class="text-muted  text-right">publishAt :${date} </span>
                                                        </ul>
                                                        </div>
                                                        </div>
                                                        `;
                    document.getElementById("EntertainmentAllTemplate").innerHTML = output;
                    //                     // console.log(sports.article)
                }
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
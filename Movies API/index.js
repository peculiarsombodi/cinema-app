let show = document.getElementById("show")
let now = document.getElementById("now")
let num = document.getElementById("num")
let tray = document.getElementById("tray")
let aside = document.getElementById("aside")
let oro = document.getElementById("oro")
let searchBase = "https://api.themoviedb.org/3/search/movie?api_key=1a16f3c2ffea98fbf03cac9c8ddb12e3&query="
let baseUrl = "https://api.themoviedb.org/3/movie/"
let trailer = "/videos?api_key=1a16f3c2ffea98fbf03cac9c8ddb12e3&"
let youtube = " https://www.youtube.com/watch?v="
let movie;
let them;
let they;
let aso;
let ewu;
let products;
let second;
let okay;
let idan = [];
let note = [];
let para = [];

let search = document.getElementById("search")
let searchTerm = search.value


function lol() {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1a16f3c2ffea98fbf03cac9c8ddb12e3")
        .then(res => res.json())
        .then(data => {
            products = data.results
            aso = products
            console.log(products);
            if (show.innerHTML == "") {
                now.innerHTML = "LOADING..."
            }

            else {
                for (let index = 0; index < products.length; index++) {
                    show.innerHTML +=
                        `
                            <div class="box">
                              <div id="image"><img src="${"https://image.tmdb.org/t/p/w500" + products[index].backdrop_path}" alt="" id="image"></div>
                              <div id="title">${products[index].original_title}</div>
                                <div id="date">Release date &nbsp;: &nbsp; ${products[index].release_date}</div>
                                <div id="rank">Popularity:  ${products[index].vote_average}million views</div>
                                <div id="wat"><button id="tray" onclick="add(${index})">WATCH TRAILER</button></div>
                            </div>
                            `

                }

            }



        })



        .catch(err => {
            console.log(err);
        })
}
lol()


function last() {
    fetch("https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=1a16f3c2ffea98fbf03cac9c8ddb12e3")
        .then(res => res.json())
        .then(data => {
            okay = data.results
             ewu = okay
            console.log(okay);

            if (show.innerHTML == "") {
                now.innerHTML = "LOADING..."
            }

            else {
                for (let index = 0; index < okay.length; index++) {
                    show.innerHTML +=
                        `
                    <div class="box">
                      <div id="image"><img src="${"https://image.tmdb.org/t/p/w500" + okay[index].backdrop_path}" alt="" id="image"></div>
                      <div id="title">${okay[index].original_title}</div>
                        <div id="date">Release date &nbsp;: &nbsp; ${okay[index].release_date}</div>
                        <div id="rank">Popularity:  ${okay[index].vote_average}million views</div>
                        <div id="wat"><button id="tray" onclick="plus(${index})">WATCH TRAILER</button></div>
                    </div>
                    `

                }
            }


        })



        .catch(err => {
            console.log(err);
        })
}
last()



function sec() {
    show.innerHTML = ""
    now.innerHTML = "RESULTS"
    num.innerHTML = "Not Available"
    num.style.display = "block"
    let search = document.getElementById("search")
    let searchTerm = search.value
    console.log(searchTerm);
    fetch(searchBase + searchTerm)
        .then(res => res.json())
        .then(data => {
            them = data.results
            they = them
            console.log(them);
            console.log(them.length);
            num.innerHTML = `<div id="sty">${them.length}</div>`
            for (let index = 0; index < them.length; index++) {
                show.innerHTML +=
                    `
                    <div class="box">
                      <div id="image"><img src="${"https://image.tmdb.org/t/p/w500" + them[index].poster_path}" alt="Not Available" id="image"></div>
                      <div id="title">${them[index].original_title}</div>
                        <div id="date">Release date &nbsp;: &nbsp; ${them[index].release_date}</div>
                        <div id="rank">Popularity:  ${them[index].vote_average}million views</div>
                        <div id="wat"><button id="tray" onclick="attach(${index})">WATCH TRAILER</button></div>
                    </div>
                    `

            }


        })




        .catch(err => {
            console.log(err);
        })

}


function add(_josh) {
    show.innerHTML = ""
    console.log(aside);
    console.log(aso[_josh].overview);
    para.push(aso[_josh].id)
    console.log(para);
    console.log("ademi");

    fetch(baseUrl + para + trailer)
        .then(res => res.json())
        .then(data => {
            movie = data.results
            console.log(movie);
            for (let index = 2; index < 3; index++) {       
                console.log(movie[index].key); 
                show.innerHTML +=
                `
       <div id="aside">
            <div id="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${movie[index].key}" frameborder="0" allow="accelerometer"; autoplay; ></iframe>
            </div>
            <div id="oro"><a href="index.html"><button id="shift">X</button></a>
            <div id="over">Overview : </div>
            ${aso[_josh].overview}
            </div>
          </div>
       `        
            }
        })
        .catch(err => {
            console.log(err);
        })
}


function plus(pet) {
    show.innerHTML = ""
    console.log(aside);
    console.log(ewu[pet].overview);
    idan.push(ewu[pet].id)
    console.log(idan);
    console.log("ewami");

    fetch(baseUrl + idan + trailer)
        .then(res => res.json())
        .then(data => {
            movie = data.results
            console.log(movie);
            for (let index = 0; index < 1; index++) {       
                console.log(movie[index].key); 
                show.innerHTML +=
                `
       <div id="aside">
            <div id="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${movie[index].key}" frameborder="0" allow="accelerometer"; autoplay; ></iframe>
            </div>
            <div id="oro"><a href="index.html"><button id="shift">X</button></a>
            <div id="over">Overview : </div>
            ${ewu[pet].overview}
            </div>
          </div>
       `        
            }
            console.log(ewu);
           
        })
        .catch(err => {
            console.log(err);
        })
}

function attach(pray) {
    show.innerHTML = ""
    console.log(aside);
    console.log(they[pray].overview);
    idan.push(they[pray].id)
    console.log(idan);
    console.log("ewami");

    fetch(baseUrl + idan + trailer)
        .then(res => res.json())
        .then(data => {
            movie = data.results
            console.log(movie);
            for (let index = 0; index < 1; index++) {       
                console.log(movie[index].key); 
                show.innerHTML +=
                `
       <div id="aside">
            <div id="video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${movie[index].key}" frameborder="0" allow="accelerometer"; autoplay; ></iframe>
            </div>
            <div id="oro"><a href="index.html"><button id="shift">X</button></a>
            <div id="over">Overview : </div>
            ${they[pray].overview}
            </div>
          </div>
       `        
            }
            console.log(they);
           
        })
        .catch(err => {
            console.log(err);
        })
}


const movies = {
    'comedy': ['The Blues Brothers','Monty Python and the Holy Grail','Yes Man', 'My Big Fat Greek Wedding', 'Home Alone', 'Mrs. Doubtfire', 'Airplane', 'Clueless', 'Fire Island', 'What about Bob'],
    'drama': ['Forrest Gump','The Shawshank Redemption','The Godfather', 'American Beauty', 'Batman Begins', 'Moonlight', 'Knives Out', 'A Quiet Place', 'Philadelphia', 'Green Mile'],
    'romance': ['Love actually','Ghost','Sliding Doors', 'The Notebook', 'A Star Is Born', 'Sleepless in Seattle', 'Manhattan', 'La La Land', 'Notting Hill', '10 things I hate about you'],
    'thriller': ['The Silence of the Lambs','Basic Instinct','Memento', 'Parasite', 'Misery', 'Mulholland Drive', 'Drive', 'Spellbound', 'Eyes Wide Shut', 'Zodiac'],
    'art': ['Close-Up','Elephant','The Five Obstructions', 'Force Majeure', 'Funny Games', 'The Graduate', 'Ida', 'In the Mood for Love', 'Our Daily Bread', 'Punch-Drunk Love'],
    'novelties': ['The Good nurse','Blackout','Luckiest Girl Alive', 'All the Old Knives', 'A Man from Toronto', 'Marry Me', 'Home Team', 'The Adam Project', 'Umma', 'Unhuman'],
};

let chosenMovies = [];

function createGenreButtons (){
    
    const div = document.getElementById('genres');
    for (let movieType in movies){
        let genreButton = document.createElement('button');
        let buttonInnerText = movieType.charAt(0).toUpperCase() + movieType.slice(1); //capitalization
        genreButton.innerText = buttonInnerText; 
        genreButton.movieType = movieType;
        div.appendChild(genreButton);
        genreButton.addEventListener('click', randomMovie);
    };
};

createGenreButtons ();


function randomMovie(e){
    let movieType = e.target.movieType
    random_item(movies[movieType])
}

function decisionMaker(){
    let finalChoiceMovie = chosenMovies[Math.floor(Math.random()*chosenMovies.length)];
    let finalChoiceDiv = document.getElementById('final_choice');
    let paragraphTitle = document.createElement('p');
    paragraphTitle.innerText = 'This is what you gonna watch tonight:';
    finalChoiceDiv.appendChild(paragraphTitle);
    let paragraphChoice = document.createElement('h3');
    paragraphChoice.innerText = finalChoiceMovie;
    finalChoiceDiv.appendChild(paragraphChoice);
}

function random_item(items){
    if (chosenMovies.length < 3) {
        let chosenMovie;
        while (true) {
            chosenMovie = items[Math.floor(Math.random()*items.length)];
            if (!chosenMovies.includes(chosenMovie)) {
                chosenMovies.push(chosenMovie);
                let chosenThreeMoviesDiv = document.getElementById('chosen_3_movies');
                let ol = document.createElement('ol');
                for (let movie of chosenMovies) {
                    let li = document.createElement('li');
                    li.innerText = movie;
                    ol.appendChild(li);
                }
                chosenThreeMoviesDiv.innerText = ''
                let p = document.createElement('p');
                p.innerText = 'Options you chose:'
                chosenThreeMoviesDiv.appendChild(p);
                chosenThreeMoviesDiv.appendChild(ol);
                if (chosenMovies.length === 3) {
                    let decideDiv = document.getElementById('decide');
                    let decideButton = document.createElement('button');
                    decideButton.innerText = 'DECIDE'; 
                    decideDiv.appendChild(decideButton);
                    decideButton.addEventListener('click', decisionMaker);
                }
                break
            }
        }
    }
}


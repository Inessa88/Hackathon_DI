const movies = {
    'comedy': ['The Blues Brothers','Monty Python and the Holy Grail','Yes Man', 'My Big Fat Greek Wedding', 'Home Alone', 'Mrs. Doubtfire', 'Airplane', 'Clueless', 'Fire Island', 'What about Bob'],
    'drama': ['Forrest Gump','The Shawshank Redemption','The Godfather', 'American Beauty', 'Batman Begins', 'Moonlight', 'Knives Out', 'A Quiet Place', 'Philadelphia', 'Green Mile'],
    'romance': ['Love actually','Ghost','Sliding Doors', 'The Notebook', 'A Star Is Born', 'Sleepless in Seattle', 'Manhattan', 'La La Land', 'Notting Hill', '10 things I hate about you'],
    'thriller': ['The Silence of the Lambs','Basic Instinct','Memento', 'Parasite', 'Misery', 'Mulholland Drive', 'Drive', 'Spellbound', 'Eyes Wide Shut', 'Zodiac'],
    'art': ['Close-Up','Elephant','The Five Obstructions', 'Force Majeure', 'Funny Games', 'The Graduate', 'Ida', 'In the Mood for Love', 'Our Daily Bread', 'Punch-Drunk Love'],
    'novelties': ['The Good nurse','Blackout','Luckiest Girl Alive', 'All the Old Knives', 'A Man from Toronto', 'Marry Me', 'Home Team', 'The Adam Project', 'Umma', 'Unhuman'],
};

let chosen = [];
// let genres = ['comedy', 'drama', 'romance', 'thriller', 'art', 'novelties'];

function createGenreButtons (){
    
    const div = document.getElementById('genres');
    for (let movie in movies){
        let genreButton = document.createElement('button');
        movie = movie.charAt(0).toUpperCase() + movie.slice(1);//capitalization
        genreButton.innerText = movie; 
        // genreButton.test = movie;
        div.appendChild(genreButton);
        // genreButton.addEventListener('click',randomMovie);
    };
};

createGenreButtons ()


// function randomMovie(e){
//     let test = e.target.test
//     random_item(movies[test])
// }


// function random_item(items){  
//     let chosenMovie;
//     do {
//         chosenMovie = items[Math.floor(Math.random()*items.length)];
//         chosen.push(chosenMovie);
//     } while (!chosen.includes(chosenMovie));
        
// }

// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));
// function createButton(){
//     for (let i = 0; i < bg_colors.length; i++) {
//         let coloredDiv = document.createElement("div");
//         coloredDiv.style.backgroundColor = bg_colors[i];
//         coloredDiv.className = 'coloredBox';
//         sectionLeft.appendChild(coloredDiv);
//         coloredDiv.addEventListener('click', setCurrentColor);
        
//     }

// }
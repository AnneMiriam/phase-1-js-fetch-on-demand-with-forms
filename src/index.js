const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector('input#searchByID')
        // console.log(input.value);
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then((movie) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.textContent = movie.title;
            summary.textContent = movie.summary;
            // console.log(title)
        })
        .catch(error => alert(error));
        inputForm.reset();
        // .catch(err => alert(err))
    });
};


// const inputForm = document.getElementsByTagName('form');
// const summary = document.getElementById('movieDetails');

// function renderSummary() {
//     inputForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         console.log('sumbitted');
//     });
// }
//? we want the input of the movies.id to return the movies.summary

document.addEventListener('DOMContentLoaded', init);

// fetch('http://localhost:3000/movies')
//   .then(resp => resp.json())
//   .then(movie => renderSummary(movie))
//   .catch(err => alert(err))
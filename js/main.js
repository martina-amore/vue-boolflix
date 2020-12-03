// Milestone 1: Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente. Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: Titolo Titolo Originale Lingua Voto

const app = new Vue ({
    el: "#root",
    data: {
        movies: [],
        userSearch: "",
    },
    methods: {
        searchMovie: function () {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: "163ee6a9373349c140026e09d186a9b9",
                    query: this.userSearch,
                }
            })
                .then((answer) => {
                    this.movies = answer.data.results;
                    for (var i = 0; i < this.movies.length; i++) {
                        this.movies[i].vote_average = Math.ceil(this.movies[i].vote_average / 2);
                    }
            })
        }
    }
})

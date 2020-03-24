apiURL = "http://localhost/moviesapi/web/api/movies"

new Vue({
    el: '#app',

    movies:'',
    liveFilter:'',
    filterAuthor:'',
    types:'',
    movie:'',

    ready: function(){
        this.getMovies();
    },

    methods: {
        getMovies: function(){
            this.$set('movie','');
            this.$http.get(apiURL, function(movies){
                this.$set('movies', movies);

                typeArr = [];
                jQuery.each(movies, function(index, movie) {
                  jQuery.each(movie.field_movie_type, function(index, type){
                    if (jQuery.inArray(type.value, typeArr) === -1) {
                      typeArr.push(type.value);
                    }
                  })
                })
              this.$set('types', typeArr);
            });
        },

      getTheMovie: function(movieID) {
        this.$http.get(apiURL + '/' + movieID, function(movie){
          this.$set('movie', movie);
        })
      }
    }
})

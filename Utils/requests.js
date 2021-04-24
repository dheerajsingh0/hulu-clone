const API_KEY=process.env.API_KEY;
export default{
        fetchTrending:{
            title:'Trending',
            url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
        },
        fetchTopRated:{
            title:'Top Rated',
            url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        },
        fetchActionMovies:{
            title:'Action',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
        },
        fetchComedyMovies:{
            title:'Comedy',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
        },
        fetchHorrorMovies:{
            title:'Horror',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
        },
        fetchRomanceMovies:{
            title:'Romance',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        },
        fetchMystery:{
            title:'Mestery',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
        },
        
        fetchSciFi:{
            title:'Sci-fi',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
        },
        
        fetchTvWestern:{
            title:'Western',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
        },
        
        fetchAnimation:{
            title:'Animation',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
        },
        fetchTv:{
            title:'TV Movie',
            url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
        },fetchsearch:{
            title:'search',
            url:`/search/movie?api_key=${API_KEY}`,
        },
}

//https://api.themoviedb.org/3/search/movie?api_key=99e889298c549b1e29e8e553bdeff5f5&query=Jack+Reacher
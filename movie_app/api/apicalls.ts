const apikey: string = 'ecf0017d4ae534f9ef5a8cd457291d87';
export const baseImagePath =(size:string,path:string)=>{
    return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upComingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

export const searchMovies = (keyword:string)=>{
    return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
}
export const movieDetails = (id:string)=>{
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
}
export const moviecastDetails = (id:string)=>{
    return `https://api.themoviedb.org/3/credit/${id}?api_key=${apikey}`;
}
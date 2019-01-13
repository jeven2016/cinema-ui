export const baseUri = "http://localhost:5806/cinema";

export const queryHomeList = `${baseUri}/home`;
export const queryVideoPageUri = `${baseUri}/video`;

export const queryMovieDetailUri = `${baseUri}/video/{id}`;
export const queryFavoriteMoviesUri = `${baseUri}/video/favorite?videoType=`;
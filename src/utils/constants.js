
export const BG = new URL("../assets/bg.jpg",import.meta.url).href;
export const LOGO = new URL ("../assets/logo.png",import.meta.url).href
export const USER_AVATAR = new URL("https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",import.meta.url).href
export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
    }
  };
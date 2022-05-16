export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=NWKy7CaSQ9j7BXRRbjjP80Y2mpThGf1a`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
       return {
           id: img.id,
           title: img.title,
           url: img.images?.downsized_medium.url
       }
    })
     return gifs;
   }
import stlyes from '../../Favorites.module.css'

export const FavoriteCard = ({ favorite }) => {
     console.log(favorite.weather.temperature);

     return (
          <div className={stlyes.favorite}>
               <h2>
                    {favorite.name}
               </h2>
               <h2>
                    {favorite.weather.temperature.tempC}
               </h2>
          </div>
     )
}

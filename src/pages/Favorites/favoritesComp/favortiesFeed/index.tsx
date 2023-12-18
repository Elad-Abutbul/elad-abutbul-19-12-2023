import { FavoriteCard } from "..";
import { useSelector } from "react-redux";
import { Favorites } from "../../../../types";
import stlyes from '../../Favorites.module.css';


export const FavoritesFeed = () => {
  const favorites = useSelector((state: Favorites) => state.favorites.list);

  return (
    <div className={stlyes.container}>
      {favorites.length !== 0 ? (
        favorites.map(({ LocalizedName, weatherText, Key, temperature }) => (
          <FavoriteCard
            LocalizedName={LocalizedName}
            weatherText={weatherText}
            Key={Key}
            temperature={temperature}
          />
        )
        )
      ) : (
        'Like A City To See!'
      )}
    </div>
  );
};

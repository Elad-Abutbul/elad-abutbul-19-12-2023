import { FavoriteCard } from "..";
import { useSelector } from "react-redux";
import { Favorite } from "../../../../types";
import stlyes from '../../Favorites.module.css';

interface RootState {
  favorites: {
    list: Favorite[];
  };
}

export const FavoritesFeed = () => {
  const favorites = useSelector((state: RootState) => state.favorites.list);

  return (
    <div className={stlyes.container}>
      {favorites.length !== 0 ? (
        favorites.map(({ LocalizedName, weatherText, Key, weather }) => (
          <FavoriteCard
            LocalizedName={LocalizedName}
            weatherText={weatherText}
            Key={Key}
            weather={weather}
          />
        )
        )
      ) : (
        'Like A City To See!'
      )}
    </div>
  );
};

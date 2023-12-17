import { FavoriteCard } from "..";
import { useSelector } from "react-redux";
import stlyes from '../../Favorites.module.css'

interface RootState {
  favorites: {
    list: { Key: string }[];
  };
}
export const FavoritesFeed = () => {
  const favorites = useSelector((state: RootState) => state.favorites.list);

  return <div className={stlyes.container}>{favorites.length !== 0 ? favorites.map((favorite) => <FavoriteCard favorite={favorite} key={favorite.Key} />) : 'Like A City To See!'}</div>;
};

import { useSelector } from "react-redux";
import { FavoriteCard } from "..";
import stlyes from '../../Favorites.module.css'

export const FavoritesFeed = () => {
  const favorites = useSelector((state) => state.favorites.list);

  return <div className={stlyes.container}>{favorites.map((favorite) => <FavoriteCard favorite={favorite} key={favorite.id} />)}</div>;
};

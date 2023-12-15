import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../../redux-tool-kit/slices/favorites';

export const FavoritesButton = ({ favoriteObject }) => {

     const favorites = useSelector((state) => state.favorites.list);
     const dispatch = useDispatch();
     const isFavorite = favorites.some((item) => item.id === favoriteObject?.id);

     const handleToggleFavorite = () => {
          if (isFavorite) {
               dispatch(removeFavorite({ id: favoriteObject?.id }));
          } else {
               dispatch(addFavorite(favoriteObject));
          }
     };

     return (
          <button onClick={handleToggleFavorite}>
               <FaHeart color={isFavorite ? 'red' : 'black'} /> Favorites
          </button>
     )
}


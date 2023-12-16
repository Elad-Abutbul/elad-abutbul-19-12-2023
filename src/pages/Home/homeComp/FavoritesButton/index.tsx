import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../../redux-tool-kit/slices/favorites';

export const FavoritesButton = ({ favoriteObject }) => {

     const favorites = useSelector((state) => state.favorites.list);
     const dispatch = useDispatch();
     const isFavorite = favorites.some((item) => item.Key === favoriteObject?.Key);

     const handleToggleFavorite = () => {
          if (isFavorite) {
               dispatch(removeFavorite({ Key: favoriteObject?.Key }));
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


import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../../redux-tool-kit/slices/favorites';



interface RootState {
     favorites: {
          list: { Key: string }[];
     };
}
interface FavoriteObjectProps {
     favoriteObject: {
          Key: string;
          LocalizedName: string;
          weather: { temperature: { tempC: number; tempF: number } };
          weatherText: string;
     }
}

export const FavoritesButton = ({ favoriteObject }: FavoriteObjectProps) => {
     const favorites = useSelector((state: RootState) => state.favorites.list);
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
          <button onClick={handleToggleFavorite} style={{ borderColor: isFavorite ? 'red' : 'black' }}>
               <FaHeart color={isFavorite ? 'red' : 'black'} /> Favorites
          </button>
     );
};

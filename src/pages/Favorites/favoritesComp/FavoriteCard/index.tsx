import { useState } from 'react';
import { useDispatch } from 'react-redux';
import stlyes from '../../Favorites.module.css';
import { removeFavorite } from '../../../../redux-tool-kit/slices/favorites';
import { FaTimes } from 'react-icons/fa';

export const FavoriteCard = ({ favorite }) => {
     const dispatch = useDispatch();
     const [isHovered, setIsHovered] = useState(false);

     const handleDeleteClick = () => {
          dispatch(removeFavorite({ id: favorite.id }));
     };

     return (
          <div className={stlyes.containerCard}>
               <div
                    className={stlyes.favorite}

               >
                    <h2>{favorite.name}</h2>
                    <h2>{favorite.weather.temperature.tempC}</h2>
               </div>
               <div className={stlyes.delete} onClick={handleDeleteClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
               >
                    <FaTimes
                         size={20}
                         color={isHovered ? 'red' : 'black'}
                         className={stlyes.deleteIcon}
                    />
               </div>
          </div>
     );
};

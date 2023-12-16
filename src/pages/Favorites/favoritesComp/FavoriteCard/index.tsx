import { useState } from 'react';
import { useDispatch } from 'react-redux';
import stlyes from '../../Favorites.module.css';
import { removeFavorite } from '../../../../redux-tool-kit/slices/favorites';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { ROUTES_URLS } from '../../../../constants';

export const FavoriteCard = ({ favorite }) => {
     const dispatch = useDispatch();
     const [isHovered, setIsHovered] = useState(false);
     const navigate = useNavigate();

     return (
          <div className={stlyes.containerCard}>
               <div
                    className={stlyes.favorite}
                    onClick={() =>
                         navigate(ROUTES_URLS.HOME, { state: favorite })}
               >
                    <h2>{favorite.LocalizedName}</h2>
                    <h2>{favorite.weather.temperature.tempC}</h2>
                    <h2>
                         {favorite.weatherText}
                    </h2>
               </div>
               <div className={stlyes.delete} onClick={() =>
                    dispatch(removeFavorite({ Key: favorite.Key }))
               }
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
               >
                    <FaTimes
                         size={20}
                         color={isHovered ? 'red' : 'black'}
                         className={stlyes.deleteIcon}
                    />
               </div>
          </div >
     );
};

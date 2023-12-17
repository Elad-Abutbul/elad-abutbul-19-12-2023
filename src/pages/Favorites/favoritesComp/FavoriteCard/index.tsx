import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../../../redux-tool-kit/slices/favorites';
import { ROUTES_URLS, TEMPERATURE } from '../../../../constants';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { Favorite } from "../../../../types";
import styles from '../../Favorites.module.css';
import { weatherService } from '../../../../services';

export const FavoriteCard = ({ LocalizedName, weatherText, Key, temperature }: Favorite) => {
     const dispatch = useDispatch();
     const [isHovered, setIsHovered] = useState(false);
     const [changeDegrees, setChangeDegrees] = useState(false);
     const navigate = useNavigate();

     const handleToggleDegrees = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          setChangeDegrees(!changeDegrees);
     };

     return (
          <div className={styles.containerCard}>
               <div
                    className={styles.favorite}
                    onClick={() => navigate(ROUTES_URLS.HOME, { state: { LocalizedName, weatherText, Key, temperature } })}>
                    <h2>{LocalizedName}</h2>
                    <h2>{changeDegrees ? `${temperature} ${TEMPERATURE.C}` : `${weatherService.convertToFahrenheitToCelsius(temperature)} ${TEMPERATURE.C}`}</h2>
                    <h2>{weatherText}</h2>
                    <button onClick={handleToggleDegrees}>change degrees</button>
               </div>
               <div
                    className={styles.delete}
                    onClick={() => dispatch(removeFavorite({ Key }))}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
               >
                    <FaTimes
                         size={20}
                         color={isHovered ? 'red' : 'black'}
                         className={styles.deleteIcon}
                    />
               </div>
          </div>
     );
};

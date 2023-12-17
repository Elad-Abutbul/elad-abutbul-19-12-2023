import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../../../redux-tool-kit/slices/favorites';
import { ROUTES_URLS } from '../../../../constants';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import styles from '../../Favorites.module.css';

interface FavoriteCardProps {
     favorite: {
          Key: string;
          LocalizedName: string;
          weather: {
               temperature: {
                    tempC: number;
                    tempF: number;
               };
          };
          weatherText: string;
     };
}

export const FavoriteCard = ({ favorite }: FavoriteCardProps) => {
     const dispatch = useDispatch();
     const [isHovered, setIsHovered] = useState(false);
     const [changeDegrees, setChangeDegrees] = useState(false);
     const navigate = useNavigate();

     const tempC = favorite.weather.temperature.tempC;
     const tempF = favorite.weather.temperature.tempF;

     const handleToggleDegrees = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          setChangeDegrees(!changeDegrees);
     };

     return (
          <div className={styles.containerCard}>
               <div
                    className={styles.favorite}
                    onClick={() => navigate(ROUTES_URLS.HOME, { state: favorite })}
               >
                    <h2>{favorite.LocalizedName}</h2>
                    <h2>{changeDegrees ? tempC : tempF}</h2>
                    <h2>{favorite.weatherText}</h2>
                    <button onClick={handleToggleDegrees}>change degrees</button>
               </div>
               <div
                    className={styles.delete}
                    onClick={() => dispatch(removeFavorite({ Key: favorite.Key }))}
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

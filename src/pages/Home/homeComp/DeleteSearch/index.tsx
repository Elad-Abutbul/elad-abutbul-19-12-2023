import { FaTimes } from 'react-icons/fa';
import styles from '../../Home.module.css';
interface SelectedOptionProps {
     setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
}
export const DeleteSearch = ({ setSelectedOption }: SelectedOptionProps) => (
     <div onClick={() => setSelectedOption({ Key: '', LocalizedName: "" })} className={styles.deleteSearch}>
          <FaTimes size={50} />
     </div>
)

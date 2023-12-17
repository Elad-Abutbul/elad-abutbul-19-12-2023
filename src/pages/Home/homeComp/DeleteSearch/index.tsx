import { FaTimes } from 'react-icons/fa'
interface SelectedOptionProps {
     setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
}
export const DeleteSearch = ({ setSelectedOption }: SelectedOptionProps) => (
     <div onClick={() => setSelectedOption({})}>
          <FaTimes size={50} />
     </div>
)

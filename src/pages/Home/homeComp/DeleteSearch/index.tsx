import { FaTimes } from 'react-icons/fa'

export const DeleteSearch = ({ setSelectedOption }) => (
     <div onClick={() => setSelectedOption({})}>
          <FaTimes size={50} />
     </div>
)

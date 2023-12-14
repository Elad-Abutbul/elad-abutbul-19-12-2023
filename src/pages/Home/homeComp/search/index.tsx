import { useState } from "react";

export const Search = () => {
     const [input, setInput] = useState<string>('');

     return (
          <div><input type="search" value={input} onChange={e => setInput(e.target.value)} />
               <div>
                    //autocomplete text
               </div>
          </div>
     )
}

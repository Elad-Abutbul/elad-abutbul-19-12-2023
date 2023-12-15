import { useSelector } from 'react-redux';
import { Layout } from '../../common'
import './Favorites.module.css'

const Favorites = () => {
     const favorites = useSelector((state) => state.favorites.list);
     return (
          <Layout>
               <div>{favorites.map((favorite) => (console.log(favorite)))}</div>
          </Layout>
     )
}

export default Favorites
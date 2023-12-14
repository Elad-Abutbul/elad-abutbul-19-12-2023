import { Layout } from '../../common'
import styles from "./Home.module.css";
import { Search } from './homeComp'

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <Search />
        </div>
      </div>


    </Layout>
  )
}

export default Home
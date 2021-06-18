import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Layouts from "../components/layouts/Layouts";

const Home = () => {
  return ( 
    <div>
      <Head>
        <title>HELP-TABLE</title>
        <meta name="description" content="Aplicacion administrador de tareas" />
        {/*<link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <Layouts>

        <p>Cuerpo de pagina principal</p>

      </Layouts>


    </div>
  );
}
 
export default Home;

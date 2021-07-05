import React from 'react';
import Header from "../menu/header";
import Footer from "../menu/footer";


const Layouts = ( { children } ) => {
    return ( 
              <div className="cuerpo-pagina">
                  <Header/>

                  <main>
                    { children }    
                  </main>  


                  <Footer/>
              </div>
     );
}
 
export default Layouts;
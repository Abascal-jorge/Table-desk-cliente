import React from 'react';


const Layouts = ( { children } ) => {
    return ( 
        <>
              <h1>Hola mundo</h1>


              <main>
                { children }    
              </main>  


              <p>Pie de pagina</p>
        </>
     );
}
 
export default Layouts;
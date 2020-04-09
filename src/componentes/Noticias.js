//imrc -> import React Component
import React, { Component } from 'react';

import Noticia from './componentes/Noticia';

//cc -> class component
class Noticias extends Component {

    constructor(props){
        super(props);
    }
    render() { 
        const resultado = this.props.Noticias.map(noticia => {
            return <Noticia noticia={noticia}/>
       });
        return resultado;
    }
}
 
export default Noticias;

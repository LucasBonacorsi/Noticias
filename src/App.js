import React, { Component } from "react";
import Header from "./componentes/Header";
import Noticia from './componentes/Noticia';
import Noticias from './componentes/Noticias';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      noticias: []
    };
    // this.consultarNoticias = this.consultarNoticias.bind(this);
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let url = "http://newspi.org/v2/top-headlines?country=ar&apiKey=7605a6c60c81418fb2a02d521d5a4f6d";

    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((noticias) => {
        // console.log(noticias);
        this.setState({
          noticias: noticias.articles
        })
      });
  };

  render() {
    return (
      <div className="contenedor-app">
        <Header titulo="Noticias" />
        <div className='container white contenedor-noticias'>
          <Noticias noticias={this.state.noticias}/>
        </div>
      </div>
    );
  }
}

export default App;

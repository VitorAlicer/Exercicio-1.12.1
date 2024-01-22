import React from "react";
import Botao from "./Botao";

class Titulo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div class="header">
           <Botao/>
           <h3 className='titulo'>Meu Chat</h3>
        </div>
      </>
    )
  }
}

export default Titulo;
import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import Mensagem from './Mensagem'
import Titulo from './Titulo'
import axios from 'axios';


function App() {
  const [loading, setLoading] = React.useState(true);
  const [erro, setErro] = React.useState(false);
  const [mensagens, setMensagens] = React.useState([]);


  async function requisicao() {
    try {
      const resultado = await axios.get('http://localhost:8080');
      setMensagens(resultado.data);
      setLoading(false);
      setErro(false);
    } catch {
      setErro(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    requisicao();
  }, []);


  return (
    <>
      <body>
        <div class="chat">
          <Titulo />
          <div class="content">
            {
              loading === false && (
                <ul>
                  {
                    mensagens.map(mensagem => (
                      <Mensagem
                        mensagem={mensagem.mensagem}
                        visualizado={mensagem.visualizado}
                        remetente={mensagem.remetente}
                      />
                    ))
                  }
                </ul>
              )
            }
            {
              loading === true && (
                <div>
                  <div className='skeleton-loader' />
                  <div className='skeleton-loader' />
                  <div className='skeleton-loader' />
                </div>
              )
            }
            {
              erro === true && (
                <div>
                  <div>Ocorreu um erro!</div>
                </div>
              )
            }
          </div>
        </div>

      </body>
    </>
  )
}

export default App

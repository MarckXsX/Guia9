import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const HTML_PAGINA = `<!DOCTYPE html>
  <html lang="es">
      <head>
          <title>Pagina de prueba</title>
          <style>
          .spinner {
              height: 50px;
              width: max-content;
              font-size: 18px;
              font-weight: 600;
              font-family: monospace;
              letter-spacing: 1em;
              color: #f5f5f5;
              filter: drop-shadow(0 0 10px);
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 100px;
          }
          .spinner span {
              animation: loading6454 1.75s ease infinite;
          }

          .spinner span:nth-child(2) {
              animation-delay: 0.25s;
          }

          .spinner span:nth-child(3) {
              animation-delay: 0.5s;
          }

          .spinner span:nth-child(4) {
              animation-delay: 0.75s;
          }

          .spinner span:nth-child(5) {
              animation-delay: 1s;
          }

          .spinner span:nth-child(6) {
              animation-delay: 1.25s;
          }

          .spinner span:nth-child(7) {
              animation-delay: 1.5s;
          }

          @keyframes loading6454 {
              0%, 100% {
                  transform: translateY(0);
              }

              50% {
                  transform: translateY(-10px);
              }
          }

          body{
              background-color: #212121;
              display: flex;
              justify-content: center;
              align-items: center;
          }

          .loader {
              position: static;
              display: flex;
              justify-content: center;
              align-items: center;
              padding-top: 500px;
          }
          
          .loader span {
              position: absolute;
              color: #fff;
              transform: translate(-50%, -50%);
              font-size: 38px;
              letter-spacing: 5px;
          }
          
          .loader span:nth-child(1) {
              color: transparent;
              -webkit-text-stroke: 0.3px rgb(128, 198, 255);
          }


          .loader span:nth-child(2) {
              color: rgb(128, 198, 255);
              -webkit-text-stroke: 1px rgb(128, 198, 255);
              animation: uiverse723 3s ease-in-out infinite;
          }
          
          @keyframes uiverse723 {
            0%, 100% {
                  clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 
                  54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
              }
            50% {
              clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 
              51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
          }
      }

      </style>  
      
      </head>
  
      <body>
          <div class="spinner">
              <span>G</span>
              <span>U</span>
              <span>I</span>
              <span>A</span>
              <span>9</span>
              <span>-</span>
              <span>W</span>
              <span>E</span>
              <span>B</span>
              <span>V</span>
              <span>I</span>
              <span>E</span>
              <span>W</span>
            </div>

            <div class="loader">
              <span>Pagina con WebView</span>
              <span>Pagina con WebView</span>
            </div>

      </body>
  </html>`

export default function App() {

  return (
    <View style= {styles.container}>
      <View style={{width:'100%', height:'100%'}}>
        <WebView
           source={{html: HTML_PAGINA }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex:1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import TarjetaFruta from './components/TarjetaFruta/'
import './global.css';
// const App = () =>  { 

//     // * mutando el estado de un componente con una funcion.
//     // class Contador extends React.Component { 
//     //     state = { 
//     //        video: {
//     //            title: 'Super Video',
//     //            likes: 0
//     //        }
//     //     }

//     //     add = () => { 
//     //         this.setState((prevState, props) => { 
//     //             // if(prevState.clicks === 3) { 
//     //             //     return null
//     //             // }

//     //             // para que no hay mucho tema en la mutabilidad
//     //             // return { 
//     //             //     clicks: prevState.clicks + 1
//     //             // }
//     //             return {
//     //                 video: { 
//     //                     ...prevState.video,
//     //                     likes: prevState.video.likes + 1
//     //                 }
//     //             }
//     //         })
//     //     }

//     //     render() {
//     //         return (
//     //            <React.Fragment>
//     //                 <h1>{this.state.video.title} </h1>
//     //                 <button onClick={this.add}>Likes: {this.state.video.likes}</button>
//     //            </React.Fragment>
//     //             // <button onClick={this.add} >
//     //             // Clicks:  ({ this.state.clicks })
//     //             // </button>
//     //         )
//     //     }
//     // }


//     //* usando operador spreaad para pasar props
//     const Gato = (props) => (
//         <div>
//             <h1>Gato :D </h1>
//             <pre>
//                 { JSON.stringify(props, null, 4) }
//             </pre>
//         </div>
//     )



//     const otrosDatos = { 
//         raza: 'tropial',
//         peleas: 300
//     }

//     return(
//         <div>
//             {/* se creaara un nuevo objeto pero anidado, en una sola exhibicion con el operador spread */}
//             <Gato 
//                 name='Garfield'
//                 age={7}
//                 {...otrosDatos}

//             />
//            {/* <Contador /> */}
//            {/* <TarjetaFruta name={'Sandia'} price={5.00} />
//            <TarjetaFruta name={'Naranja'} price={1.50} />
//            <TarjetaFruta name='Kiwi' price={3.30} />  */}
//         </div>
//     )
// }

// const styles = { 
//     height:' 200px',
//     background: 'gold',
//     padding: '1em',
//     boxSizing: 'border-box'
// }

// class App extends Component {

//     // state = {
//     //     x: 0,
//     //     y: 0
//     // }

//     // // manejador de eventos  con el mouse
//     // manejador = (event) => { 
//     //     this.setState({
//     //         x: event.clientX,
//     //         y: event.clientY
//     //     })
//     //     // alert('HEY NINJA')
//     // }

//     state = {
//         text: '',
//         evento: ''
//     }

//     manejador = (event) => { 
//         console.log(event);
//         this.setState({
//             text: event.target.value,
//             evento: event.type
//         })
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div
//                     // style={styles}
//                     // onMouseMove={this.manejador}
//                 >
//                     <input type="text" 
//                         onChange={this.manejador} 
//                         onCopy={this.manejador}
//                         onPaste={this.manejador}
//                     />

//                     <p>
//                          {this.state.text}
//                     </p>
//                     <h2>
//                         {this.state.evento}
//                     </h2>
//                     {/* <div>
//                         x: {this.state.x}
//                     </div>
//                     <div>
//                         y: {this.state.y}
//                     </div> */}

//                     {/* evento mouse (onMouseDown, onMouseUp, onDoubleClick ) */}
//                     {/* <button onDoubleClick={this.manejador} >
//                     Disparar Evento
//                 </button> */}
//                 </div>

//             </React.Fragment>
//         )
//     }
// }

//* persistencia de eventos mediante una componente funcional 

// class PersistenciaEventos extends Component { 

//     state = {
//         color: 'blue'
//     }

//     hadlerChange = (event) => {
//         const color = event.target.value 
//         console.log(color);
//         this.setState(state => ({
//             color
//         }))

//     } 

//     render() {
//         return (
//             <React.Fragment>
//                 <input type="text" onChange={this.hadlerChange} />

//                 <h1 style={{ color: this.state.color }} >
//                     {this.state.color}
//                 </h1>
//             </React.Fragment>
//         )
//     }
// }



// const App  = () => { 
//     return(
//        <PersistenciaEventos />
//     )
// }

///* fin de ejemplo persistencia de eventos mediante una componente funcional 

//TODO ejemplo de eventos personalizados con React

// class Hijo extends Component { 

//     manejadorClick = () => {
//         this.props.onSaludar('Eliza Garduño :D ')
//     }

//     render() { 
//         return(
//             <div className="box blue">
//                 <h1>Hijo</h1>
//                 <button onClick={this.manejadorClick} >Saludar </button>
//             </div>
//         )
//     }
// }

// class App extends Component { 

//     state = {
//         name: ''
//     }

//     maanejador = (name) => { 
//         this.setState({ name })
//     }

//     render() { 
//         return(
//            <div className="box rojo" >
//                 <Hijo 
//                     onSaludar={this.maanejador}
//                 />
//                 <h1>
//                     Nombre:  {this.state.name}
//                 </h1>
//            </div>
//         )
//     }
// }
//TODO FIN DE  ejemplo de eventos personalizados con React

//* Operator Iternario condiciones en React
// const Saludo = (props) => { 
//     return(
//         <div>
//             { props.saluda  
//             ? (<h1>Saludos </h1>)
//             : (<h2>No hay saludo</h2>)
//             } 
//         </div>
//     )
// }

// const App = () => (
//    <Saludo saluda={true} />
// )
//*FIN DE  Operator Iternario condiciones en React

// TODO Inyectando HTML  en el marcado demcomponente

// class App extends Component {

//     state = { 
//         marcado: `
//             <h1> Inyectando HTMl en REAct </h1>
//             <br />
//             <hr />
//             <a href="#">Algun Link</a>
//         `
//     }

//     render() { 
//         return(
//             <div>
//                 <div 
//                     dangerouslySetInnerHTML={{
//                         __html:  this.state.marcado
//                     }}
//                 >

//                 </div>
//             </div>
//         )
//     }
// }
// TODO FIN DE  Inyectando HTML  en el marcado demcomponente

//* props especiaal childre
// const Title = (props) => {
//     const styles = {
//         padding: '0.3em',
//         color: '#FFF',
//         background: props.uiColor,
//         borderRadius: '0.3em',
//         textAlign: 'center',
//         fontSize: '50px'
//     }

//     return (
//         <h1 style={styles} >
//             {props.children}
//         </h1>
//     )
// }

// class App extends Component {

//     state = {
//         uiColor: 'purple'
//     }

//     render() {
//         return (
//             <div>
//                 <Title 
//                 uiColor={this.state.uiColor}  
//                 >
//                     Super <em>Ninja</em>
//                 </Title>
//             </div>
//         )
//     }
// }


class ReactPortales extends Component { 
    render() { 
    
        if(!this.props.invisible) { 
            return null
        }

        const styles  = { 
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            background: 'linear-gradient(to top right, #667eea, #764ab2)',
            opacity:' 0.95',
            color: '#fff;'

        }
        // para hacer uso de un portaal en react se necesitaa lo siguiente 
        // la etiqueta o marcado en HTMLAllCollection, como el indentofocadopr que se encuentraa en 
        // public en el html como lo es el root.
        return ReactDOM.createPortal((
            <div style={styles} >
                <h1>{this.props.children}</h1>
            </div>
        ), document.getElementById('modal-root'))
    }
}


class App extends Component { 
    state = { 
        visible: false,
        num: 0
    }

    componentDidMount() { 
        setInterval(() => { 
            this.setState(state =>({
                num: state.num + 1
            }))
        }, 1000)
    }

    mostrar = () => { 
        this.setState({ visible: true })
    }

    cerrar = () => { 
        this.setState({ visible: false })
    }
    
    render() { 
        return(
         <React.Fragment>
                <div>
                {/* <ReactPortales /> */}
                <button onClick={this.mostrar} >mostraar</button>
                <ReactPortales invisible={this.state.visible} >
                    <button onClick={this.cerrar} >Cerrar</button>
        <h1>Hola desde los portales con children  :o  {this.state.num}</h1>
                </ReactPortales>
            </div>
         </React.Fragment>
        )
    }
}

//* props especiaal childre
export default App;

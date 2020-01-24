import React from 'react';
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {

    //* con esta forma se puede bindear los metodos que se quieran haciendo una constante de arreglo, yn la cual por medio de un forEach se concantena el bind
    // constructor() { 
    //     super()

    //     const METHODS = [
    //         'agregar',
    //         'quitar',
    //         'limpiar'
    //     ];

    //     METHODS.forEach((method) => { 
    //         this[method] =  this[method].bind(this)
    //     })

    //     this.state = { 
    //         cantidad: 0
    //     }
    // }

    // agregar() {
    //     this.setState({
    //         cantidad: this.state.cantidad + 1
    //     })
    // }

    // quitar() {
    //     this.setState({
    //         cantidad: this.state.cantidad - 1
    //     })
    // }

    // limpiar() { 
    //     this.setState({
    //         cantidad: 0
    //     })
    // }

    state = { 
        cantidad: 0
    }

    agregar = () => { 
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }

    quitar = () => { 
        this.setState({
            cantidad: this.state.cantidad -1
        })
    }

    limpiar = () => {
        this.setState({
            cantidad: 0
        })
    }


    render() { 

        const haveItems = this.state.cantidad > 0;
        const activeClass =  haveItems ? styles['card-active'] : ''
        const clases = styles.card + ' '+ activeClass

        return(
            <div className={clases} >
                <h3>{ this.props.name }</h3>
                <div>Cantidad: { this.state.cantidad }</div>
                <button onClick={this.agregar} > + </button>
                <button onClick={this.quitar} > - </button>
                <button onClick={this.limpiar} > Limpiar</button>        
                <hr/>
                <p>$ { this.props.price }</p>
                <p>
                    ${this.props.price *  this.state.cantidad}
                </p>
            </div>
        )
    }
}

export default TarjetaFruta;

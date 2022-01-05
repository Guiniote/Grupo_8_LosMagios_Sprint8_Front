//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente

import Genre from './Genre';


class GenresInDb extends Component{
    constructor(){
        super()
        this.state ={
            productsList : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje


    componentDidMount(){
        fetch('https://losmagiosback.herokuapp.com/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            console.log('products')
            console.log(products)
            this.setState({productsList: products.countByCategory})
            
        })
        .catch(error => console.log(error))
    }
    fondo(){
        let fondoCaja = document.querySelector('.fondoCaja');
        fondoCaja.classList.toggle('bg-secondary');
    }

    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h6  onMouseOver = { () => this.fondo()}  className="m-0 font-weight-bold text-gray-800 titulo">Products in Data Base</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {console.log('productList prueba')}
                                {
                                        this.state.productsList.map((products,i)=>{
                                        return  <Genre  {...products}  key={i} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

    </React.Fragment>
    )
    }
}
export default GenresInDb;

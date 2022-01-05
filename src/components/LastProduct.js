import React, {Component} from 'react';





class LastProduct extends Component{
    constructor(){
        super()
        this.state ={
            productLast : {}
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
            let product= products.products
            let last = product.pop()

        
         
            this.setState({productLast: {
                id : last.id,
                name : last.name,
                description: last.description,
                image: last.images[0]
            
            }
                
                
                
               })
           
        })
        .catch(error => console.log(error))

    }




    // fondo(){
    //     let fondoCaja = document.querySelector('.fondoCaja');
    //     fondoCaja.classList.toggle('bg-secondary');
    // }


    render(){
        return (
            <React.Fragment>
            
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto creado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={'http://localhost:3001/images/' + this.state.productLast.image} alt=" Producto "/>
									</div>
									<p>{this.state.productLast.description}</p> 
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
                       






             
    
    </React.Fragment>
    )
    }
}
export default LastProduct;

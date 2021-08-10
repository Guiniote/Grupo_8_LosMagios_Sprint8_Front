import React from 'react';


function ProductListRow (props){
    return (
        <React.Fragment>
            <tr>                
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td><a href={props.detail}>Detalle</a></td>                
            </tr>
        </React.Fragment>
    )
}
    
        

export default ProductListRow;
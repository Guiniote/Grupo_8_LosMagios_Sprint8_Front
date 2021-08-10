import React from 'react';


function Category(products){
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow ">
                    <div className="card-body">
                        {`${products.name}: `} 
                        {products.quantity}

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Category;
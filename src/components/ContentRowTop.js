import React from 'react';
import Categories from './Categories';
import ContentRowTotals from './ContentRowTotals';
import LastProduct from './LastProduct';


function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard General</h1>
					</div>				
					
					<ContentRowTotals />
										
					<div className="row">
						<LastProduct />
										
						<Categories />
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
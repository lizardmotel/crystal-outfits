import React from 'react';


function Title({name, title}) {

    return (
        <div className='row'>
            <div className='col-10 mx-auto my-2 text-center text-title'>
                <h1 className='text-capitalize display-4 font-weight-bold'>
                    {name} <strong style={{color: 'var(--mainRed)'}}>
                        {title}
                    </strong>
                </h1>
            </div>
        </div>
    )
}



export default Title


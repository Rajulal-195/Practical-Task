import React from 'react'

export default function Displayitem({ userProduct }) {


    console.log("props data is ",userProduct)
    return (
        <>
            <div>
                <h1>
                    All Data
                </h1>



                {
                    userProduct.map((item) => {

                        <div key={item.id} >
                            <h3>{userProduct.user}</h3>
                            <h3>{userProduct.project}</h3>
                        </div>
                    })
                }
            </div>
        </>
    )
}

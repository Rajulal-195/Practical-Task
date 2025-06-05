import React, { useState } from 'react'
import Displayitem from './Displayitem'
export default function Addproject() {
    const [user, setuser] = useState('')
    const [project, setProject] = useState('')
    const [userProduct, setuserProducrt] = useState([])

    console.log("user", user)
    console.log(" project", project)
    console.log("All data", userProduct)


    const handlesubmit = (e) => {
        e.preventDefault()

        try {

            setuserProducrt([...userProduct, user, project])
            console.log("final output ", userProduct)

            alert("data saved successfully ")

        } catch {
            alert("something went wrong")
        }

    }

    return (
        <>
            <div className='m-52'>

                <h1 className='text-center'>Add Project With User </h1>
                <form onSubmit={handlesubmit} >

                    <input className='border-orange-500 border text-center py-2 m-3 w-100' type="text" placeholder='Enter Emp Name' onChange={(e) => setuser(e.target.value)} /><br />
                    <input className='border-orange-500 border text-center py-2 m-3 w-100' type="text" placeholder='Add Project Details' onChange={(e) => setProject(e.target.value)} />

                    <button type='submit' className='border-orange-500 border text-center py-2 m-3 w-100 bg-gray-200'>Submit Data</button>

                </form>
                <Displayitem userProduct={userProduct} />

            </div>

            <div>
                {
                    userProduct.map((item) => {

                        <div key={item.id} >
                            <h3>{item}</h3>

                        </div>
                    })
                }
            </div>
        </>
    )
}

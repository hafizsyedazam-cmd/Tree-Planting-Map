"use client"
import { ReceiptText } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function page() {
    const [data, setData] = useState([])
    const getUsers = async () => {
        const userdata = await fetch("https://jsonplaceholder.typicode.com/users")
        const finalData = await userdata.json()
        // console.log(finalData);
        setData(finalData)
    }
    useEffect(() => {
        getUsers()
    }, [])
    console.log(data);

    return (
        <div>
            <h1>Client Site</h1>
            {/* {
                data.map((item) => (
                    <h2 key={item.id}>{item.name}</h2>
                ))
            } */}
            <div className='flex gap-6'>
                {/* --------- */}
                {
                    data.map((item)=> (
                        <div className=' flex  bg-amber-100'>
                    <div className='' key={item.id}>
                        <h3>{item.name}</h3>
                    </div>
                    <div>
                        <button onClick={() => {
                            Swal.fire({
                                title:` ${item.email} `,
                                text: ` ${item.address.city} `,

                            });
                        }}>
                            <ReceiptText />
                        </button>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>

    )
}

export default page
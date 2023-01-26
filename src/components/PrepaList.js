import React from 'react'
import PrepaDef from './PrepaDef'

const prepa = [
    {
        hp: 850
    },
    {
        hp: 1200
    },
]

export default function PrepaList() {
    return (
        <>
        <div>LISTE PREPA</div>
        <div className='container'>
            {prepa.map((p, i) => {
                return <PrepaDef key={i} props={p}/>
            })}
        </div>
        </>
    )
}


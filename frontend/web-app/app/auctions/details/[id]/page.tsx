import React from 'react'

export default function Details({params} : {params: {id: string}}) {
  return (
    <div>Details of {params.id}</div>
  )
}

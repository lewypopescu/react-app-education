import React from 'react'

export default function MenuItem({item}) {
  return (
    <li>{item.icon} {item.name}</li>
  )
}


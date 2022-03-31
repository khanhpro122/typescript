import React from 'react'

type listProps<T> = {
    items: T[],
    onClick: (value : T) => void
}
const List = <T extends {name: string}>({items, onClick} : listProps<T>) => {
  return (
    <div>
        {items.map ((item, index) => {
            return (
                <div onClick={() => onClick(item)} key={index}>{item.name}</div>
            )
        })}
    </div>
  )
}

export default List
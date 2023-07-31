import React from 'react';
import { ListProps } from './ListProps';

const List = <T extends {}>({ items,onClick }: ListProps<T>) => {
  return (
    <div>
        <h2>Lis of items :</h2>
      {items.map((item, index) => (
        
       <div key={index} onClick={()=>onClick(item)}>{item.toString()}</div>
        
        ))}

    </div>
  );
};

export default List;
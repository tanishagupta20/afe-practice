import React, { useState, useRef } from "react";

type ProdType = {
  title: string;
  price: number;
};

function St2b() {
  const [products, setProducts] = useState<ProdType[]>([]);
  const prodTitle = useRef<HTMLInputElement>(null);
  const prodPrice = useRef<HTMLInputElement>(null);

  function addProd() {
    let obj: ProdType = {
      title: prodTitle.current!.value,
      price: parseInt(prodPrice.current!.value),
    };

    setProducts([...products, obj]);
  }

  return (
    <div>
      Product name : <input type="text" ref={prodTitle} />
      <br></br>
      Price : <input type="number" ref={prodPrice} />
      <br></br>
      <button onClick={addProd}>Add</button>
      <ol>
        {products.map((prod) => {
          return (
            <li>
              Title : {prod.title} <br></br> Price : {prod.price}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default St2b;
import { useEffect, useState } from "react";

export interface ItemProps {
  stock: number;
  nombre: string;
  descripcion: string;
  comprarItem: () => void;
}

const Item: React.FC<ItemProps> = (props) => {
  const [cantidad, setCantidad] = useState<number>();

  useEffect(() => {
    setCantidad(props.stock);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const comprarItem = () => {
    setCantidad(cantidad! - 1);
    props.comprarItem();
  };

  return (
    <div className="producto">
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>
        {"En stock:"} {cantidad! > 0 ? cantidad : <span>{"agotado"}</span>}
      </h5>
      <button disabled={cantidad === 0} onClick={comprarItem}>
        {"Comprar"}
      </button>
    </div>
  );
};

export default Item;

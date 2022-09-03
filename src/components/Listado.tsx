import Item from "./Item";
import data from "./data.json";

export interface ListadoProps {
  aumentarItemsComprados: () => void;
}

const Listado: React.FC<ListadoProps> = (props) => {
  return (
    <div className="container">
      {data.map(({ id, producto, stock }) => (
        <Item
          key={id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          stock={stock}
          comprarItem={props.aumentarItemsComprados}
        />
      ))}
    </div>
  );
};

export default Listado;

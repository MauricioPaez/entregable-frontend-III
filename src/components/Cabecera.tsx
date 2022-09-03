export interface CabeceraProps {
  itemsComprados: number;
}

const Cabecera: React.FC<CabeceraProps> = (props) => {
  return (
    <header>
      <h1>{" Carrito de compras "}</h1>
      <p>
        {" Cantidad de productos "}
        <span>{props.itemsComprados}</span>
      </p>
    </header>
  );
};

export default Cabecera;

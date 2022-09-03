import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

const App: React.FC = () => {
  const [itemsComprados, setItemsComprados] = useState<number>(0);

  const aumentarItemsComprados = () => {
    setItemsComprados(itemsComprados + 1);
  };

  return (
    <div className="App">
      <Cabecera itemsComprados={itemsComprados} />
      <Listado aumentarItemsComprados={aumentarItemsComprados} />
    </div>
  );
}

export default App;

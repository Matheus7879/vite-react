import { Header } from "./Components/Header"
import { Main } from "./Components/Main"
import { useState } from "react";
import { DownloadPage } from "./Pages/DownloadPage"
import { EquipePage } from "./Pages/EquipePage"


function App() {
  const [page, setPage] = useState('home');

  const pagina = () => {
    switch (page) {
      case 'home':
        return <Main />;
      case 'download':
        return <DownloadPage />;
      case 'equipe':
        return <EquipePage />;
    }
  };


  return (
  <div>
    <Header page={page} onChange={setPage} />
    {pagina()}
  </div>
)
}

export default App

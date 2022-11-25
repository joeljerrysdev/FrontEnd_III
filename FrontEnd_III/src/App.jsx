
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { DecimaAula } from './lesson/DecimaAula/DecimaAula'
import { DecimaQuintaAula } from './lesson/DecimaQuitaAula'

import { OitavaAula } from './lesson/OitavaAula'
import { QQuartaAulaa } from './lesson/QQuartaAulaa'
import { QuintaAula } from './lesson/QuintaAula'
import { SegundaAula } from './lesson/SegundaAula'
import { SetimaAula } from './lesson/SetimaAula/indes'
import { SetimaAulaCardProdutos } from './lesson/SetimaAulaCardProduto'
import { SextaAula } from './lesson/sextaAula'
import { TerceiraAula } from './lesson/TerceiraAula'
import { MainLayout } from './components/MainLayout';

function App() {
 const appRouter = createBrowserRouter([
  {
    path: '',
    element: <MainLayout/>,
    children: [
      {
        path:'decimaQuintaAula',
        element: <DecimaQuintaAula/>
      },
      {
        path:'decimaAula',
        element: <DecimaAula/>
      },
      {
        path:'SetimaAulaCardProduto',
        element: <SetimaAulaCardProdutos/>
      },
      {
        path:'SegundaAula',
        element: <SegundaAula/>
      },
      {
        path:'TerceiraAula',
        element: <TerceiraAula/>
      },
      {
        path:'QQuartaAulaa',
        element: <QQuartaAulaa/>
      },
      {
        path:'QuintaAula',
        element: <QuintaAula/>
      },
      {
        path:'SetimaAula',
        element: <SetimaAula/>
      },
      {
        path:'OitavaAula',
        element: <OitavaAula/>
      },
      {
        path:'DecimaAula',
        element: <DecimaAula/>
      }
    ]
  }
  
  
 ])
  return (
    <RouterProvider router={appRouter} />
  
  )
}

export default App

import { Header } from './components/Header'
import {Card, CardImage, CardActions, CardTitle} from './components/Card'
import {Badge} from './components/Badge'
import {Buttons} from './components/Buttons'

import productImg1 from './assets/images/product1.png'
import productImg2 from './assets/images/product2.png'
import productImg3 from './assets/images/product3.png'

const products = [
  {
    id: 1,
    title: 'Xbox Series X 2020 Nova Geração 1TB',
    price: 'R$ 3960,00',
    image: productImg1,
    active: true,
  },
  {
    id: 2,
    title: 'Casio F 91 W O Relógio Do Bin Laden Com Garantia',
    price: 'R$ 200,00',
    image: productImg2,
    active: true,
  },
  {
    id: 3,
    title: 'Vendi Minha Alma... E Agora - Auto-ajuda',
    price: 'R$ 15,00',
    image: productImg3,
    active: false,
  }
];


function App() {
  return (
    <>
    <Header />
    <main> 
      {
        products.map(product => ( 
        <Card key='product.id'>
        <CardImage src={product.image}/>
        <CardTitle> {product.title} </CardTitle>
        <Badge> {product.price} </Badge>
        <CardActions>
        <Buttons label='Comprar' type='solid' />
        <Buttons label='Ver mais' type='outlined' />
        </CardActions>
        </Card> 

        ))
      }
    </main>
    </>
  );
}

export default App;

import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import {useEffect} from 'react'

function App() {

  var savedCart = localStorage.getItem('cart')
  var [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  // La mise au panier implique les composants Cart et ShoppingList
  // App est le parent commun aux deux, c'est pourquoi 'cart' et 'updateCart' sont déclarés ici
  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]
  )

  var [isFooterShown, updateIsFooterShown] = useState(true)

  return (
    <div>
      <Banner/>
      <Container>
        <Row className="rows">
          <Col className="columns" sm={4}>
            <Cart cart={cart} updateCart={updateCart}/>
            {/* 'cart' et 'updateCart' sont passés en props pour être récupérables dans le composant Cart */}
          </Col>
          <Col className="columns" sm={8}>
            <ShoppingList cart={cart} updateCart={updateCart}/>
          </Col>
        </Row>
      </Container>
      <button onClick={()=> updateIsFooterShown(!isFooterShown)}>Cacher</button>
      {isFooterShown && <Footer/>}
    </div>
  )
}

export default App
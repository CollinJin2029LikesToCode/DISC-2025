import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/1.jpeg'
import img2 from './assets/2.jpeg'
import img3 from './assets/3.jpeg'


//this is my navigation bar
function Navigation(nav) {
  return (
    <header className="sh">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{nav.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{nav.first}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{nav.second}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{nav.third}</a>
        </li>
        <hr />
      </ul>
    </header>
  )
}

// This is my addditional component
function ProductCard({ img, price, name,addCart }) {
  return (
    <div className="product">
      <div className="product-card">
        <img src={img} alt={name} className="product-img" />
        <h1>${price}</h1>
        <div className="product-body">
          <button className="btn btn-primary" onClick={() => addCart(price)}>Add to shopping cart</button>
        </div>
      </div>
    </div>
  )
}
// this is my app component
function App() {
  const [total, setTotal] = useState(0) //this is the total of the user's shopping cart using useState
  const [free, setFree] = useState(false)
  const addToCart = (amount) => setTotal(t => t + amount)

  useEffect(() => {
    setFree(total >= 5000)
  }, [total]) // everytime the total updates, I set the free variable to total >= 500, if this expression is true I can then show that the user got free membership

  return (
    <>
      <Navigation title="Woof & Meow" first="About" second="Product" third="Contact" />

      <main className="content">
        <div className="products">
          <ProductCard img={img1} price={2000} name="Product 1" addCart={addToCart} />
          <ProductCard img={img2} price={30} name="Product 2" addCart={addToCart} />
          <ProductCard img={img3} price={100} name="Product 3" addCart={addToCart} />
        </div>

        {free ? (
          <p style={{ color: 'green', fontSize: '30px', fontWeight: 800 }}>Free membership unlocked! YAAYYYYYYYYYY</p>
        ) : <p style={{ color: 'red', fontSize: '20px', fontWeight: 800 }}> ${5000 - total} more to unlock free membership </p>}

        <p style={{ color: '#ff00ddff', fontSize: '30px', fontWeight: '1000' }}>Your Total is ${total}! 
        </p>
      </main>
    </>
  )
}
export default App

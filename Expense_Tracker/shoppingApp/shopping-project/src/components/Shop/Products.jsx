import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[
  {
    id:"p1",
    price:6,
    title:"My first Book",
    description:"The first Book I ever wrote!"
  },
  {
    id:"p2",
    price:3,
    title:"My second Book",
    description:"The second Book I ever wrote!"
  },
  {
    id:"p3",
    price:7,
    title:"My third Book",
    description:"The third Book I ever wrote!"
  },
  {
    id:"p4",
    price:6,
    title:"My forth Book",
    description:"The forth Book I ever wrote!"
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem ele={DUMMY_PRODUCTS}/>
      </ul>
    </section>
  );
};

export default Products;

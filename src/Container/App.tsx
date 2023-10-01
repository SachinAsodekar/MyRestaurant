import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from '../Components/Layout';
import { Home, MenuItemDetails, NotFound, ShoppingCart } from '../Pages';
import { useDispatch } from 'react-redux';
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi';
import { useEffect } from 'react';
import { setshoppingCart } from '../Storage/Redux/shoppingCartSlice';


function App() {

  const dispatch = useDispatch();

  const{data, isLoading} = useGetShoppingCartQuery("8a0903be-e931-4c40-9c7c-b42d83d125a3");

  useEffect(()=>{
    if(!isLoading){
      console.log(data.result);
      dispatch(setshoppingCart(data.result?.cartItems));
    }
  },[data]);

  return (
    <div className='text-success'>
      <Header />
      <div className='pb-5'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route 
            path="/menuItemsDetails/:menuItemId" 
            element={<MenuItemDetails />}
          ></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

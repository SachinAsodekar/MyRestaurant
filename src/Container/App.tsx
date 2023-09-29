import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from '../Components/Layout';
import { Home, MenuItemDetails, NotFound } from '../Pages';


function App() {

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
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

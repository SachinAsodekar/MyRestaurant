import React from 'react';
import { useEffect, useState } from 'react';
import { menuItemModel } from '../../../../Interfaces';
import { MenuItemCard } from '.';
import { useGetMenuItemsQuery } from '../../../../Apis/menuItemApi';
import { useDispatch } from 'react-redux';
import { setMenuItem } from '../../../../Storage/Redux/menuItemSlice';
import { MainLoader } from '../Common';


function MenuItemList() {

  //const[menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  const dispatch = useDispatch();
  const {data, isLoading} = useGetMenuItemsQuery(null);

  useEffect(()=>{
    if(!isLoading){
      dispatch(setMenuItem(data.result));
    }
  },[isLoading]);

  if(isLoading){
    return(
      <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <MainLoader/>
        </div>
    );
  }

  return (
    <div className='container row'>
      {data.result.length>0 && 
        data.result.map((menuItem:menuItemModel, index:number)=>(
          <MenuItemCard menuItem={menuItem} key={index}/>
        ))}
    </div>
  )
}

export default MenuItemList
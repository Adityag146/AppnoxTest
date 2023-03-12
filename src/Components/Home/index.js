import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import CardDetail from '../Card/Card';
import {responseData} from "../../Reducer/appnoxReducer"
import EditForm from '../Form/EditModal';
import {useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader';

export default function ApiData() {
    const [userData,setUserData]=useState([])
    const dispatch=useDispatch()
    const items=useSelector((state)=>state.counter.responseData)
    const FetchDataApi=async()=>{

        const data=await fetch("https://jsonplaceholder.typicode.com/users")
        let respData = await data.json()
        if(respData){          
        dispatch(responseData(respData))
        setUserData(respData)
        }
    }
    
    useEffect(()=>{
      FetchDataApi()
    },[])

  return (
    <Row >
    { items.length>0
      ?
      items.map((item,index)=><CardDetail  index={index} response={item}/>)
      :<Loader/>
      
       
    }
 
    </Row>
  )
}

import { DeleteFilled, EditOutlined, EllipsisOutlined, GlobalOutlined, HeartFilled, HeartOutlined, MailOutlined, PhoneOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Skeleton, Switch } from 'antd';
import { useEffect, useState } from 'react';
import EditForm from '../Form/EditModal';
import {useDispatch,useSelector } from 'react-redux'
import { responseData } from '../../Reducer/appnoxReducer';
import EditModal from '../Form/EditModal';

const { Meta } = Card;

const CardDetail   = (props) => {
  const response =props.response
  const index =props.index
  const deleteFunc=props.deleteFunc
  const dispatch=useDispatch()
  const items=useSelector((state)=>state.counter.responseData)
  const [heartIcon,setHeartIcon]=useState("notFilled")
  const [avtarData,setAvtarData]=useState([])
  const [visible,setVisible]=useState(true)
    const FetchAvtarApi=async()=>{ 
        const avatarApi=await fetch(`https://avatars.dicebear.com/v2/avataaars/${response.name.split(' ')[0]}.svg?options[mood][]=happy`) 
        const avtarImg=avatarApi.url
        setAvtarData(avtarImg)
    }
    useEffect(()=>{
        FetchAvtarApi()
    },[items])

    useEffect(()=>{
  },[heartIcon])
  
    const deleteItem=(value,id)=>{
      const delData=value.filter(item  =>item.id !==id)
      let val=dispatch(responseData(delData))
      
    }
    const onChnagesHandler =(e,name)=>{
    }
    const HeartChange=()=>{
    return (
      heartIcon !=="Filled" ?  <HeartOutlined onClick={()=> setHeartIcon("Filled")} className='heartSvg' />
      :
      <HeartFilled className='heartSvg' onClick={()=> setHeartIcon("notFilled")}  />
)    
    }
    return (
    <Col xs={24} sm={24} md={8} lg={8} xl={6} >
     <div style={{margin:"10px"}}>
     {visible && <Card
     style={{
         width: "100%",
        }}
        actions={[
          HeartChange(),
            <EditModal  data={response} onChnagesHandler={onChnagesHandler}/>,
            <DeleteFilled onClick={(e)=>deleteItem(items,response.id) }/>
        ]}
        >
        <div className='card-detail-div'>
        <div className='img-div'>
            <img src={avtarData}/>
        </div>
        <div className='content-detail-div'>
          <div className='user-name'>{response.name}</div>
          <div className='Msg-detail'><MailOutlined />{response.email}</div>
          <div className='Msg-detail'><PhoneOutlined />{response.phone}</div>
          <div className='Msg-detail'><GlobalOutlined />{response.website}</div>
        </div>

        </div>
        </Card>}
        </div>
        </Col>
  );
};

export default CardDetail
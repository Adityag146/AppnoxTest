import { Button, Col, Form, Modal,Input, Row } from 'antd';
import { useState } from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import {responseData} from "../../Reducer/appnoxReducer"


const EditModal = (props) => {
  const dispatch =useDispatch()
const items  = useSelector(state=> state.counter.responseData)
  const [name,setName]=React.useState(props.data.name)
  const [email,setEmail]=React.useState(props.data.email)
  const [website,setWebsite]=React.useState(props.data.website)
  const [phone,setPhone]=React.useState(props.data.phone)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formReset,setFormReset]=useState(false)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    let editedItems = JSON.parse(JSON.stringify(items))
 let itemToedit  = editedItems.filter(item=> item.id == props.data.id)
 itemToedit  =  {...itemToedit[0],name,website,phone,email}
 editedItems[itemToedit.id-1]=itemToedit
 
 
 
   dispatch(responseData(editedItems))
    setIsModalOpen(false);
   
  };
  const handleCancel = () => {
  
    setIsModalOpen(false);
  };

  useEffect(()=>{},[name,email,website,phone])
  return (
    <>
    <EditOutlined  key="edit" onClick={showModal}/>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
  
    >
      <Form.Item
        label="Name"
        name="name"
        initialValue={name}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={(e)=>setName(e.target.value) } />
      </Form.Item>
  
      <Form.Item
        label="Email"
        name="email"
        initialValue={email}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
  
        ]}
        
      >
        <Input onChange={(e)=>setEmail(e.target.value) }/>
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        initialValue={phone}
  
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input onChange={(e)=>setPhone(e.target.value) }/>
      </Form.Item>
      <Form.Item
        label="Website"
        name="Website"
        initialValue={website}
  
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input onChange={(e)=>setWebsite(e.target.value)} />
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};
export default EditModal;
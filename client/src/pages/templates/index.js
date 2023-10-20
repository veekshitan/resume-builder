import React from 'react'
import Template1 from './template1'
import DefaultLayout from '../../components/DefaultLayout'
import { useParams, useNavigate } from 'react-router-dom'
import Template2 from './template2'
import  { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'antd'

export default function Templates() {
    const navigate = useNavigate();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    const params = useParams()
    console.log(params)
  
    const getTemplate = () => {
        switch(params.id){
            case '1' : {return <Template1 />}
            case '2' : {return <Template2 />}
        }
  
    }
    return (
        <DefaultLayout>
            <div style = {{display: 'flex', justifyContent: 'end', margin: '5px'}}>
                <Button style = {{margin: '5px', backgroundColor: 'white', color : 'black'}} onClick = {() => navigate('/home')}> Back </Button>
                <Button style = {{margin: '5px'}} onClick = {handlePrint}> Print </Button>
            </div>
            <div ref = {componentRef}>
            {getTemplate()}
            </div>
            
        </DefaultLayout>
        
    )
  }
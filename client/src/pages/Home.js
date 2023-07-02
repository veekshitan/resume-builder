import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import template1img from '../resources/templates/templates_1.png'
import template2img from '../resources/templates/template2.png'
import '../resources/templates.css'
import { useNavigate } from 'react-router-dom'

export default function Home () {
    const navigate = useNavigate();

    const templates = [
        {
            title : 'Simple Resume',
            image : template1img
        }, {
            title : 'High Lighted Sections Resume',
            image : template2img
        }
    ]
    return (
        <DefaultLayout>
            <div className = "row home">

                {templates.map((template, index) => {
                    return <div className='col-md-4'>
                        <div className='template'>
                        <img src = {template.image} height = '300' style = {{width : '100%'}}/>
                        <div className = "text">
                        <p>{template.title}</p>
                        <button onClick = {() => navigate(`/templates/${index + 1}`)}>Try</button>
                            </div>
                        </div>

                        </div>

                })}

            </div>
        </DefaultLayout>
    );
}
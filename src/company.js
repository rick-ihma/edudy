import React, {Component} from 'react';
import './company.css';
import { Columns,Button } from 'react-bulma-components/full';
import agoda from './Assets/agoda.png';
import cisco from './Assets/cisco.png';
import facebook from './Assets/facebook.png'



class Company extends Component{
    render(){
        return(
            <div>
                <div className="headhighlight">
                    <p className="headfont">Choose your Company</p>
                </div>

                 <Columns>
                    <Columns.Column>
                    
                        <img className="left" src={agoda}/>
                    
                    </Columns.Column>
                    <Columns.Column>
                    
                        <img className="center" src={cisco}/>
                   
                    </Columns.Column>
                    <Columns.Column>

                        <img className="right" src={facebook}/>

                    </Columns.Column>
                </Columns>

                
           </div>

        );
    }
}export default Company;
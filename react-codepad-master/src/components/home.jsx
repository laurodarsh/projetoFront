import React from 'react';

import fire from "../firebase/config";
import { New } from "./new";
import { Message } from "./message";

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            codes: []
        }
    }

    componentDidMount() {
        const itemsRef = fire.database().ref('/code');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                console.log(item);
                newState.push({
                    id: item,
                    code: items[item].code,
                    title: items[item].title
                });
            }
            this.setState({
                codes: newState
            })
            console.log(this.state.code)
        });
    }

    render(){
        if (false)
        {
            return(
                <Message message={"this.state.message"} />
            )
        }
        else{
            return (
            
                <div>
                    <h1 class="btn">Code Pad</h1>
                   
                    <New/>
                    <ul>
                        {
                            this.state.codes &&
                                this.state.codes.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={`/${item.id}`}>
                                                {item.title}
                                            </a>
                                        </li>
                                    );
                                })
                        }
                    </ul>
                </div>
            );
        }
        
    }
}
import React from 'react';
import { Header} from './header';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.Testando = this.Testando.bind(this);
        
        this.state = {
            especialidades : ["Cardiologia", "Dermatologia", "Pediatria"],
            clicked : false
        }
    }
    
    Testando(e) {
        console.log(e)
        var id = document.getElementById("especialidade");
        console.log(id.value);
        this.setState({
            clicked: true
        })
    }
     
    componentDidMount() {
        
    }

    render(){
        const clicked = this.state.clicked;
        console.log(clicked);
        if (clicked) {
            return(
                <Header/>
            )
        }
        else
        {
            return (
                <div className="container" style={{textAlign:"center"}}>
                    <div style={{margin:'100px auto 0'}} className="row">
                        <h2 className="col-lg-12 col-md-12">Crie seu site personalizado</h2>
                    </div>
                    <div style={{margin:'170px auto 0', height:"40px"}} className="row">
                        <h3 style={{textAlign:"right",padding:"3px", alignItems:"center"}} className="Titulo col-lg-6 col-md-6 col-sm-6">Escolha sua especialidade: </h3>
                        <select style={{textAlign:"left", marginLeft:"10px", padding:"5px", borderRadius: '.25rem', alignItems:"center"}} className="col-lg-2 col-md-2 col-sm-4" id="especialidade" >
                        {this.state.especialidades.map((area, index) => (
                            <option value={area}>{area}</option>
                        ))}
                        </select>
                        <button onClick={this.Testando} style={{textAlign:"center", marginLeft:"10px", padding:"5px", alignItems:"center"}} className="btn btn-info col-lg-1 col-md-1 col-sm-3">Criar</button>
                    </div>
                    <div style={{marginTop:'40px'}} className="row">
                        <h3 className="Titulo col-md-12 col-lg-12">Ou</h3>
                    </div>
                    <div style={{marginTop:'40px'}} className="row">
                        <h3 style={{textAlign:"right",padding:"3px", alignItems:"center"}} className="Titulo col-lg-6 col-md-6 col-sm-6">Crie de modo totalmente personalizado: </h3>
                        <button style={{textAlign:"center", marginLeft:"10px", padding:"5px", alignItems:"center"}} className="btn btn-info col-lg-2 col-md-2 col-sm-4">Criar</button>
                    </div>
                </div> 
            );
        }
    }
}
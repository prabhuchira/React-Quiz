
import React, { createRef } from "react";
import "./sidebar.css";

const listItems = [
    {
        name: "home",
        title: "Home"
    },
    {
        name: "delete",
        title: "Delete"
    },
    {
        name: "archive",
        title: "Archives"
    }

]

function Icon(props) {
    return (
        <i className={"material-icons"} style={props.styles}>
            {props.name}
        </i>
    )
}




class Sidebar extends React.Component {



    constructor(props){
        super(props);
        this.myRef=createRef(null);
        this.state={open:0}
        
    }

    handler=()=>{
        
       
       
    }  

    
    componentDidMount(){
        let i=0
        
        

        
            setInterval(
                
            
                    ()=>{this.myRef.current.style.width = i++ +"px";
                
                    console.log(this.myRef.current.style.width)
                }
                ,1)
        
     
        

    }

    render() {
        return (
            <div className="sidebar" style={{ height: window.innerHeight }} ref={this.myRef}>
                <div className="sidebar-header">
                    Sidebar
                </div>

                <div className="sidebar-content">


                    {
                        listItems.map(item =>
                            <div className="sidebar-item">
                                <Icon name={item.name} styles={{
                                    paddingRight: "9px"
                                }} /> {item.title}
                            </div>

                        )
                    }




                </div>
            </div>
        )
    }
}

export default Sidebar;
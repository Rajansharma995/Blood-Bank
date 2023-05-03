import React,{Component} from "react";
// import setSearchList from './setSearchList';

export default class SearchClass extends Component{
    constructor(props){
        super(props);
        this.state ={
            result: true,
            palce:'',
            blood:'',
            searchList:[],
        };
    }
    setPlace = (e) => {
        this.setState({
            palce:e.target.value,
        });
    };
    setsearchList = (result) => {};

    render(){
     
        return(
            <form className="search">
                <input
                type="text"
                placeholder="PLACE"
                name="place"
                onChange={this.setPlace}      
                />
                <input 
                type="text"
                placeholder="BLOOD GROUP"
                name="bloodgroup"
                onChange={this.setBlood}
                />
                <button >
                    <i className="fa fa-search"></i>
                </button>
            </form>
        );
    }
}
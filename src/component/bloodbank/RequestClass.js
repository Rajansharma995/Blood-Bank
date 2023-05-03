import React, { Component } from "react";
import { useNavigate } from "react-router-dom";



export  class RequestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //number: -1,
      bloodGroup: [],
      req_blood: "A+ve",
      req_unit: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.request = this.request.bind(this);
  }

  componentDidMount() {
    this.setState({
      bloodGroup: [
        { id: "A+ve", label: "A+ve" },
        { id: "A-ve", label: "A-ve" },
        { id: "B+ve", label: "B+ve" },
        { id: "B-ve", label: "B-ve" },
        { id: "AB+ve", label: "AB+ve" },
        { id: "AB-ve", label: "AB-ve" },
        { id: "O+ve", label: "O+ve" },
        { id: "O-ve", label: "O-ve" },
        { id: "PNull", label: "PNull" },
      ],
    });
  }

  //
  handleChange = (e) => {
    this.setState({ req_blood: e.target.value }, () => {
      console.log("blood_requested : " + this.state.req_blood);
    });
  };

  updateUnit = (e) => {
    this.setState(
      {
        req_unit: e.target.value,
      },
      () => {
        console.log(this.state.req_unit);
      }
    );
  };


  render() {
    const navigate=useNavigate;
    const request=()=>{
      navigate('/request')
    }
    const { bloodGroup } = this.state;

    let bloodGroupList =
      bloodGroup.length > 0 &&
      bloodGroup.map((blood) => {
        return (
          <option key={blood.id} value={blood.id}>
            {blood.label}
          </option>
        );
      });

    return (
      <div className="request">
        <form>
          <select value={this.state.req_blood} onChange={this.handleChange}>
            {bloodGroupList}
          </select>
          <input type="number" placeholder="UNIT" onChange={this.updateUnit} />
          <button>REQUEST</button>
        </form>
      </div>
    );
  }
}
export default RequestClass;
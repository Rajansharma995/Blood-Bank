import React,{useState} from "react";
import '../../css/Handelrequest.css';


const Handelrequest=() => {
    const[RequestTable , setRequestTable] = useState([]);
   
    
    return(
        <div className="handel-request">
            <h1>REQUEST TABLE</h1>
            <table className="req-table">
                <thead>
                    <th>REQ-ID</th>
                    <th>BLOOD GROUP</th>
                    <th>UNIT</th>
                </thead>
                <tbody>
                     {RequestTable.map((request,i) => {
                        return(
                            <tr key={i}>
                                <td>{request.req_id}</td>
                                <td>{request.blood_group}</td>
                                <td>{request.unit}</td>
                                <button> 
                                    ACCEPT/SERVE
                                </button>
                            </tr>
                        );
                    })} 
                    
                </tbody>
            </table>
        </div>
    );
}
export default Handelrequest;
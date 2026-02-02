import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchLogs } from "../store/logSlice";


const Logs = () =>{

    const dispatch = useDispatch();
    const {data,status,error} = useSelector((state)=>state.logs);

    useEffect(()=>{
       if(status === "idle"){
        dispatch(fetchLogs());
       }
    },[status,dispatch]);

    const handleRefresh = ()=>{
        dispatch(fetchLogs());
    }



    if(status === "loading") {
        return <p>Loading logs...</p>
    }

    return(
        <div style={{padding:"1rem"}}>

            <h3>Daily Logs : redux</h3>
            <ul>
                {data.map((log)=>(
                    <li key={log.id}>{log.activity} - {log.carbon} kg</li>
                ))}
            </ul>

            <button onClick={handleRefresh} >Reload logs</button>


        </div>
        
    
    )
    
}

export default Logs;
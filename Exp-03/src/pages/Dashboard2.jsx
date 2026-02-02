import { logs } from "../data/log";
import Log from "./Log";



const Dashboard2 = () =>{


    const totalCarbon  = logs.reduce((total, log) => total + log.carbon, 0);
    const highEA = logs.filter((log)=>  log.carbon > 4);



    return(
        <>
    <section>

    <div style={{border:"1px solid rosybrown ",padding:"1rem"}}>

        <ul>

        {logs.map((log) => (
            <Log key={log.id} id={log.id} activity={log.activity} carbon={log.carbon} />
        ) )
    }
    </ul>
            <p> Total Carbon Emission : {totalCarbon} </p>
        </div>

        <div style={{backgroundColor:"red",padding:"0.5rem"}}>

        <p>High Carbon activies</p>
        <ul>

        {logs.filter((log)=>log.carbon > 4).map((log)=>(
            <Log key={log.id} id={log.id} activity={log.activity} carbon={log.carbon} />
        ))}
        </ul>
        </div>


        
        <div style={{backgroundColor:"red",padding:"0.5rem"}}>

        <p>Low Carbon activies</p>
        <ul>

        {logs.filter((log)=>log.carbon <= 4).map((log)=>(
            <Log key={log.id} id={log.id} activity={log.activity} carbon={log.carbon} />
        ))}
        </ul>
        </div>


        
        



    
    </section>
        </>
    
    )


}


export default Dashboard2;
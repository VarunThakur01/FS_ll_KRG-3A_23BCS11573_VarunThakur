
const Log = ({id,activity,carbon}) =>{    

    const backgroundColor = carbon <= 3 ? "lightgreen" : carbon <= 6 ? "orange" : "red";

    return(
        <li style={{backgroundColor, border:"1px solid grey",padding:"1rem",margin:"1rem",display:"flex",gap:"2rem"}}>

            <span>{id}</span>
            <span>{activity}  </span>
            <span>{carbon}</span>
        
        </li>
    )

}


export default Log;
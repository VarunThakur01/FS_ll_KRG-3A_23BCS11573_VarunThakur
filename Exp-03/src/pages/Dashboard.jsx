import { Outlet,Link } from "react-router-dom"

const  Dashboard=()=>{


    return (<>
    <p>Dashboard</p>
    <nav style={{display:"flex",gap:"1rem"}}>
        <Link to="summary" >Summary</Link>
        <Link to="analytics"    >Analytics</Link>
    </nav>
        <hr />

    <Outlet/>

    </>)

}

export default Dashboard
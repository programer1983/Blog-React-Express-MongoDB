import "./sidebar.css"
import {useEffect, useState} from "react"
import axios from "axios"

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats =  async () => {
            const res =  await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])


    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                   src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" 
                   alt="" 
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas mollis mattis. Phasellus cursus mi orci, non tempor ipsum euismod at. Pellentesque facilisis luctus luctus. Cras at aliquet erat.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                       <li className="sidebarListItem">{c.name}</li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}


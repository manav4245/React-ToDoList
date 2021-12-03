import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

export const Footer = () => {
   

    return (
        <div>
            <footer className="text-center ">
            <p>Copyright &copy; MyTodoList.com</p>
            <Link to="#">Back to top</Link>
            </footer>
        </div>
    )
}

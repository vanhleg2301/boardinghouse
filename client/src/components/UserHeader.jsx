import React from "react";
import "../styles/UserHeader.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserHeader = () => {
	return (
		<header className="header">
			<div className="header-left">
				<h1 className="header-title">Trang chủ</h1>
			</div>
			<div className="header-right">
				<div className="user-info">
					<span className="user-name">Vương Huy</span>
					<Link to="/profile" className="user-avatar">
						<FaUserCircle size={24} />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default UserHeader;

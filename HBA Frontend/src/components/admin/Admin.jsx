/* eslint-disable no-unused-vars */
import React from "react"
import { Link } from "react-router-dom";
import { HiBuildingStorefront } from "react-icons/hi2";
import { BiSolidBookBookmark } from "react-icons/bi";


const Admin = () => {
	return (
		<section className="container mt-5">
			<h2 className="fs-1">Welcome to Admin Panel</h2>
			<hr />
			<Link to={"/existing-rooms"} className="manage_rooms"><HiBuildingStorefront size={40} className="btn-admin me-3" />
				Manage Rooms</Link> <br />
			<Link to={"/existing-bookings"} className="manage_rooms"><BiSolidBookBookmark size={40} className="btn-admin me-3" />
Manage Bookings</Link>
		</section>
	)
}

export default Admin

/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import Logout from "../auth/Logout"
import logo from "../../assets/images/logo.svg";
import { Dropdown } from 'react-bootstrap';
import { RiLoginBoxFill } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";



const NavBar = () => {
	const [showAccount, setShowAccount] = useState(false)

	const handleAccountClick = () => {
		setShowAccount(!showAccount)
	}

	const isLoggedIn = localStorage.getItem("token")
	const userRole = localStorage.getItem("userRole")

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary px-2 shadow mt-1 sticky-top">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					<span className="my_logo object-fit-none" > <img src={logo} style={{
						height: 'auto',
						width: '80px'
					}} /></span>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">
					</span>
				</button>

				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to={"/browse-all-rooms"}>
								Browse all rooms
							</NavLink>
						</li>

						{isLoggedIn && userRole === "ROLE_ADMIN" && (
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to={"/admin"}>
									Admin
								</NavLink>
							</li>

						)}
					</ul>

					<ul className="d-flex navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to={"/find-booking"}>
								Find my booking
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={"/Contact"}>
								ContactUs
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={"/About"}>
								AboutUs
							</NavLink>
						</li>
						<li className="nav-item">
							<Dropdown >
								<Dropdown.Toggle className="nav-link" id="dropdown-basic" variant="">
									More
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="/FAQ">FAQ</Dropdown.Item>
									<Dropdown.Item href="/PrivacyPolicy">Privacy & Policy</Dropdown.Item>
									<Dropdown.Item href="/TermsAndConditions">Terms & Conditions</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>




						<li className="nav-item dropdown ">
							<a
								className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
								href="#"
								role="button"

								data-bs-toggle="dropdown"
								aria-expanded="false"
								onClick={handleAccountClick}>
								{" "}
								<FaUserCog size={22} />
							</a>

							<ul
								className={`dropdown-menu dropdown-menu-end
								 mt-3 ${showAccount ? "show" : ""}`}
								aria-labelledby="navbarDropdown"
							>
								{isLoggedIn ? (
									<Logout />
								) : (
									<li>
										<Link
											className="dropdown-item" to={"/login"} role="button">
											<RiLoginBoxFill size={30} /> Login
										</Link>
									</li>
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { deleteUser, getBookingsByUserId, getUser } from "../utils/ApiFunctions"
import { useNavigate } from "react-router-dom"
import moment from "moment"

const Profile = () => {
	const [user, setUser] = useState({
		id: "",
		email: "",
		firstName: "",
		lastName: "",
		roles: [{ id: "", name: "" }]
	})

	const [bookings, setBookings] = useState([
		{
			id: "",
			room: { id: "", roomType: "" },
			checkInDate: "",
			checkOutDate: "",
			bookingConfirmationCode: ""
		}
	])
	const [message, setMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const navigate = useNavigate()

	const userId = localStorage.getItem("userId")
	const token = localStorage.getItem("token")

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await getUser(userId, token)
				setUser(userData)
			} catch (error) {
				console.error(error)
			}
		}

		fetchUser()
	}, [token, userId])

	useEffect(() => {
		const fetchBookings = async () => {
			try {
				const response = await getBookingsByUserId(userId, token)
				setBookings(response)
			} catch (error) {
				console.error("Error fetching bookings:", error.message)
				setErrorMessage(error.message)
			}
		}

		fetchBookings()
	}, [token, userId])

	const handleDeleteAccount = async () => {
		const confirmed = window.confirm(
			"Are you sure you want to delete your account? This action cannot be undone."
		)
		if (confirmed) {
			await deleteUser(userId)
				.then((response) => {
					setMessage(response.data)
					localStorage.removeItem("token")
					localStorage.removeItem("userId")
					localStorage.removeItem("userRole")
					navigate("/")
					window.location.reload()
				})
				.catch((error) => {
					setErrorMessage(error.data)
				})
		}
	}

	return (
		<div className="container">
			{errorMessage && <p className="text-danger">{errorMessage}</p>}
			{message && <p className="text-danger">{message}</p>}
			{user ? (
				<div className="card p-5 mt-5" style={{ backgroundColor: "whitesmoke" }}>
					<h4 className="card-title text-center">User Information</h4>
					<div className="card-body">
						<div className="col-md-10 mx-auto">
							<div className="card mb-3 shadow">
								<div className="row g-0">
									<div className="col-md-2">
										<div className="d-flex justify-content-center align-items-center mb-4">
											<img
												src="data:image/png;base64,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"
												alt="Profile"
												className="rounded-circle"
												style={{ width: "150px", height: "150px", objectFit: "cover" }}
											/>
										</div>
									</div>

									<div className="col-md-10">
										<div className="card-body">
											<div className="form-group row">
												<label className="col-md-2 col-form-label fw-bold">ID:</label>
												<div className="col-md-10">
													<p className="card-text">{user.firstName}</p>
												</div>
											</div>
											<hr />

											<div className="form-group row">
												<label className="col-md-2 col-form-label fw-bold">First Name:</label>
												<div className="col-md-10">
													<p className="card-text">{user.firstName}</p>
												</div>
											</div>
											<hr />

											<div className="form-group row">
												<label className="col-md-2 col-form-label fw-bold">Last Name:</label>
												<div className="col-md-10">
													<p className="card-text">{user.lastName}</p>
												</div>
											</div>
											<hr />

											<div className="form-group row">
												<label className="col-md-2 col-form-label fw-bold">Email:</label>
												<div className="col-md-10">
													<p className="card-text">{user.email}</p>
												</div>
											</div>
											<hr />

											<div className="form-group row">
												<label className="col-md-2 col-form-label fw-bold">Roles:</label>
												<div className="col-md-10">
													<ul className="list-unstyled">
														{user.roles.map((role) => (
															<li key={role.id} className="card-text">
																{role.name}
															</li>
														))}
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<h4 className="card-title text-center">Booking History</h4>

							{bookings.length > 0 ? (
								<table className="table table-bordered table-hover shadow">
									<thead>
										<tr>
											<th scope="col">Booking ID</th>
											<th scope="col">Room ID</th>
											<th scope="col">Room Type</th>
											<th scope="col">Check In Date</th>
											<th scope="col">Check Out Date</th>
											<th scope="col">Confirmation Code</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										{bookings.map((booking, index) => (
											<tr key={index}>
												<td>{booking.id}</td>
												<td>{booking.room.id}</td>
												<td>{booking.room.roomType}</td>
												<td>
													{moment(booking.checkInDate).subtract(1, "month").format("MMM Do, YYYY")}
												</td>
												<td>
													{moment(booking.checkOutDate)
														.subtract(1, "month")
														.format("MMM Do, YYYY")}
												</td>
												<td>{booking.bookingConfirmationCode}</td>
												<td className="text-success">On-going</td>
											</tr>
										))}
									</tbody>
								</table>
							) : (
								<p>You have not made any bookings yet.</p>
							)}

							<div className="d-flex justify-content-center">
								<div className="mx-2">
									<button className="btn btn-danger btn-sm" onClick={handleDeleteAccount}>
										Close account
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>Loading user data...</p>
			)}
		</div>
	)
}

export default Profile

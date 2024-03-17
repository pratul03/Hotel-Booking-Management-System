/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { deleteRoom, getAllRooms } from "../utils/ApiFunctions"
import { Col, Row } from "react-bootstrap"
import RoomFilter from "../common/RoomFilter"
import RoomPaginator from "../common/RoomPaginator"
import { MdAddBusiness } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineStreetview } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiEditBoxFill } from "react-icons/ri";
import DotLoader from "react-spinners/DotLoader";

const ExistingRooms = () => {
	const [rooms, setRooms] = useState([{ id: "", roomType: "", roomPrice: "" }])
	const [currentPage, setCurrentPage] = useState(1)
	const [roomsPerPage] = useState(8)
	const [isLoading, setIsLoading] = useState(false)
	const [filteredRooms, setFilteredRooms] = useState([{ id: "", roomType: "", roomPrice: "" }])
	const [selectedRoomType, setSelectedRoomType] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [successMessage, setSuccessMessage] = useState("")

	useEffect(() => {
		fetchRooms()
	}, [])

	const fetchRooms = async () => {
		setIsLoading(true)
		try {
			const result = await getAllRooms()
			setRooms(result)
			setIsLoading(false)
		} catch (error) {
			setErrorMessage(error.message)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (selectedRoomType === "") {
			setFilteredRooms(rooms)
		} else {
			const filteredRooms = rooms.filter((room) => room.roomType === selectedRoomType)
			setFilteredRooms(filteredRooms)
		}
		setCurrentPage(1)
	}, [rooms, selectedRoomType])

	const handlePaginationClick = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const handleDelete = async (roomId) => {
		try {
			const result = await deleteRoom(roomId)
			if (result === "") {
				setSuccessMessage(`Room No ${roomId} was delete`)
				fetchRooms()
			} else {
				console.error(`Error deleting room : ${result.message}`)
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 1000)
	}

	const calculateTotalPages = (filteredRooms, roomsPerPage, rooms) => {
		const totalRooms = filteredRooms.length > 0 ? filteredRooms.length : rooms.length
		return Math.ceil(totalRooms / roomsPerPage)
	}

	const indexOfLastRoom = currentPage * roomsPerPage
	const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
	const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom)

	return (
		<>
			<div className="container col-md-8 col-lg-6">
				{successMessage && <p className="alert alert-success mt-5">{successMessage}</p>}

				{errorMessage && <p className="alert alert-danger mt-5">{errorMessage}</p>}
			</div>

			{isLoading ? (
				<div className="d-flex align-content-center justify-content-center " >
					<DotLoader color="#f4461b" loading={isLoading} size={150} speedMultiplier={1} cssOverride={{}} />
				</div>

			) : (
				<>
					<section className="mt-5 mb-5 container">
						<div className="d-flex justify-content-between mb-3 mt-5">
							<h2>Existing Rooms</h2>
						</div>

						<Row>
							<Col md={6} className="mb-2 md-mb-0">
								<RoomFilter data={rooms} setFilteredData={setFilteredRooms} />
							</Col>

							<Col md={6} className="d-flex justify-content-end ">
								<Link to={"/add-room"}
									className="text-dark text-decoration-none fw-bold fs-5">
									<MdAddBusiness size={33} className="mb-2  btn-action" />
								</Link>
							</Col>
						</Row>

						<table className="table table-bordered table-hover">
							<thead>
								<tr className="text-center">
									<th>ID</th>
									<th>Room Type</th>
									<th>Room Price</th>
									<th>Actions</th>
								</tr>
							</thead>

							<tbody>
								{currentRooms.map((room) => (
									<tr key={room.id} className="text-center">
										<td>{room.id}</td>
										<td>{room.roomType}</td>
										<td>{room.roomPrice}</td>
										<td className="gap-2">
											<Link to={`/edit-room/${room.id}`} className="gap-2">
												<span className="btn btn-action btn-md">
													<MdOutlineStreetview size={20} />
												</span>
												<span className="btn btn-action-edit btn-md ml-5">
													<RiEditBoxFill size={20} />
												</span>
											</Link>
											<button
												className="btn btn-action-trash btn-md ml-5"
												onClick={() => handleDelete(room.id)}>
												<IoTrashBinSharp size={20} />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<RoomPaginator
							currentPage={currentPage}
							totalPages={calculateTotalPages(filteredRooms, roomsPerPage, rooms)}
							onPageChange={handlePaginationClick}
						/>
					</section>
				</>
			)
			}
		</>
	)
}

export default ExistingRooms

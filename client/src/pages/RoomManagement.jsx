import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddRoomModal from "../components/AddRoomModal";
import "../styles/RoomManagement.css";

const RoomManagement = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const rooms = [
		{
			id: "201",
			tenant: "Giang",
			price: "2,300,000",
			type: "Đôi",
			capacity: "02",
			status: "Đã thuê",
		},
		{
			id: "301",
			tenant: "",
			price: "1,800,000",
			type: "Đơn",
			capacity: "",
			status: "Trống",
		},
	];

	const handleAddRoom = (roomData) => {
		// Xử lý dữ liệu phòng mới ở đây
		console.log("New room data:", roomData);
		setIsModalOpen(false);
	};

	return (
		<div className="dashboard-container">
			<Header />
			<div className="dashboard-content">
				<Sidebar />
				<main className="main-content">
					<div className="room-management">
						<div className="room-header">
							<h2>Quản Lý Phòng trọ</h2>
							<button
								className="add-room-btn"
								onClick={() => setIsModalOpen(true)}
							>
								+ Thêm phòng trọ mới
							</button>
						</div>

						<AddRoomModal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
							onSubmit={handleAddRoom}
						/>

						<div className="search-filter-container">
							<div className="search-box">
								<h3>Tìm kiếm phòng</h3>
								<input
									type="text"
									placeholder="Tìm kiếm..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>

							<div className="filter-box">
								<h3>Lọc</h3>
								<select
									value={filterStatus}
									onChange={(e) => setFilterStatus(e.target.value)}
								>
									<option value="">Trạng thái</option>
									<option value="occupied">Đã thuê</option>
									<option value="vacant">Trống</option>
								</select>
							</div>
						</div>

						<div className="rooms-table">
							<table>
								<thead>
									<tr>
										<th>Số phòng</th>
										<th>Tên người thuê</th>
										<th>Giá thuê</th>
										<th>Loại phòng</th>
										<th>Số người</th>
										<th>Trạng thái</th>
										<th>Thao tác</th>
									</tr>
								</thead>
								<tbody>
									{rooms.map((room) => (
										<tr key={room.id}>
											<td>{room.id}</td>
											<td>{room.tenant || "-"}</td>
											<td>{room.price}</td>
											<td>{room.type}</td>
											<td>{room.capacity || "-"}</td>
											<td>
												<span
													className={`status-badge ${
														room.status === "Đã thuê"
															? "occupied"
															: "vacant"
													}`}
												>
													{room.status}
												</span>
											</td>
											<td>
												<div className="action-buttons">
													<button className="edit-btn">Sửa</button>
													<button className="delete-btn">
														Xóa
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default RoomManagement;

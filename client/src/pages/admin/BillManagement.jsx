import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import NotificationModal from "../../components/NotificationModal";
import "../styles/BillManagement.css";

const BillManagement = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const bills = [
		{
			roomId: "201",
			tenant: "Giang",
			price: "2,300,000",
			paymentDate: "17/12/2020",
			roomType: "Đôi",
			capacity: "03",
			status: "Đã thanh toán",
		},
		{
			roomId: "402",
			tenant: "Huy",
			price: "1,800,000",
			paymentDate: "20/10/2023",
			roomType: "Đơn",
			capacity: "02",
			status: "Chưa",
		},
	];

	const unpaidTenants = bills.filter((bill) => bill.status === "Chưa");

	return (
		<div className="dashboard-container">
			<Header />
			<div className="dashboard-content">
				<Sidebar />
				<main className="main-content">
					<div className="bill-management">
						<div className="bill-header">
							<h2>Quản Lý Thu tiền & Hóa đơn</h2>
							<div className="header-buttons">
								<button className="create-bill-btn">Tạo hóa đơn</button>
								<button className="print-bill-btn">In hóa đơn</button>
								<button
									className="send-notification-btn"
									onClick={() => setIsModalOpen(true)}
								>
									Gửi thông báo
								</button>
							</div>
						</div>

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
									<option value="paid">Đã thanh toán</option>
									<option value="unpaid">Chưa thanh toán</option>
								</select>
							</div>
						</div>

						<div className="bills-table">
							<table>
								<thead>
									<tr>
										<th>Số phòng</th>
										<th>Tên người thuê</th>
										<th>Giá thuê</th>
										<th>Ngày thanh toán</th>
										<th>Loại phòng</th>
										<th>Số người</th>
										<th>Trạng thái</th>
										<th>Thao tác</th>
									</tr>
								</thead>
								<tbody>
									{bills.map((bill) => (
										<tr key={bill.roomId}>
											<td>{bill.roomId}</td>
											<td>{bill.tenant}</td>
											<td>{bill.price}</td>
											<td>{bill.paymentDate}</td>
											<td>{bill.roomType}</td>
											<td>{bill.capacity}</td>
											<td>
												<span
													className={`status-badge ${
														bill.status === "Đã thanh toán"
															? "paid"
															: "unpaid"
													}`}
												>
													{bill.status}
												</span>
											</td>
											<td>
												<div className="action-buttons">
													<button className="view-btn">Xem</button>
													<button className="print-btn">In</button>
													<button className="edit-btn">Sửa</button>
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

			<NotificationModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				unpaidTenants={unpaidTenants}
			/>
		</div>
	);
};

export default BillManagement;

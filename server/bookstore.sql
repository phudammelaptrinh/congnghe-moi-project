-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2025 at 12:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `Id_book` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Id_LoaiSach` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tacGia` varchar(255) DEFAULT NULL,
  `loaiSach` varchar(255) DEFAULT NULL,
  `namXuatBan` int(11) DEFAULT NULL,
  `nhaXuatBan` varchar(255) DEFAULT NULL,
  `Gia` float DEFAULT NULL,
  `soLuong` int(11) DEFAULT NULL,
  `hinh` varchar(255) DEFAULT NULL,
  `moTa` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`Id_book`, `Id_LoaiSach`, `tacGia`, `loaiSach`, `namXuatBan`, `nhaXuatBan`, `Gia`, `soLuong`, `hinh`, `moTa`, `status`, `createdAt`, `updatedAt`) VALUES
('d2770fdb-2f13-11f0-a03f-088fc30ddfe2', 'a60ab18d-2f10-11f0-a03f-088fc30ddfe2', 'Nguyễn Văn A', 'Sách kinh tế', 2020, 'NXB Kinh Tế', 89000, 5, 'kinhte-hoc.jpg', 'Kinh tế học - Nguyễn Văn A', '0', '2025-05-12 11:27:29', '2025-05-12 11:27:29');

-- --------------------------------------------------------

--
-- Table structure for table `booktype`
--

CREATE TABLE `booktype` (
  `Id_LoaiSach` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tenLoaiSach` varchar(255) DEFAULT NULL,
  `moTa` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booktype`
--

INSERT INTO `booktype` (`Id_LoaiSach`, `tenLoaiSach`, `moTa`, `createdAt`, `updatedAt`) VALUES
('a60ab18d-2f10-11f0-a03f-088fc30ddfe2', 'Sách kinh tế', 'Các sách về kinh tế và tài chính', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60ac96b-2f10-11f0-a03f-088fc30ddfe2', 'Sách ngoại ngữ', 'Sách học tiếng nước ngoài', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60aca54-2f10-11f0-a03f-088fc30ddfe2', 'Sách lịch sử', 'Tài liệu lịch sử và sự kiện', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60aca8b-2f10-11f0-a03f-088fc30ddfe2', 'Sách thiếu nhi', 'Sách dành cho trẻ em', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60acace-2f10-11f0-a03f-088fc30ddfe2', 'Kỹ năng sống', 'Sách về phát triển kỹ năng cá nhân', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60acaf7-2f10-11f0-a03f-088fc30ddfe2', 'Truyện tranh', 'Manga và truyện tranh các loại', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60acb43-2f10-11f0-a03f-088fc30ddfe2', 'Tiểu thuyết', 'Các loại tiểu thuyết và truyện dài', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60acb95-2f10-11f0-a03f-088fc30ddfe2', 'Tâm lý học', 'Sách nghiên cứu và phát triển tâm lý', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60acbee-2f10-11f0-a03f-088fc30ddfe2', 'Khoa học', 'Sách chuyên ngành khoa học tự nhiên', '2025-05-12 16:08:20', '2025-05-12 16:08:20'),
('a60acc15-2f10-11f0-a03f-088fc30ddfe2', 'Giáo khoa', 'Sách giáo khoa và tài liệu giảng dạy', '2025-05-12 16:08:20', '2025-05-12 16:08:20');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_Cart` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ngayTao` datetime DEFAULT NULL,
  `ngayCapNhat` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartdetail`
--

CREATE TABLE `cartdetail` (
  `Id_CartDetail` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_Cart` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Id_book` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `soLuong` int(11) DEFAULT NULL,
  `Gia` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id_Order` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_Voucher` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ngayDatHang` datetime DEFAULT NULL,
  `Gia` float DEFAULT NULL,
  `tongTien` float DEFAULT NULL,
  `phuongThucThanhToan` varchar(255) DEFAULT NULL,
  `diaChiGiaHang` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id_OrderDetail` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_Order` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Id_book` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `soLuong` int(11) DEFAULT NULL,
  `Gia` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roleID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `moTa` varchar(255) DEFAULT NULL,
  `VaiTro` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roleID`, `moTa`, `VaiTro`, `createdAt`, `updatedAt`) VALUES
('56f2a829-2f19-11f0-a03f-088fc30ddfe2', 'Quản trị hệ thống', 'Admin', '2025-05-12 17:10:32', '2025-05-12 17:10:32'),
('56f2bf5b-2f19-11f0-a03f-088fc30ddfe2', 'Người sử dụng dịch vụ', 'Khách hàng', '2025-05-12 17:10:32', '2025-05-12 17:10:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `roleID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `soDienThoai` varchar(255) DEFAULT NULL,
  `NgayThangNamSinh` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `roleID`, `fullName`, `email`, `password`, `soDienThoai`, `NgayThangNamSinh`, `status`, `createdAt`, `updatedAt`) VALUES
('0b8338b1-2f1b-11f0-a03f-088fc30ddfe2', '56f2bf5b-2f19-11f0-a03f-088fc30ddfe2', 'Nguyễn Văn Khánh', 'khanh.client@gmail.com', '42d7ddc3d8b06f74b112b04c4c5de8f853b05a68c5803941fb7a460994b8b8f8', '0909090909', '2003-03-05', '1', '2025-05-12 17:22:45', '2025-05-12 17:22:45'),
('0b834bbe-2f1b-11f0-a03f-088fc30ddfe2', '56f2bf5b-2f19-11f0-a03f-088fc30ddfe2', 'Phạm Thị Linh', 'linh.client@gmail.com', '6c2be2a9934091915f76cda2986a803a0b74053fa31f7f0e6f94c93054916ec5', '0988989898', '2000-12-25', '1', '2025-05-12 17:22:45', '2025-05-12 17:22:45'),
('c9540ab5-2f1a-11f0-a03f-088fc30ddfe2', '56f2a829-2f19-11f0-a03f-088fc30ddfe2', 'Hồ Trường Minh Phú', 'phuho22112003@gmail.com', '9d40ec5a04eb2728f634767ec217bea3d7f6265d6d5e242c654c5a00fe41d760', '0911001122', '2002-08-15', '1', '2025-05-12 17:20:54', '2025-05-12 17:20:54'),
('c9542374-2f1a-11f0-a03f-088fc30ddfe2', '56f2a829-2f19-11f0-a03f-088fc30ddfe2', 'Lương Tấn Thành', 'luongtanthanh2k3@gmail.com', '6d3370254d891bf7eb70b5ae47abdb6bc81b70463305f9509cbf1b8d65209daa', '0933445566', '2001-09-10', '1', '2025-05-12 17:20:54', '2025-05-12 17:20:54');

-- --------------------------------------------------------

--
-- Table structure for table `voucher`
--

CREATE TABLE `voucher` (
  `id_Voucher` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `maGiamGia` varchar(255) DEFAULT NULL,
  `soLuong` int(11) DEFAULT NULL,
  `phanTramGiam` float DEFAULT NULL,
  `ngayBatDau` datetime DEFAULT NULL,
  `ngayKetThuc` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `voucher`
--

INSERT INTO `voucher` (`id_Voucher`, `maGiamGia`, `soLuong`, `phanTramGiam`, `ngayBatDau`, `ngayKetThuc`) VALUES
('54e13965-2f1b-11f0-a03f-088fc30ddfe2', 'NEWREADER15', 150, 15, '2025-05-15 00:00:00', '2025-06-30 00:00:00'),
('54e1508f-2f1b-11f0-a03f-088fc30ddfe2', 'SUMMER20', 100, 20, '2025-06-01 00:00:00', '2025-06-30 00:00:00'),
('54e15158-2f1b-11f0-a03f-088fc30ddfe2', 'EDUBOOK25', 80, 25, '2025-05-20 00:00:00', '2025-07-01 00:00:00'),
('54e15187-2f1b-11f0-a03f-088fc30ddfe2', 'BIGSAVE10', 200, 10, '2025-05-15 00:00:00', '2025-06-15 00:00:00'),
('54e151b1-2f1b-11f0-a03f-088fc30ddfe2', 'WEEKEND5', 300, 5, '2025-05-17 00:00:00', '2025-07-31 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`Id_book`),
  ADD KEY `Id_LoaiSach` (`Id_LoaiSach`);

--
-- Indexes for table `booktype`
--
ALTER TABLE `booktype`
  ADD PRIMARY KEY (`Id_LoaiSach`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_Cart`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `cartdetail`
--
ALTER TABLE `cartdetail`
  ADD PRIMARY KEY (`Id_CartDetail`),
  ADD KEY `id_Cart` (`id_Cart`),
  ADD KEY `Id_book` (`Id_book`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id_Order`),
  ADD KEY `userID` (`userID`),
  ADD KEY `id_Voucher` (`id_Voucher`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id_OrderDetail`),
  ADD KEY `userID` (`userID`),
  ADD KEY `id_Order` (`id_Order`),
  ADD KEY `Id_book` (`Id_book`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roleID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD KEY `roleID` (`roleID`);

--
-- Indexes for table `voucher`
--
ALTER TABLE `voucher`
  ADD PRIMARY KEY (`id_Voucher`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`Id_LoaiSach`) REFERENCES `booktype` (`Id_LoaiSach`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cartdetail`
--
ALTER TABLE `cartdetail`
  ADD CONSTRAINT `cartdetail_ibfk_1` FOREIGN KEY (`id_Cart`) REFERENCES `cart` (`id_Cart`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cartdetail_ibfk_2` FOREIGN KEY (`Id_book`) REFERENCES `book` (`Id_book`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`id_Voucher`) REFERENCES `voucher` (`id_Voucher`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdetail_ibfk_2` FOREIGN KEY (`id_Order`) REFERENCES `order` (`id_Order`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdetail_ibfk_3` FOREIGN KEY (`Id_book`) REFERENCES `book` (`Id_book`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleID`) REFERENCES `roles` (`roleID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 19, 2023 at 02:07 PM
-- Server version: 8.0.34-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bracu_community`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `chat_id` int NOT NULL,
  `seen_status` tinyint(1) NOT NULL,
  `content` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `send_user_id` int NOT NULL,
  `receive_user_id` int NOT NULL,
  `reply_of` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `comment_id` int NOT NULL,
  `content` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `commenter_id` int NOT NULL,
  `post_id` int NOT NULL,
  `reply_of` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `friend`
--

CREATE TABLE `friend` (
  `user_id` int NOT NULL,
  `received_id` int NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `friend`
--

INSERT INTO `friend` (`user_id`, `received_id`, `time_stamp`) VALUES
(1, 2, '2023-08-17 09:29:44'),
(1, 3, '2023-08-17 09:29:44'),
(1, 13, '2023-08-17 09:30:27'),
(16, 1, '2023-08-17 09:30:27'),
(19, 1, '2023-08-17 09:30:46'),
(13, 2, '2023-08-17 09:31:58'),
(3, 13, '2023-08-17 09:31:58'),
(13, 7, '2023-08-17 09:32:47'),
(12, 13, '2023-08-17 09:32:47'),
(4, 5, '2023-08-17 09:33:48'),
(5, 20, '2023-08-17 09:33:48'),
(20, 10, '2023-08-17 09:34:28'),
(9, 15, '2023-08-17 09:34:28'),
(2, 20, '2023-08-17 09:34:52'),
(17, 2, '2023-08-17 09:34:52'),
(20, 1, '2023-08-17 09:35:21');

-- --------------------------------------------------------

--
-- Table structure for table `friend_request_received`
--

CREATE TABLE `friend_request_received` (
  `user_id` int NOT NULL,
  `friend_user_id` int NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `friend_request_sent`
--

CREATE TABLE `friend_request_sent` (
  `user_id` int NOT NULL,
  `friend_user_id` int NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int NOT NULL,
  `content` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `creator_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `content`, `time_stamp`, `creator_id`) VALUES
(1, '\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit nulla, condimentum eget risus ac, dictum finibus ipsum. Cras suscipit blandit neque vel tempor. Donec mattis congue metus, in porta sapien semper quis. Aliquam dapibus sollicitudin lacus sed ornare. Nam varius condimentum lobortis. Morbi vel dapibus neque. Aliquam pharetra, nisi ut dapibus fringilla, ipsum libero congue leo, et bibendum augue mauris tincidunt arcu. Fusce vulputate nisl enim, sit amet tempus odio volutpat et. Morbi nec enim nec erat luctus hendrerit. Donec tincidunt neque sit amet risus mattis, et sollicitudin massa euismod. Suspendisse efficitur, metus sagittis convallis auctor, mauris arcu pellentesque erat, sit amet convallis turpis ante sed lorem. Cras malesuada magna dignissim, luctus ipsum vitae, malesuada nibh.', '2023-08-12 14:08:22', 1),
(2, 'hello world, it\'s beautiful outside. this is post written by user with user_id = 2', '2023-08-17 17:19:39', 2),
(8, 'lorem ipsum set emet', '2023-08-17 17:29:41', 1),
(9, 'hello there, it is bracu-community', '2023-08-17 17:40:39', 1),
(10, 'lorem ipsum set emet', '2023-08-17 21:47:40', 1),
(11, 'asdfasdf', '2023-08-17 21:49:53', 1),
(12, 'fname 1', '2023-08-17 22:04:17', 1),
(13, 'hello world, I am testing', '2023-08-18 03:54:14', 1),
(14, 'lorem ipsum set emet', '2023-08-18 09:32:21', 13),
(15, 'hello world, I am user number 13 and I am writing some content of my post.', '2023-08-18 09:33:12', 13),
(16, 'Hello world, I am posting again', '2023-08-18 12:57:17', 1),
(17, 'hello there, this is new post', '2023-08-18 16:12:55', 1);

-- --------------------------------------------------------

--
-- Table structure for table `reacts_chat`
--

CREATE TABLE `reacts_chat` (
  `user_id` int NOT NULL,
  `chat_id` int NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reacts_comment`
--

CREATE TABLE `reacts_comment` (
  `user_id` int NOT NULL,
  `comment_id` int NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reacts_post`
--

CREATE TABLE `reacts_post` (
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reacts_post`
--

INSERT INTO `reacts_post` (`user_id`, `post_id`, `time_stamp`) VALUES
(1, 10, '2023-08-18 11:04:08'),
(2, 1, '2023-08-18 11:05:02'),
(1, 1, '2023-08-18 16:06:04');

-- --------------------------------------------------------

--
-- Table structure for table `shared`
--

CREATE TABLE `shared` (
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shared`
--

INSERT INTO `shared` (`user_id`, `post_id`, `time_stamp`) VALUES
(1, 1, '2023-08-18 12:48:17'),
(1, 14, '2023-08-18 12:48:36'),
(2, 14, '2023-08-18 12:49:11'),
(2, 1, '2023-08-18 12:54:53'),
(2, 2, '2023-08-18 12:55:00'),
(2, 8, '2023-08-18 12:55:26');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

CREATE TABLE `social_links` (
  `user_id` int NOT NULL,
  `social_link` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `firstname` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `lastname` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `dob` date NOT NULL,
  `bio` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `profile_picture` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cover_photo` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `gender` char(1) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ver_status` tinyint(1) NOT NULL DEFAULT '0',
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `firstname`, `lastname`, `dob`, `bio`, `password`, `profile_picture`, `cover_photo`, `gender`, `email`, `phone`, `ver_status`, `time_stamp`) VALUES
(1, 'fname 1', 'lname 1', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '2', 'example1@xyz.com', '1234567890', 1, '2023-08-18 11:10:39'),
(2, 'fname 2', 'lname 2', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example2@xyz.com', '1234567890', 1, '2023-08-17 08:16:42'),
(3, 'fname 3', 'lname 3', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example3@xyz.com', '1234567890', 1, '2023-08-17 08:16:53'),
(4, 'fname 4', 'lname 4', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example4@xyz.com', '1234567890', 1, '2023-08-17 08:17:05'),
(5, 'fname 5', 'lname 5', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example5@xyz.com', '1234567890', 1, '2023-08-17 08:17:14'),
(6, 'fname 6', 'lname 6', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example6@xyz.com', '1234567890', 1, '2023-08-17 08:17:24'),
(7, 'fname 7', 'lname 7', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example7@xyz.com', '1234567890', 1, '2023-08-17 08:17:32'),
(8, 'fname 8', 'lname 8', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example8@xyz.com', '1234567890', 1, '2023-08-17 08:17:41'),
(9, 'fname 9', 'lname 9', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example9@xyz.com', '1234567890', 1, '2023-08-17 08:17:50'),
(10, 'fname 10', 'lname 10', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example10@xyz.com', '1234567890', 1, '2023-08-17 08:18:00'),
(11, 'fname 11', 'lname 11', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example11@xyz.com', '1234567890', 1, '2023-08-17 08:18:18'),
(12, 'fname 12', 'lname 12', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example12@xyz.com', '1234567890', 1, '2023-08-17 08:18:26'),
(13, 'fname 13', 'lname 13', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example13@xyz.com', '1234567890', 1, '2023-08-17 09:27:41'),
(14, 'fname 14', 'lname 14', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example14@xyz.com', '1234567890', 1, '2023-08-17 09:27:53'),
(15, 'fname 15', 'lname 15', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example15@xyz.com', '1234567890', 1, '2023-08-17 09:28:02'),
(16, 'fname 16', 'lname 16', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example16@xyz.com', '1234567890', 1, '2023-08-17 09:28:11'),
(17, 'fname 17', 'lname 17', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example17@xyz.com', '1234567890', 1, '2023-08-17 09:28:20'),
(18, 'fname 18', 'lname 18', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example18@xyz.com', '1234567890', 1, '2023-08-17 09:28:29'),
(19, 'fname 19', 'lname 19', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example19@xyz.com', '1234567890', 1, '2023-08-17 09:28:37'),
(20, 'fname 20', 'lname 20', '1999-03-15', 'right answer of the mcq', 'md5hashing', 'dp_link', 'cp_link', '1', 'example20@xyz.com', '1234567890', 1, '2023-08-17 09:28:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`),
  ADD KEY `send_user_id` (`send_user_id`),
  ADD KEY `receive_user_id` (`receive_user_id`),
  ADD KEY `reply_of` (`reply_of`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `commenter_id` (`commenter_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `reply_of` (`reply_of`);

--
-- Indexes for table `friend`
--
ALTER TABLE `friend`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `received_id` (`received_id`);

--
-- Indexes for table `friend_request_received`
--
ALTER TABLE `friend_request_received`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `friend_user_id` (`friend_user_id`);

--
-- Indexes for table `friend_request_sent`
--
ALTER TABLE `friend_request_sent`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `friend_user_id` (`friend_user_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `creator_id` (`creator_id`);

--
-- Indexes for table `reacts_chat`
--
ALTER TABLE `reacts_chat`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `chat_id` (`chat_id`);

--
-- Indexes for table `reacts_comment`
--
ALTER TABLE `reacts_comment`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `comment_id` (`comment_id`);

--
-- Indexes for table `reacts_post`
--
ALTER TABLE `reacts_post`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `shared`
--
ALTER TABLE `shared`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `social_links`
--
ALTER TABLE `social_links`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `chat_ibfk_1` FOREIGN KEY (`send_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `chat_ibfk_2` FOREIGN KEY (`receive_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `chat_ibfk_3` FOREIGN KEY (`reply_of`) REFERENCES `chat` (`chat_id`) ON DELETE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`commenter_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`reply_of`) REFERENCES `comment` (`comment_id`) ON DELETE CASCADE;

--
-- Constraints for table `friend`
--
ALTER TABLE `friend`
  ADD CONSTRAINT `friend_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `friend_ibfk_2` FOREIGN KEY (`received_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `friend_request_received`
--
ALTER TABLE `friend_request_received`
  ADD CONSTRAINT `friend_request_received_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `friend_request_received_ibfk_2` FOREIGN KEY (`friend_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `friend_request_sent`
--
ALTER TABLE `friend_request_sent`
  ADD CONSTRAINT `friend_request_sent_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `friend_request_sent_ibfk_2` FOREIGN KEY (`friend_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`creator_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `reacts_chat`
--
ALTER TABLE `reacts_chat`
  ADD CONSTRAINT `reacts_chat_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reacts_chat_ibfk_2` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`chat_id`) ON DELETE CASCADE;

--
-- Constraints for table `reacts_comment`
--
ALTER TABLE `reacts_comment`
  ADD CONSTRAINT `reacts_comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reacts_comment_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`comment_id`) ON DELETE CASCADE;

--
-- Constraints for table `reacts_post`
--
ALTER TABLE `reacts_post`
  ADD CONSTRAINT `reacts_post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reacts_post_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE;

--
-- Constraints for table `shared`
--
ALTER TABLE `shared`
  ADD CONSTRAINT `shared_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shared_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE;

--
-- Constraints for table `social_links`
--
ALTER TABLE `social_links`
  ADD CONSTRAINT `social_links_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

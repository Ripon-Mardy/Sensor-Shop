-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 13, 2024 at 04:15 AM
-- Server version: 8.0.30
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mathmozocms_sensor_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_menus`
--

CREATE TABLE `admin_menus` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_menus`
--

INSERT INTO `admin_menus` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Primary Menu', NULL, NULL),
(2, 'Mobile Primary Menu', '2023-11-23 21:47:47', '2023-11-23 21:47:47'),
(3, 'Footer navigation', '2023-12-07 01:40:44', '2023-12-07 01:40:44'),
(4, 'Explore Menu', '2024-01-09 02:08:25', '2024-01-09 02:08:25');

-- --------------------------------------------------------

--
-- Table structure for table `admin_menu_items`
--

CREATE TABLE `admin_menu_items` (
  `id` bigint UNSIGNED NOT NULL,
  `label` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` bigint UNSIGNED NOT NULL DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  `class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu` bigint UNSIGNED NOT NULL,
  `depth` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_menu_items`
--

INSERT INTO `admin_menu_items` (`id`, `label`, `link`, `parent`, `sort`, `class`, `menu`, `depth`, `created_at`, `updated_at`) VALUES
(1, 'HOME', '/', 0, 0, NULL, 1, 0, NULL, '2024-08-18 11:54:20'),
(2, 'ABOUT', '/about-us', 0, 1, NULL, 1, 0, '2023-11-23 21:38:53', '2024-08-29 03:21:43'),
(7, 'CONTACT', '/contact-us', 0, 2, NULL, 1, 0, '2023-11-23 21:39:46', '2024-08-29 11:40:08'),
(8, 'HOME', '#', 0, 1, NULL, 2, 0, '2023-11-23 21:47:56', '2023-11-23 21:47:56'),
(9, 'Home', '#', 0, 0, NULL, 3, 0, '2023-12-07 01:41:01', '2023-12-07 01:41:04'),
(10, 'About', '#', 0, 1, NULL, 3, 0, '2023-12-07 01:44:01', '2023-12-07 01:44:01'),
(11, 'FAQ', '#', 0, 2, NULL, 3, 0, '2023-12-07 01:45:58', '2023-12-07 01:45:58'),
(12, 'Farhad', '/page/about-us', 0, 3, NULL, 3, 0, '2023-12-22 02:14:43', '2023-12-22 02:15:04'),
(13, '<div class=\"topic\">Donate</div>', '/donate', 0, 0, 'donate', 4, 0, '2024-01-09 02:08:51', '2024-02-11 07:02:34'),
(14, '<div class=\"topic\">Home</div>', '/', 0, 1, 'home', 4, 0, '2024-01-09 02:09:18', '2024-01-09 02:26:14'),
(15, '<div class=\"topic\">About Us</div>', '/page/about-us', 0, 2, 'about', 4, 0, '2024-01-09 02:09:59', '2024-01-09 02:35:13'),
(16, '<div class=\"topic\">News & Article</div>', '/page/news', 0, 3, 'news', 4, 0, '2024-01-09 02:10:09', '2024-01-09 03:02:02'),
(17, '<div class=\"topic\">Gallery</div>', '/page/gallery', 0, 4, 'gallery', 4, 0, '2024-01-09 02:10:13', '2024-01-09 02:50:18'),
(18, '<div class=\"topic\">R & D</div><div class=\"subtopic\">Research & Development</div>', '/page/research-development', 0, 5, 'rnd', 4, 0, '2024-01-09 02:10:17', '2024-01-09 03:00:56'),
(19, '<div class=\"topic\">Astro Shop</div>', '/page/astro-shop', 0, 6, 'shop', 4, 0, '2024-01-09 02:10:21', '2024-01-09 02:51:08'),
(20, '<div class=\"topic\">Astronomy</div><div class=\"subtopic\">Astronomy in mother language</div>', '/page/astronomy', 0, 7, 'astronomy', 4, 0, '2024-01-09 02:10:25', '2024-01-09 02:36:53'),
(21, '<div class=\"topic\">Workshop</div><div class=\"subtopic\">Workshop & Resources</div>', '/page/workshop', 0, 8, 'workshop', 4, 0, '2024-01-09 02:10:31', '2024-01-09 02:52:07'),
(22, '<div class=\"topic\">Contact Us</div>', '/page/contact', 0, 9, 'contact', 4, 0, '2024-01-09 02:14:11', '2024-01-09 02:27:21'),
(24, 'SERVICE', '/service', 0, 3, NULL, 1, 0, '2024-08-18 12:16:46', '2024-08-29 03:22:13');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint UNSIGNED NOT NULL,
  `property_id` int NOT NULL,
  `property_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `property_type_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `property_type_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_cat_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `child_cat_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_in` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_out` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_paid_amount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `booking_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `how_many_guest` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alternate_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_notes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `property_information` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `statuses` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `taxonomy_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_status` enum('publish','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'publish',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `image`, `parent_id`, `taxonomy_type`, `is_status`, `created_at`, `updated_at`) VALUES
(1, 'Notice Board', 'notice-board', 'Notice Board', NULL, NULL, 'post_category', 'publish', '2023-12-21 08:55:30', '2023-12-21 08:55:30'),
(2, 'Recent Projects', 'recent-projects', 'Recent Projects', NULL, NULL, 'post_category', 'publish', '2023-12-21 10:21:59', '2023-12-21 10:21:59'),
(3, 'In Media', 'in-media', NULL, NULL, NULL, 'post_category', 'publish', '2023-12-21 11:10:32', '2023-12-21 11:10:32'),
(7, 'Cable Accessories', 'cable-accessories', 'Cable Accessories', '85', NULL, 'categories', 'publish', '2024-08-29 23:55:59', '2024-08-29 23:55:59'),
(10, 'ATX', 'atx', NULL, '82', NULL, 'categories', 'publish', '2024-09-01 12:13:08', '2024-09-01 12:13:08'),
(11, 'product', 'product', NULL, NULL, NULL, 'categories', 'publish', '2024-09-06 02:56:10', '2024-09-06 02:56:10');

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int NOT NULL,
  `division_id` int NOT NULL,
  `name` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `bn_name` varchar(14) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` decimal(10,7) NOT NULL,
  `lon` decimal(10,7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `division_id`, `name`, `bn_name`, `lat`, `lon`) VALUES
(1, 3, 'Dhaka', 'ঢাকা', '23.7115253', '90.4111451'),
(2, 3, 'Faridpur', 'ফরিদপুর', '23.6070822', '89.8429406'),
(3, 3, 'Gazipur', 'গাজীপুর', '24.0022858', '90.4264283'),
(4, 3, 'Gopalganj', 'গোপালগঞ্জ', '23.0050857', '89.8266059'),
(5, 8, 'Jamalpur', 'জামালপুর', '24.9375330', '89.9377750'),
(6, 3, 'Kishoreganj', 'কিশোরগঞ্জ', '24.4449370', '90.7765750'),
(7, 3, 'Madaripur', 'মাদারীপুর', '23.1641020', '90.1896805'),
(8, 3, 'Manikganj', 'মানিকগঞ্জ', '23.8644000', '90.0047000'),
(9, 3, 'Munshiganj', 'মুন্সিগঞ্জ', '23.5422000', '90.5305000'),
(10, 8, 'Mymensingh', 'ময়মনসিংহ', '24.7471000', '90.4203000'),
(11, 3, 'Narayanganj', 'নারায়াণগঞ্জ', '23.6336600', '90.4964820'),
(12, 3, 'Narsingdi', 'নরসিংদী', '23.9322330', '90.7154100'),
(13, 8, 'Netrokona', 'নেত্রকোণা', '24.8709550', '90.7278870'),
(14, 3, 'Rajbari', 'রাজবাড়ি', '23.7574305', '89.6444665'),
(15, 3, 'Shariatpur', 'শরীয়তপুর', '23.2423000', '90.4348000'),
(16, 8, 'Sherpur', 'শেরপুর', '25.0204933', '90.0152966'),
(17, 3, 'Tangail', 'টাঙ্গাইল', '24.2513000', '89.9167000'),
(18, 5, 'Bogura', 'বগুড়া', '24.8465228', '89.3777550'),
(19, 5, 'Joypurhat', 'জয়পুরহাট', '25.0968000', '89.0227000'),
(20, 5, 'Naogaon', 'নওগাঁ', '24.7936000', '88.9318000'),
(21, 5, 'Natore', 'নাটোর', '24.4205560', '89.0002820'),
(22, 5, 'Nawabganj', 'নবাবগঞ্জ', '24.5965034', '88.2775122'),
(23, 5, 'Pabna', 'পাবনা', '23.9985240', '89.2336450'),
(24, 5, 'Rajshahi', 'রাজশাহী', '24.3745000', '88.6042000'),
(25, 5, 'Sirajgonj', 'সিরাজগঞ্জ', '24.4533978', '89.7006815'),
(26, 6, 'Dinajpur', 'দিনাজপুর', '25.6217061', '88.6354504'),
(27, 6, 'Gaibandha', 'গাইবান্ধা', '25.3287510', '89.5280880'),
(28, 6, 'Kurigram', 'কুড়িগ্রাম', '25.8054450', '89.6361740'),
(29, 6, 'Lalmonirhat', 'লালমনিরহাট', '25.9923000', '89.2847000'),
(30, 6, 'Nilphamari', 'নীলফামারী', '25.9317940', '88.8560060'),
(31, 6, 'Panchagarh', 'পঞ্চগড়', '26.3411000', '88.5541606'),
(32, 6, 'Rangpur', 'রংপুর', '25.7558096', '89.2444620'),
(33, 6, 'Thakurgaon', 'ঠাকুরগাঁও', '26.0336945', '88.4616834'),
(34, 1, 'Barguna', 'বরগুনা', '22.0953000', '90.1121000'),
(35, 1, 'Barishal', 'বরিশাল', '22.7010000', '90.3535000'),
(36, 1, 'Bhola', 'ভোলা', '22.6859230', '90.6481790'),
(37, 1, 'Jhalokati', 'ঝালকাঠি', '22.6406000', '90.1987000'),
(38, 1, 'Patuakhali', 'পটুয়াখালী', '22.3596316', '90.3298712'),
(39, 1, 'Pirojpur', 'পিরোজপুর', '22.5841000', '89.9720000'),
(40, 2, 'Bandarban', 'বান্দরবান', '22.1953275', '92.2183773'),
(41, 2, 'Brahmanbaria', 'ব্রাহ্মণবাড়িয়া', '23.9570904', '91.1119286'),
(42, 2, 'Chandpur', 'চাঁদপুর', '23.2332585', '90.6712912'),
(43, 2, 'Chattogram', 'চট্টগ্রাম', '22.3351090', '91.8340730'),
(44, 2, 'Cumilla', 'কুমিল্লা', '23.4682747', '91.1788135'),
(45, 2, 'Cox\'s Bazar', 'কক্স বাজার', '21.4272000', '92.0058000'),
(46, 2, 'Feni', 'ফেনী', '23.0159000', '91.3976000'),
(47, 2, 'Khagrachari', 'খাগড়াছড়ি', '23.1192850', '91.9846630'),
(48, 2, 'Lakshmipur', 'লক্ষ্মীপুর', '22.9424770', '90.8411840'),
(49, 2, 'Noakhali', 'নোয়াখালী', '22.8695630', '91.0993980'),
(50, 2, 'Rangamati', 'রাঙ্গামাটি', '22.7324000', '92.2985000'),
(51, 7, 'Habiganj', 'হবিগঞ্জ', '24.3749450', '91.4155300'),
(52, 7, 'Maulvibazar', 'মৌলভীবাজার', '24.4829340', '91.7774170'),
(53, 7, 'Sunamganj', 'সুনামগঞ্জ', '25.0658042', '91.3950115'),
(54, 7, 'Sylhet', 'সিলেট', '24.8897956', '91.8697894'),
(55, 4, 'Bagerhat', 'বাগেরহাট', '22.6515680', '89.7859380'),
(56, 4, 'Chuadanga', 'চুয়াডাঙ্গা', '23.6401961', '88.8418410'),
(57, 4, 'Jashore', 'যশোর', '23.1664300', '89.2081126'),
(58, 4, 'Jhenaidah', 'ঝিনাইদহ', '23.5448176', '89.1539213'),
(59, 4, 'Khulna', 'খুলনা', '22.8157740', '89.5686790'),
(60, 4, 'Kushtia', 'কুষ্টিয়া', '23.9012580', '89.1204820'),
(61, 4, 'Magura', 'মাগুরা', '23.4873370', '89.4199560'),
(62, 4, 'Meherpur', 'মেহেরপুর', '23.7622130', '88.6318210'),
(63, 4, 'Narail', 'নড়াইল', '23.1725340', '89.5126720'),
(64, 4, 'Satkhira', 'সাতক্ষীরা', '22.7185000', '89.0705000');

-- --------------------------------------------------------

--
-- Table structure for table `divisions`
--

CREATE TABLE `divisions` (
  `id` int NOT NULL,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `bn_name` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` decimal(9,6) NOT NULL,
  `lon` decimal(9,6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `divisions`
--

INSERT INTO `divisions` (`id`, `name`, `bn_name`, `lat`, `lon`) VALUES
(1, 'Barishal', 'বরিশাল', '22.701002', '90.353451'),
(2, 'Chattogram', 'চট্টগ্রাম', '22.356851', '91.783182'),
(3, 'Dhaka', 'ঢাকা', '23.810332', '90.412518'),
(4, 'Khulna', 'খুলনা', '22.845641', '89.540328'),
(5, 'Rajshahi', 'রাজশাহী', '24.363589', '88.624135'),
(6, 'Rangpur', 'রংপুর', '25.743892', '89.275227'),
(7, 'Sylhet', 'সিলেট', '24.894929', '91.868706'),
(8, 'Mymensingh', 'ময়মনসিংহ', '24.747149', '90.420273');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `id` bigint UNSIGNED NOT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `frontend_settings`
--

CREATE TABLE `frontend_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_type` enum('Text','Textarea','Select','Richeditor','Number','Checkbox','Gallery','Media') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_group` enum('General','Homepage','Header Section','Footer Section') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_order` int DEFAULT NULL,
  `meta_placeholder` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `frontend_settings`
--

INSERT INTO `frontend_settings` (`id`, `meta_title`, `meta_name`, `meta_value`, `meta_type`, `meta_group`, `meta_order`, `meta_placeholder`, `meta_description`, `created_at`, `updated_at`) VALUES
(1, 'Website Name', 'site_name', 'Telescope Bangladesh', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:28', '2023-12-21 08:51:18'),
(2, 'About website', 'site_description', 'Telescope Bangladesh', 'Textarea', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-12-21 08:51:18'),
(3, 'Favicon', 'site_faviconimg_id', NULL, 'Media', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-22 05:41:20'),
(4, 'Logo', 'site_logoimg_id', '64', 'Media', 'Header Section', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-12-21 08:27:24'),
(5, 'Footer Content', 'footer_content', 'Plot # Cha-2, Flat # 2nd Floor, Girza Road, Dhaka 1212', 'Richeditor', 'Footer Section', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-12-10 00:19:28'),
(6, 'Facebook', 'facebook_url', 'https://www.facebook.com/', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-24 00:32:54'),
(9, 'Youtube', 'youtube_url', NULL, 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2021-12-28 15:06:33'),
(10, 'Phone', 'company_phone', '16227', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-03-18 03:05:04'),
(11, 'Email', 'company_email', 'info@mail.com', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-03-18 03:05:04'),
(14, 'Header Menu Name', 'header_menu_name', 'Explore Menu', 'Text', 'Header Section', NULL, NULL, NULL, NULL, '2024-01-09 02:15:43'),
(17, 'Office location', 'office_location', 'Dhaka', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-03-18 03:24:36'),
(22, 'Home Vision Donate', 'home_vision_donate', '<h5>DONATION FOR OBSERVETORY & GROUP DEVELOPMENT</h5>\r\n<div class=\"info-sub mb-5\">By purchasing you help us develop new features!</div>', 'Textarea', 'Homepage', 2, NULL, '', '2021-12-27 17:33:29', '2023-12-21 11:42:34'),
(23, 'Home Vision Donate Link', 'home_vision_donate_link', 'http://localhost/farhad/astro/donate', 'Text', 'Homepage', 2, NULL, '', '2021-12-27 17:33:29', '2023-12-21 11:44:13'),
(29, 'Mobile Menu Name', 'mobile_menu_name', 'Mobile Primary Menu', 'Text', 'Header Section', NULL, NULL, NULL, NULL, '2021-12-28 15:22:50'),
(30, 'Bottom Footer Content', 'bottom_footer_content', 'Copyright © All rights reserved by&nbsp;Telescope Bangladesh', 'Richeditor', 'Footer Section', NULL, NULL, NULL, '2021-12-27 17:33:29', '2024-01-09 03:25:24'),
(35, 'Instagram', 'instagram_url', 'https://www.instagram.com/', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-24 00:32:54'),
(36, 'Twitter', 'twitter_url', 'https://twitter.com/', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-24 00:32:54'),
(37, 'LinkedIn', 'linkedin_url', 'https://www.linkedin.com/', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-24 00:44:23'),
(38, 'Vision Speech', 'vision_speech', '<p>\r\n                With more context, I can craft a compelling speech that captures the essence of Telescope Bangladesh and\r\n                its vision for the future of astronomy in Bangladesh\r\n            </p>\r\n            <p>We hope you will have as much fun exploring the universe with our app as do we while making it :)</p>', 'Textarea', 'Homepage', 1, NULL, '', '2021-12-27 17:33:29', '2023-12-21 11:47:13'),
(39, 'Partners', 'partners', '72,73,74,75,72,73,74,75', 'Text', 'Homepage', 1, NULL, '', '2021-12-27 17:33:29', '2023-12-21 11:01:57'),
(40, 'Vision Speech Section Title', 'vision_speech_section_title', '<h3>Our Vision :: Telescope Bangladesh</h3>', 'Text', 'Homepage', 1, NULL, '', '2021-12-27 17:33:29', '2023-08-22 05:47:08'),
(41, 'Footer Logo', 'footer_logo', '77', 'Media', 'Footer Section', NULL, NULL, NULL, '2021-12-27 17:33:29', '2024-01-09 03:26:00');

-- --------------------------------------------------------

--
-- Table structure for table `medias`
--

CREATE TABLE `medias` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `original_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_size` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_extension` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_directory` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medias`
--

INSERT INTO `medias` (`id`, `user_id`, `original_name`, `filename`, `file_type`, `file_size`, `file_extension`, `file_directory`, `created_at`, `updated_at`) VALUES
(64, 1, 'header_logo.png', 'headerlogo-1703168834.png', 'image/png', '16951', 'png', '/public/uploads/images/', '2023-12-21 08:27:14', '2023-12-21 08:27:14'),
(65, 1, '1.jpg', '1-1703168937.jpg', 'image/jpeg', '382762', 'jpg', '/public/uploads/images/', '2023-12-21 08:28:57', '2023-12-21 08:28:57'),
(66, 1, '2.jpg', '2-1703168937.jpg', 'image/jpeg', '264489', 'jpg', '/public/uploads/images/', '2023-12-21 08:28:57', '2023-12-21 08:28:57'),
(67, 1, '3.jpg', '3-1703168937.jpg', 'image/jpeg', '261744', 'jpg', '/public/uploads/images/', '2023-12-21 08:28:57', '2023-12-21 08:28:57'),
(68, 1, 'background_model.jpg', 'backgroundmodel-1703170647.jpg', 'image/jpeg', '169367', 'jpg', '/public/uploads/images/', '2023-12-21 08:57:27', '2023-12-21 08:57:27'),
(69, 1, 'sss3_screenshot_01_s.jpg', 'sss3screenshot01s-1703170697.jpg', 'image/jpeg', '81836', 'jpg', '/public/uploads/images/', '2023-12-21 08:58:17', '2023-12-21 08:58:17'),
(70, 1, '84356.jpg', '84356-1703175787.jpg', 'image/jpeg', '591503', 'jpg', '/public/uploads/images/', '2023-12-21 10:23:07', '2023-12-21 10:23:07'),
(71, 1, '538180.jpg', '538180-1703175825.jpg', 'image/jpeg', '153234', 'jpg', '/public/uploads/images/', '2023-12-21 10:23:45', '2023-12-21 10:23:45'),
(72, 1, 'partner_1.png', 'partner1-1703177231.png', 'image/png', '2101', 'png', '/public/uploads/images/', '2023-12-21 10:47:11', '2023-12-21 10:47:11'),
(73, 1, 'partner_2.png', 'partner2-1703177231.png', 'image/png', '2107', 'png', '/public/uploads/images/', '2023-12-21 10:47:11', '2023-12-21 10:47:11'),
(74, 1, 'partner_3.png', 'partner3-1703177231.png', 'image/png', '2167', 'png', '/public/uploads/images/', '2023-12-21 10:47:11', '2023-12-21 10:47:11'),
(75, 1, 'partner_4.png', 'partner4-1703177231.png', 'image/png', '2184', 'png', '/public/uploads/images/', '2023-12-21 10:47:11', '2023-12-21 10:47:11'),
(76, 1, 'in_media.jpg', 'inmedia-1703178946.jpg', 'image/jpeg', '13079', 'jpg', '/public/uploads/images/', '2023-12-21 11:15:46', '2023-12-21 11:15:46'),
(77, 1, 'footer_logo.png', 'footerlogo-1704792349.png', 'image/png', '225891', 'png', '/public/uploads/images/', '2024-01-09 03:25:49', '2024-01-09 03:25:49'),
(78, 1, 'brand1.webp', 'brand1-1723826241.webp', 'image/webp', '3924', 'webp', '/public/uploads/images/', '2024-08-16 10:37:21', '2024-08-16 10:37:21'),
(79, 1, 'banner1.png', 'banner1-1723829367.png', 'image/png', '701007', 'png', '/public/uploads/images/', '2024-08-16 11:29:27', '2024-08-16 11:29:27'),
(80, 1, 'banner2.jpg', 'banner2-1723829375.jpg', 'image/jpeg', '96212', 'jpg', '/public/uploads/images/', '2024-08-16 11:29:35', '2024-08-16 11:29:35'),
(81, 1, 'banner3.jpg', 'banner3-1723829380.jpg', 'image/jpeg', '52542', 'jpg', '/public/uploads/images/', '2024-08-16 11:29:40', '2024-08-16 11:29:40'),
(82, 1, 'f1.webp', 'f1-1723835598.webp', 'image/webp', '7738', 'webp', '/public/uploads/images/', '2024-08-16 13:13:18', '2024-08-16 13:13:18'),
(83, 1, 'service1.webp', 'service1-1723915505.webp', 'image/webp', '7920', 'webp', '/public/uploads/images/', '2024-08-17 11:25:05', '2024-08-17 11:25:05'),
(84, 1, 'industri1.webp', 'industri1-1723915986.webp', 'image/webp', '5746', 'webp', '/public/uploads/images/', '2024-08-17 11:33:06', '2024-08-17 11:33:06'),
(85, 1, 'f2.webp', 'f2-1723964030.webp', 'image/webp', '2504', 'webp', '/public/uploads/images/', '2024-08-18 00:53:50', '2024-08-18 00:53:50'),
(86, 1, '1.png', '1-1724052450.png', 'image/png', '39243', 'png', '/public/uploads/images/', '2024-08-19 01:27:30', '2024-08-19 01:27:30'),
(87, 1, '1736.jpg', '1736-1725250187.jpg', 'image/jpeg', '28037', 'jpg', '/public/uploads/images/', '2024-09-01 22:09:47', '2024-09-01 22:09:47');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2017_08_11_073824_create_menus_wp_table', 1),
(4, '2017_08_11_074006_create_menu_items_wp_table', 1),
(5, '2021_01_30_151530_create_medias_table', 1),
(6, '2021_02_08_225954_create_terms_table', 1),
(7, '2021_02_08_230957_create_posts_table', 1),
(8, '2021_02_09_195757_create_term_taxonomy_table', 1),
(9, '2021_02_09_203137_create_categories_table', 1),
(10, '2021_02_10_101053_create_frontend_settings', 1),
(11, '2021_07_14_054017_create_roles_table', 1),
(12, '2021_07_14_054544_create_role_users_table', 1),
(13, '2021_07_14_061139_create_route_groups_table', 1),
(14, '2021_07_14_061140_create_route_lists_table', 1),
(15, '2021_07_14_061655_create_route_list_roles_table', 1),
(18, '2021_12_24_235004_create_posts_field_table', 2),
(19, '2021_12_24_235502_create_posts_meta_table', 2),
(20, '2022_01_07_020302_create_post_custom_fields_table', 3),
(21, '2021_01_30_145239_create_product_categories_table', 4),
(22, '2021_01_30_150031_create_products_table', 4),
(23, '2021_02_17_222859_create_product_attributes_table', 4),
(24, '2021_02_17_223045_create_product_attribute_values_table', 4),
(25, '2023_12_09_180527_create_bookings_table', 5),
(26, '2024_02_12_183728_create_donations_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `featured_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `term_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'page',
  `category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keyword` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `template` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `is_status` enum('publish','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'publish',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `name`, `sub_title`, `order_by`, `slug`, `description`, `featured_image`, `term_type`, `category_id`, `meta_title`, `meta_description`, `meta_keyword`, `meta_author`, `template`, `is_status`, `author`, `created_at`, `updated_at`) VALUES
(4, 'The Ursid meteor shower peaks tonight (December 22nd)', NULL, NULL, 'the-ursid-meteor-shower-peaks-tonight-december-22nd-', 'The Ursid meteor shower peaks tonight (December 22nd)! Look for fast, bright streaks across the sky near the constellation Ursa Minor.', '68', 'post', '1', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 08:57:39', '2023-12-21 08:57:39'),
(5, 'The James Webb Space Telescope recently', NULL, NULL, 'the-james-webb-space-telescope-recently', 'The James Webb Space Telescope recently captured stunning images of the Cartwheel Galaxy, revealing its intricate structure in unprecedented detail.', '69', 'post', '1', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 08:58:24', '2023-12-21 08:58:24'),
(6, 'Bangladeshi Taka', NULL, NULL, 'bangladeshi-taka', 'Bangladeshi Taka', '66', 'post', '1', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 09:23:52', '2023-12-21 09:23:52'),
(7, 'Project 1', NULL, NULL, 'project-1', 'Project 1', '70', 'post', '2', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 10:23:21', '2023-12-21 10:23:21'),
(8, 'Project 2', NULL, NULL, 'project-2', 'Project 2', '71', 'post', '2', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 10:23:51', '2023-12-21 10:23:57'),
(9, 'Project 3', NULL, NULL, 'project-3', 'Project 3', '70', 'post', '2', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 10:24:37', '2023-12-21 10:24:37'),
(10, 'Project 4', NULL, NULL, 'project-4', 'Project 4', '68', 'post', '2', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 10:29:04', '2023-12-21 10:29:04'),
(11, 'Prothom Alo News', NULL, NULL, 'prothom-alo-news', 'Prothom Alo News', '76', 'post', '3', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 11:16:05', '2023-12-21 11:16:05'),
(12, 'Daily Kaler Kantho', NULL, NULL, 'daily-kaler-kantho', 'Daily Kaler Kantho', '76', 'post', '3', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 11:16:58', '2023-12-21 11:16:58'),
(13, 'Daily Ittefaq', NULL, NULL, 'daily-ittefaq', 'Daily Ittefaq', '76', 'post', '3', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-21 11:17:31', '2023-12-21 11:17:34'),
(14, 'About Us', NULL, NULL, 'about-us', '<div class=\"tab\">\r\n  <button class=\"tablinks\" onclick=\"openCity(event, \'London\')\">London</button>\r\n  <button class=\"tablinks\" onclick=\"openCity(event, \'Paris\')\">Paris</button>\r\n  <button class=\"tablinks\" onclick=\"openCity(event, \'Tokyo\')\">Tokyo</button>\r\n</div>\r\n\r\n<div id=\"London\" class=\"tabcontent\">\r\n  <h3>London</h3>\r\n  <p>London is the capital city of England.</p>\r\n</div>\r\n\r\n<div id=\"Paris\" class=\"tabcontent\">\r\n  <h3>Paris</h3>\r\n  <p>Paris is the capital of France.</p>\r\n</div>\r\n\r\n<div id=\"Tokyo\" class=\"tabcontent\">\r\n  <h3>Tokyo</h3>\r\n  <p>Tokyo is the capital of Japan.</p>\r\n</div>', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-common', 'publish', '1', '2023-12-21 11:52:24', '2024-02-11 07:29:32'),
(15, 'Donate', NULL, NULL, 'donate', '<div style=\"width:1230px;max-width:100%;margin:auto;\">    \r\n		<div class=\"row\">      \r\n			<div class=\"col-lg-6 text-center mb-4 pb-3\">        \r\n				<div class=\"donate-bg-property d-flex flex-column align-items-start justify-content-center\"> <span class=\"i_icon_support\"><img src=\"/images/icon/support_icon.png\"></span>          \r\n					<div class=\"donate_icon_text text-left\">            \r\n						<h4>RASC</h4>            \r\n						<p>Support the Society’s charitable programs</p>            \r\n						<div class=\"donate_now_btn\"> <a href=\"/donations/donate\">Donate now</a> </div>          </div>        </div>      </div>      \r\n			<div class=\"col-lg-6 text-center mb-4 pb-3\">        \r\n				<div class=\"donate-bg-property d-flex flex-column align-items-start justify-content-center\"> <span class=\"i_icon_support\"><img src=\"/images/icon/telescope_icon.png\"></span>          \r\n					<div class=\"donate_icon_text text-left\">            \r\n						<h4>Dorner Telescope Museum</h4>            \r\n						<p>Help build Canada\'s telescope museum with your gift.</p>            \r\n						<div class=\"donate_now_btn\"> <a href=\"/donations/dorner-telescope-museum\">Donate now</a> </div>          </div>        </div>      </div>    </div>    \r\n		<div class=\"row\">      \r\n			<div class=\"col-lg-6 text-center mb-4 pb-3\">        \r\n				<div class=\"donate-bg-property d-flex flex-column align-items-start justify-content-center\"> <span class=\"i_icon_support\"><img src=\"/images/icon/sky_icon.png\"></span>          \r\n					<div class=\"donate_icon_text text-left\">            \r\n						<h4>Light Pollution &amp; Dark Sky Preserves </h4>            \r\n						<p>Contribute to Light-Pollution Abatement and Canada\'s Dark Sky programs.</p>            \r\n						<div class=\"donate_now_btn\"> <a href=\"/donations/light-pollution\">Donate now</a> </div>          </div>        </div>      </div>      \r\n			<div class=\"col-lg-6 text-center mb-4 pb-3\">        \r\n				<div class=\"donate-bg-property d-flex flex-column align-items-start justify-content-center\"> <span class=\"i_icon_support\"><img src=\"/images/icon/robotic_icon.png\"></span>          \r\n					<div class=\"donate_icon_text text-left\">            \r\n						<h4>Robotic Telescope  Project</h4>            \r\n						<p>Provide students with remote access to the deep-sky</p>            \r\n						<div class=\"donate_now_btn\">This program has ended.</div>          </div>        </div>      </div>    </div>\r\n		<div class=\"row\">      \r\n			<div class=\"col-lg-6 text-center mb-5\">        \r\n				<div class=\"donate-bg-property d-flex flex-column align-items-start justify-content-center\"> <span class=\"i_icon_support\"><img src=\"/images/icon/education_icon.png\"></span>          \r\n					<div class=\"donate_icon_text text-left\">            \r\n						<h4>Education</h4>            \r\n						<p>Make a donation to the Ruth Northcott Education Fund</p>            \r\n						<div class=\"donate_now_btn\"> <a href=\"/donations/education\">Donate now</a> </div>          </div>        </div>      </div>      \r\n			<div class=\"col-lg-6 text-center mb-4 pb-3\">        \r\n				<div class=\"donate-bg-property d-flex flex-column align-items-start justify-content-center\"> <span class=\"i_icon_support\"><img src=\"/images/icon/legacy_icon.png\"></span>          \r\n					<div class=\"donate_icon_text text-left\">            \r\n						<h4>Legacy</h4>            \r\n						<p>Arrange your future gift in support of astronomy</p>            \r\n						<div class=\"donate_now_btn\"> <a href=\"/donations/legacy-fund\">Donate now</a> </div>          </div>        </div>      </div>    </div>    \r\n      		<div class=\"d-flex justify-content-end\">          <small style=\" color: #fff;text-align: right;padding-bottom: 20px;font-size:100%;\">©2021 The Royal Canadian Astronomical Society of Canada</small>        </div>     \r\n      \r\n		<div class=\"donate-info-text text-white text-center pb-0 pb-md-4\" style=\"font-size:1.3rem;\">      \r\n			<!--\r\n			div class=\"text-center mt-3 mt-md-5 pt-4 pt-md-5 mb-4 mb-md-5\"><img src=\"/images/icon/donate_info.png\" /></div\r\n			-->\r\n			Thank you for supporting the charitable activities of The Royal Astronomical Society of Canada.  RASC’s charitable registration number is 119126282 RR0001. If you have questions or would like more information, please contact Jenna Hinds at 416-924-7973 ext 119, or by email at <span style=\"color: rgb(255, 255, 255);\"><a href=\"mailto:jenna.hinds@rasc.ca\" class=\"\">jenna.hinds@rasc.ca</a>.</span></div></div>', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-common', 'publish', '1', '2023-12-22 00:34:07', '2024-01-09 02:05:26'),
(16, 'Farhad ke dekhassi', NULL, NULL, 'farhad-ke-dekhassi', 'Farhad ke dekhassi', '70', 'post', '1', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2023-12-22 02:08:06', '2023-12-22 02:08:06'),
(17, 'Astronomy', NULL, NULL, 'astronomy', 'astronomy in mother language', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-common', 'publish', '1', '2024-01-09 02:36:28', '2024-01-09 02:36:28'),
(18, 'Gallery', NULL, NULL, 'gallery', 'Gallery Description', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-common', 'publish', '1', '2024-01-09 02:50:01', '2024-01-09 02:50:01'),
(19, 'Astro Shop', NULL, NULL, 'astro-shop', 'Astro Shop Description', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-common', 'publish', '1', '2024-01-09 02:50:59', '2024-01-09 02:50:59'),
(20, 'Workshop', NULL, NULL, 'workshop', 'Workshop details', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-common', 'publish', '1', '2024-01-09 02:51:57', '2024-01-09 02:51:57'),
(21, 'Contact', NULL, NULL, 'contact', '<div class=\"row\">\r\n<div class=\"col-md-6 address text-left\">\r\n<p></p><h1><strong>Telescope Bangladesh</strong></h1><p></p>\r\n<p>Holding #447, Janata Bank Road, <br>Kodalia New Bus Terminal, Tangail 1900</p>\r\n<p>Hours: <br>Open 9 AM <br> Closes 6 PM</p>\r\n<p><br></p>\r\n<p>Phone: 01821660066</p>\r\n</div>\r\n<div class=\"col-md-6 map\">\r\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.272499717471!2d89.92423927601911!3d24.267210878321222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf9658f57f3bb%3A0x586c81b1de760b9f!2sMathmozo%20IT!5e0!3m2!1sen!2sbd!4v1704790599715!5m2!1sen!2sbd\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n</div>\r\n</div>', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-without-header', 'publish', '1', '2024-01-09 02:52:34', '2024-01-09 02:59:30'),
(22, 'Research & Development', NULL, NULL, 'research-development', 'Research &amp; Development Details', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-common', 'publish', '1', '2024-01-09 03:00:23', '2024-01-09 03:00:23'),
(23, 'News', NULL, NULL, 'news', 'News Description', NULL, 'page', '', NULL, NULL, NULL, NULL, 'single-page-common', 'publish', '1', '2024-01-09 03:01:44', '2024-01-09 03:01:44'),
(25, 'Brands', NULL, NULL, 'brands', NULL, '78', 'brands', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 10:39:40', '2024-08-16 10:39:40'),
(26, 'Brands', NULL, NULL, 'brands-2', NULL, '78', 'brands', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 10:40:31', '2024-08-16 10:40:31'),
(27, 'sensor slider', NULL, NULL, 'sensor-slider', NULL, '69', 'slider', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 11:29:57', '2024-08-29 01:48:25'),
(28, 'sensor slider', NULL, NULL, 'sensor-slider-2', NULL, '80', 'slider', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 11:30:24', '2024-08-16 11:30:24'),
(29, 'sensor slider', NULL, NULL, 'sensor-slider-3', NULL, '79', 'slider', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 11:30:40', '2024-08-16 11:30:40'),
(30, 'sensor slider', NULL, NULL, 'sensor-slider-4', NULL, '81', 'sensor_slider', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 11:40:23', '2024-08-16 11:40:23'),
(31, 'sensor slider', NULL, NULL, 'sensor-slider-5', NULL, '80', 'sensor_slider', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 13:00:46', '2024-08-16 13:00:46'),
(32, 'sensor slider', NULL, NULL, 'sensor-slider-6', NULL, '79', 'sensor_slider', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 13:03:46', '2024-08-16 13:03:46'),
(33, 'PIR Sensor/MOTION Sensor WIth alarm', NULL, NULL, '৳ 1220.00', NULL, '82', 'featured_products', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 13:13:27', '2024-08-16 13:13:27'),
(34, 'PIR Sensor/MOTION Sensor WIth alarm', NULL, NULL, '৳ 1220.00-2', NULL, '82', 'sensor_featured_products', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 13:16:33', '2024-08-16 13:16:33'),
(35, 'PIR Sensor/MOTION Sensor WIth alarm', NULL, NULL, '৳ 1220.00-2-2', NULL, '82', 'sensor_featured_products', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 13:44:34', '2024-08-16 13:44:34'),
(36, 'proud client', NULL, NULL, 'proud-client', NULL, '78', 'sensor_pround_client', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:14:28', '2024-08-17 11:14:28'),
(37, 'proud client', NULL, NULL, 'proud-client-2', NULL, '78', 'sensor_pround_client', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:14:58', '2024-08-17 11:14:58'),
(38, 'live panel cleanning', NULL, NULL, 'live-panel-cleanning', NULL, '83', 'sensor_services', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:25:11', '2024-08-17 11:25:11'),
(39, 'live panel cleanning', NULL, NULL, 'live-panel-cleanning-2', NULL, '84', 'sensor_industries_', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:33:15', '2024-08-17 11:33:15'),
(40, 'Techsense', NULL, NULL, 'techsense-', NULL, '84', 'sensor_techsense', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:50:22', '2024-08-17 11:50:22'),
(41, 'techsense', NULL, NULL, 'techsense-2', NULL, '84', 'sensor_techsense', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:57:50', '2024-08-17 11:57:50'),
(42, 'techsense', NULL, NULL, 'techsense-3', NULL, '84', 'sensor_techsense', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:58:09', '2024-08-17 11:58:09'),
(45, 'PIR Sensor/MOTION Sensor WIth alarm', NULL, '0', '৳ 1220.00-2-3', '<p>Hello this is product details</p>', '85', 'product_details', '', '3RH2911-1FA40 Siemens', 'New Factory Sealed', 'United Arab Emirates', '1 Year Against the Manufacturer Defect', NULL, 'publish', '1', '2024-08-18 00:53:59', '2024-08-18 00:57:46'),
(46, 'product', NULL, NULL, 'product', 'sefsegfsegsefg', '82', 'product_details', '', 'Hello 1', 'hello 2', 'hello 3', 'hello 4', NULL, 'publish', '1', '2024-08-18 00:59:03', '2024-08-18 00:59:03'),
(47, 'PIR Sensor/MOTION Sensor WIth alarm', NULL, NULL, '৳ 1220.00-2-4', '1 Year Against the Manufacturer Defect', '82', 'productdetails', '', '3RH2911-1FA40 Siemens', 'New Factory Sealed', 'Weight: 0.20 kg', 'United Arab Emirates', NULL, 'publish', '1', '2024-08-18 01:14:44', '2024-08-18 01:14:44'),
(48, 'product details', NULL, NULL, 'product-details', NULL, '79', 'productdetails', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-18 10:03:23', '2024-08-18 10:03:42'),
(50, 'Brands', NULL, NULL, 'brands-3', NULL, '78', 'brands', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-18 21:58:26', '2024-08-18 21:58:26'),
(53, 'clients', NULL, NULL, 'clients', NULL, '86', 'clients', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-19 01:27:42', '2024-08-19 01:27:42'),
(55, 'live panel cleanning', NULL, NULL, 'live-panel-cleanning-4', NULL, '83', 'services', '', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', NULL, NULL, NULL, 'publish', '1', '2024-08-19 03:02:30', '2024-08-31 11:23:07'),
(56, 'live panel cleanning', NULL, NULL, 'live-panel-cleanning-5', NULL, '84', 'industries', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-19 03:15:38', '2024-08-19 03:15:38'),
(57, 'live panel cleanning', NULL, NULL, 'live-panel-cleanning-6', NULL, '84', 'industries', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-19 03:20:07', '2024-08-19 03:20:07'),
(58, 'techsense', NULL, NULL, 'techsense-4', NULL, '84', 'techsense', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-19 03:25:59', '2024-08-19 03:25:59'),
(59, 'techsense', NULL, NULL, 'techsense-5', NULL, '84', 'techsense', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-19 03:26:19', '2024-08-19 03:26:19'),
(60, 'techsense', NULL, NULL, 'techsense-6', NULL, '84', 'techsense', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-19 03:26:39', '2024-08-19 03:26:39'),
(61, 'adhesives & Sealants', NULL, NULL, '/', NULL, NULL, 'categories', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-19 04:15:31', '2024-08-19 04:15:31'),
(62, 'ATEX', NULL, NULL, '/-5', NULL, NULL, 'categories', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-20 01:38:20', '2024-08-20 04:34:28'),
(63, 'Automation & Control Components', NULL, NULL, '/-4', NULL, NULL, 'categories', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-20 01:39:38', '2024-08-20 01:40:09'),
(64, 'Batteries', NULL, NULL, '/-4', NULL, NULL, 'categories', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-20 01:40:45', '2024-08-20 01:40:45'),
(65, 'Cable Accessories', NULL, NULL, '/cable-accessories', NULL, NULL, 'categories', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-20 04:44:26', '2024-08-20 04:44:26'),
(66, 'live panel cleanning', NULL, NULL, 'live-panel-cleanning-7', NULL, '82', 'products', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-20 11:09:39', '2024-08-20 11:09:39'),
(67, 'PIR Sensor/MOTION Sensor WIth alarm', NULL, NULL, 'pir-sensor-motion-sensor-with-alarm', NULL, '85', 'products', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-21 22:37:45', '2024-08-21 22:37:45'),
(68, 'Brands', NULL, NULL, 'brands-4', NULL, '86', 'brands', '', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-29 01:47:42', '2024-08-29 01:47:42'),
(69, 'sensor', NULL, NULL, 'pir-sensor-motion-sensor-with-alarm-2', NULL, '82', 'product', '10', '9700101', 'All over in Bangladesh', 'United Arab Emirates', '1 Year Against the Manufacturer Defect', NULL, 'publish', '1', '2024-09-01 10:03:33', '2024-09-04 11:23:45'),
(70, 'product', NULL, NULL, 'pir-sensor-motion-sensor-with-alarm-3', NULL, '85', 'product', '7', 'product', 'product', 'product', 'product', NULL, 'publish', '1', '2024-09-01 12:12:19', '2024-09-02 05:00:28'),
(73, 'test method 1', NULL, NULL, 'test-method-1', NULL, '87', 'product', '7', 'hello', 'hello', 'hello', 'hello', NULL, 'publish', '1', '2024-09-06 23:10:21', '2024-09-06 23:10:21'),
(74, 'Brands', NULL, NULL, 'brands-5', NULL, '83', 'product', '11', 'brand', 'hellp', 'brands', 'brandes', NULL, 'publish', '1', '2024-09-09 03:37:53', '2024-09-09 03:42:07');

-- --------------------------------------------------------

--
-- Table structure for table `posts_field`
--

CREATE TABLE `posts_field` (
  `id` bigint UNSIGNED NOT NULL,
  `sorting` int DEFAULT NULL,
  `term_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `term_taxonomy_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `field_type` enum('text','textarea','richtext','select','single_image','multiple_image','checkbox','radio','colorpicker','addmore','daterangepicker') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `field_type_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT 'Title:field_type#value1,value2|',
  `field_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `field_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `field_value` varbinary(255) DEFAULT NULL,
  `join_table` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `join_column` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `html_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `html_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `field_for` enum('Post','Category') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts_field`
--

INSERT INTO `posts_field` (`id`, `sorting`, `term_type`, `term_taxonomy_type`, `field_type`, `field_type_value`, `field_title`, `field_name`, `field_value`, `join_table`, `join_column`, `html_id`, `html_class`, `note`, `field_for`, `created_at`, `updated_at`) VALUES
(1, NULL, 'post', NULL, 'text', NULL, 'Custom URL', 'custom_url', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, 'product', 'post_category', 'multiple_image', NULL, 'Price', 'price', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-09-03 02:32:37'),
(3, NULL, 'product', NULL, 'textarea', NULL, 'Product Short Description', 'product_short_description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, 'page', NULL, 'textarea', NULL, 'Page Short Description', 'page_short_description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, NULL, 'page', NULL, 'text', NULL, 'Page Sub Title', 'page_sub_title', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, NULL, 'slider', NULL, 'textarea', NULL, 'Slider Short Description', 'slider_short_description', NULL, NULL, NULL, NULL, NULL, NULL, 'Post', NULL, NULL),
(10, NULL, 'products', 'post_category', 'multiple_image', NULL, 'second_image', 'second_image', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-20 11:05:23', '2024-08-20 11:05:23');

-- --------------------------------------------------------

--
-- Table structure for table `posts_meta`
--

CREATE TABLE `posts_meta` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED DEFAULT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `meta_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts_meta`
--

INSERT INTO `posts_meta` (`id`, `post_id`, `category_id`, `meta_name`, `meta_value`, `created_at`, `updated_at`) VALUES
(1, 11, NULL, 'custom_url', 'https://www.prothomalo.com/world/europe/42azkj0kjf', '2023-12-21 11:16:05', '2023-12-21 11:16:05'),
(2, 12, NULL, 'custom_url', 'https://www.kalerkantho.com/online/world/2023/12/21/1347638', '2023-12-21 11:16:58', '2023-12-21 11:16:58'),
(3, 13, NULL, 'custom_url', 'https://www.ittefaq.com.bd/671144/স্বতন্ত্র-ও-নৌকার-প্রার্থীর-কর্মীদের-আহত-করার', '2023-12-21 11:17:31', '2023-12-21 11:17:31'),
(5, 14, NULL, 'page_short_description', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', '2024-01-09 02:44:36', '2024-01-09 02:44:36'),
(6, 14, NULL, 'page_sub_title', 'Thank you for your generosity!', '2024-01-09 02:48:23', '2024-01-09 02:48:23'),
(7, 18, NULL, 'page_short_description', 'Gallery Short Description', '2024-01-09 02:50:01', '2024-01-09 02:50:01'),
(8, 18, NULL, 'page_sub_title', 'Gallery Sub Title', '2024-01-09 02:50:01', '2024-01-09 02:50:01'),
(9, 19, NULL, 'page_short_description', 'Astro Shop Short Description', '2024-01-09 02:50:59', '2024-01-09 02:50:59'),
(10, 19, NULL, 'page_sub_title', 'Astro Shop Sub Title', '2024-01-09 02:50:59', '2024-01-09 02:50:59'),
(11, 20, NULL, 'page_short_description', 'Workshop short details', '2024-01-09 02:51:57', '2024-01-09 02:51:57'),
(12, 20, NULL, 'page_sub_title', 'Workshop sub title', '2024-01-09 02:51:57', '2024-01-09 02:51:57'),
(13, 21, NULL, 'page_short_description', 'Contact', '2024-01-09 02:52:34', '2024-01-09 02:52:34'),
(14, 21, NULL, 'page_sub_title', 'Contact', '2024-01-09 02:52:34', '2024-01-09 02:52:34'),
(15, 22, NULL, 'page_short_description', 'Research and Development: short Details', '2024-01-09 03:00:23', '2024-01-09 03:00:23'),
(16, 22, NULL, 'page_sub_title', 'Research & Development sub title', '2024-01-09 03:00:23', '2024-01-09 03:00:23'),
(17, 23, NULL, 'page_short_description', 'News Short Description', '2024-01-09 03:01:44', '2024-01-09 03:01:44'),
(18, 23, NULL, 'page_sub_title', 'News Sub Title', '2024-01-09 03:01:44', '2024-01-09 03:01:44'),
(19, 27, NULL, 'slider_short_description', NULL, '2024-08-16 11:29:57', '2024-08-16 11:29:57'),
(20, 28, NULL, 'slider_short_description', NULL, '2024-08-16 11:30:24', '2024-08-16 11:30:24'),
(21, 29, NULL, 'slider_short_description', NULL, '2024-08-16 11:30:40', '2024-08-16 11:30:40'),
(22, 44, NULL, 'insert_image', NULL, '2024-08-18 00:49:30', '2024-08-18 00:49:30'),
(23, 45, NULL, 'insert_image', '83', '2024-08-18 00:53:59', '2024-08-18 00:56:55'),
(24, 46, NULL, 'insert_image', '85', '2024-08-18 00:59:03', '2024-08-18 00:59:03'),
(25, 47, NULL, 'image', '85|84', '2024-08-18 01:14:44', '2024-08-18 10:00:51'),
(26, 47, NULL, 'product images', NULL, '2024-08-18 10:00:51', '2024-08-18 10:00:51'),
(27, 48, NULL, 'image', '85|84|83|82', '2024-08-18 10:03:23', '2024-08-18 10:03:23'),
(28, 48, NULL, 'product images', NULL, '2024-08-18 10:03:23', '2024-08-18 10:03:23'),
(29, 49, NULL, 'second_image', '82', '2024-08-20 11:06:31', '2024-08-20 11:06:31'),
(30, 66, NULL, 'second_image', NULL, '2024-08-20 11:09:39', '2024-08-20 11:09:39'),
(31, 67, NULL, 'second_image', NULL, '2024-08-21 22:37:45', '2024-08-21 22:37:45'),
(32, 69, NULL, 'product_short_description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', '2024-09-01 10:03:33', '2024-09-01 10:03:33'),
(33, 69, NULL, 'price', '87|85', '2024-09-01 10:03:33', '2024-09-03 02:35:40'),
(34, 70, NULL, 'product_short_description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', '2024-09-01 12:12:19', '2024-09-01 12:12:19'),
(35, 70, NULL, 'price', NULL, '2024-09-01 12:12:19', '2024-09-04 11:23:55'),
(36, 71, NULL, 'product_short_description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', '2024-09-01 22:09:56', '2024-09-01 22:09:56'),
(37, 71, NULL, 'price', '3000', '2024-09-01 22:09:56', '2024-09-01 22:14:21'),
(38, 72, NULL, 'product_short_description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', '2024-09-01 22:17:36', '2024-09-01 22:17:36'),
(39, 72, NULL, 'price', '1100', '2024-09-01 22:17:36', '2024-09-01 22:17:36'),
(40, 73, NULL, 'price', NULL, '2024-09-06 23:10:21', '2024-09-06 23:10:21'),
(41, 73, NULL, 'product_short_description', '111', '2024-09-06 23:10:21', '2024-09-06 23:10:21'),
(42, 74, NULL, 'price', '87|85|82', '2024-09-09 03:37:53', '2024-09-09 04:10:14'),
(43, 74, NULL, 'product_short_description', '3434', '2024-09-09 03:37:53', '2024-09-09 03:37:53');

-- --------------------------------------------------------

--
-- Table structure for table `post_custom_fields`
--

CREATE TABLE `post_custom_fields` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED DEFAULT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `field_file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `field_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `field_for` enum('Post','Category') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_custom_fields`
--

INSERT INTO `post_custom_fields` (`id`, `post_id`, `category_id`, `field_file`, `field_value`, `field_for`, `created_at`, `updated_at`) VALUES
(2, 72, NULL, 'field-management', '{\"location\":\"Dhaka\"}', 'Post', '2023-12-07 03:10:47', '2023-12-07 03:20:13');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('Global','General','Custom') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `code`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'super_admin', 'Global', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(2, 'Student', 'student', 'General', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(3, 'Regular', 'regular', 'General', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(4, 'Executive', 'executive', 'General', '2021-12-27 17:33:29', '2021-12-27 17:33:29');

-- --------------------------------------------------------

--
-- Table structure for table `role_users`
--

CREATE TABLE `role_users` (
  `id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_users`
--

INSERT INTO `role_users` (`id`, `role_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(2, 3, 3, '2021-12-29 17:35:59', '2021-12-29 17:35:59'),
(3, 2, 8, '2024-02-12 05:25:59', '2024-02-12 05:25:59'),
(4, 2, 9, '2024-02-12 05:33:50', '2024-02-12 05:33:50');

-- --------------------------------------------------------

--
-- Table structure for table `route_groups`
--

CREATE TABLE `route_groups` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `route_order` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `route_lists`
--

CREATE TABLE `route_lists` (
  `id` bigint UNSIGNED NOT NULL,
  `route_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `route_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `route_parameter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `route_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `route_group` bigint UNSIGNED DEFAULT NULL,
  `route_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `route_order` int DEFAULT NULL,
  `route_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_menu` enum('Yes','No') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_menu_id` int DEFAULT NULL,
  `dashboard_position` set('Left','Right','Top','Bottom') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_for` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_show_as` enum('Yes','No') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `route_list_roles`
--

CREATE TABLE `route_list_roles` (
  `id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL,
  `route_id` bigint UNSIGNED NOT NULL,
  `show_as` enum('All','User','Permission') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `terms`
--

CREATE TABLE `terms` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `default_field` set('title','slug','description','featured-image') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('publish','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `terms`
--

INSERT INTO `terms` (`id`, `name`, `slug`, `icon`, `default_field`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Post', 'post', '', 'title,slug,description,featured-image', 'publish', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(2, 'Page', 'page', '', 'title,slug,description,featured-image', 'publish', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(4, 'Gallery', 'gallery', '', 'title,slug,description,featured-image', 'draft', NULL, NULL),
(13, 'Product', 'product', 'icon', 'title,slug,description,featured-image', 'publish', NULL, '2024-08-29 01:52:52'),
(18, 'Brands', 'brands', 'icon', 'title,slug,description,featured-image', 'publish', '2024-08-16 12:57:36', '2024-08-16 12:57:36'),
(19, 'Slider', 'slider', 'slider', 'title,slug,description,featured-image', 'publish', '2024-08-16 12:59:53', '2024-08-18 21:53:41'),
(21, 'Clients', 'clients', 'clients', 'title,slug,description,featured-image', 'publish', '2024-08-17 11:13:16', '2024-08-18 21:53:05'),
(22, 'Services', 'services', 'services', 'title,slug,description,featured-image', 'publish', '2024-08-17 11:22:26', '2024-08-18 21:52:58'),
(23, 'Industries', 'industries', 'industries', 'title,slug,description,featured-image', 'publish', '2024-08-17 11:32:15', '2024-08-18 21:51:58'),
(24, 'Techsense', 'techsense', 'techsense', 'title,slug,description,featured-image', 'publish', '2024-08-17 11:49:51', '2024-08-18 21:52:48');

-- --------------------------------------------------------

--
-- Table structure for table `term_taxonomy`
--

CREATE TABLE `term_taxonomy` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `term_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('publish','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `term_taxonomy`
--

INSERT INTO `term_taxonomy` (`id`, `name`, `slug`, `type`, `term_type`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Categories', 'post_category', NULL, 'post', 'publish', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(2, 'Categories', 'slider_category', NULL, 'slider', NULL, '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(3, 'Property Type', 'property_type', NULL, 'property_manage', 'publish', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(4, 'Categories', 'categories', NULL, 'product', 'publish', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(5, 'Slider Categories', 'slider_categories', NULL, 'slider', 'publish', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(6, 'Brands', 'brands', NULL, 'Post', 'publish', '2024-08-16 02:20:24', '2024-08-16 02:20:24');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thana` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` enum('Male','Female') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `religion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `highest_qualification` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `major_subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hobbies` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `membertype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `phone`, `avatar`, `address`, `postcode`, `thana`, `district`, `birthdate`, `gender`, `password`, `transaction_id`, `payment_method`, `full_name`, `facebook`, `religion`, `highest_qualification`, `major_subject`, `hobbies`, `membertype`, `member_status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin@system.com', NULL, '00000000000', NULL, 'N/A', 'N/A', 'N/A', '1', '2021-12-08', NULL, '$2y$10$tWhlq1ma.y/f3Ui30qy8cONc5hCG/6GlaSsWxSowMoc7bZdklk0wC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'G0ItUX9rVyrArXugTzvr9bylKmYSErxJUnRVi5IEo8E2OaCueuIVL9htA6Xc', '2021-12-27 17:33:29', '2022-01-07 17:17:59'),
(3, 'nipunnoushad8@gmail.com', NULL, '01823633792', NULL, '74, East Tejturi Bazar, Tejgoan', '1215', 'Dhaka', NULL, '2022-01-01', NULL, '$2y$10$9zer8D8yLLB0oc3rVJ/VYOkIBKESpSclt613s5IlXe.8cPpz452MW', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-29 17:35:59', '2021-12-31 16:21:34'),
(9, 'benjir.soft701@gmail.com', NULL, '01774211701', NULL, NULL, NULL, NULL, 'Dhaka', '2014-02-12', 'Male', '$2y$10$gvMG2nYSsJN.ZfgQXfbIwOIb3t5E99ciYO8cUub5iMvLLSV/Jxtnm', '353erthg43', 'bKash', 'Benjir ahmed', 'benjir01', 'Islam', 'PHP', 'Laravel', 'Travel', 'Student', 'Active', NULL, '2024-02-12 05:33:50', '2024-02-12 05:33:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_menus`
--
ALTER TABLE `admin_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_menu_items`
--
ALTER TABLE `admin_menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_menu_items_menu_foreign` (`menu`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `divisions`
--
ALTER TABLE `divisions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `frontend_settings`
--
ALTER TABLE `frontend_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medias`
--
ALTER TABLE `medias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts_field`
--
ALTER TABLE `posts_field`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts_meta`
--
ALTER TABLE `posts_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_custom_fields`
--
ALTER TABLE `post_custom_fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_users`
--
ALTER TABLE `role_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `route_groups`
--
ALTER TABLE `route_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `route_lists`
--
ALTER TABLE `route_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `route_list_roles`
--
ALTER TABLE `route_list_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `terms`
--
ALTER TABLE `terms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `term_taxonomy`
--
ALTER TABLE `term_taxonomy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_menus`
--
ALTER TABLE `admin_menus`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `admin_menu_items`
--
ALTER TABLE `admin_menu_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `divisions`
--
ALTER TABLE `divisions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `frontend_settings`
--
ALTER TABLE `frontend_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `medias`
--
ALTER TABLE `medias`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `posts_field`
--
ALTER TABLE `posts_field`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `posts_meta`
--
ALTER TABLE `posts_meta`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `post_custom_fields`
--
ALTER TABLE `post_custom_fields`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role_users`
--
ALTER TABLE `role_users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `route_groups`
--
ALTER TABLE `route_groups`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `route_lists`
--
ALTER TABLE `route_lists`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `route_list_roles`
--
ALTER TABLE `route_list_roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `terms`
--
ALTER TABLE `terms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `term_taxonomy`
--
ALTER TABLE `term_taxonomy`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

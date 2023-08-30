-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-08-2023 a las 00:44:27
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rentcar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assignedrole`
--

CREATE TABLE `assignedrole` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `assignedrole`
--

INSERT INTO `assignedrole` (`id`, `id_user`, `id_role`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 5, 2),
(4, 6, 2),
(5, 7, 2),
(6, 8, 2),
(7, 9, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `model` varchar(60) NOT NULL,
  `year` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `km` int(11) NOT NULL,
  `color` varchar(20) NOT NULL,
  `createdIn` date NOT NULL DEFAULT current_timestamp(),
  `currentClientId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cars`
--

INSERT INTO `cars` (`id`, `model`, `year`, `price`, `km`, `color`, `createdIn`, `currentClientId`) VALUES
(1, 'BMW X5 EDITADO', 2025, 20005000, 120, 'Rojo', '2023-08-27', 0),
(2, 'BMW X4', 2023, 20000000, 154, 'Azul', '2023-08-30', NULL),
(3, 'Camaro', 2023, 150000000, 800, 'Amarillo', '2023-08-30', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(15) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`) VALUES
(1, 'administrador', 'SuperUsuario'),
(2, 'usuario', 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `lastName` varchar(60) NOT NULL,
  `address` varchar(60) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `rentID` int(11) NOT NULL,
  `rentDays` int(11) NOT NULL,
  `password` varchar(80) NOT NULL,
  `createdIn` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `address`, `phone`, `email`, `rentID`, `rentDays`, `password`, `createdIn`) VALUES
(1, 'kevin', 'clift', 'teresa wilms montt', 12345678, 'kevin.clift@hotmail.com', 0, 0, '$2b$10$gTOoBaMvT7Fb.7e1PEJR8u1G104CQSCdEr0CWsqucg4mZkZo.4.4O', '2023-08-27'),
(2, 'kevin', 'clift', 'teresa wilms montt', 12345678, 'kevin.clift.b@hotmail.com', 0, 0, '$2b$10$Qq8/tPV/oZmTXQwC7AYZlubOD/.0w2MteqqF0xlwj0jH0fNMNzZae', '2023-08-27'),
(4, 'kevin', 'clift', 'ttttt', 12345678, 'kevin.clift.b@gmail.com', 0, 0, '$2b$10$yjefATJLMutkOxpZNkdzjOS9RkjLKk8m.WWJidzrV1drb6mig3rw6', '2023-08-27'),
(5, 'Kevin Lisandro Clift Buzeta', 'clift', 'sdkhjasjdh', 12345678, 'kevin@gmail.com', 0, 0, '$2b$10$Sx/1UZtu0phYmnG9R/o/mOvcqQKjBF4G3Jic14V.47/W1SpY.rrIC', '2023-08-27'),
(6, 'kevin', 'clift', 'asdasd', 123456, 'kevi@hotmail.com', 0, 0, '$2b$10$Cx2FaYixn//zr0h4Joj4Su9rKGlg4zbOIC5ZZAId./57H.YsCr.aO', '2023-08-27'),
(7, 'amorcito 1', 'amor2', '123', 2147483647, 'chirihuilla@hotmail.com', 0, 0, '$2b$10$CdwqtYl1tyLlWeIWYZ8nR.3O5rVZZmskCNgW959snnd16djXmFpIa', '2023-08-27'),
(9, 'juanito', 'Orosco', 'teresa wilmsmontt', 987654321, 'prueba@hotmail.com', 0, 0, '$2b$10$enQ9N9Uociu2Vzo5theIEOihXEZ2Pp/dnMs7FImvIbpUWBqQGOIDq', '2023-08-29');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `assignedrole`
--
ALTER TABLE `assignedrole`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `assignedrole`
--
ALTER TABLE `assignedrole`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-08-2023 a las 07:09:51
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
(7, 9, 2),
(8, 10, 1),
(9, 11, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
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

INSERT INTO `cars` (`id`, `description`, `model`, `year`, `price`, `km`, `color`, `createdIn`, `currentClientId`) VALUES
(17, 'Con dos poderosos motores eléctricos y el sistema eléctrico de tracción a los cuatro ruedas BMW xDrive, el BMW iX ofrece una extraordinario rendimiento eléctrico: una potencia de 523 HP* impulsa el BMW iX xDrive50 de 0 a 100 km/h en 4,6 segundos (BMW iX xDrive40: 326 HP*; 0–100 km/h en 6,1 s). El par disponible al instante y la aceleración continua desde parado permiten al BMW iX responder con precisión y espontaneidad a cada movimiento del pedal del acelerador y ofrecer una experiencia de conducción única.', 'BMW iX, CON 523 HP', 2023, 20000, 0, 'Rojo', '2023-08-31', NULL),
(18, 'Gracias a la combinación de un eficiente concepto de propulsión, un diseño aerodinámico y una potente batería de alto voltaje, el BMW iX3 ofrece una autonomía de hasta 460 kilómetros*. Las innovadoras tecnologías, como la recuperación de la energía de frenado, garantizan un extra de autonomía y permiten un consumo de energía de 18,5 kWh/100 km (WLTP)', 'BMW iX3', 2023, 15000, 0, 'Azul', '2023-08-31', NULL),
(19, 'Una rebeldía inspiradora: la gama BMW X4 M combina el potencial de alto rendimiento y la exclusividad de un modelo M con el concepto avanzado de un BMW X4. Elige entre cuatro excepcionales Sports Activity Coupés (SAC): el BMW X4 M viene equipado con ADN de competición y ofrece un dinamismo de conducción del más alto nivel; estas características se refuerzan aún más en el BMW X4 M Competition, que ofrece las máximas prestaciones y un equipamiento exclusivo para disfrutar de un placer de conducir apasionante hasta el límite. El BMW X4 M40i se presentan en plena forma en cualquier trayecto e impresionan con una inteligente simbiosis de rendimiento, confort y eficiencia.\n', 'BMW X4 M Competition, BMW X4 M, BMW X4 M40i', 2023, 400000, 0, 'Amarillo', '2023-08-31', NULL),
(20, 'Cuando te acercas a los modelos Sport Hybrid, Sport-L Hybrid o Sport Touring Hybrid, puedes apreciar un distintivo estilo deportivo y un tren motriz de alta respuesta de 204 caballos de fuerza*, todo con una clasificación de mpg de 40 ciudad / 34 autopista.', 'CR-V', 2024, 200000, 20, 'Blanco', '2023-08-31', NULL),
(21, 'Con el impulso de nuestra determinación implacable de mejorar constantemente, no solo creamos el Civic más potente hasta el momento, sino también el más ágil. Con el sistema de cuatro modos de conducción (que incluye +R, Individual, Sport y Comfort), podrás pasar de la pista a la calle al instante.', 'CIVIC TYPE R', 2024, 50000, 14, 'Negro', '2023-08-31', NULL),
(22, 'La Passport TrailSport está diseñada para explorar todos los terrenos. El portaequipajes está listo para los accesorios de carga,* y el sistema de tracción integral i-VTM4® te permite disfrutar de un viaje más suave en terrenos difíciles. En el interior, un abanico de detalles de estilo distintivos le da al interior una apariencia a la altura de la belleza de la naturaleza.\n', 'PASSPORT', 2024, 30000, 500, 'Blanco', '2023-08-31', NULL),
(23, 'El BMW X5 M pone de manifiesto sus dotes de liderazgo con sus poderosas proporciones, exclusivo diseño M y extraordinario rendimiento. Descubre tres SAV (Sports Activity Vehicles) extrovertidos: el modelo BMW X5 M50i convence por su combinación única de potencia, comodidad y eficiencia. El BMW X5 M con sistema M xDrive impresiona con su interior exclusivo y un dinamismo de conducción marcado por sus genes de competición. Una experiencia de conducción cargada de adrenalina aún mejor en el BMW X5 M Competition, con sistema M xDrive, más potente y llamativo. Maneja hoy uno de nuestros autos familiares y ¡vive una nueva aventura sobre cuatro!', 'BMW X5 Competition', 2023, 500000, 0, 'Azul', '2023-08-31', NULL);

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
(10, 'admin', 'root', 'Universidad Tarapacá', 569723187, 'admin@hotmail.com', 0, 0, '$2b$10$qKh4NYUbFeJUkPf7XPF2duNqdQrmGlK70L.WwdcXJLd2L2bqeUR5S', '2023-08-31'),
(11, 'usuario', 'numero_1', 'la tirana', 123456789, 'prueba@hotmail.com', 0, 0, '$2b$10$GS9IV6m5JbLe.a/R.EWuTODgX.kPSH2g5vBGkmYG./cVp8Dx1b5ou', '2023-08-31');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 23-Nov-2022 às 13:55
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `estacao`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `leituras`
--

CREATE TABLE `leituras` (
  `id` int(10) NOT NULL,
  `id_sensor` int(10) NOT NULL,
  `valor` float NOT NULL,
  `data_hora` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `leituras`
--

INSERT INTO `leituras` (`id`, `id_sensor`, `valor`, `data_hora`) VALUES
(1, 1, 2.25, '2022-11-18 08:51:55'),
(2, 2, 24, '2022-11-18 08:51:55'),
(3, 3, 79.6, '2022-11-18 08:51:55'),
(4, 4, 102373, '2022-11-18 08:51:55'),
(5, 5, 0, '2022-11-18 08:52:00'),
(6, 6, 0, '2022-11-18 08:52:00'),
(7, 1, 2.15, '2022-11-18 08:52:31'),
(8, 2, 24, '2022-11-18 08:52:31'),
(9, 3, 79.5, '2022-11-18 08:52:31'),
(10, 4, 102383, '2022-11-18 08:52:31'),
(11, 5, 0, '2022-11-18 08:52:36'),
(12, 6, 0, '2022-11-18 08:52:36'),
(13, 1, 0, '2022-11-18 08:53:06'),
(14, 2, 24.2, '2022-11-18 08:53:06'),
(15, 3, 79.5, '2022-11-18 08:53:07'),
(16, 4, 102384, '2022-11-18 08:53:07'),
(17, 5, 0, '2022-11-18 08:53:12'),
(18, 6, 0, '2022-11-18 08:53:12');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sensores`
--

CREATE TABLE `sensores` (
  `id_sensor` int(10) NOT NULL,
  `sensor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sensores`
--

INSERT INTO `sensores` (`id_sensor`, `sensor`) VALUES
(1, 'luminosidade'),
(2, 'temperatura'),
(3, 'humidade'),
(4, 'pressao'),
(5, 'vento'),
(6, 'chuva');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `leituras`
--
ALTER TABLE `leituras`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `leituras`
--
ALTER TABLE `leituras`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

use xxxxxxxxxx;

-- Delete Tables before Refresh

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `job-skill`;
DROP TABLE IF EXISTS `skill`;
DROP TABLE IF EXISTS `job`;
DROP TABLE IF EXISTS `contact`;
DROP TABLE IF EXISTS `company`;
DROP TABLE IF EXISTS `user`;
SET FOREIGN_KEY_CHECKS = 1;

-- Create Tables

CREATE TABLE `user` (
  `user_id` VARCHAR(50) NOT NULL,
  `user_name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `company` (
  `company_id` VARCHAR(50) NOT NULL,
  `company_name` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`company_id`),
  FOREIGN KEY(`user_id`),
      REFERENCES user(`user_id`) ON UPDATE CASCADE ON DELETE CASCADE,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `contact` (
  `contact_id` VARCHAR(50) NOT NULL,
  `contact_name` VARCHAR(50) NOT NULL,
  `company_id` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `role` VARCHAR(50),
  `email` VARCHAR(50) NOT NULL,
  `phone_number` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`contact_id`),
  FOREIGN KEY(`company_id`),
      REFERENCES company(`company_id`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY(`user_id`),
      REFERENCES user(`user_id`) ON UPDATE CASCADE ON DELETE CASCADE,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `job` (
  `job_id` VARCHAR(50) NOT NULL,
  `company_id` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `job_title` VARCHAR(50) NOT NULL,
  `availability` VARCHAR(50) NOT NULL,
  `application_status` VARCHAR(50) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`job_id`),
  FOREIGN KEY(`company_id`),
      REFERENCES company(`company_id`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY(`user_id`),
      REFERENCES user(`user_id`) ON UPDATE CASCADE ON DELETE CASCADE,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `skill` (
  `skill_id` VARCHAR(50) NOT NULL,
  `skill_name` VARCHAR(50) NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `proficiency` INT NOT NULL,
  PRIMARY KEY (`skill_id`),
  FOREIGN KEY(`user_id`),
      REFERENCES user(`user_id`) ON UPDATE CASCADE ON DELETE CASCADE,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `job-skill` (
  `job_skill_id` VARCHAR(50) NOT NULL,
  `skill_id` VARCHAR(50) NOT NULL,
  `job_id` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`job_skill_id`),
  FOREIGN KEY(`skill_id`),
      REFERENCES skill(`skill_id`) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY(`job_id`),
      REFERENCES job(`job_id`) ON UPDATE CASCADE ON DELETE CASCADE,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


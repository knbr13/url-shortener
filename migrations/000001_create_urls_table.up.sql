CREATE TABLE `urls` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `short_url` VARCHAR(255) NOT NULL UNIQUE,
    `original_url` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `expires_at` TIMESTAMP
);

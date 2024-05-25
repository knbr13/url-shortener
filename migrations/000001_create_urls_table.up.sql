CREATE TABLE `urls` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `short_url` VARCHAR(255) NOT NULL UNIQUE,
    `original_url` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `expires_at` TIMESTAMP
);

-- Add index on short_url
CREATE INDEX idx_short_url ON urls(`short_url`);

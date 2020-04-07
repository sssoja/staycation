CREATE TABLE [users]
(
  [id] integer PRIMARY KEY,
  [email] nvarchar(40) UNIQUE NOT NULL,
  [phone_number] integer UNIQUE,
  [num_country_code] integer,
  [name] nvarchar(25),
  [preferred_contact_method] nvarchar(25)
)
GO

CREATE TABLE [listings]
(
  [id] integer PRIMARY KEY,
  [user_id] integer,
  [date_published] date,
  [space_type] nvarchar(25),
  [is_shared] boolean,
  [location_id] integer,
  [reviews_id] integer
)
GO

CREATE TABLE [locations]
(
  [id] integer PRIMARY KEY,
  [street_name] nvarchar(40),
  [city_name] nvarchar(40),
  [latitude] float,
  [longitude] float
)
GO

CREATE TABLE [bookings]
(
  [id] integer PRIMARY KEY,
  [user_id] integer,
  [listing_id] integer,
  [start_date] date,
  [end_date] date
)
GO

CREATE TABLE [reviews]
(
  [id] integer PRIMARY KEY,
  [booking_id] integer,
  [rating] tinyint,
  [review_body] text
)
GO

ALTER TABLE [listings] ADD FOREIGN KEY ([user_id]) REFERENCES [users] ([id])
GO

ALTER TABLE [listings] ADD FOREIGN KEY ([location_id]) REFERENCES [locations] ([id])
GO

ALTER TABLE [listings] ADD FOREIGN KEY ([reviews_id]) REFERENCES [reviews] ([id])
GO

ALTER TABLE [bookings] ADD FOREIGN KEY ([user_id]) REFERENCES [users] ([id])
GO

ALTER TABLE [bookings] ADD FOREIGN KEY ([listing_id]) REFERENCES [listings] ([id])
GO

ALTER TABLE [reviews] ADD FOREIGN KEY ([booking_id]) REFERENCES [bookings] ([id])
GO

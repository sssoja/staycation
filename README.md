# my-first-mvp

| URL                          | HTTP Method | Description            | Request Object                                               | Response Object                                                                                    |
| ---------------------------- | ----------- | ---------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| /api/v1/listings             | GET         | Get listings           | n/a                                                          | {listings: [date_published: date,space_type: string,is_shared: boolean,location_id: integer]}      |
| /api/v1/listings/:id         | GET         | Get listing by id      | { listing_id:integer }                                       | {user_id: integer,date_published: date,space_type: string,is_shared: boolean,location_id: integer} |
| /api/v1/listings             | POST        | Add listing            | {space_type: string,is_shared: boolean,location_id: integer} | {listing_id: integer,space_type: string,is_shared: boolean,location_id: integer,user_id: integer}  |
| /api/v1/listings:id          | PUT         | Edit listing           | {listing_id: integer,user_id: integer }                      | {space_type: string,is_shared: boolean,location_id: integer                                        |
| /api/v1/listings:id          | DELETE      | Delete listing         | n/a                                                          | {}                                                                                                 |
| /api/v1/users/:id/bookings   | GET         | Get bookings by user   | {user_id: integer,}                                          | {booking_id: integer}                                                                              |
| /api/v1/users/bookings/:id/  | POST        | Add review             | {rating: integer,review_body: string,booking_id: integer}    | {rating: integer,review_body: string,user_id: integer}                                             |
| /api/v1/listings/:id/reviews | GET         | Get reviews by listing | {listing_id: integer}                                        | {rating: integer,review_body: string}                                                              |

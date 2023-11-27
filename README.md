[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/eVluYqZE)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12858544&assignment_repo_type=AssignmentRepo)

# Individual Project Phase 2

Link Web: https://shifashion-id.web.app/

# Shifashionid API Documentation

## Endpoints:

List of available endpoints:

- `POST /login`
- `POST /add-user`

- `GET /items`
- `GET /items/:id`

- `POST /orders`
- `PUT /orders/:id`
- `DELETE /orders/:id`

&nbsp;

## 1. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - Logged In)_

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJzeWlmYXNyaCIsImVtYWlsIjoic3lpZmFAc2hpZmFzaGlvbmlkLmNvbSIsImlhdCI6MTcwMDcyODI3OH0.3N63d4Wp45xAkl2aQXgSPPfj0fFOp_iZ-oceb9g6XWk",
    "username": "syifasrh",
    "email": "syifa@shifashionid.com"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email cannot empty"
}
OR
{
    "message": "Password cannot empty"
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Email/Password Invalid"
}
```

nbsp;

## 2. POST /add-user

Request:

- body:

```json
{
    "email": "string",
    "password": "string"
}
```

_Response (201 - Created)_

```json
{
    "message": "Email jane.doe@example.com has been created"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email is required!"
}
OR
{
    "message": "Password is required!"
}
OR
{
    "message": "Minimum password length is 5"
}
OR
{
    "message": "Email address already in used!"
}
OR
{
    "message": "Wrong format email!"
}
```

&nbsp;

## 3. GET /items

Description:
- Get all item from database

_Respoonse (200 - Ok)_

```json
[
    {
        "id": 1,
        "name": "X Minnie Mouse Drawstring Backpack Black Multi",
        "price": 2700000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00829945_m03.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 2,
        "name": "68168 Signature Jes Crossbody Light Khaki Confetti Pink",
        "price": 4500000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00733594_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 3,
        "name": "686 Signature Emery Colorblock Crossbody Tan Chalk",
        "price": 6500000,
        "imgUrl": "https://balilene.com/cdn/shop/products/Coach-686-Emery-Crossbody-In-Colorblock-Signature-Canvas-Pewter-Tan-Chalk-Multi-Balilene-onmodel_1024x1024.png?v=1654404163",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 4,
        "name": "Spade Flower Jacquard Stripe Medium Belt Bag Cream Multi",
        "price": 4950000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00945990_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 5,
        "name": "CE639 Signature Colorblock Millie Shoulder Bag Light Khaki Petunia",
        "price": 4750000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00942730_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 6,
        "name": "X Disney 91126 Jes Dalmatian Floral Print Crossbody Black Multi",
        "price": 4750000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00902105_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 7,
        "name": "CF342 Monogram Print City Tote Black",
        "price": 4500000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00931433_m08.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 8,
        "name": "83607 Signature Rowan Satchel Light Khaki Chalk",
        "price": 4750000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00572693_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 9,
        "name": "C7221 Ombre Embossed Horse Carriage 27 Tote Black",
        "price": 4500000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00982631_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 10,
        "name": "CF455 Signature Ski Patches Mini Jamie Camera Bag Brown Black Multi",
        "price": 4250000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00901075_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 11,
        "name": "Signature Teri Chambray Shoulder Bag Wine Multi",
        "price": 3650000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00928099_m26.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 12,
        "name": "CA721 Signature Mini Gallery Crossbody Brown Black",
        "price": 4250000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00847136_m01.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 13,
        "name": "CH198 Crossgrain Mini Gallery Crossbody Black",
        "price": 4500000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00931877_m2.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 14,
        "name": "CA205 Ellis Nylon Shoulder Bag Black",
        "price": 3800000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00866044_m13.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 15,
        "name": "CH227 Signature Mollie Chambray Tote Wine Multi",
        "price": 3600000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00941464_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 16,
        "name": "Signature Jaycee XS Zip Pocket Backpack Brown",
        "price": 3500000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00913976_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 17,
        "name": "Signature Jaycee XS Zip Pocket Backpack Vanilla",
        "price": 3394500,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00913853_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 18,
        "name": "CI027 Signature Chambray Nolita 15 Cornflower Multi",
        "price": 1600000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00968914_m112.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 19,
        "name": "Gentle Woman Playground Micro Tote Cream",
        "price": 850000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00976518_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 20,
        "name": "Miller Flap Shoulder Bag Tempranillo",
        "price": 7335000,
        "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00846099_m.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    },
    {
        "id": 21,
        "name": "CM078 Ashton Baguette Shoulder Bag Citron Multi",
        "price": 4950000,
        "imgUrl": "https://dynamic.zacdn.com/WGT8cBRMmg_39MND21xGB2wVE0Y=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/coach-2292-2165824-3.jpg",
        "createdAt": "2023-11-14T09:43:17.811Z",
        "updatedAt": "2023-11-14T09:43:17.811Z"
    }
]
```

&nbsp;

## 4. GET /items/:id

Description:
- Get detail item by id

Request:

- params:

```json
{
    "id": "integer (required)"
}
```

_Response (200 - Ok)_

```json
{
    "id": 5,
    "name": "CE639 Signature Colorblock Millie Shoulder Bag Light Khaki Petunia",
    "price": 4750000,
    "imgUrl": "https://media.banananina.id/catalog/product/cache/1/image/1800x/4a23bef5941bb00a263319dea1bf6e05/0/0/00942730_m.jpg",
    "createdAt": "2023-11-14T09:43:17.811Z",
    "updatedAt": "2023-11-14T09:43:17.811Z"
}
```

_Response (404 - Not Found)_

```json
{
    "message": "Item Not Found"
}
```

&nbsp;

## 5. POST /orders

Description:
- Add order item

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
    "id": "integer (required)"
}
```

- users:

```json
{
    "UserId": "integer (required)"
}
```

- body:

```json
    "ItemId": "integer (required)",
    "city": "string",
    "province": "string",
    "address": "string",
    "quantity": "integer",
    "shippingFee": "integer",
    "totalPayment": "integer",
    "paymentStatus": "string"
```

_Response (201 - Created)_

```json
{
    "id": 1,
    "ItemId": 5,
    "city": "Sleman",
    "province": "DI Yogyakarta",
    "address": "JL. Pramuka, no. 30",
    "quantity": 2,
    "shippingFee": 20000,
    "totalPayment": 7020000,
    "paymentStatus": "paid",
    "UserId": 2,
    "createdAt": "2023-11-14T09:43:17.811Z",
    "updatedAt": "2023-11-14T09:43:17.811Z"
}
```

&nbsp;

## 6. PUT /orders/:id

Description:
- Update order by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
    "id": "integer (required)"
}
```

- body:

```json
{
    "quantity": "integer"
}
```

_Response (200 - Ok)_

```json
{
    "quantity": 2
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Invalid Input"
}
OR
{
    "message": "City is required!"
}
OR
{
    "message": "Province is required!"
}
OR
{
    "message": "Address is required!"
}
OR
{
    "message": "Quantity is required!"
}
```

_Response (404 - Not Found)_

```json
{
    "message": "Order Not Found"
}
```

&nbsp;

## 7. DELETE /orders/:id

Description:
- Delete order by id

Request:

- headers:

```json
{
    "access_token": "string"
}
```

- params:

```json
{
    "id": "integer (required)"
}
```

_Response (200 - Ok)_

```json
{
    "message": "Order with id 2 successfuly deleted"
}
```

_Response (4044 - Not Found)

```json
{
    "message": "Order with id 5 not found"
}
```

&nbsp;

## Global Error

_Response (400 - Bad Request)_

```json
{
    "message": "Name is required!"
}
OR
{
    "message": "Price is required!"
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Invalid token"
}
OR
{
    "message": "Please Login First"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal server error"
}
```
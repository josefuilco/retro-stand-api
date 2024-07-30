# Documentación de la API

## Autenticación

```js
POST /auth/login
```
Autentica al cajero en el sistema.

* Request
```json
{
	"dni": "85900893",
	"password": "$2a$12$i2jw.eJl9h665fC51kV2y.t401Mayf7L28ORKTplaqKNUW3b03x2e"
}
```
* Response (Autenticado)
```json
{
	"message": "success",
	"data": {
		"user": {
			"id": 1,
			"firstName": "Ausubel",
			"lastName": "Velasquez",
			"dni": "85900893"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
	}
}
```
* Response (Credenciales inválidas)
```json
{
	"message": "invalid_credentials",
	"data": null
}
```

## Inventario

```js
GET /inventory/products
```
Obtiene el listado de productos para el inventario.

* Response
```json
{
	"message": "success",
	"data": {
		"products": [
			{
				"id": 1,
				"name": "Crash Bandicoot",
				"stock": 17,
				"active": true,
				"category": {
					"id": 2,
					"name": "Videojuego"
				},
				"subcategory": {
					"id": 3,
					"name": "PS1",
					"unitPrice": 1.50
				}
			}
		]
	}
}
```

```js
GET /inventory/product-categories
```
Obtiene el listado de categorías.

* Response
```json
{
	"message": "success",
	"data": {
		"categories": [
			{
				"id": 1,
				"name": "Película"
			}
		]
	}
}
```

```js
GET /inventory/product-subcategories
```
Obtiene el listado de subcategorías.

* Response
```json
{
	"message": "success",
	"data": {
		"subcategories": [
			{
				"id": 1,
				"name": "DVD",
				"unitPrice": 1.50,
				"categoryId": 1
			}
		]
	}
}
```

```js
PATCH /inventory/products/:productId/stock
```
Suministra o reduce la cantidad de un producto.

* Request
```json
{
	"quantity": 5
}
```
* Response
```json
{
	"message": "success",
	"data": null
}
```

```js
PATCH /inventory/products/:productId/activate
```
Activa o desactiva un producto.

* Request
```json
{
	"activate": true
}
```
* Response
```json
{
	"message": "success",
	"data": null
}
```

```js
PUT /inventory/products/:productId
```
Actualiza un producto.

* Request
```json
{
	"name": "Crash Bandicoot",
	"categoryId": 2,
	"sucategoryId": 3
}
```
* Response
```json
{
	"message": "success",
	"data": null
}
```

## Ventas

```js
GET /sales
```
Obtiene todo el registro de ventas.

* Response
```json
{
	"message": "success",
	"data": {
		"sales": [
			{
				"id": "2aefc720-db2e-4ff7-96f9-28203e304df3",
				"recordDate": "2024-07-24T16:07:00.000Z",
				"items": [
					{
						"id": 3,
						"quantity": 2,
						"product": "Dragon Ball Z Budokai Tenkaichi 3",
						"category": "Videojuego",
						"subcategory": "PS2",
						"unitPrice": 2.00
					}
				],
				"cashier": "Jose Casma"
			}
		]
	}
}
```


```js
PUT /sales
```
Registra una venta.

* Request
```json
{
	"id": "2aefc720-db2e-4ff7-96f9-28203e304df3",
	"products": [
		{ id: 3, quantity: 2 }
	]
}
```

* Response
```json
{
	"message": "success",
	"data": {
		"sale": {
			"id": "2aefc720-db2e-4ff7-96f9-28203e304df3",
			"recordDate": "2024-07-24T16:07:00.000Z",
			"items": [
				{
					"id": 3,
					"quantity": 2,
					"product": "Dragon Ball Z Budokai Tenkaichi 3",
					"category": "Videojuego",
					"subcategory": "PS2",
					"unitPrice": 2.00
				}
			],
			"cashier": "Jose Casma"
		}
	}
}
```
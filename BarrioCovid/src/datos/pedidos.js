exports.pedidos = [{
    "comprador": {
        "email": "edel@edel.com",
        "password": "123",
        "name": "edel",
        "direccion": "direccion Edel",
        "esVendedor": false,
        //"pedidos":[] //Esto tiene pinta de dar problemas
    },
    "tienda": {
        "propietario": {
            "email": "miguel@miguel.com",
            "password": "123",
            "name": "miguel",
            "direccion": "direccion Miguel",
            "esVendedor": true,
            //"pedidos":[] //Esto tiene pinta de dar problemas
        },
        "direccion": "direccion",
        "nombre": "Tienda Miguel",
        "genero": "calle",
        "productos": [{
            "nombre": "bayer",
            "precio": 8.0,
            "cantidad": 1
        }, {
            "nombre": "lepon",
            "precio": 5.0,
            "cantidad": 1
        }]
    },
    "voluntario": {
        "email": "voluntario@voluntario.com",
        "password": "123",
        "name": "voluntario",
        "direccion": "direccion voluntario",
        "esVendedor": false,
        //"pedidos":[] //Esto tiene pinta de dar problemas
    },
    "productos": [{
        /* "tienda": {
            "propietario": {
                "email": "miguel@miguel.com",
                "password": "123",
                "name": "miguel",
                "direccion": "direccion Miguel",
                "esVendedor": true,
                //"pedidos":[] //Esto tiene pinta de dar problemas
            },
            "direccion": "direccion",
            "nombre": "Tienda Miguel",
            "genero": "calle",
            //"productos":[] //Esto tiene pinta de dar problemas
        }, */
        "nombre": "lepon",
        "precio": 5.0,
        "cantidad": 1
    }],
    "Fecha": "Fecha",
    "estado": 1,
    "descripcion": "descripcion de pedido",
    "aDomicilio": true
}]
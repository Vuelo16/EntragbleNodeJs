const url1 ='http://localhost:8084/api/usuario'
const urlProd ='http://localhost:8084/api/producto'

const listarUsuario = async () => {
    let body = document.getElementById('contenido-usu')
    if (body) {
        let mensaje = ''
        fetch(url1) 
            .then(res => res.json())
            .then(function (data) {
                let listarUsuario = data.usuarios
                listarUsuario.map((usuario) => {
                    mensaje += `<tr><td>${usuario.nombre}</td>` +
                        `<td>${usuario.rol}</td>` +
                        `<td>${usuario.email}</td>` +
                        `<td>${usuario.telefono}</td>` +
                        `<td>${usuario.estado ? 'Activo' : 'Inactivo'}</td>` +
                        `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editarUsuario(${JSON.stringify(usuario)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminarUsuario("${usuario._id}")'>Eliminar</a>
                </td></tr>`
                    body.innerHTML = mensaje
                })
            })
    }

}

listarUsuario()

const registrarUsuario = async () => {
    let nombre = document.getElementById('nombre').value
    let rol = document.getElementById('rol').value
    let email = document.getElementById('email').value
    let telefono = document.getElementById('telefono').value
    let contrasena = document.getElementById('contrasena').value
    let confirmar = document.getElementById('confirmar').value
    let estado = document.getElementById('estado').value

    let usuario = {
        nombre: nombre,
        rol: rol,
        email:email,
        telefono:telefono,
        contrasena:contrasena,
        confirmar:confirmar,
        estado: estado
    }

    const expresionNombre = /^(?=.*[a-zA-Z0-9])\s*[a-zA-Z\s0-9]*$/
    const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/
    const expresionTelefono = /^[0-9]{10}$/

    if(nombre == '' || rol == '' || email == '' || telefono == '' || contrasena == '' || confirmar == '' || estado == ''){
        Swal.fire({
            icon: "error",
            title: "No se aceptan campos vacíos",
            confirmButtonColor: "#45B39D"
        });
        return;
    }
    if (telefono <0){
        Swal.fire({
            icon: "error",
            title: "El teléfono no puede ser negativo",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionNombre.test(nombre)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan numeros y letras en el nombre",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionEmail.test(email)){
        Swal.fire({
            icon: "error",
            title: "El formato del correo no es valido",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionTelefono.test(telefono)){
        Swal.fire({
            icon: "error",
            title: "El teléfono debe ser de 10 digitos",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if ((contrasena.length > 0 && confirmar.length > 0) && (contrasena == confirmar)) {
        fetch(url1, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(usuario),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                Swal.fire({
                    title: json.mensaje,
                    icon: 'success',
                    confirmButtonColor: "#45B39D"
            })
            .then(result => {
                if (result.isConfirmed) {
                    window.location.href = './listarUsuario.html';
                }
            });
            });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Las contraseñas no coindicen, por favor verifique",
            confirmButtonColor: "#45B39D"
        });
        return;
    }
}

const editarUsuario = (usuario) => {
    document.getElementById('_id').value = ''
    document.getElementById('nombre').value = ''
    document.getElementById('rol').value = ''
    document.getElementById('email').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('contrasena').value = ''
    document.getElementById('confirmar').value = ''
    document.getElementById('estado').value = ''

    document.getElementById('_id').value = usuario._id
    document.getElementById('nombre').value = usuario.nombre
    document.getElementById('rol').value = usuario.rol
    document.getElementById('email').value = usuario.email
    document.getElementById('telefono').value = usuario.telefono
    document.getElementById('contrasena').value = usuario.contrasena
    document.getElementById('confirmar').value = usuario.confirmar
    document.getElementById('estado').value = usuario.estado
}

const actualizarUsuario = async () => {
    
    let nombre = document.getElementById('nombre').value
    let rol = document.getElementById('rol').value
    let email = document.getElementById('email').value
    let telefono = document.getElementById('telefono').value
    let contrasena = document.getElementById('contrasena').value
    let confirmar = document.getElementById('confirmar').value
    let estado = document.getElementById('estado').value

    let usuario = {
        _id: document.getElementById('_id').value,
        nombre: nombre,
        rol: rol,
        email:email,
        telefono:telefono,
        contrasena:contrasena,
        confirmar:confirmar,
        estado: estado,
        tipoModificacion: 'Unitaria'
    }

    const expresionNombre = /^(?=.*[a-zA-Z0-9])\s*[a-zA-Z\s0-9]*$/
    const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/
    const expresionTelefono = /^[0-9]{10}$/

    if(nombre == '' || rol == '' || email == '' || telefono == '' || contrasena == '' || confirmar == '' || estado == ''){
        Swal.fire({
            icon: "error",
            title: "No se aceptan campos vacíos",
            confirmButtonColor: "#45B39D"
        });
        return;
    }
    if (telefono <0){
        Swal.fire({
            icon: "error",
            title: "El teléfono no puede ser negativo",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionNombre.test(nombre)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan numeros y letras en el nombre",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionEmail.test(email)){
        Swal.fire({
            icon: "error",
            title: "El formato del correo no es valido",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionTelefono.test(telefono)){
        Swal.fire({
            icon: "error",
            title: "El teléfono debe ser de 10 numeros",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if ((contrasena.length > 0 && confirmar.length > 0) && (contrasena == confirmar)) {
        fetch(url1, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(usuario),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                Swal.fire({
                    title: json.mensaje,
                    icon: 'success',
                    confirmButtonColor: "#45B39D"
            })
            .then(result => {
                if (result.isConfirmed) {
                    window.location.href = './listarUsuario.html';
                }
            });
            });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Las contraseñas no coindicen, por favor verifique",
            confirmButtonColor: "#45B39D"
        });
        return;
    }
}

const eliminarUsuario = (_id) => {
    Swal.fire({
        title: "¿Eliminar Usuario?",
        icon: 'warning',
        showCancelButton: true,
        confirmButton: "yes",
        confirmButtonColor: "#45B39D",
        cancelButtonColor: "#E74C3C "
    })
    .then((result) => {
        if (result.isConfirmed) {
        let usuario = {
            _id: _id
        }
        fetch(url1, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(usuario),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        
            .then(response => response.json()) 
            .then((json) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminación exitosa'
                })
            })
            .then(result => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            })
        }
    });
}

const listarProducto = async () => {
    let body = document.getElementById('contenido-prod')
    if (body) {
        let mensaje = ''
        fetch(urlProd) 
            .then((res) => res.json())
            .then(function (data) {
                let listarProducto = data.productos
                listarProducto.map((producto) => {
                    mensaje += `<tr><td>${producto.nombreProd}</td>` +
                        `<td>${producto.descripcion}</td>` +
                        `<td>${producto.categoria}</td>` +
                        `<td>${producto.stock}</td>` +
                        `<td>${producto.stock_min}</td>` +
                        `<td>${producto.valor_uni}</td>` +
                        `<td>${producto.estadoProd ? 'Activo' : 'Inactivo'}</td>` +
                        `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editarProducto(${JSON.stringify(producto)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminarProducto("${producto._id}")'>Eliminar</a>
                </td></tr>`
                    body.innerHTML = mensaje
                })
            })
    }

}

listarProducto()

const registrarProducto = async () => {
    let nombreProd = document.getElementById('nombreProd').value
    let descripcion = document.getElementById('descripcion').value
    let categoria = document.getElementById('categoria').value
    let stock = document.getElementById('stock').value
    let stock_min = document.getElementById('stock_min').value
    let valor_uni = document.getElementById('valor_uni').value
    let estadoProd = document.getElementById('estadoProd').value

    let producto = {
        nombreProd: nombreProd,
        descripcion: descripcion,
        categoria:categoria,
        stock:stock,
        stock_min:stock_min,
        valor_uni:valor_uni,
        estadoProd: estadoProd
    }

    const expresionNombreProd = /^[a-zA-Z0-9\-\/  ]+$/
    const expresionDescripcion = /^[a-zA-Z0-9\-\/,  ]+$/
    const expresionStock = /^\d+$/
    const expresionValor = /^[\d.]+$/

    if(nombreProd == '' || descripcion == '' || categoria == '' || stock == '' || stock_min == '' || valor_uni == '' || estadoProd == ''){
        Swal.fire({
            icon: "error",
            title: "No se aceptan campos vacíos",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionNombreProd.test(nombreProd)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan estos caracteres especiales en el nombre del producto (- y /)",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionDescripcion.test(descripcion)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan estos carecteres especiales en la descripción: (- , /)",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(stock < 0){
        Swal.fire({
            icon: "error",
            title: "No se aceptan numeros negativos en el stock",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(stock_min < 1){
        Swal.fire({
            icon: "error",
            title: "No se aceptan numeros negativos en el stock mínimo",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionStock.test(stock)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan numeros en el stock",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionStock.test(stock_min)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan numeros en el stock minimo",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    
    if(valor_uni< 1){
        Swal.fire({
            icon: "error",
            title: "El valor no puede ser menor o igual a cero",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionValor.test(valor_uni)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan numeros y puntos en el valor",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    

    console.log(producto)
        fetch(urlProd, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(producto),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => {
            Swal.fire({
                title: json.mensaje,
                icon: 'success',
                confirmButtonColor: "#45B39D"
        })
        .then(result => {
            if (result.isConfirmed) {
                window.location.href = './listarProducto.html';
            }
        });
        });
    }
   


const editarProducto = (producto) => {
    document.getElementById('_id').value = ''
    document.getElementById('nombreProd').value = ''
    document.getElementById('descripcion').value = ''
    document.getElementById('categoria').value = ''
    document.getElementById('stock').value = ''
    document.getElementById('stock_min').value = ''
    document.getElementById('valor_uni').value = ''
    document.getElementById('estadoProd').value = ''

    document.getElementById('_id').value = producto._id
    document.getElementById('nombreProd').value = producto.nombreProd
    document.getElementById('descripcion').value = producto.descripcion
    document.getElementById('categoria').value = producto.categoria
    document.getElementById('stock').value = producto.stock
    document.getElementById('stock_min').value = producto.stock_min
    document.getElementById('valor_uni').value = producto.valor_uni
    document.getElementById('estadoProd').value = producto.estadoProd
}

const actualizarProducto = async () => {
    
    let nombreProd = document.getElementById('nombreProd').value
    let descripcion = document.getElementById('descripcion').value
    let categoria = document.getElementById('categoria').value
    let stock = document.getElementById('stock').value
    let stock_min = document.getElementById('stock_min').value
    let valor_uni = document.getElementById('valor_uni').value
    let estadoProd = document.getElementById('estadoProd').value

    let producto = {
        _id: document.getElementById('_id').value,
        nombreProd: nombreProd,
        descripcion: descripcion,
        categoria:categoria,
        stock:stock,
        stock_min:stock_min,
        valor_uni:valor_uni,
        estadoProd: estadoProd,
        tipoModificacion: 'Unitaria'
    }

    
    const expresionNombreProd = /^[a-zA-Z0-9\-\/  ]+$/
    const expresionDescripcion = /^[a-zA-Z0-9\-\/,  ]+$/
    const expresionStock = /^\d+$/
    const expresionValor = /^[\d.]+$/
    

    if(nombreProd == '' || descripcion == '' || categoria == '' || stock == '' || stock_min == '' || valor_uni == '' || estadoProd == ''){
        Swal.fire({
            icon: "error",
            title: "No se aceptan campos vacíos",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionNombreProd.test(nombreProd)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan estos caracteres especiales en el nombre del producto (- y /)",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionDescripcion.test(descripcion)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan estos carecteres especiales en la descripción: (- , /)",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(stock < 0){
        Swal.fire({
            icon: "error",
            title: "No se aceptan numeros negativos en el stock",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(stock_min < 1){
        Swal.fire({
            icon: "error",
            title: "No se aceptan numeros negativos en el stock minimo",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionStock.test(stock)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan numeros en el stock",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionStock.test(stock_min)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan numeros en el stock minimo",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    
    if(valor_uni< 1){
        Swal.fire({
            icon: "error",
            title: "El valor no puede ser menor o igual a cero",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    if(!expresionValor.test(valor_uni)){
        Swal.fire({
            icon: "error",
            title: "Solo se aceptan numeros y puntos en el valor",
            confirmButtonColor: "#45B39D"
        });
        return;
    }

    

    console.log(producto)
        fetch(urlProd, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(producto),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => {
            Swal.fire({
                title: json.mensaje,
                icon: 'success',
                confirmButtonColor: "#45B39D"
        })
        .then(result => {
            if (result.isConfirmed) {
                window.location.href = './listarProducto.html';
            }
        });
        });
    
    
}

const eliminarProducto = (_id) => {
    Swal.fire({
        title: "¿Eliminar Producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButton: "yes",
        confirmButtonColor: "#45B39D",
        cancelButtonColor: "#E74C3C "
    })
    .then((result) => {
        if (result.isConfirmed) {
        let producto = {
            _id: _id
        }
        fetch(urlProd, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(producto),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        
            .then(response => response.json()) 
            .then((json) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Eliminación exitosa'
                })
            })
            .then(result => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            })
        }
    });
}


if (document.querySelector('#btn-registrarUsu')) {
    document.querySelector('#btn-registrarUsu')
        .addEventListener('click', registrarUsuario)
}

if (document.querySelector('#btn-actualizarUsu')) {
    document.querySelector('#btn-actualizarUsu')
        .addEventListener('click', actualizarUsuario)
}

if (document.querySelector('#btn-registrarProd')) {
    document.querySelector('#btn-registrarProd')
        .addEventListener('click', registrarProducto)
}

if (document.querySelector('#btn-actualizarProd')) {
    document.querySelector('#btn-actualizarProd')
        .addEventListener('click', actualizarProducto)
}
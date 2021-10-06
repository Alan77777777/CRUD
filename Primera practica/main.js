//CREAR
document.getElementById("formulario").addEventListener("submit", crear);


function crear(n) {

    nombre = document.getElementById("nombre").value;
    codigo = document.getElementById("codigo").value;
    descripcion = document.getElementById("descripcion").value;
    marca = document.getElementById("marca").value;
    cantidad = document.getElementById("cantidad").value;
    provincia = document.getElementById("provincia").value;
    categoria = document.getElementById("categoria").value;

    let producto = {
        nombre,
        codigo,
        descripcion,
        marca,
        cantidad,
        provincia,
        categoria
    }

    if (localStorage.getItem("Productos") === null) {
        let productos = [];
        productos.push(producto);
        localStorage.setItem("Productos", JSON.stringify(productos));
    } else {
        let productos = JSON.parse(localStorage.getItem("Productos"));
        productos.push(producto);
        localStorage.setItem("Productos", JSON.stringify(productos));
    }
    document.getElementById("formulario").reset();
    n.preventDefault();
    console.log("Producto añadido correctamente");

    paginaPrincipal();
}

//LEER
function leer() {
    let productos = JSON.parse(localStorage.getItem("Productos"));
    document.getElementById("tbody").innerHTML = ""
    for (let index = 0; index < productos.length; index++) {
        let nombre = productos[index].nombre
        let codigo = productos[index].codigo
        let descripcion = productos[index].descripcion
        let marca = productos[index].marca
        let cantidad = productos[index].cantidad
        let provincia = productos[index].provincia
        let categoria = productos[index].categoria

        document.getElementById("tbody").innerHTML +=
            `<tr>
                 <td>${nombre}</td>
                 <td>${codigo}</td>
                 <td>${descripcion}</td>
                 <td>${marca}</td>
                 <td>${cantidad}</td>
                 <td>${provincia}</td>
                 <td>${categoria}</td>
                 <td><button onclick="eliminar('${nombre}')" class="btn btn-danger">Eliminar</button></td>
                 <td><button onclick="modificar('${nombre}')" class="btn btn-success">Modificar</button></td>
            </tr>`


    }
}

//EDITAR
function modificar(nombre) {
    let productos = JSON.parse(localStorage.getItem("Productos"));
    for (let index = 0; index < productos.length; index++) {
        if (productos[index].nombre === nombre) {}
        document.getElementById("body").innerHTML = `<div class="row">
        <div class="col-md-5">
            <div class="card">
                <div class="card-header">
                    Editar producto
                </div>
                <div class="card-body">
                    <form id="formulario" autocomplete="on">
                        <fieldset>


                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input class="form-control" type="text" id="newnombre" placeholder="${productos[index].nombre}" required="true">
                            </div>

                            <div class="form-group">
                                <label for="codigo">newCodigo:</label>
                                <input class="form-control" type="text" id="newcodigo" placeholder="${productos[index].codigo}" required="true">
                            </div>

                            <div class="form-group">
                                <label for="Descripcion">Descripcion:</label>
                                <input class="form-control" type="text" id="newdescripcion" placeholder="${productos[index].descripcion}" required="true">
                            </div>

                            <div class="form-group">
                                <label for="marca">Marca:</label>
                                <input class="form-control" type="text" id="newmarca" placeholder="${productos[index].marca}" required="true">
                            </div>

                            <div class="form-group">
                                <label for="cantidad">Cantidad:</label>
                                <input class="form-control" type="number" id="newcantidad" required="true" min="1" value="${productos[index].cantidad}">
                            </div>

                            <div class="form-group">
                                <label for="provincia">Provincia:</label>
                                <input class="form-control" type="text" id="newprovincia" placeholder="${productos[index].provincia}" required="true">
                            </div>

                            <div class="form-group">
                                <label for="categoria">Categoria:</label>
                                <select class="form-control" id="newcategoria" >
                                <option value="electronicos" selected="${productos[index].categoria}">Electronicos</option>
                                <option value="perecederos" selected="${productos[index].categoria}">Perecederos</option>
                                <option value="juguetes" selected="${productos[index].categoria}">Juguetes</option>
                            </select>
                            </div>

                            
                        </fieldset>
                    </form>
                            <button class="btn btn-success" onclick="actualizar('${index}')">Actualizar</button>
                            <button class="btn btn-primary" onclick="paginaPrincipal()">Cancelar</button>
                </div>
            </div>`

    }
}

//ACTUALIZAR
function actualizar(index) {
    let productos = JSON.parse(localStorage.getItem("Productos"));
    productos[index].nombre = document.getElementById("newnombre").value;
    productos[index].codigo = document.getElementById("newcodigo").value;
    productos[index].descripcion = document.getElementById("newdescripcion").value;
    productos[index].marca = document.getElementById("newmarca").value;
    productos[index].cantidad = document.getElementById("newcantidad").value;
    productos[index].provincia = document.getElementById("newprovincia").value;
    productos[index].categoria = document.getElementById("newcategoria").value;
    if (productos[index].nombre == "") {
        alert("No a ingresado el nombre");
    } else {
        if (productos[index].codigo == "") {
            alert("No a ingresado el codigo");
        } else {
            if (productos[index].descripcion == "") {
                alert("No a ingresado la descripcion");
            } else {
                if (productos[index].marca == "") {
                    alert("No a ingresado la marca");
                } else {
                    if (productos[index].provincia == "") {
                        alert("No a ingresado la provincia");

                    } else {
                        localStorage.setItem("Productos", JSON.stringify(productos));
                        paginaPrincipal();
                    }
                }
            }

        }

    }
}

//ELIMINAR
function eliminar(nombre) {
    let productos = JSON.parse(localStorage.getItem("Productos"));
    for (let index = 0; index < productos.length; index++) {
        if (productos[index].nombre === nombre) {
            productos.splice(index, 1);
        }
    }
    localStorage.setItem("Productos", JSON.stringify(productos));
    leer();
}

//PAGINA PRINCIPAL
function paginaPrincipal() {
    document.getElementById("body").innerHTML = `<div class="row">
    <div class="col-md-5">
        <div class="card">
            <div class="card-header">
                Agregar nuevo producto
            </div>
            <div class="card-body">
                <form id="formulario" autocomplete="on">
                    <fieldset>


                        <div class="form-group">
                            <label for="nombre">Nombre:</label>
                            <input class="form-control" type="text" id="nombre" placeholder="Escribe el nombre del producto" required="true">
                        </div>

                        <div class="form-group">
                            <label for="codigo">Codigo:</label>
                            <input class="form-control" type="text" id="codigo" placeholder="Escribe el codigo del producto" required="true">
                        </div>

                        <div class="form-group">
                            <label for="Descripcion">Descripcion:</label>
                            <input class="form-control" type="text" id="descripcion" placeholder="Escriba la descripcion producto" required="true">
                        </div>

                        <div class="form-group">
                            <label for="marca">Marca:</label>
                            <input class="form-control" type="text" id="marca" placeholder="Escribe la marca del producto" required="true">
                        </div>

                        <div class="form-group">
                            <label for="cantidad">Cantidad:</label>
                            <input class="form-control" type="number" id="cantidad" required="true" min="1" value="1">
                        </div>

                        <div class="form-group">
                            <label for="provincia">Provincia:</label>
                            <input class="form-control" type="text" id="provincia" placeholder="Escriba la provincia del producto" required="true">
                        </div>

                        <div class="form-group">
                            <label for="categoria">Categoria:</label>
                            <select class="form-control" id="categoria">
                            <option value="electronicos" >Electronicos</option>
                            <option value="perecederos">Perecederos</option>
                            <option value="juguetes">Juguetes</option>
                        </select>
                        </div>

                        <button class="btn btn-primary" type="submit">Agregar</button>



                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <table class="table table-striped table-dark">
            <thead>
                <tr>

                    <th scope="col">Nombre:</th>
                    <th scope="col">Codigo:</th>
                    <th scope="col">Descripcion:</th>
                    <th scope="col">Marca:</th>
                    <th scope="col">Cantidad:</th>
                    <th scope="col">Provincia:</th>
                    <th scope="col">Categoria:</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`
    leer();

}

//GENERAR NUMERO ALEATORIO


function generarNumero() {

    function generateRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    let tamaño = 10
    let numeros = [tamaño];
    for (let index = 0; index < tamaño; index++) {
        numeros[index] = generateRandom(0, 999);
    }

    for (let index = 0; index < 10; index++) {
        console.log(numeros[index]);
    }

}

leer();
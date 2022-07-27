# Documentacion 

Lo primero que se debe hacer para poder acceder al proyecto es descargarlo, para eso, abrimos la consola de comandos, nos posicionamos en la carpeta donde queremos guardar el proyecto y luego ejecutamos los siguientes comandos :

 1. cd NombreDeCarpetaDeseada
	 Para posicionarse donde queramos guardar el proyecto.
 
 2. git clone https://github.com/NicolasDAlessandro/NBSDAlessandro.git
	 Para obtener el proyecto. 
 
 3. npm install 
	 Para instalar el proyecto.
	 
 4. npm run start 
	 Para poder ejecutar el proyecto.

## A tener en cuenta	

El proyecto fue realizado con la libreria [React](https://es.reactjs.org/) de JavaScript, su contenido esta organizado en componentes (dentro de la carpeta src) los cuales le dan distintas funcionalidades a la aplicacion, tales como :

 - Consultar a la base de datos de [Firebase](https://firebase.google.com/) la informacion de los productos guardados, y crear un catalogo donde se puedan visualizar los productos.
 - Filtrar los productos segun su categoria .
 - Mostrar los detalles del producto como su precio y la posibilidad de poder agregarlos a un carrito de compra, que tiene en cuenta el stock propio de cada producto.
 - Crear un cart widget, el cual notifica al usuario la cantidad de productos que tiene agregados, y en caso de darle click, lo direccionara al carrito.
 - Dentro del carrito podemos ver la cantidad de productos agregados, su cantidad, su precio individual, y el gasto total de la compra.
 - En caso de querer finalizar la compra, se desplegara un formulario que le pide al usuario un nombre, un email y un telefono.  Una vez completado el formulario se genera una orden la cual se guarda en la base de datos, con la informacion del cliente y de la compra. Se le otorga un id de compra al usuario y finalmente se actualiza el stock de los productos comprados.
 
 ## Para terminar
El proyecto tambien usa librerias y frameworks como 
 
 - [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start) para facilitar la navegacion entre componentes.
 - [SweetAlert2](https://sweetalert2.github.io/) para darle mensajes al usuario de una forma mas prolija. 
 - [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) y [Bootswatch](https://bootswatch.com/vapor/) para darle estilos a la aplicacion. 
	 

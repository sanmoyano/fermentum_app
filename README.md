<div align="center">
  <a href="https://github.com/sanmoyano">
    <img src="https://firebasestorage.googleapis.com/v0/b/fermentum-app.appspot.com/o/logo_fmtm.svg?alt=media&token=cba5f277-4b2f-4e31-a820-ba07f02bf21d" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Fermentum Faber</h3>
  <p align="center"> aplicación web de e-commerce
        <br />
        <a href="https://github.com/sanmoyano/fermentum_app.git"><strong>Docuementacion »</strong></a>
        <br />
        <br />
        <a href="https://github.com/github_username/repo_name">Ver Web App »</a>
    </p>
</div>

# Fermentum Faber

Conocé más de nosotros en nuestra web [Fermentum Faber](https://fermentumfaber.com/)

## Sobre el proyecto

[![Screnshot](https://firebasestorage.googleapis.com/v0/b/fermentum-app.appspot.com/o/Screenshot_1.jpg?alt=media&token=dbf1db7b-64b4-4749-8185-2188a6dbe8cb)](https://fermentumfaber.com/)

[![Screnshot](https://firebasestorage.googleapis.com/v0/b/fermentum-app.appspot.com/o/Screenshot_3.jpg?alt=media&token=5480ec88-9a55-4049-9aab-db3244ab4856)](https://fermentumfaber.com/)

[![Screnshot](https://firebasestorage.googleapis.com/v0/b/fermentum-app.appspot.com/o/Screenshot_2.jpg?alt=media&token=719e7056-d1d2-49d8-805e-4fe2d3e5a529)](https://fermentumfaber.com/)

El proyecto se trata del desarrollo de una aplicación web que permite la gestión de una tienda virtual de una fabrica de cervezas artesanales. Como usuario la aplicacion perimte realizar la compra de productos. Aun no se encuentra con metodos de pago disponibles. Y como administrador la aplicación permite gestionar los productos y las categorias de los mismos desde una base de datos en Firebase, pudiendo acceder a los datos de las compras realizadas.

### Realizado en:

- [React.js](https://reactjs.org/)

## Scripts

En el directorio del proyecto, se puede ejecutar:

### `npm start`

Ejecutar la aplicacion en modo desarrollo.\
Abrí [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La pagina se recargará cuando se realizan cambios.\

### `npm test`

Inicia el test de pruebas en el modo interactivo. Para más informacion visitá [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Crea la aplicación para producción en la carpeta de compilación.\
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minificada y los nombres de los archivos incluyen los hashes.\
¡Su aplicación está lista para ser implementada

Más informacion sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment).

## Uso de la aplicacion web

[![Mirar video](https://img.youtube.com/vi/szzeU3rCTVg/maxresdefault.jpg)](https://youtu.be/szzeU3rCTVg)

### Componentes de la aplicacion
#### Containers 

- **ItemListContainer.js** - Muestra la lista de productos y titulos en el main. Contiene el componente ItemList.js que a su vez este contiene el componente Item.js.

- **ItemDetailContainer.js** - Muestra el detalle del producto en el main. Contiene el componente ItemDetail con el componente ItemCountn.js.
#### Componentes 
- **ItemList.js** - Componente que recibe como prop todos los items y los muestra en una lista de cards es decir en Item.js y renderiza en ItemListContainer.js. 

- **Item.js** - Son las cards que se muestran en la lista de productos de ItemLis.js

- **ItemDetail.js** - Componente que recibe como prop un item y muestra los detalles del mismo y se renderiza en ItemDetailContainer.js

- **ItemCount.js** - Componente que se muestra en ItemDetail.js para mostrar la cantidad de productos seleccionados y enviarlas al carrito.

- **Carrito.js** - Componente que recibe como prop todas las variables del contexto y muestra los productos seleccionados. Tambien a través las funciones recibidas del contexto se pueden realizar las acciones de agregar, eliminar y vaciar el carrito actualizando los estados del Provider (MiProvider)
#### Providers
- **CartContext.js** - Contexto que se usa para el manejo del carrito y los estados del carrito. En este caso son la cantidad, el total y el producto agregado.

## Contacto
 [![LinkedIn][linkedin-shield]][linkedin-url]
 [![GitHub][github-shield]][github-url]
 [![Email][email-shield]][email-url]

Project Link: [https://github.com/sanmoyano/fermentum_app.git](https://github.com/sanmoyano/fermentum_app.git)


[linkedin-shield]: https://img.shields.io/badge/LinkedIn-linkedin-url?style=for-the-badge&label=LinkedIn&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/santiago-moyano
[github-shield]: https://img.shields.io/badge/GitHub-github-url?style=for-the-badge&label=GitHub&logo=github&logoColor=white
[github-url]:https://github.com/sanmoyano
[email-shield]: https://img.shields.io/badge/Email-email-url?style=for-the-badge&label=Email&logo=email&logoColor=white
[email-url]: mailto:smoyano.di@gmail.com

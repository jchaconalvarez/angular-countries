
*Cualquier duda que te pueda surgir puedes escribir un correo electrónico a [Alex](mailto:acarrasco@profile.es) y te responderé lo antes posible.*

---

## Prueba de Angular de Profile

Primeros pasos:

1. Clonar el proyecto .
2. Crear una nueva rama llamada **test-mi-nombre**.
3. Crear un proyecto en Angular y desarrollar según las especificaciones de abajo.
4. Una vez terminado el proyecto subirlo con el último **Commint** que diga: *finish*.

---

## Especificaciones

Se deberá hacer una aplicación web en la que por defecto naveguemos a la url: 
*home* donde se mostrará un listado de países. Estos países se recuperaran del
Web Service: *https://restcountries.eu/rest/v2/all?fields=name;alpha3Code*.
Cuando cliquemos encima de un país navegaremos a una página donde se mostrará
la información de ese páis y la url será: *detail/:id*. El id se encuentra
en el array de países como **alpha3Code**. Con este id recuperaremos la info
de ese país con el Web Service: 
*https://restcountries.eu/rest/v2/alpha/${alpha3Code}*. 
El detalle deberá mostrarse: el nombre, la capital, la subregion, 
la region, la población, las monedas que utilizan, los lenguajes que se
hablan y las zonas horarias que tiene. A parte se debera mostrar la bandera
del país.

Se valorará el código sobre todo si se siguen buenas prácticas y con este ejercicio 
también el objetivo es que uses todo lo que se te vaya ocurriendo como por ejemplo 
**Inputs**. En cuanto al css no es un factor importante, será positivo verlo bonito
pero no relevante. Suerte!

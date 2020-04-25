# comik 🤓📖

![comik](https://res.cloudinary.com/dqhtqecup/image/upload/v1587774742/comik/Captura_de_pantalla_2020-04-25_a_las_2.30.43_yn65et.png)

### Descripción

---

Sitio web para fans del comic. Podrán consultar informacion sobre personas y artistas relacionados con la industria, publicaciones, editoriales y personajes. Además en su perfil podrán incluir sus intereses y un listado de comics que buscan para completar su colección. Los usuarios de la web pueden añadir a otros usuarios a su lista de contactos.

### Guía de usuario

---

Cualquier usuario puede convertirse en suscriptor realizando un registro de manera sencilla. Una vez finalizado podrá disfrutar de las opciones de la plataforma personalizadas para cada usuario.

Para convertirte en administrador deberás solicitar permisos a creador de la web. Solo el perfil de administrador puede crear, editar contenido y administar usuarios.

### Guía de instalación

---

Proyecto realizado con NODE.JS, EXPRESS, NPM, MONGODB, HTML, SASS, JAVASCRIPT, ES6, REACT JS, REACT BOOTSTRAP, STYLED COMPONENTS.

**La estructura del proyecto es la siguiente**

- **MODELS:** Existen 5 schemas de Moongose: User, Professional, Issue, Publisher y Character. El modelo User se encuentra relaccionado con los otros 4 de modo que el usuario puede almacenar listas de favoritos y de comics que busca para completar su coleccion.
- **CLIENT:** Proyecto en REACT JS, construido con componentes gestiona la parte visual y los servicios que solicitan información a la base de datos.
- **SERVER:** Servidor EXPRESS y MONGODB. Gestiona las distintas llamadas para las peticiones a la base de datos (CRUD). 
- **DDBB:** El contenido inicial de aplicación proviene de la API [Comik Vine](https://comicvine.gamespot.com/api/), y se construye con seeds. La base de datos se encuentra alojada en [Mongo DB Atlas](https://www.mongodb.com/cloud/atlas).
- **CDN:** Se utiliza el servicio de [Cloudinary](https://cloudinary.com/) para servir los ficheros estáticos.

### Cómo contribuir

---

Toda aportación o comentario será recibido de buen gusto, ya que con ellos se podrá ayudar a mejorar la aplicación y a su creador en el proceso de aprendizaje.

Cualquier mejora será incluida tras una previa revisión a través de un **“pull requests”**. Se requiere un código ordenado y comentado.

Existen varias **líneas de mejora**, algunas de ellas son:

- **Incluir página de cada usuario:** Habilitar un perfil publico para el resto de usuarios.
- **Añadir una forma de comunicación:** Mensajes o comentarios entre usuarios.
- **Implementar un sistema de reviews** Reviews del contenido alojado en la plataforma por ejemplo los Issues.
- **Notificaciones** Notificaciones para el usuario que ha sido añadido a la lista de contactos de otro usuario.

### Código de conducta

---

En el siguiente enlace se muestra el [Código de Conducta](https://github.com/PiliGar/comik/blob/master/CODE_OF_CONDUCT.md).

### Autor

---

[Pilar García Campo](https://www.linkedin.com/in/pilargarciacampo/)

### Licencia

---

Aquí se puede consultar la [Licencia](https://github.com/PiliGar/comik/blob/master/LICENSE) para este repositorio.

# ClinicaHeippiAndreaBedoya
Para el desarrollo de este proyecto se utilizo el patrón de diseño MVC (Modelo Vista Controlador).
Donde cada componente cumple un roll específico, actúa de manera independiente y está aislado de los otros dos.

Vista: Es la capa que interactúa con el cliente, la interfaz gráfica en si, lo que ve el usuario, muestra y
obtiene información, funciona por eventos (interacciones del usuario con la interfaz, HTML, CSS de la APP).

Modelo: Relaciona los datos de la aplicación, se encarga de realizar la consulta a la base de datos y
de administrar lo que comúnmente se conoce como “la lógica de negocio”. Es una capa agnóstica de las vistas 
(es decir, completamente aislada).

Controlador: Responde a las acciones o eventos del cliente a través de las vistas. Se encarga a elegir 
la vista a mostrar y los datos a procesar, es el enlace que interactúa las vistas con los modelos 
(la vista no puede interactuar directamente con el modelo, por lo tanto el controlador pasa a ser el intermediario).

Se utilizo la base de datos no relacional MongoDB, utilizando el servicio de mongo atlas que utiliza capas
gratuitas o pagas de servidores especializados en una base de datos no relacional.

La librería Express permite crear app rápidas y sostenibles.

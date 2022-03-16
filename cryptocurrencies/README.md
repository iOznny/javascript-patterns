# Seguridad en JavaScript
- No almacenes password en local storage o indexed db.
- El DOM Scripting ya escala los datos y evita riesgos de seguridad, utiliza TextContent la mayoria de las veces.
- InnerHTML solo cuando la fuente de los datos es segura.

# Formularios
- Validar en el Cliente (JS) para retroalimentación en tiempo real, pero tambien del lado del servidor.
- La autenticación utilizar JWT o Auth0.

# Otras Consideraciones
- Cuando trabajes con dependencias, utiliza una herramienta para verificar vulnerabilidades como snyk.io
- Ofuscar el codigo si lo consideras necesario.
- Hashea informacion sensible con bcrypt.
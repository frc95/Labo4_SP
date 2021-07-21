En nuestro sistemas manejamos las materias de una facultad, con tres tipo de usuarios(alumno, profesor y
administrador).

Para toda entidad hacemos el componente que nos permita dar de alta /editar y el que muestre un listado de
esa entidad como mínimo, y la comunicación se debe realizar por input ,output y servicios .
Se debe usar firebase como base de datos.

1- Crear el formulario de alta de un usuario con los siguientes campos: mail, clave , tipo de usuario (alumno, profesor ) Validar los datos.

2- Crear el formulario de login, si el login es exitoso redirigir al home de la página, de lo contrario informar el error.

4- Realizar un componente para que el email del usuario siempre esté visible en la página.

5- Solo lo puede ver el administrador( canAvtivate ) administrador:

  a. Crear el formulario de alta de un administrador con los siguientes campos: mail, clave Validar los datos.

  b. Dar de alta una materia con los siguientes datos (validar los datos): 
      Nombre de la materia, Cuatrimestre, Cupo de alumnos, año,
      Profesor(debe existir en la base), se muestra con el componente que lista los profesores y por input o output debería comunicarse con el alta de materia.

  c. inscripcion materia : muestra el listados de materias y el listado de alumnos permitiendo seleccionar y agregar alumnos mientras el cupo de alumnos lo permita de esa materia
  
  d. Ver listado de materias y al seleccionar una materia ver los alumnos de las materias (input y output)
  
  e. Ver listado de usuarios, puede filtrar por tipo.Usar un PIPE en el listado para cambiar lo que se va a mostrar.
  
6 Para Alumno:
  a. Inscribirse en una materia.
  b. Ver materias en las que está inscripto.
  c. Generar un PIPE que muestre aprobado, desaprobado, promocionado. (aprobado 4-6. desaprobado 1-4. promocionado 6-10)
  
7- Para profesor:
  a. Ver materias a cargo
  b. Ver alumnos inscriptos en materia que dicta.

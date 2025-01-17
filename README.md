# typeScript_Workshop3

Historias de Usuario con Criterios de Aceptación
Historia de Usuario 1: Gestión de Inventario de Medicamentos
Descripción:
Como gerente de inventario, quiero poder gestionar el stock de medicamentos en el almacén para asegurar que siempre haya suficiente stock disponible y evitar caducidades.

Criterios de Aceptación:
El sistema debe permitir agregar nuevos medicamentos con las propiedades id, nombre, cantidad, fechaDeCaducidad y precio.
El sistema debe permitir actualizar la cantidad de un medicamento existente.
El sistema debe permitir eliminar medicamentos caducados automáticamente.
El sistema debe permitir listar todos los medicamentos disponibles y mostrar su información detallada.
Implementación en TypeScript:
Crear una interfaz Medicamento con las propiedades necesarias.
Implementar una clase Inventario con métodos para agregar, actualizar, eliminar y listar medicamentos.
Utilizar métodos estáticos para gestionar el inventario.
Asegurar que los métodos verifican el tipo de datos de las propiedades y realizan las operaciones necesarias.
Historia de Usuario 2: Registro de Pacientes y Prescripciones
Descripción:
Como doctor, quiero poder registrar pacientes y sus prescripciones para llevar un control detallado de los tratamientos asignados.

Criterios de Aceptación:
El sistema debe permitir registrar nuevos pacientes con las propiedades id, nombre, edad, historialMedico.
El sistema debe permitir añadir prescripciones a un paciente con las propiedades medicamentoId, dosis, frecuencia y duración.
El sistema debe permitir listar todas las prescripciones de un paciente.
El sistema debe asegurar que solo medicamentos disponibles en el inventario pueden ser prescritos.
Implementación en TypeScript:
Crear una interfaz Paciente y una interfaz Prescripcion.
Implementar una clase RegistroPacientes con métodos para registrar pacientes y añadir prescripciones.
Utilizar métodos para listar prescripciones y verificar la disponibilidad de medicamentos en el inventario.
Asegurar el uso de tipos estáticos para todas las propiedades y métodos.
Historia de Usuario 3: Análisis de Datos de Tratamientos
Descripción:
Como analista de datos, quiero poder analizar los datos de tratamientos para identificar patrones y mejorar la eficiencia del tratamiento de pacientes.

Criterios de Aceptación:
El sistema debe permitir filtrar tratamientos por medicamento, frecuencia y duración.
El sistema debe generar estadísticas sobre el uso de medicamentos, incluyendo el total de dosis administradas y la frecuencia de uso.
El sistema debe permitir exportar los datos filtrados y las estadísticas en formato CSV.
El sistema debe asegurar que los datos son precisos y están actualizados.
Implementación en TypeScript:
Crear una clase AnalisisDatos con métodos para filtrar tratamientos y generar estadísticas.
Utilizar funciones y métodos estáticos para realizar análisis y exportar datos.
Asegurar que los métodos verifican el tipo de datos y realizan las operaciones necesarias.
Utilizar bibliotecas de terceros como csv-writer para exportar los datos en formato CSV.

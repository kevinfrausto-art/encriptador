Introducción
Este código JavaScript implementa una sencilla función de encriptación y desencriptación basada en un conjunto de reglas específicas. Se utiliza para reemplazar ciertas vocales por combinaciones de letras más largas, con el objetivo de ocultar un mensaje.

Funcionalidades principales:
Selección de elementos:
textArea: Obtiene el elemento HTML donde se ingresa el texto a encriptar o desencriptar.
mensaje: Obtiene el elemento HTML donde se mostrará el resultado de la encriptación o desencriptación.
Encriptación:
La función encriptar toma una cadena de texto como entrada.
Itera sobre una matriz que contiene las sustituciones de vocales (e.g., "e" se reemplaza por "enter").
Si encuentra una coincidencia, reemplaza todas las ocurrencias de la vocal original por su correspondiente sustitución.
Convierte todo el texto a minúsculas para asegurar una comparación correcta.
Desencriptación:
La función desEncriptar realiza la operación inversa a la encriptación.
Utiliza la misma matriz de sustituciones pero busca las cadenas más largas para reemplazarlas por las vocales originales.
Botones:
btnEncriptar: Llama a la función encriptar y muestra el resultado en el elemento mensaje.
BtnDesEncriptar: Llama a la función desEncriptar y muestra el resultado en el elemento mensaje.
btnCopiar: Copia el texto encriptado o desencriptado al portapapeles.
Cómo funciona la encriptación:
Conversión a minúsculas: Todo el texto se convierte a minúsculas para facilitar la comparación.
Iteración y reemplazo: Se itera sobre una matriz que define las sustituciones de vocales.
Si se encuentra una coincidencia, se reemplazan todas las ocurrencias de la vocal original por su correspondiente sustitución.
Retorno del texto encriptado: Se devuelve el texto resultante después de realizar todos los reemplazos.
Limitaciones y consideraciones:
Sencillez: Este método de encriptación es muy básico y no proporciona una seguridad fuerte. Es más adecuado para fines educativos o como un ejercicio de programación.
Mayúsculas: No se manejan las mayúsculas. Si se desean encriptar textos con mayúsculas, se debe agregar una lógica adicional para convertirlas a minúsculas antes de la encriptación y volver a convertirlas a mayúsculas después de la desencriptación.
Espacios y otros caracteres: El código solo reemplaza las vocales especificadas en la matriz. Otros caracteres, como espacios o signos de puntuación, no se modifican.

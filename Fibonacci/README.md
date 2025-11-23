📘 Proyecto: Generación de la Secuencia de Fibonacci



Práctica del módulo de Programación — CFGS Desarrollo de Aplicaciones Web



Este proyecto forma parte de una práctica del módulo de Programación del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW).

El objetivo es desarrollar una aplicación de consola en C# que:



Solicite un número entero dentro de un rango concreto.



Valide la entrada del usuario.



Genere la secuencia de Fibonacci del tamaño indicado.



Muestre la secuencia original e invertida.



📌 Objetivos de la práctica



Trabajar con entrada y validación de datos por consola.



Usar estructuras de control y colecciones.



Implementar la generación de la secuencia de Fibonacci.



Manipular listas (inversión, almacenamiento, recorrido).



Familiarizarse con la sintaxis básica del lenguaje C#.



🧮 ¿Qué es la secuencia de Fibonacci?



La secuencia de Fibonacci es una sucesión numérica donde cada número es la suma de los dos anteriores.

Comienza típicamente por:



0, 1, 1, 2, 3, 5, 8, 13...





En este proyecto, el usuario decide cuántos términos quiere generar.



▶️ Funcionamiento del programa



El programa solicita al usuario un número entero entre 7 y 22.



Se valida que la entrada sea correcta:



Debe ser un número entero.



Debe estar dentro del rango permitido.



Una vez validado:



Se genera una lista con los primeros n números de Fibonacci.



Se muestra la secuencia original.



Se muestra la secuencia invertida.



🧩 Código principal

using System;

using System.Collections.Generic;



namespace PAC\_desarrollo\_1

{

&nbsp;   internal class Program

&nbsp;   {

&nbsp;       static void Main(string\[] args)

&nbsp;       {

&nbsp;           Console.Write("Introduce un número entero comprendido entre 7 y 22 (ambos inclusive): ");

&nbsp;           string? entrada = Console.ReadLine();

&nbsp;           Console.WriteLine();



&nbsp;           if (!int.TryParse(entrada, out int numero))

&nbsp;           {

&nbsp;               Console.WriteLine("Entrada no válida. Se esperaba un número entero.");

&nbsp;               return;

&nbsp;           }



&nbsp;           if (numero < 7 || numero > 22)

&nbsp;           {

&nbsp;               Console.WriteLine("El número introducido no es correcto.");

&nbsp;               return;

&nbsp;           }



&nbsp;           var fib = new List<int>();

&nbsp;           int x = 0;

&nbsp;           int y = 1;



&nbsp;           for (int i = 0; i < numero; i++)

&nbsp;           {

&nbsp;               fib.Add(x);

&nbsp;               int z = x + y;

&nbsp;               x = y;

&nbsp;               y = z;

&nbsp;           }



&nbsp;           Console.WriteLine($"La secuencia de Fibonacci para el número {numero} es:");

&nbsp;           Console.WriteLine(string.Join(", ", fib));

&nbsp;           Console.WriteLine();



&nbsp;           fib.Reverse();

&nbsp;           Console.WriteLine("La secuencia de Fibonacci inversa es:");

&nbsp;           Console.WriteLine(string.Join(", ", fib));

&nbsp;           Console.WriteLine();

&nbsp;       }

&nbsp;   }

}



🛠️ Tecnologías utilizadas



Lenguaje: C#



Framework: .NET (versión estándar para aplicaciones de consola)



Entorno: Cualquier IDE compatible con .NET (Visual Studio, Visual Studio Code, Rider…)



🚀 Cómo ejecutar el proyecto



Clona el repositorio:



git clone https://github.com/tuusuario/nombre-del-repo.git





Entra en la carpeta del proyecto:



cd nombre-del-repo





Compila y ejecuta:



dotnet run



📚 Aprendizajes adquiridos



Durante esta práctica se han trabajado los siguientes conceptos:



Lectura y validación de datos por consola.



Manejo de tipos básicos y conversión segura (int.TryParse).



Implementación de bucles y operaciones matemáticas.



Uso de listas genéricas (List<int>).



Manipulación y presentación de datos en consola.



💡 Posibles mejoras futuras



Implementar menú interactivo.



Permitir generar más de una secuencia en la misma ejecución.



Añadir manejo de excepciones más avanzado.



Crear pruebas unitarias para validar la función generadora de Fibonacci.



Exportar la secuencia generada a un archivo (txt, json, csv).


# 📘 Proyecto: Generación de la Secuencia de Fibonacci

Práctica del módulo de Programación — CFGS Desarrollo de Aplicaciones Web

Este proyecto forma parte de una práctica del módulo de Programación del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW).  
El objetivo es desarrollar una aplicación de consola en C# que:

- Solicite un número entero dentro de un rango concreto.  
- Valide la entrada del usuario.  
- Genere la secuencia de Fibonacci del tamaño indicado.  
- Muestre la secuencia original e invertida.  

---

## 📌 Objetivos de la práctica

- Trabajar con entrada y validación de datos por consola.  
- Usar estructuras de control y colecciones.  
- Implementar la generación de la secuencia de Fibonacci.  
- Manipular listas (inversión, almacenamiento, recorrido).  
- Familiarizarse con la sintaxis básica del lenguaje C#.  

---

## 🧮 ¿Qué es la secuencia de Fibonacci?

La secuencia de Fibonacci es una sucesión numérica donde cada número es la suma de los dos anteriores.  
Comienza típicamente por: 0, 1, 1, 2, 3, 5, 8, 13...
En este proyecto, el usuario decide cuántos términos quiere generar.

---

## ▶️ Funcionamiento del programa

1. El programa solicita al usuario un número entero entre **7 y 22**.  
2. Se valida que la entrada sea correcta:
   - Debe ser un número entero.  
   - Debe estar dentro del rango permitido.  
3. Una vez validado:
   - Se genera una lista con los primeros *n* números de Fibonacci.  
   - Se muestra la secuencia original.  
   - Se muestra la secuencia invertida.  

---

## 🧩 Código principal

```csharp
using System;
using System.Collections.Generic;

namespace PAC_desarrollo_1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Introduce un número entero comprendido entre 7 y 22 (ambos inclusive): ");
            string? entrada = Console.ReadLine();
            Console.WriteLine();

            if (!int.TryParse(entrada, out int numero))
            {
                Console.WriteLine("Entrada no válida. Se esperaba un número entero.");
                return;
            }

            if (numero < 7 || numero > 22)
            {
                Console.WriteLine("El número introducido no es correcto.");
                return;
            }

            var fib = new List<int>();
            int x = 0;
            int y = 1;

            for (int i = 0; i < numero; i++)
            {
                fib.Add(x);
                int z = x + y;
                x = y;
                y = z;
            }

            Console.WriteLine($"La secuencia de Fibonacci para el número {numero} es:");
            Console.WriteLine(string.Join(", ", fib));
            Console.WriteLine();

            fib.Reverse();
            Console.WriteLine("La secuencia de Fibonacci inversa es:");
            Console.WriteLine(string.Join(", ", fib));
            Console.WriteLine();
        }
    }
}
```

## 🛠️ Tecnologías utilizadas
- Lenguaje: C#
- Framework: .NET (versión estándar para aplicaciones de consola)
- Entorno: Cualquier IDE compatible con .NET (Visual Studio, Visual Studio Code, Rider…)

## 🚀 Cómo ejecutar el proyecto
- Clona el repositorio:
git clone https://github.com/tuusuario/nombre-del-repo.git

- Entra en la carpeta del proyecto:
cd nombre-del-repo

- Compila y ejecuta:
dotnet run

## 📚 Aprendizajes adquiridos
Durante esta práctica se han trabajado los siguientes conceptos:
- Lectura y validación de datos por consola.
- Manejo de tipos básicos y conversión segura (int.TryParse).
- Implementación de bucles y operaciones matemáticas.
- Uso de listas genéricas (List<int>).
- Manipulación y presentación de datos en consola.

## 💡 Posibles mejoras futuras
- Implementar menú interactivo.
- Permitir generar más de una secuencia en la misma ejecución.
- Añadir manejo de excepciones más avanzado.
- Crear pruebas unitarias para validar la función generadora de Fibonacci.
- Exportar la secuencia generada a un archivo (txt, json, csv).

## 📝 Licencia
Este proyecto se publica únicamente con fines educativos como parte del módulo de Programación del CFGS Desarrollo de Aplicaciones Web.







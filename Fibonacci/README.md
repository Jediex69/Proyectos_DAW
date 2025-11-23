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

namespace PAC_desarrollo_1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Recoger por consola un número entero y validar su valor.

            Console.Write("Introduce un número entero comprendido entre 7 y 22 (ambos inclusive): ");

            int numero = int.Parse(Console.ReadLine());
            Console.WriteLine();

            if (numero >= 7 && numero <= 22)
            {
                /*Crear la secuencia Fibonacci compuesta por tantos
                 elementos como indique el valor del número introducido.
                 Para ello declaramos tres variables x, y, z, donde x e y estan inicializadas
                 a 0 y 1 respectivamente, y z la usamos para almacenar la suma de x e y*/

                int x = 0;
                int y = 1;
                int z;

                Console.WriteLine("La secuencia de Fibonacci para el número " + numero + " es: \t\t");

                for (int i = 0; i < numero; i++)
                {
                    //Se imprime el valor actual de x.
                    Console.Write(x + ", ");

                    //Se calcula z y se actualizan x e y para la siguiente iteración del bucle.
                    z = x + y;
                    x = y;
                    y = z;
                }
                Console.WriteLine();

                /*Crear la secuencia Fibonacci con los valores invertidos:
                 se toma como referencia la secuencia Fibonacci generada y se invierte su orden.*/

                Console.WriteLine();
                Console.WriteLine("La secuencia de Fibonacci inversa para el número " + numero + " es: \t");

                for (int i = 0; i < numero; i++)
                {
                    /*Deshacemos la secuencia directa partiendo del último valor asignado en
                     memoria a las variables y actualizándolas del siguiente modo 
                     para obtener la secuencia inversa*/
                    z = y - x;
                    y = x;
                    x = z;

                    //Se imprime el valor de z.
                    Console.Write(z + ", ");
                }
                Console.WriteLine();
                Console.WriteLine();
            }
            else
            {
                //En caso de que el número introducido sea incorrecto.
                Console.WriteLine("El número introducido no es correcto.");
            }
        }
    }
}

```

## 🛠️ Tecnologías utilizadas
- Lenguaje: C#
- Framework: .NET (versión estándar para aplicaciones de consola)
- Entorno: Cualquier IDE compatible con .NET (Visual Studio, Visual Studio Code, Rider…)

## 📚 Aprendizajes adquiridos
Durante esta práctica se han trabajado los siguientes conceptos:
- Lectura y validación de datos por consola.
- Manejo de tipos básicos y conversión segura (int.TryParse).
- Implementación de bucles y operaciones matemáticas.
- Uso de listas genéricas (List<int>).
- Manipulación y presentación de datos en consola.

## 📝 Licencia
Este proyecto se publica únicamente con fines educativos como parte del módulo de Programación del CFGS Desarrollo de Aplicaciones Web.







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
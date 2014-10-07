using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace ConsoleApplication1
{
    public class Program
    {
        public static void Main()
        {
            var range = Enumerable.Range(1, 99);
            Console.Write(range.Select(a => range.Select(b => BigInteger.Pow(new BigInteger(a), b).ToString().ToCharArray().Select(c => int.Parse(c.ToString())).Sum()).Max()).Max());
            Console.ReadLine();
        }
    }
}

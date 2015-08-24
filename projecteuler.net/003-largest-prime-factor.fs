// PROBLEM //

(*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*)

// ANSWER //
module Program

open System

let factors(n:int64) =
  let upperBound = int64(Math.Sqrt(double(n)))
  [2L..upperBound]
  |> Seq.filter(fun x -> n % x = 0L)

let isPrime(n:int64) =
  factors n
  |> Seq.length = 0

let maxFactor(n:int64) =
  factors n
  |> Seq.filter(isPrime)
  |> Seq.max

let result = maxFactor 600851475143L

// val result : int64 = 6857L

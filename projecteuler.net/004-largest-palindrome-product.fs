// PROBLEM //

(*
A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 * 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*)

// ANSWER //
module Program

open System.Linq

let isPalindrome n =
  let charArray = n.ToString().ToCharArray()
  let reverseCharArray = Array.rev charArray
  charArray.SequenceEqual(reverseCharArray)

let numbers = [100..999]
let products =
  numbers
  |> List.collect (fun x -> numbers |> List.map(fun y -> x * y))

let result =
  products
  |> Seq.filter isPalindrome
  |> Seq.max

// val result : int = 906609

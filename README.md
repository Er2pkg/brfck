# brfck

An easy and expandable Brainfuck and another estoteric languages interpreter

# Brainfuck

## Brainfuck syntaxes

|BrainFuck|BrainFuck++|EZscript|RediScript|
|:-------:|:-------:|:------:|:--------:|
|>|>|**N**ext|L|
|<|<|**P**rev|P|
|+|+|p**L**us|E|
|-|-|**M**inus|D|
|.|.|**O**utput|I|
|,|,|**I**nput| |
|[|[|**S**tart|{|
|]|]|**E**nd|}|
| |#|**R**eset|R|

## Learning Brainfuck

Designed by Urban Müller in 1993, Brainfuck is a Turing-complete programming language made of eight instructions, each a single character in length, and no operands:

    > : increments the data pointer
    < : decrements the data pointer
    + : increases byte-value at the data pointer by one
    - : decreases byte-value at the data pointer by one
    . : converts the byte-value at the data pointer into an ASCII character
    , : accepts input an stores it's byte-value at the data pointer
    [ : if the byte-value at the data pointer is zero, jump forward to the instruction after the matching ']'
    ] : if the byte-value at the data pointer is non-zero, jump back to the instruction after the matching '['

# HQ9+

## Commands

    H    : prints "Hello, world!"
    Q    : prints program source code
    9    : prints the lyrics to 99 Bottles of Beer
    +, P : add one to accumulator, useless
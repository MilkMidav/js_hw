"use strict"

const str = "[html, body, header, div, img]";

const line = str.substring(1, str.length - 1);

const result = line.replaceAll(' ', '>').replaceAll(',', '-');

console.log(result)
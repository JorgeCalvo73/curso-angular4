//PIPE PERSONALIZADA

import { Pipe, PipeTransform } from '@angular/core';

//Decorador necesario para crear una pipe
@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform{

    //En esta pipe haremos recogeremos dos números y devolveremos un string con el
    //valor de los números multiplicados.
    transform(value_1, value_2){
        let value_uno = parseInt(value_1);
        let value_two = parseInt(value_2);

        let result = value_uno + " x " + value_two + " = " + (value_uno * value_two);

        return result;
    }
}
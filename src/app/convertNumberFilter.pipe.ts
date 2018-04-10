import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertNumberFilter'
})

export class ConvertNumberFilterPipe implements PipeTransform {
    transform(searchObj: any): any {
        searchObj=searchObj.replace(/[0]/g, "zero");
        searchObj=searchObj.replace(/[1]/g, "one");
        searchObj=searchObj.replace(/[2]/g, "two");
        searchObj=searchObj.replace(/[3]/g, "three");
        searchObj=searchObj.replace(/[4]/g, "four");
        searchObj=searchObj.replace(/[5]/g, "five");
        searchObj=searchObj.replace(/[6]/g, "six");
        searchObj=searchObj.replace(/[7]/g, "seven");
        searchObj=searchObj.replace(/[8]/g, "eight");
        searchObj=searchObj.replace(/[9]/g, "nine");

        return searchObj;
    }
}
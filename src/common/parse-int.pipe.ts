import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    let val = Number(value)

    if(isNaN(val)) {
      throw new BadRequestException("Type number expected. String received instead")
    }

    return val;
  }
}

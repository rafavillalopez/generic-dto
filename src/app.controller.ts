import { Controller, Get } from '@nestjs/common';
import { ApiExtraModels } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ApiPaginatedResponse } from './decorators/customPaginate.decorator';
import { PaginatedDto } from './dto/basePagination.dto';
import { CatDto } from './dto/cat.dto';

@Controller()
@ApiExtraModels(PaginatedDto)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cats')
  @ApiPaginatedResponse(CatDto)
  findCats(): Promise<PaginatedDto<CatDto>> {
    return this.appService.findAll();
  }
}

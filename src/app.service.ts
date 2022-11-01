import { Injectable } from '@nestjs/common';
import { PaginatedDto } from './dto/basePagination.dto';
import { CatDto } from './dto/cat.dto';

const mockCats: CatDto[] = [{ name: 'Raul', age: 2, breed: 'Mich' }];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<PaginatedDto<CatDto>> {
    return {
      total: 1,
      limit: 5,
      offset: 0,
      results: mockCats,
    };
  }
}

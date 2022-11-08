import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';
import { Cat } from 'src/interfaces/cat/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catService.findAll();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rate } from './entities/rate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RateService {
  constructor(
    @InjectRepository(Rate)
    private ratesRepository: Repository<Rate>,
  ) {}

  async create(createRateDto: CreateRateDto) {
    return await this.ratesRepository.save(createRateDto);
  }

  async findAll() {
    return await this.ratesRepository.find();
  }

  async findOne(id: number) {
    return await this.ratesRepository.findOneBy({ id: id });
  }

  async update(id: number, updateRateDto: UpdateRateDto) {
    const rate = await this.ratesRepository.findOneBy({ id: id });
    if (!rate) throw new NotFoundException(`Rate #${id} not found`);
    await this.ratesRepository.update(id, updateRateDto);
    return rate;
  }

  async remove(id: number) { 
    const rate = await this.ratesRepository.findOneBy({ id: id });
    if (!rate) throw new NotFoundException(`Rate #${id} not found`);
    await this.ratesRepository.delete(id);
    return true;
  }
}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { Rate } from './entities/rate.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Rate])],
  controllers: [RateController],
  providers: [RateService],
})
export class RateModule {}

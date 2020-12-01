import { Test, TestingModule } from '@nestjs/testing';
import { PrismaServiceService } from './prisma-service.service';

describe('PrismaServiceService', () => {
  let service: PrismaServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaServiceService],
    }).compile();

    service = module.get<PrismaServiceService>(PrismaServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

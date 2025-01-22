import { Injectable } from '@nestjs/common';
import { WalletEntity } from './entities/wallet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WalletRepository extends Repository<WalletEntity> {}

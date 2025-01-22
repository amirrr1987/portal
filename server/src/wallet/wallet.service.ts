import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletEntity } from './entities/wallet.entity';
import { Repository } from 'typeorm';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(WalletEntity)
    private readonly walletRepository: WalletRepository,
  ) {}
  async createWallet(createWalletDto: CreateWalletDto) {
    const wallet = this.walletRepository.create(createWalletDto);
    await this.walletRepository.save(wallet);
  }

  async findWalletList() {
    return await this.walletRepository.find();
  }

  async findWalletById(id: string) {
    return await this.walletRepository.findOneBy({ id });
  }

  async updateWalletById(id: string, updateWalletDto: UpdateWalletDto) {
    return await this.walletRepository.update(id, updateWalletDto);
  }

  async deleteWalletById(id: string) {
    return await this.walletRepository.delete(id);
  }
}

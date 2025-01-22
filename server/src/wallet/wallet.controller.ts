import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  createWallet(@Body() createWalletDto: CreateWalletDto) {
    return this.walletService.createWallet(createWalletDto);
  }

  @Get()
  findWalletList() {
    return this.walletService.findWalletList();
  }

  @Get(':id')
  findWalletById(@Param('id') id: string) {
    return this.walletService.findWalletById(id);
  }

  @Patch(':id')
  updateWalletById(
    @Param('id') id: string,
    @Body() updateWalletDto: UpdateWalletDto,
  ) {
    return this.walletService.updateWalletById(id, updateWalletDto);
  }

  @Delete(':id')
  deleteWalletById(@Param('id') id: string) {
    return this.walletService.deleteWalletById(id);
  }
}

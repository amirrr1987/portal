import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletModule } from './wallet/wallet.module';
import { FactorModule } from './factor/factor.module';
import { DiscountModule } from './discount/discount.module';
import { TicketModule } from './ticket/ticket.module';
import { ViolationModule } from './violation/violation.module';
import { TransferModule } from './transfer/transfer.module';
import { ImageModule } from './image/image.module';
import { AccountModule } from './account/account.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb', // نوع دیتابیس
      url: 'mongodb://localhost:27017/portal', // آدرس MongoDB
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // مسیر entity ها
      synchronize: true, // همگام‌سازی خودکار (فقط برای محیط توسعه)
      useUnifiedTopology: true, // استفاده از موتور جدید MongoDB
    }),
    WalletModule,
    FactorModule,
    DiscountModule,
    TicketModule,
    ViolationModule,
    TransferModule,
    ImageModule,
    AccountModule,
    CategoryModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

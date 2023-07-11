import { Module } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { TrpcRouter } from './trpc.router';

@Module({
  imports: [],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}

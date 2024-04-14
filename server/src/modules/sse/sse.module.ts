import { Module } from '@nestjs/common';
import { SseController } from './sse.controller';
import { ServerEventService } from './sse.service';

@Module({
  imports: [],
  providers: [ServerEventService],
  controllers: [SseController],
})
export class SseModule {}

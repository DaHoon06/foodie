import { Controller, Sse, MessageEvent } from '@nestjs/common';
import { Observable, interval, map } from 'rxjs';
import { ServerEventService } from './sse.service';

@Controller('sse')
export class SseController {
  constructor(private readonly serverEventService: ServerEventService) {}

  @Sse('healthy-checked')
  healtyChecked(): Observable<MessageEvent> {
    console.log('checked');
    return interval(150000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}

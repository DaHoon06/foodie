import {Controller, Get, HttpStatus} from '@nestjs/common';
import {SuccessResponse} from "@common/decorators/response/success.decorator";

@Controller()
export class AppController {
  constructor() {}

  @Get('/healthy-check')
  @SuccessResponse(HttpStatus.CREATED, [
    {
      model: String,
      exampleDescription: '앱이 살아있는지 체크한다.',
      exampleTitle: '헬시체크',
      overwriteValue: true,
      isDataSingle: true,
    }
  ])
  healthCheck(): string {
    return 'hello world';
  }
}

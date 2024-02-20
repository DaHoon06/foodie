import { applyDecorators, HttpStatus, Type } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { ResponseSuccessDto } from '@common/decorators/response/dto/response-success.dto';
import { makeInstanceByApiProperty } from '@common/decorators/response/makeInstanceByApiProperty';

interface SuccessResponseOption {
  /**
   * DTO 스키마
   * */
  model: Type<any>;
  /**
   * @description responses - examples 항목
   * */
  exampleTitle: string;
  /**
   * @description responses - examples 항목에 대한 설명을 기술
   * */
  exampleDescription: string;
  /**
   * @description 위 model의 인자 값중 <T>제네릭 형태일 경우에 T로 들어갈 인자를 입력
   * */
  generic?: Type<any>;
  /**
   * @description 직접 객체를 작성하여 기존 DTO ApiProperty에 오버라이트하여 객체를 추가 및 수정 할수 있습니다
   * */
  overwriteValue?: Record<string, any> | any;
  /**
   * @description 기존 DTO의 Property를 사용하지 않고 overwriteValue로만 사용이 필요할 경우 boolean인 true로 세팅
   * 기본값은 false로 정의 - 기존 Property를 사용
   * */
  isDataSingle?: boolean;
}

/**
 * @description 각각의 객체를 병합 메서드
 * */
const mergeObjects = <T extends object = object>(
  target: T,
  ...sources: T[]
): T => {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (source === undefined) {
    return target;
  }
  if (isMergebleObject(target) && isMergebleObject(source)) {
    Object.keys(source).forEach(function (key: string) {
      if (isMergebleObject(source[key])) {
        if (!target[key]) {
          target[key] = {};
        }
        mergeObjects(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  }

  return mergeObjects(target, ...sources);
};
/**
 * @description 객체 인지 여부 확인
 * */
const isObject = (item: any): boolean => {
  return item !== null && typeof item === 'object';
};

const isMergebleObject = (item): boolean => {
  return isObject(item) && !Array.isArray(item);
};

export const SuccessResponse = (
  statusCode: HttpStatus,
  successResponseOptions: SuccessResponseOption[],
) => {
  const examples = successResponseOptions
    .map((response: SuccessResponseOption) => {
      // base CommonResponse 를 만듭니다.
      const commonResponseInstance =
        makeInstanceByApiProperty<ResponseSuccessDto<any>>(ResponseSuccessDto);

      const DtoModel = response.model;

      // dto 객체를 만든다. 제네릭은 옵셔널 한 값이라 없으면 없는대로 만든다.
      const dtoData = makeInstanceByApiProperty<typeof DtoModel>(
        DtoModel,
        response.generic,
      );
      // overWriteValue가 있으면 오버라이트
      // 정보를 좀더 커스텀 할 수있다.
      if (!response.isDataSingle) {
        if (response.overwriteValue) {
          commonResponseInstance.data = mergeObjects(
            {},
            dtoData,
            response.overwriteValue,
          );
        } else {
          commonResponseInstance.data = dtoData;
        }
      } else {
        commonResponseInstance.data = response.overwriteValue;
      }

      /**
       * @description Swagger - Responses - Example Value 화면에 HttpStatus 상태코드로 선언
       * */
      commonResponseInstance.code = statusCode;
      // 예시 정보를 만든다 ( 스웨거의 examplse)
      return {
        [response.exampleTitle]: {
          value: commonResponseInstance,
          description: response.exampleDescription,
        },
      };
    })
    .reduce(function (result, item) {
      Object.assign(result, item);
      return result;
    }, {}); // null 값 있을경우 필터링

  // 스키마를 정의 내리기 위한 함수들
  const extraModel = successResponseOptions.map((e) => {
    return e.model;
  }) as unknown as Type[];
  // 중복값 제거
  const setOfExtraModel = new Set(extraModel);
  // $ref 추가
  const pathsOfDto = [...setOfExtraModel].map((e) => {
    return { $ref: getSchemaPath(e) };
  });
  // 제네릭 관련
  const extraGeneric = successResponseOptions
    .map((e) => {
      return e.generic;
    })
    .filter((e) => e) as unknown as Type[];
  const pathsOfGeneric = extraGeneric.map((e) => {
    return { $ref: getSchemaPath(e) };
  });

  return applyDecorators(
    // $ref를 사용하기 위해선 extraModel 로 등록 시켜야한다.
    ApiExtraModels(...extraModel, ...extraGeneric, ResponseSuccessDto),
    ApiResponse({
      status: statusCode,
      content: {
        'application/json': {
          schema: {
            // 베이스 스키마
            additionalProperties: {
              $ref: getSchemaPath(ResponseSuccessDto),
            },
            // dto 스키마들
            oneOf: [...pathsOfDto, ...pathsOfGeneric],
          },
          // 예시값
          examples: examples,
        },
      },
    }),
  );
};

import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantService } from '../restaurant.service';
import { RestaurantRepository } from '../restaurant.repository';
import { Restaurant, RestaurantDocument } from '../schema/restaurant.scheme';
import { getModelToken } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { DataBaseModule } from '@config/db/db.module';
import { MongoDataBase } from '@config/db/mongoCollections';

describe('restaurantService Test Case', () => {
  let service: RestaurantService;
  let repository: RestaurantRepository;
  let model: Model<RestaurantDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DataBaseModule],
      providers: [
        RestaurantService,
        RestaurantRepository,
        {
          provide: getModelToken(Restaurant.name, MongoDataBase.FOODIE),
          useValue: {},
        },
      ],
    }).compile();
    service = module.get<RestaurantService>(RestaurantService);
    repository = module.get<RestaurantRepository>(RestaurantRepository);
    model = module.get<Model<RestaurantDocument>>(
      getModelToken(Restaurant.name, MongoDataBase.FOODIE),
    );
  });

  test('RestauarantModel is defined', () => {
    expect(model).toBeDefined();
  });

  test('RestaurantService is defined', () => {
    expect(service).toBeDefined();
  });

  test('RestaurantRepository is defined', () => {
    expect(repository).toBeDefined();
  });

  test('식당 정보 리스트를 반환한다.', async () => {
    const _id = new Types.ObjectId('65e885a1d907196bb47430c1');
    const stroeData: Restaurant[] = [
      {
        _id,
        storeId: 'store-1',
        storeName: '치킨시대',
        userId: 'dahoon06',
        region: {
          major: '서울',
          district: '구로구',
          town: '구로동',
        },
        categories: {
          majorCategory: '양식',
          middleCategory: ['치킨', '튀김'],
        },
        point: {
          view: 23,
          average: 4.7,
          review: 32,
        },
        createdAt: new Date(),
        updatedAt: null,
        deletedAt: null,
        isDeleted: false,
      },
    ];
    const expectedData = [
      {
        title: '치킨시대',
        location: '구로구/구로동',
        categories: '양식/치킨,튀김',
        viewCount: 23,
        reviewCount: 32,
        point: 4.7,
      },
    ];
    const filters = {
      page: 1,
      region: '서울',
      sort: 'grade',
    };
    jest
      .spyOn(repository, 'findManyRestaurantLists')
      .mockImplementationOnce(() => Promise.resolve(stroeData));
    const storeLists = await service.getLists(filters);
    expect(storeLists).toStrictEqual(expectedData);
  });
});

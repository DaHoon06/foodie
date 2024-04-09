import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FileImageEntity } from '@modules/file/entities/file.image.entity';

@Injectable()
export class FileImageRepository extends Repository<FileImageEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(FileImageEntity, dataSource.createEntityManager());
  }

  async createFileData() {}
}

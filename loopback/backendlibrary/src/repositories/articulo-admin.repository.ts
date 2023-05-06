import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {ArticuloAdmin, ArticuloAdminRelations} from '../models';

export class ArticuloAdminRepository extends DefaultCrudRepository<
  ArticuloAdmin,
  typeof ArticuloAdmin.prototype.id,
  ArticuloAdminRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(ArticuloAdmin, dataSource);
  }
}

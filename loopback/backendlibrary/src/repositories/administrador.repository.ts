import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Administrador, AdministradorRelations, Articulo, ArticuloAdmin} from '../models';
import {ArticuloAdminRepository} from './articulo-admin.repository';
import {ArticuloRepository} from './articulo.repository';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.id,
  AdministradorRelations
> {

  public readonly articulos: HasManyThroughRepositoryFactory<Articulo, typeof Articulo.prototype.id,
          ArticuloAdmin,
          typeof Administrador.prototype.id
        >;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ArticuloAdminRepository') protected articuloAdminRepositoryGetter: Getter<ArticuloAdminRepository>, @repository.getter('ArticuloRepository') protected articuloRepositoryGetter: Getter<ArticuloRepository>,
  ) {
    super(Administrador, dataSource);
    this.articulos = this.createHasManyThroughRepositoryFactoryFor('articulos', articuloRepositoryGetter, articuloAdminRepositoryGetter,);
  }
}

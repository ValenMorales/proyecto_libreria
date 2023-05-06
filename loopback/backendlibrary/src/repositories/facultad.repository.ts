import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Facultad, FacultadRelations, Articulo} from '../models';
import {ArticuloRepository} from './articulo.repository';

export class FacultadRepository extends DefaultCrudRepository<
  Facultad,
  typeof Facultad.prototype.nombre,
  FacultadRelations
> {

  public readonly articulos: HasManyRepositoryFactory<Articulo, typeof Facultad.prototype.nombre>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ArticuloRepository') protected articuloRepositoryGetter: Getter<ArticuloRepository>,
  ) {
    super(Facultad, dataSource);
    this.articulos = this.createHasManyRepositoryFactoryFor('articulos', articuloRepositoryGetter,);
    this.registerInclusionResolver('articulos', this.articulos.inclusionResolver);
  }
}

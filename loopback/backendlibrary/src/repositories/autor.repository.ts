import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Autor, AutorRelations, Articulo} from '../models';
import {ArticuloRepository} from './articulo.repository';

export class AutorRepository extends DefaultCrudRepository<
  Autor,
  typeof Autor.prototype.id,
  AutorRelations
> {

  public readonly articulos: HasManyRepositoryFactory<Articulo, typeof Autor.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ArticuloRepository') protected articuloRepositoryGetter: Getter<ArticuloRepository>,
  ) {
    super(Autor, dataSource);
    this.articulos = this.createHasManyRepositoryFactoryFor('articulos', articuloRepositoryGetter,);
    this.registerInclusionResolver('articulos', this.articulos.inclusionResolver);
  }
}

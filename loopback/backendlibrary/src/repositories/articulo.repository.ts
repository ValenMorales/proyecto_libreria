import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Articulo, ArticuloRelations, Autor, Facultad} from '../models';
import {AutorRepository} from './autor.repository';
import {FacultadRepository} from './facultad.repository';

export class ArticuloRepository extends DefaultCrudRepository<
  Articulo,
  typeof Articulo.prototype.id,
  ArticuloRelations
> {

  public readonly autor: BelongsToAccessor<Autor, typeof Articulo.prototype.id>;

  public readonly facultad: BelongsToAccessor<Facultad, typeof Articulo.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AutorRepository') protected autorRepositoryGetter: Getter<AutorRepository>, @repository.getter('FacultadRepository') protected facultadRepositoryGetter: Getter<FacultadRepository>,
  ) {
    super(Articulo, dataSource);
    this.facultad = this.createBelongsToAccessorFor('facultad', facultadRepositoryGetter,);
    this.registerInclusionResolver('facultad', this.facultad.inclusionResolver);
    this.autor = this.createBelongsToAccessorFor('autor', autorRepositoryGetter,);
    this.registerInclusionResolver('autor', this.autor.inclusionResolver);
  }
}

import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Articulo,
  Autor,
} from '../models';
import {ArticuloRepository} from '../repositories';

export class ArticuloAutorController {
  constructor(
    @repository(ArticuloRepository)
    public articuloRepository: ArticuloRepository,
  ) { }

  @get('/articulos/{id}/autor', {
    responses: {
      '200': {
        description: 'Autor belonging to Articulo',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Autor),
          },
        },
      },
    },
  })
  async getAutor(
    @param.path.string('id') id: typeof Articulo.prototype.id,
  ): Promise<Autor> {
    return this.articuloRepository.autor(id);
  }
}

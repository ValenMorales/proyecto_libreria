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
  Facultad,
} from '../models';
import {ArticuloRepository} from '../repositories';

export class ArticuloFacultadController {
  constructor(
    @repository(ArticuloRepository)
    public articuloRepository: ArticuloRepository,
  ) { }

  @get('/articulos/{id}/facultad', {
    responses: {
      '200': {
        description: 'Facultad belonging to Articulo',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Facultad),
          },
        },
      },
    },
  })
  async getFacultad(
    @param.path.string('id') id: typeof Articulo.prototype.id,
  ): Promise<Facultad> {
    return this.articuloRepository.facultad(id);
  }
}

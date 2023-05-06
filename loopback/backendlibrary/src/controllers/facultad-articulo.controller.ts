import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Facultad,
  Articulo,
} from '../models';
import {FacultadRepository} from '../repositories';

export class FacultadArticuloController {
  constructor(
    @repository(FacultadRepository) protected facultadRepository: FacultadRepository,
  ) { }

  @get('/facultads/{id}/articulos', {
    responses: {
      '200': {
        description: 'Array of Facultad has many Articulo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Articulo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Articulo>,
  ): Promise<Articulo[]> {
    return this.facultadRepository.articulos(id).find(filter);
  }

  @post('/facultads/{id}/articulos', {
    responses: {
      '200': {
        description: 'Facultad model instance',
        content: {'application/json': {schema: getModelSchemaRef(Articulo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Facultad.prototype.nombre,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {
            title: 'NewArticuloInFacultad',
            exclude: ['id'],
            optional: ['facultadId']
          }),
        },
      },
    }) articulo: Omit<Articulo, 'id'>,
  ): Promise<Articulo> {
    return this.facultadRepository.articulos(id).create(articulo);
  }

  @patch('/facultads/{id}/articulos', {
    responses: {
      '200': {
        description: 'Facultad.Articulo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {partial: true}),
        },
      },
    })
    articulo: Partial<Articulo>,
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.facultadRepository.articulos(id).patch(articulo, where);
  }

  @del('/facultads/{id}/articulos', {
    responses: {
      '200': {
        description: 'Facultad.Articulo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.facultadRepository.articulos(id).delete(where);
  }
}

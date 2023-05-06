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
  Autor,
  Articulo,
} from '../models';
import {AutorRepository} from '../repositories';

export class AutorArticuloController {
  constructor(
    @repository(AutorRepository) protected autorRepository: AutorRepository,
  ) { }

  @get('/autors/{id}/articulos', {
    responses: {
      '200': {
        description: 'Array of Autor has many Articulo',
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
    return this.autorRepository.articulos(id).find(filter);
  }

  @post('/autors/{id}/articulos', {
    responses: {
      '200': {
        description: 'Autor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Articulo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Autor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulo, {
            title: 'NewArticuloInAutor',
            exclude: ['id'],
            optional: ['autorId']
          }),
        },
      },
    }) articulo: Omit<Articulo, 'id'>,
  ): Promise<Articulo> {
    return this.autorRepository.articulos(id).create(articulo);
  }

  @patch('/autors/{id}/articulos', {
    responses: {
      '200': {
        description: 'Autor.Articulo PATCH success count',
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
    return this.autorRepository.articulos(id).patch(articulo, where);
  }

  @del('/autors/{id}/articulos', {
    responses: {
      '200': {
        description: 'Autor.Articulo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Articulo)) where?: Where<Articulo>,
  ): Promise<Count> {
    return this.autorRepository.articulos(id).delete(where);
  }
}

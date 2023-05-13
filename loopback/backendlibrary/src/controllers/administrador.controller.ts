import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Administrador} from '../models';
import {AdministradorRepository} from '../repositories';

export class AdministradorController {
  constructor(
    @repository(AdministradorRepository)
    public administradorRepository : AdministradorRepository,
  ) {}

  @post('/administradors')
  @response(200, {
    description: 'Administrador model instance',
    content: {'application/json': {schema: getModelSchemaRef(Administrador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Administrador, {
            title: 'NewAdministrador',
            exclude: ['id'],
          }),
        },
      },
    })
    administrador: Omit<Administrador, 'id'>,
  ): Promise<Administrador> {
    return this.administradorRepository.create(administrador);
  }

  @get('/administradors/count')
  @response(200, {
    description: 'Administrador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Administrador) where?: Where<Administrador>,
  ): Promise<Count> {
    return this.administradorRepository.count(where);
  }

  @get('/administradors')
  @response(200, {
    description: 'Array of Administrador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Administrador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Administrador) filter?: Filter<Administrador>,
  ): Promise<Administrador[]> {
    return this.administradorRepository.find(filter);
  }

  @patch('/administradors')
  @response(200, {
    description: 'Administrador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Administrador, {partial: true}),
        },
      },
    })
    administrador: Administrador,
    @param.where(Administrador) where?: Where<Administrador>,
  ): Promise<Count> {
    return this.administradorRepository.updateAll(administrador, where);
  }

  @get('/administradors/{id}')
  @response(200, {
    description: 'Administrador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Administrador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Administrador, {exclude: 'where'}) filter?: FilterExcludingWhere<Administrador>
  ): Promise<Administrador> {
    return this.administradorRepository.findById(id, filter);
  }

  @patch('/administradors/{id}')
  @response(204, {
    description: 'Administrador PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Administrador, {partial: true}),
        },
      },
    })
    administrador: Administrador,
  ): Promise<void> {
    await this.administradorRepository.updateById(id, administrador);
  }

  @put('/administradors/{id}')
  @response(204, {
    description: 'Administrador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() administrador: Administrador,
  ): Promise<void> {
    await this.administradorRepository.replaceById(id, administrador);
  }

  @del('/administradors/{id}')
  @response(204, {
    description: 'Administrador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.administradorRepository.deleteById(id);
  }
}

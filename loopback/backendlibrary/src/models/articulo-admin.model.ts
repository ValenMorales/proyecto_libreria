import {Entity, model, property} from '@loopback/repository';

@model()
export class ArticuloAdmin extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  administradorId?: string;

  @property({
    type: 'string',
  })
  articuloId?: string;

  constructor(data?: Partial<ArticuloAdmin>) {
    super(data);
  }
}

export interface ArticuloAdminRelations {
  // describe navigational properties here
}

export type ArticuloAdminWithRelations = ArticuloAdmin & ArticuloAdminRelations;

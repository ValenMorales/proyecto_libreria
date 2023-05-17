import {Entity, model, property, hasMany} from '@loopback/repository';
import {Articulo} from './articulo.model';

@model()
export class Facultad extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  coordinador: string;

  @hasMany(() => Articulo)
  articulos: Articulo[];

  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;

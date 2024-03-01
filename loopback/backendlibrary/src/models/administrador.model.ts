import {Entity, model, property, hasMany} from '@loopback/repository';
import {Articulo} from './articulo.model';
import {ArticuloAdmin} from './articulo-admin.model';

@model()
export class Administrador extends Entity {
  @property({
    type: 'string',
    id:true,
    generated:true
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({ 
    type: 'string',
    default:'admin'
  })
  rol: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
  })
  cedula?: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @hasMany(() => Articulo, {through: {model: () => ArticuloAdmin}})
  articulos: Articulo[];

  constructor(data?: Partial<Administrador>) {
    super(data);
  }
}

export interface AdministradorRelations {
  // describe navigational properties here
}

export type AdministradorWithRelations = Administrador & AdministradorRelations;

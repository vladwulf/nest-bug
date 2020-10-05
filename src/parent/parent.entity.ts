import { Entity } from 'typeorm';
import { RootEntity } from '../RootEntity';

@Entity('parents')
export class CommentEntity extends RootEntity {}

/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MovieEntity } from "./movies.entity";

@Entity('directors',{schema:'ventas'})

export class DirectorEntity{
@PrimaryGeneratedColumn('uuid')
id:string
@CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default:() => 'CURRENT_TIMESTAMP',
})
createAt:Date;
@UpdateDateColumn({
    name:'update_at',
    type: 'timestamp',
    default:() => 'CURRENT_TIMESTAMP',
})
updateAt:Date;
@DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
})
deleteAt:Date;


@ManyToOne(() => MovieEntity, movie => movie.directors)
@JoinColumn()
movie:MovieEntity;

@Column('varchar',{
    name:'title',
    nullable: false,
    comment: 'director name'
})
title: string;

@Column('varchar',{
    name:'description',
    nullable: true,
    comment: 'director description'
})
description: string;

}
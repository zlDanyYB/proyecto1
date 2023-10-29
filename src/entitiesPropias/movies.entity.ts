/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany,JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DirectorEntity } from "./directors.entity";

@Entity('movies',{schema:'ventas'})

export class MovieEntity{
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

@OneToMany(()=> DirectorEntity, director=> director.movie)
@JoinColumn()
directors:DirectorEntity[];


@Column('varchar',{
    name:'title',
    nullable: false,
    comment: 'movie name'
})
title: string;

@Column('varchar',{
    name:'description',
    nullable: true,
    comment: 'movie description'
})
description: string;

}
/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookEntity } from "./books.entity";


@Entity('authors',{schema:'ventas'})

export class AuthorEntity{
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

@ManyToMany(()=> BookEntity, book => book.author)
@JoinTable()
Book:BookEntity[];


@Column('varchar',{
    name:'title',
    nullable: false,
    comment: 'author name'
})
title: string;

@Column('varchar',{
    name:'description',
    nullable: true,
    comment: 'author description'
})
description: string;
}

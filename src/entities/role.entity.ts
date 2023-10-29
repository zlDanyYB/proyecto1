/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity,  OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";


@Entity('roles',{schema:'ventas'})

export class RolEntity{
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

@OneToOne(()=> UserEntity, user => user.rol)
user:UserEntity;


@Column('varchar',{
    name:'title',
    nullable: false,
    comment: 'rol name'
})
title: string;

@Column('varchar',{
    name:'description',
    nullable: true,
    comment: 'rol description'
})
description: string;

}
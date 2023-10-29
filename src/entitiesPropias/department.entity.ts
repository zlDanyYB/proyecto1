/* eslint-disable prettier/prettier */

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EmployeEntity } from "./employee.entity";

@Entity('departments',{schema:'empresa'})

export class DepartmentEntity{
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

@ManyToMany(()=> EmployeEntity, employe => employe.department)
@JoinTable()
employe:EmployeEntity[];


@Column('varchar',{
    name:'title',
    nullable: false,
    comment: 'department title '
})
title: string;

@Column('varchar',{
    name:'description',
    nullable: true,
    comment: 'department description'
})
description: string;
   
}
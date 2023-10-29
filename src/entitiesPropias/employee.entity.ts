/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DepartmentEntity } from "./department.entity";


@Entity('employes',{schema:'empresa'})

export class EmployeEntity{
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

@ManyToMany(()=> DepartmentEntity, departmen => departmen.employe)
@JoinTable()
department:DepartmentEntity[];


@Column('varchar',{
    name:'name',
    nullable: false,
    comment: 'employee role'
})
name: string;

@Column('varchar',{
    name:'description',
    nullable: true,
    comment: 'role description'
})
description: string;
    
}
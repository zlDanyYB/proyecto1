/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RolEntity } from "./role.entity";

@Entity('users',{schema:'ventas'})

export class UserEntity{
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

@OneToOne(()=> RolEntity, rol => rol.user)
@JoinColumn()
rol:RolEntity;


@Column('varchar',{
    name:'name',
    nullable: false,
    comment: 'user name'
})
name: string;

@Column('varchar',{
    name:'lastname',
    nullable: false,
    comment: 'user lastname'
})
lastname: string;

@Column('varchar',{
    name:'identification',
    nullable: false,
    comment: 'identification number'
})
identification: string;

@Column('varchar',{
    name:'address',
    nullable: false,
    comment: 'address'
})
address: string;

@Column('varchar',{
    name:'description',
    nullable: true,
    comment: 'user description'
})
description: string;

}
/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity,  OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PaymentEntity } from "./payment.entity";


@Entity('invoice',{schema:'ventas'})

export class InvoiceEntity{
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

@OneToOne(()=> PaymentEntity, payment => payment.invoice)
payment:PaymentEntity;

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
    comment: 'invoice description'
})
description: string;

}
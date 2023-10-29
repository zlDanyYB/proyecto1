/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { InvoiceEntity } from "./invoice.entity";

@Entity('payments',{schema:'ventas'})

export class PaymentEntity{
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

@OneToOne(()=> InvoiceEntity, invoice => invoice.payment)
@JoinColumn()
invoice:InvoiceEntity;

@Column('varchar',{
    name:'title',
    nullable: false,
    comment: 'invoice name'
})
title: string;

@Column('number',{
    name:'price',
    nullable: false,
    comment: 'product price'
})
price: number;

@Column('varchar',{
    name:'description',
    nullable: true,
    comment: 'payment in the name of:'
})
description: string;

}
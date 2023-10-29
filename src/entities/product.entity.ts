/* eslint-disable prettier/prettier */
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products',{schema:'ventas'})

export class ProductEntity{
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


@ManyToOne(() => CategoryEntity, category => category.products)
category:CategoryEntity;

@Column('varchar',{
    name:'title',
    nullable: false,
    comment: 'product name'
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
    comment: 'product description'
})
description: string;

@Column('number',{
    name:'code',
    nullable: true,
    comment: 'product code'
})
code: number;

// @BeforeInsert()
// @BeforeUpdate()
// async setTitle(){
//     if(!this.title){
//         return;
//     }
//     this.title = this.title.toUpperCase();
// }
@BeforeInsert()
@BeforeUpdate()
async setDescription(){
    if(!this.description){
        return;
    }
    this.description = this.description.toLocaleLowerCase();
}

/*@BeforeInsert()
@BeforeUpdate()
async setEmail(){
    if(!this.email){
        return;
    }
    this.email = this.email.toLocaleLowerCase().trim();
}
*/
/*
@BeforeInsert()
@BeforeUpdate()
async setPassword(){
    if(!this.password){
        return;
    }
    this.password = await bcrypt.hash(this.setPassword, 15);
}
*/

@BeforeInsert()
@BeforeUpdate()
async setCode(){
    if(!this.code){
        return;
    }
    this.code = this.code.valueOf();
}
 

}
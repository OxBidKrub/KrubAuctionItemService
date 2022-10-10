import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { IsNotEmpty, IsString, IsNumber, IsDate, IsUUID, UUIDVersion } from 'class-validator';
import { Base } from "./base/Base.entity";
import { User } from "./user.entity";
import { Bid } from "./bid.entity";
@Entity('auctionItem')
export class AuctionItem extends Base{

    @Column()
    @IsString()
    @IsNotEmpty()
    itemName: string

    @Column()
    @IsString()
    @IsNotEmpty()
    itemCatagory: string

    @Column()
    @IsNumber()
    @IsNotEmpty()
    startingPrice: number

    @Column()
    @IsNumber()
    @IsNotEmpty()
    minOffer: number
    
    @Column()
    @IsDate()
    @IsNotEmpty()
    startDate: Date

    @Column()
    @IsDate()
    @IsNotEmpty()
    endDate: Date

    @Column({ nullable: true })
    @IsUUID()
    WinnerId: string

    @Column({ nullable: true })
    @IsString()
    reviewScore: number

    @Column()
    @IsString()
    @IsNotEmpty()
    status: number

    @ManyToOne(() => User, (user) => user.auctionItems)
    user: User

    @OneToMany(() => Bid, (bid) => bid.auctionItem)
    bids: Bid[]
}



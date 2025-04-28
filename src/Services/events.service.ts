import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from '../DTO/create-event.dto';
import { EventDataClass } from '../Schemas/events.schema';

@Injectable()
export class EventsService {
    constructor(
        @InjectModel(EventDataClass.name)
        private readonly eventModel: Model<EventDataClass>
    ) {}

    async create(dto: CreateEventDto): Promise<EventDataClass> {
        const created = new this.eventModel(dto);
        return created.save();
    }

    async update(id: string, dto: CreateEventDto): Promise<EventDataClass> {
        const { event_id, ...updateData } = dto;
        return this.eventModel.findOneAndUpdate(
            { event_id: id },
            updateData,
            { new: true }
        ).exec();
    }

    async findAll(): Promise<EventDataClass[]> {
        return this.eventModel.find().exec();
    }

    async findOne(id: string): Promise<EventDataClass> {
        return this.eventModel.findOne({ event_id: id }).exec();
    }

    async delete(id: string) {
        return this.eventModel.deleteOne({ event_id: id }).exec();
    }
}
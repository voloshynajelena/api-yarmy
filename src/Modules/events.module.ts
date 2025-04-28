import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsService } from '../Services/events.service';
import { EventSchema, EventDataClass } from '../Schemas/events.schema';
import { EventsController } from "../Controllers/events.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: EventDataClass.name, schema: EventSchema }
        ])
    ],
    controllers: [EventsController],
    providers: [EventsService]
})
export class EventsModule {}
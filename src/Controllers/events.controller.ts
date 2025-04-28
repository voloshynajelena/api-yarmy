import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Query, Put, Param
} from '@nestjs/common';
import { EventsService } from '../Services/events.service';
import { CreateEventDto } from '../DTO/create-event.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Events')
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Post()
    async create(@Body() dto: CreateEventDto) {
        return this.eventsService.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: CreateEventDto) {
        return this.eventsService.update(id, dto);
    }

    @Get()
    async findAll() {
        return this.eventsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.eventsService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.eventsService.delete(id);
    }
}

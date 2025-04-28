import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EventDocument = HydratedDocument<EventDataClass>;

@Schema({ collection: "events" })
export class EventDataClass {
    @Prop({ required: true, type: String })
    event_id: string;

    @Prop({ required: true, type: String })
    title: string;

    @Prop({ type: String })
    subtitle?: string;

    @Prop({ required: true, type: Number })
    start: number;

    @Prop({ required: true, type: Number })
    end: number;

    @Prop({ type: Boolean })
    disabled?: boolean;

    @Prop({ type: String })
    color?: string;

    @Prop({ type: String })
    textColor?: string;

    @Prop({ type: Boolean })
    editable?: boolean;

    @Prop({ type: Boolean })
    deletable?: boolean;

    @Prop({ type: Boolean })
    draggable?: boolean;

    @Prop({ type: Boolean })
    allDay?: boolean;

    @Prop({ type: String })
    agendaAvatar?: string;

    @Prop({ type: Object })
    sx?: any;

    @Prop({
        type: {
            freq: Number,
            interval: Number,
            byweekday: [Number],
            dtstart: Number,
            until: Number
        },
        required: false
    })
    recurring: {
        freq: number;
        interval: number;
        byweekday: number[];
        dtstart: number;
        until: number;
    };
}

export const EventSchema = SchemaFactory.createForClass(EventDataClass);

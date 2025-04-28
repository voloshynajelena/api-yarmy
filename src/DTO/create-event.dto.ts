export class CreateEventDto {
    readonly event_id: number | string;
    readonly title: string;
    readonly subtitle?: string;
    readonly start: number; // timestamp in ms
    readonly end: number;   // timestamp in ms
    readonly disabled?: boolean;
    readonly color?: string;
    readonly textColor?: string;
    readonly editable?: boolean;
    readonly deletable?: boolean;
    readonly draggable?: boolean;
    readonly allDay?: boolean;
    readonly agendaAvatar?: string;
    readonly sx?: any;
    readonly recurring?: {
        freq: number;
        interval: number;
        byweekday: number[];
        dtstart: number;
        until: number;
    };
}

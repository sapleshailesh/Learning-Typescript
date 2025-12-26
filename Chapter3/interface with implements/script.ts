
interface IAppointment {
    startTime: Date;
    endTime: Date;
    description: string;

   //constructor(startTime: Date, endTime: Date, description: string):IAppointment;

    reschedule(newStartTime: Date, newEndTime: Date): void ;
}

class Appointment implements IAppointment {

    constructor (public startTime: Date, public endTime: Date, public description: string) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
    }

    reschedule(newStartTime: Date, newEndTime: Date): void {
        this.startTime = newStartTime;
        this.endTime = newEndTime;
        console.log(`Appointment rescheduled to start at ${this.startTime} and end at ${this.endTime}`);
    }
}

const appointment: Appointment= new Appointment(new Date('2024-07-01T10:00:00'),
new Date('2024-07-01T11:00:00'), 'Team Meeting');
appointment.reschedule(new Date('2024-07-01T12:00:00'), new Date('2024-07-01T13:00:00'));

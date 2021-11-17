export class Device {
    // "id": "string",
    //   "is_active": true,
    //   "is_private_session": true,
    //   "is_restricted": true,
    //   "name": "Loudest speaker",
    //   "type": "computer",
    //   "volume_percent": 59
    id! : string;
    is_active!: boolean;
    is_restricted!: boolean;
    name!: string;
    type!: string;
    volume_percent!: number | null;

}
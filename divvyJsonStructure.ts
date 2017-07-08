

    export interface StationBeanList {
        id: number;
        stationName: string;
        availableDocks: number;
        totalDocks: number;
        latitude: number;
        longitude: number;
        statusValue: string;
        statusKey: number;
        status: string;
        availableBikes: number;
        stAddress1: string;
        stAddress2: string;
        city: string;
        postalCode: string;
        location: string;
        altitude: string;
        testStation: boolean;
        lastCommunicationTime: string;
        is_renting: boolean;
        landMark: string;
    }

    export interface divvyBikes {
         executionTime: string;
        stationBeanList: StationBeanList[];
    }




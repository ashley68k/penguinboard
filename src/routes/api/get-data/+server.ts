import { json } from '@sveltejs/kit';
import si from 'systeminformation';

export async function GET() {
    /* 
        https://systeminformation.io/#docs

        si.get() takes an object with the function name as key and desired properties as a comma-separated string.
        e.g. cpu: 'socket' to get the socket property of the object returned by si.cpu()
    */
    const dataPoints = {
        cpu: 'manufacturer, brand, speed, speedMin, speedMax, cores, physicalCores',
        mem: 'total, free, used',
        currentLoad: 'avgLoad, currentLoad'
    }
    try {
        const data = await si.get(dataPoints);
        return json(data);
    } 
    catch {
        return json({ error: 'Failed to get system information' }, { status: 500 });
    }
    
}
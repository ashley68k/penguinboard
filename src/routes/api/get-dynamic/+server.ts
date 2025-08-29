import { json } from '@sveltejs/kit';
import si from 'systeminformation';

export async function GET() {
    /* 
        Dynamic system-info endpoint.

        Only return data-points which either continually change or can be changed by system administrator during runtime.

        https://systeminformation.io/#docs

        si.get() takes an object with the function name as key and desired properties as a comma-separated string.
        e.g. cpu: 'socket' to get the socket property of the object returned by si.cpu()
    */
    try {
        const data = await si.get({
            cpu: 'speed, governor',
            cpuCurrentSpeed: 'avg, min, max',
            cpuTemperature: 'main',
            mem: 'total, available, active',
            currentLoad: 'currentLoad',
        });
        return json(data);
    } 
    catch (error) {
        console.error("Error fetching data:", error);
        return json({ error }, { status: 500 });
    }
}
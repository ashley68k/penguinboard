import { json } from '@sveltejs/kit';
import si from 'systeminformation';

export async function GET() {
    /* 
        Static system-info endpoint.

        Only return data-points which are unchanging.

        https://systeminformation.io/#docs

        si.get() takes an object with the function name as key and desired properties as a comma-separated string.
        e.g. cpu: 'socket' to get the socket property of the object returned by si.cpu()
    */
    try {
        const data = await si.get({
            cpu: 'manufacturer, brand, cores, physicalCores',
        });
        return json(data);
    } 
    catch (error){
        return json({ error }, { status: 500 });
    }
}
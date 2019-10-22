
import axios from 'axios';
const userKey = `d2838aff8345fac53296697d57240bdf`;

export function getAllBars() {
    return axios({
        method: 'get',
        url: 'https://developers.zomato.com/api/v2.1/search',
        headers: { 
        'user-key': userKey
        },
        params: {
            entity_id: 276,
            entity_type: 'city',
            q: 'wine'
        }
    });
}

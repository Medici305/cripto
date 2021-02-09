import axios from 'axios';
import { listAllURL } from '../api';


export const loadCoin = () => async (dispatch) => {
    const coinData = await axios.get(listAllURL());

    dispatch({
        type: 'FETCH_LIST',
        payload: {
            coin: coinData.data
        }
    })
}
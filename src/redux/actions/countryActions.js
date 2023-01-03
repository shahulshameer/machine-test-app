import { ActionTypes } from "../constants/actionTypes";
import axios from 'axios';

const fetchCountriesData = (type) => async (dispatch) => {

    let payload;

    try {
        const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');

        if (response?.status === 200) {
            if (response?.data?.length !== 0) {
                let result = [];
                if (type == 'asia' || type == 'europe') {
                    result = response?.data?.filter((item) => {
                        return item.region.toLowerCase() == type;
                    });

                    payload =  {
                        message : 'Data fetched',
                        status : true,
                        data: result,
                    }
                } else {
                    payload =  {
                        message : 'Data fetched',
                        status : true,
                        data: response.data,
                    }
                }
            } else {
                payload =  {
                    message : 'Error occured',
                    status : false,
                    data: []
                }
            }
        } else {
            payload =  {
                message : 'Error occured',
                status : false,
                data: []
            }
        }
    } catch (error) {
        payload =  {
            message : 'Error occured',
            status : false,
            data: []
        }
    }

    dispatch({type:ActionTypes.FETCH_COUNTRIES_DATA, payload});
}


const removeCountriesData = () => {
    const payload =  {
        message : 'Data removed',
        status : true,
        data: []
    }

    return {
        type: ActionTypes.REMOVE_COUNTRIES_DATA, payload
    };
}

export {fetchCountriesData, removeCountriesData}
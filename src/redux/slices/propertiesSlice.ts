import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PropertiesState, Properties} from '../types';
import API from '../../api/apiClass';

console.log("here is the properties")
export const fetchProperties = createAsyncThunk<Properties[], void, {rejectValue: string }>(
    'properties/fetchProperties',
    async (_, thunkAPI) => {
        try {
            const { data } = await API.call('/properties/list-properties', {
                method: 'get',
            });
            return data
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.respose?.data?.message || 'Failed to fetch properties');
        }
    }
);

const initialState: PropertiesState = {
    properties: [],
    loading: false,
    error: null,
};

const propertiesSlice = createSlice({
    name: 'propertis',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchProperties.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProperties.fulfilled, (state, action) => {
            state.loading = false;
            state.properties = action.payload;
        })
        .addCase(fetchProperties.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'falide to fetch properties';
        })
    },
});

export default propertiesSlice.reducer;

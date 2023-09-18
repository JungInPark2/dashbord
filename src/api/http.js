import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import setupMock from "@/api/mock/setupMock";

const http = axios.create({
    headers: {
        'Content-type': 'application/json',
    },
    baseURL: import.meta.env.VITE_APP_API_URL
});

// Local인 경우 mock 데이터 응답
if(import.meta.env.MODE === 'L'){
     console.log('%c This is Mock Mode!','color:red');
     setupMock(new MockAdapter(http));

 }

export default http;
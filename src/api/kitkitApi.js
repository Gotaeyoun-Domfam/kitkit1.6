import axios from 'axios';
import qs from 'qs';
import {store} from '../store/store';
import {mutations} from '../store/mutations';

export default class KitkitApi {
    constructor() {
    }

    request (url, config) {
        return axios({
            url: 'https://api.kitkitschool.com/account' + url,
            ...config
        }).then(result => {
            if(!result.data.result){
                if(result.data.errorCode.split(':')[0] === 'CAD03') {
                    console.log('세션 만료, 로그인 필요')
                    mutations.setSignOut(store.getters.getState);
                }
            }
            return result.data
        }).catch(error => {
                console.log(error);
                throw new Error(`kitkitApi ${url} Error!!`);
            })
    }

    /**
     * 로그인 요청한다.
     *
     * <br> - {String}       account               - ID
     * <br> - {String}       password              - PW
     * <br> - {String}       deviceInfo            - 디바이스 정보
     */
    postSignIn(options) {
        return this.request('/signIn', {
            method: 'post',
            data: qs.stringify({
                deviceInfo : 'test-',
                ...options
            })
        })
    }

    /**
     * 계정 생성을 요청한다.
     *
     */
    postCreate(options) {
        return this.request('/add2', {
            method: 'post',
            data: qs.stringify({
                sessionID : store.getters.getSessionID,
                ...options
            })
        })
    }

    /**
     * 계정 관리 정보를 요청한다.
     *
     */
    postManage() {
        return this.request('/list2', {
            method: 'post',
            data: qs.stringify({
                sessionID : store.getters.getSessionID,
            })
        })
    }


    /**
     * 대시보드 정보를 요청한다.
     *
     */
    postDashboard() {
        return this.request('/listLog', {
            method: 'post',
            data: qs.stringify({
                sessionID : store.getters.getSessionID,
            })
        })
    }

    /**
     * 계정 정보를 요청한다.
     *
     */
    postAccountInfo() {
        return this.request('/info', {
            method: 'post',
            data: qs.stringify({
                sessionID : store.getters.getSessionID,
            })
        })
    }
}

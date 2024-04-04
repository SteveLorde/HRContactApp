import * as process from "process";
import axios from "axios";
import {CallOrder} from "../../Data/Models/CallOrder.ts";

export default class GoToClientAPI {

    gotoClientSecret : string = process.env.CLIENTSECRET as string;
    gotoClientId : string = process.env.CLIENTID as string;
    gotoAccessToken : string = "";
    gotoRedirectURL : string = process.env.REDIRECTURL as string;
    gotoAuthURL : string = `https://authentication.logmeininc.com/oauth/authorize?client_id={${this.gotoClientId}&response_type=code&redirect_uri={${this.gotoRedirectURL}`;
    gotoMainAPIURL : string = "https://api.goto.com/";

    constructor() {
    }

    //Initialize Client API
    async Initialize() {
        this.gotoAccessToken = await this.GetAccessToken();
    }

    async GetAccessToken() {
        return await axios.get(this.gotoAuthURL).then(res => res.data);
    }

    async Call(telphonenumber : string) {
        const newCall : CallOrder = {autoAnswer: false, dialString: telphonenumber, from: {lineId: ""}, phoneNumberId: ""};
        const response = await axios.post(`${this.gotoMainAPIURL}/calls/v2/calls`, newCall).then(res => res.data);
    }



}
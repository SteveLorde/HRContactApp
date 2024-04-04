import * as process from "process";
import axios from "axios";
import {CallOrder} from "../../Data/Models/CallOrder.ts";

export default class GoToClientAPI {

    gotoClientId : string = process.env.CLIENTID as string;
    mainURL : string = "https://api.goto.com/";

    constructor() {
    }

    async Call(telphonenumber : string) {
        const newCall : CallOrder = {autoAnswer: false, dialString: telphonenumber, from: {lineId: ""}, phoneNumberId: ""};
        const response = await axios.post(`${this.mainURL}/calls/v2/calls`, newCall).then(res => res.data);
    }



}
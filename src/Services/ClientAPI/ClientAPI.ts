import * as process from "process";
import axios from "axios";

export default class ClientAPI {

    gotoClientId : string = process.env.CLIENTID as string
    mainURL : string = "https://api.goto.com/"

    constructor() {
    }

    async Call(telphonenumber : number) {

        const response = await axios.post(`${this.mainURL}/calls/v2/calls`).then(res => res.data)
    }

}
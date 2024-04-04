import * as process from "process";


export default class ClientAPI {

    gotoClientId : string = process.env.CLIENTID as string
    mainURL : string = process.env.GOTOURL as string

    constructor() {
    }

    Call() {
    }

}
import axios from "axios";
import {escape} from "../utils/escape";

const instance = axios.create({
    withCredentials: true
})

export function getButtons() {
    return instance({
        method: 'get',
        url:  sessionStorage.getItem("URL") + '?func=nnsodwebui.displaybuttons&Id=' + sessionStorage.getItem("ID")
    })
}

export function getAttachForReview() {
    return instance({
        method: 'get',
        url: sessionStorage.getItem('URL') + '?func=nnsodwebui.getAttachForReview&Id=' + sessionStorage.getItem("ID")
    })
}

export function getAttachOnReview() {
    return instance({
        method: 'get',
        url: sessionStorage.getItem('URL') + '?func=nnsodwebui.getAttachOnReview&Id=' + sessionStorage.getItem("ID")
    })
}

export function sendForReviewHR(reviewState) {
    return instance.post(sessionStorage.getItem('URL')
        + '?func=nnsodwebui.sendForReviewHR', 'func=nnsodwebui.sendForReviewHR&state=' + escape(JSON.stringify(reviewState)) + '&id=' + sessionStorage.getItem("ID"))
}

export function getDuplicates() {
    return instance({
        method: 'get',
        url: sessionStorage.getItem('URL') + '?func=nnsodwebui.getXRefsDuplicate&Id=' + sessionStorage.getItem("ID")
    })
}

export function createDuplicateVGO(id) {
    let ids = [];
    ids.push(id);
    return instance.post(sessionStorage.getItem('URL')
        + '?func=nnsodwebui.VGO', 'func=nnsodwebui.VGO&ids=' + ids)
}

export function sendPersonnelNumbers(value) {
    return instance.post(sessionStorage.getItem('URL')
        + '?func=nnsodwebui.AddPersonalNumbersList', 'func=nnsodwebui.AddPersonalNumbersList&PersonnelNumbers=' + value + '&Id=' + sessionStorage.getItem("ID"))
}

export function sendTax() {
    return instance.post(sessionStorage.getItem('URL')
        + '?func=nnsodtaxmonitor.SendTax', 'func=nnsodtaxmonitor.SendTax&Id=' + sessionStorage.getItem("ID"))
}

export function sendRemoveKDInventoriesRequest() {
    return instance.post(sessionStorage.getItem('URL'),'func=nnsodwebui.RemoveInventories&Id=' + sessionStorage.getItem("ID"))
}


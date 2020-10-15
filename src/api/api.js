import axios from "axios";
import {escape} from "../utils/escape";

export function getButtons() {
    return axios({
        method: 'get',
        url: sessionStorage.getItem('URL') + '?func=nnsodwebui.displaybuttons&Id=' + sessionStorage.getItem("ID")
    })
}

export function getAttachForReview() {
    return axios({
        method: 'get',
        url: sessionStorage.getItem('URL') + '?func=nnsodwebui.getAttachForReview&Id=' + sessionStorage.getItem("ID")
    })
}

export function getAttachOnReview() {
    return axios({
        method: 'get',
        url: sessionStorage.getItem('URL') + '?func=nnsodwebui.getAttachOnReview&Id=' + sessionStorage.getItem("ID")
    })
}

export function sendForReviewHR(reviewState) {
    return axios.post(sessionStorage.getItem('URL')
        + '?func=nnsodwebui.sendForReviewHR', 'func=nnsodwebui.sendForReviewHR&state=' + escape(JSON.stringify(reviewState)) + '&id=' + sessionStorage.getItem("ID"))
}

export function getDuplicates() {
    return axios({
        method: 'get',
        url: sessionStorage.getItem('URL') + '?func=nnsodwebui.getXRefsDuplicate&Id=' + sessionStorage.getItem("ID")
    })
}

export function createDuplicateVGO(id) {
    let ids = [];
    ids.push(id);
    return axios.post(sessionStorage.getItem('URL')
        + '?func=nnsodwebui.VGO', 'func=nnsodwebui.VGO&ids=' + ids)
}

export function sendPersonnelNumbers(value) {
    return axios.post(sessionStorage.getItem('URL')
        + '?func=nnsodwebui.AddPersonalNumbersList', 'func=nnsodwebui.AddPersonalNumbersList&PersonnelNumbers=' + value + '&Id=' + sessionStorage.getItem("ID"))
}

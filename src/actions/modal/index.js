export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export function open(func) {
    return {
        type: MODAL_OPEN,
        open: true,
        func: func,
    }
}

export function close() {
    return {
        type: MODAL_CLOSE,
        open: false,
        func: undefined,
    }
}
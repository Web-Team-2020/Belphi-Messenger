export default {
    getInit: state => {
        return state.initial
    },
    getSignin: state => {
        return state.showSignin
    },
    getSignup: state => {
        return state.showSignup
    },
    getLogout: state => {
        return state.logout
    },
    getId: state => {
        return state.id
    }
}

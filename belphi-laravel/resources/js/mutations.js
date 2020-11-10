export default {
    changeInit(state) {
        state.initial = true
        state.showSignin = state.showSignup = false
    },
    changeSignin(state) {
        state.initial = state.showSignup = false
        state.showSignin = true
    },
    changeSignup(state) {
        state.initial = state.showSignin = false
        state.showSignup = true
    },
    changeLogout(state) {
        state.logout = true
    },
    changeId(state) {
        state.id = 1
    }
}

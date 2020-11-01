export default {
    changeInit(state) {
        state.initial = true
        state.showSignin = state.showSignup = false
    },
    changeSignin(state) {
        state.initial = false
        state.showSignin = true
    },
    changeSignup(state) {
        state.initial = false
        state.showSignup = true
    }
}

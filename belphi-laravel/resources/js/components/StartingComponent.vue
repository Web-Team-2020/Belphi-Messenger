<template>
    <div class="w-100 h-100">
        <header>
            <b-nav tabs justified align="left">
                <b-button class="font" variant="outline-dark">Exit</b-button>
            </b-nav>
        </header>

        <div class="div_sign">
            <h1 class="header_sign"><strong>Belphi</strong></h1>

            <div v-if="showButtons" class="inner_div_sign">
                <b-button type="submit" variant="outline-warning" class="btn_sign font">Sign in</b-button>
                <b-button type="submit" variant="outline-warning" class="btn_sign font" @click="signup">Sign up
                </b-button>
            </div>
            <div v-if="showSignup" class="d-flex justify-content-center">
                <signup-form-component></signup-form-component>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            showButtons: true,
            showSignin: false,
            showSignup: false
        }
    },
    methods: {
        signup() {
            this.showButtons = false;
            this.showSignup = true;
        }
    }

}
</script>

<style scoped>
.div_sign {
    position: absolute;
    text-align: center;
    width: 40%;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.header_sign {
    text-shadow: 2px 2px #ffa500;;
}

.inner_div_sign {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn_sign {
    text-align: center;
    padding: 8%;
    margin: 4%;
}

.font {
    font-size: 1.2em;
    font-weight: bold;
}

@media only screen and (max-width: 400px) {
    .font {
        font-size: 0.5em;
    }
}
</style>

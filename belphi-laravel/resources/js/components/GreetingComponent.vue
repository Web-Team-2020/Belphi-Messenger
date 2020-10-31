<template>
    <div>
        <div class="sign" v-if="time">
            <div style="text-align: center">
                <span class="flicker">Welcome To</span>
                <br>
                <span class="fast-flicker">Belphi</span>
                <br>
                <span class="flicker">Messenger</span>
            </div>
        </div>
        <div id="div_mainpage" v-bind:class="[time ? '' : 'setwh']" style="visibility:hidden">
            <starting-component></starting-component>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            time: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.time = false
            document.getElementById('div_mainpage').style.visibility = "visible";
        }, 10000);
    }
}
</script>

<style scoped>

body {
    background-color: #141114;
    background-image: linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px),
    linear-gradient(335deg, black 23px, transparent 23px),
    linear-gradient(155deg, black 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
}

.setwh {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    letter-spacing: 2;
    font-family: serif;
    background-image: url('images/bg1.jpg');
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: scroll;
    -webkit-background-size: 100% auto;
    -moz-background-size: 100% auto;
    -o-background-size: 100% auto;
    background-size: 100% auto;
    overflow: scroll;
    /* overflow: auto; */
}

.sign {
    background-color: black;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    letter-spacing: 2;
    left: 0%;
    top: 0%;
    font-family: serif;
    font-size: 5em;
    color: #fff6a9;
    text-shadow: 0 0 0.6rem #fff6a9, 0 0 1.5rem #f9b434,
    -0.2rem 0.1rem 1rem #f9b434, 0.2rem 0.1rem 1rem #f9b434,
    0 -0.5rem 2rem #ffa500, 0 0.5rem 3rem #ffa500;
}

@keyframes blink {
    0%,
    22%,
    36%,
    75% {
        color: #fff6a9;
        text-shadow: 0 0 0.6rem #fff6a9, 0 0 1.5rem #f9b434,
        -0.2rem 0.1rem 1rem #f9b434, 0.2rem 0.1rem 1rem #f9b434,
        0 -0.5rem 2rem #ffa500, 0 0.5rem 3rem #ffa500;
    }
    28%,
    33% {
        color: #f9b434;
        text-shadow: none;
    }
    82%,
    97% {
        color: #ffa500;
        text-shadow: none;
    }
}

.flicker {
    animation: shine 7s forwards, blink 7s 6s infinite;
}

.fast-flicker {
    animation: shine 3s forwards, blink 4s 3s infinite;
}

@keyframes shine {
    0% {
        color: #412b02;
        text-shadow: none;
    }
    100% {
        color: #fff6a9;
        text-shadow: 0 0 0.6rem #fff6a9, 0 0 1.5rem #f9b434,
        -0.2rem 0.1rem 1rem #f9b434, 0.2rem 0.1rem 1rem #f9b434,
        0 -0.5rem 2rem #ffa500, 0 0.5rem 3rem #ffa500;
    }
}

@keyframes flicker {
    from {
        opacity: 1;
    }

    4% {
        opacity: 0.9;
    }

    6% {
        opacity: 0.85;
    }

    8% {
        opacity: 0.95;
    }

    10% {
        opacity: 0.9;
    }

    11% {
        opacity: 0.922;
    }

    12% {
        opacity: 0.9;
    }

    14% {
        opacity: 0.95;
    }

    16% {
        opacity: 0.98;
    }

    17% {
        opacity: 0.9;
    }

    19% {
        opacity: 0.93;
    }

    20% {
        opacity: 0.99;
    }

    24% {
        opacity: 1;
    }

    26% {
        opacity: 0.94;
    }

    28% {
        opacity: 0.98;
    }

    37% {
        opacity: 0.93;
    }

    38% {
        opacity: 0.5;
    }

    39% {
        opacity: 0.96;
    }

    42% {
        opacity: 1;
    }

    44% {
        opacity: 0.97;
    }

    46% {
        opacity: 0.94;
    }

    56% {
        opacity: 0.9;
    }

    58% {
        opacity: 0.9;
    }

    60% {
        opacity: 0.99;
    }

    68% {
        opacity: 1;
    }

    70% {
        opacity: 0.9;
    }

    72% {
        opacity: 0.95;
    }

    93% {
        opacity: 0.93;
    }

    95% {
        opacity: 0.95;
    }

    97% {
        opacity: 0.93;
    }

    to {
        opacity: 1;
    }
}

</style>

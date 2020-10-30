<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>
                    <p> Mahsa </p>
                    <p class='style_msg'> last message </p>
                </div>
                <span class="badge badge-warning badge-pill">4</span>
            </li>
            <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>
                    <p> Arash </p>
                    <p class='style_msg'> last message </p>
                </div>
                <span class="badge badge-warning badge-pill">7</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>
* {
    letter-spacing: 2;
    font-family: serif;
    color: black;
}

.style_msg {
    color: darkgray;
}
</style>

<template>
    <div>
        <div class="pos-f-t">
            <nav class="navbar navbar-light bg-warning">
                <form class="form-inline">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <h3 id="mark"> Belphi </h3>
                </form>
                <button class="navbar-toggler" @click="changeView('greeting')">Exit</button>
            </nav>

            <div class="flex-container">
                <div class="collapse style_border flex-item-left" id="navbarToggleExternalContent">
                    <div class="p-4 list-group list-group-flush">
                        <button type="button" class="list-group-item list-group-item-action" disabled style="color: black;">your name</button>
                        <button type="button" class="list-group-item list-group-item-action" @click="changeView('home')">Home</button>
                        <button type="button" class="list-group-item list-group-item-action" @click="changeView('info')">Info</button>
                        <button type="button" class="list-group-item list-group-item-action" @click="changeView('contacts')">Contacts</button>
                        <button type="button" class="list-group-item list-group-item-action" @click="changeView('settings')">Settings</button>
                        <button type="button" class="list-group-item list-group-item-action" @click="changeView('about')">About</button>
                        <button type="button" class="list-group-item list-group-item-action" @click="changeView('greeting')">Logout</button>
                    </div>
                </div>

                <div class="flex-item-right style_border">
                    <router-view></router-view>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        changeView(str_name) {
            this.$router.push({name : str_name});
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

#mark {
    text-shadow: 2px 2px white;
    padding-left: 6px;
}

.style_border {
    border: 2px solid #fff6a9;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-left {
  padding: 10px;
  flex: 25%;
}

.flex-item-right {
  padding: 10px;
  flex: 75%;
}
</style>

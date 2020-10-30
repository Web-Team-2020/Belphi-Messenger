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
                <button  type="button" class="navbar-toggler">Exit</button>
            </nav>
            <div class="collapse w-25 style_list" id="navbarToggleExternalContent">
                <div class="p-4 list-group list-group-flush">
                    <button type="button" class="list-group-item list-group-item-action" disabled style="color: black;">your name</button>
                    <button type="button" class="list-group-item list-group-item-action">Info</button>
                    <button type="button" class="list-group-item list-group-item-action">Contacts</button>
                    <button type="button" class="list-group-item list-group-item-action">Settings</button>
                    <button type="button" class="list-group-item list-group-item-action">About</button>
                    <button type="button" class="list-group-item list-group-item-action">Logout</button>
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

.style_list {
    border: 2px solid #fff6a9;
}

</style>

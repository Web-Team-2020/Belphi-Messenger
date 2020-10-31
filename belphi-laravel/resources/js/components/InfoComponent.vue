<template>
    <div>
        <navbar-component part_name='Info'></navbar-component>
        <div class="p-4 list-group list-group-flush">
            <form class=" list-group-item col-sm-6 container">
                <div class="form-group row">
                    <label for="yourName" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="yourName" placeholder="yourName">
                    </div>
                    <button type="button" class="btn btn-outline-warning col-sm-1">Edit</button>
                </div>

                <div class="form-group row">
                    <label for="yourID" class="col-sm-2 col-form-label">ID</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="yourID" placeholder="yourID">
                    </div>
                    <button type="button" class="btn btn-outline-warning col-sm-1">Edit</button>
                </div>

                <div class="form-group row">
                    <label for="yourBio" class="col-sm-2 col-form-label">Bio</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="yourBio" placeholder="yourBio">
                    </div>
                    <button type="button" class="btn btn-outline-warning col-sm-1">Edit</button>
                </div>

                <div class="form-group row">
                    <label for="yourEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-9">
                        <input type="email" class="form-control" id="yourEmail" placeholder="yourEmail">
                    </div>
                    <button type="button" class="btn btn-outline-warning col-sm-1">Edit</button>
                </div>

                <div class="form-group row">
                    <label for="yourPhone" class="col-sm-2 col-form-label">Phone</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="yourPhone" placeholder="yourPhone">
                    </div>
                    <button type="button" class="btn btn-outline-warning col-sm-1">Edit</button>
                </div>

            </form>
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

</style>

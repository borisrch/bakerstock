<template>
    <div>
        <form id="new-item">
            <div class="form-group">
                <label for="id">Item ID:</label>
                <input type="text" readonly class="form-control" id="id" v-bind:value="getId">
            </div>

            <div class="form-group">
                <label for="name">Ingredient Specification:</label>
                <input type="text" class="form-control" id="name">
                <small class="form-text text-muted">Eg: Butter Salted / 4 per case / 227 g/unit </small>
            </div>
            <div class="form-group">
                <label for="supplier">Supplier:</label>
                <textarea class="form-control" rows="2" id="supplier"></textarea>
                <small class="form-text text-muted">Enter supplier information (phone and/or email).</small>
            </div>
            <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" class="form-control" id="price">
                <small class="form-text text-muted">Enter the product price.</small>
            </div>
        </form>

        <div class="container" id="submitcancel">
            <div class="row">
                <div class="col-xs-2">
                    <button type="submit" class="btn btn-primary" @submit.prevent="validate">Submit</button>
                </div>
                <div class="col-xs-10">
                    <button id="cancel" @click="resetForm">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import stocks from '../../data/stocks';

    export default {
        computed: {
            getId() {
                const currentId = stocks.length + 1;
                return currentId;
            }
        },
        methods: {
            validate() {

            },
            resetForm () {
                console.log("I'm listening!")
                this.$emit('resetForm')
            }
        }
    }
</script>

<style scoped>
    #new-item {
        width: 500px;
    }

    #submitcancel {
        padding-left: 0px;
        vertical-align: middle;
    }

    #cancel {
        margin-top: 7px;
        background-color: transparent;
        border: none;
    }

    #cancel:hover {
        color: gray;
    }

    .btn {
        padding-top: 10px;
        padding-bottom: 10px;
        vertical-align: middle;

    }

    .btn-primary {
        background-color: #2196F3;
        border: 0;
        box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    }
    .btn-primary:hover {
        background-color: #64B5F6;
    }
</style>
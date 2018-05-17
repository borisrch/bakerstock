<template>
    <div>
        <h3>Notes:</h3>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-xs-3" id="form">
                    <p>Please fill out all fields to submit a note.</p>
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text"
                               class="form-control"
                               id="name"
                               :class="{'invalid' : $v.author.$error}"
                               @input="$v.author.$touch()"
                               v-model="author">
                    </div>
                    <div class="form-group">
                        <label for="id">Date</label>
                        <input type="text"
                               readonly class="form-control"
                               id="id"
                               v-bind:value="currentDate">
                    </div>

                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <textarea class="form-control"
                                  rows="5"
                                  id="comment"
                                  v-model="comment"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="priority">Priority</label>
                        <select class="form-control" id="priority" v-model="priority">
                            <option>Low</option>
                            <option>Normal</option>
                            <option>High</option>
                            <option>Urgent</option>
                        </select>
                        <small class="form-text text-muted">*Urgent priority will notify the manager immediately.</small>
                    </div>
                </form>
                <div class="container" id="submitcancel">
                    <div class="row">
                        <div class="col-xs-2">
                            <button type="submit" class="btn btn-primary" @click="add" :disabled="$v.$invalid">Submit</button>
                        </div>
                        <div class="col-xs-10">
                            <button id="cancel" @click="">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col-xs-9">
                    <app-notes-table></app-notes-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import moment from 'moment'
    import NotesTable from './NotesTable.vue'
    import { required } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {

                author: "",
                date: this.currentDate,
                comment: "",
                priority: "",
                currentDate: moment().format('LL')
            }
        },
        components: {
            appNotesTable: NotesTable
        },
        methods: {
            add() {
                const note = {
                    author: this.author,
                    date: this.currentDate,
                    comment: this.comment,
                    priority: this.priority
                }
                this.$store.dispatch('addNote', note)
            }
        },
        validations: {
            author: {
                required
            }
        }
    }
</script>

<style scoped>
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

    #form {
        padding-left: 0px;
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

    form {
        width: 575px;
    }

    .invalid {
        border-color: #E64A19;
    }

</style>
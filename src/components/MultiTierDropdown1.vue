<template>
    <div class="container" style="height:200px;">
        <div class="flex-container">
            <div><label class="labelFix">{{label}} :</label></div>
            <div>
                <treeselect :value="value1"
                            :multiple="true"
                            :options="options"
                            class="multiTierDp"
                            @input="updateValue1"
                            search-nested />
            </div>
            <div><button style="margin-left:20px;font-size:12px" @click="dynamic">test dynamic</button></div>
        </div>
        <!--<div v-if="value1">
            <span>{{value1}}</span>
        </div>-->
    </div>
</template>
<script>
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import { mapState, mapMutations } from 'vuex';

    const DYNAMIC_OPTIONS = [{
        id: 'public',
        label: 'Public',
    }, {
        id: 'followers',
        label: 'Followers',
        isDisabled: false,
    }, {
        id: 'memberships',
        label: 'Memberships',
        isDisabled: false,
        children: [{
            id: 'gold',
            label: 'Gold level',
            isDisabled: false,
        }, {
            id: 'silver',
            label: 'Silver Level',
            isDisabled: false,
        }
        ],
    }]

    const DYMANIC_OPTIONS_BUTTONTRIGGER = [{
        id: 'public',
        label: 'Public',
    }, {
        id: 'followers',
        label: 'Followers',
        isDisabled: false,
    }, {
        id: 'memberships',
        label: 'Memberships',
        isDisabled: false,
        children: [{
            id: 'gold',
            label: 'Gold level',
            isDisabled: false,
        }, {
            id: 'silver',
            label: 'Silver Level',
            isDisabled: false,
        }, {
            id: 'bronze',
            label: 'bronze Level',
            isDisabled: false,
        }
        ],
    }]

    export default {
        props:["label"],
        components: {
            Treeselect
        },
        watch: {
            value1() {
                if (this.value1.includes("public")) {
                    this.test()
                } else {
                    this.nonPublic()
                }
            }
        },
       
        methods: {
            test() {
                for (var i = 1; i < this.options.length; i++) {
                    this.options[i].isDisabled = true;
                }

            },
            nonPublic() {
                for (var i = 1; i < this.options.length; i++) {
                    this.options[i].isDisabled = false;
                }
            },
            dynamic() {
                this.$store.commit('updateOptions', DYMANIC_OPTIONS_BUTTONTRIGGER);
            },
            ...mapMutations(['updateValue1']),
        },
        computed: {
            ...mapState(['value1']),

            options() {
                return this.$store.state.options
            }
        },
        created() {
            this.$store.commit('updateOptions', DYNAMIC_OPTIONS);
        }
    }
</script>
<style>
    .labelFix {
        display: inline-block;
        width: 180px;
        text-align: right;
        margin-top: 7px;
    }

    .flex-container {
        display: flex;
        flex-wrap: nowrap;
    }

    .multiTierDp {
        margin-left: 5px;
        width: 300px;
    }
</style>
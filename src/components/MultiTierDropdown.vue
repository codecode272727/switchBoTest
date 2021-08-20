<template>
    <div class="container" style="height:200px;">
        <div class="flex-container">
            <div><label class="labelFix">Visibility Type :</label></div>
            <div style="margin-top:7px">
                <span style="margin:0px 10px 0px 3px">
                    <input type="radio" id="one" value="public" v-model="visibility">
                    <label for="one">Public</label>
                </span>
                <span>
                    <input type="radio" id="two" value="nonpublic" v-model="visibility">
                    <label for="two">Non-public</label>
                </span>
            </div>
        </div>
        <div class="flex-container" >
            <div><label class="labelFix" :class="{'label-disabled':visibility =='public'}">{{label}} :</label></div>
            <div>
                <treeselect :value="value"
                            :multiple="true"
                            :options="options"
                            :disabled="visibility =='public'"
                            class="multiTierDp"
                            @input="updateValue"
                            search-nested />
            </div>
        </div>
        <!--<div>
            <span>{{visibility}}</span>
        </div>
        <div v-if="value">
            <span>{{value}}</span>
        </div>-->
    </div>
</template>
<script>
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'
    import { mapState, mapMutations } from 'vuex';

    export default {
        props:["label"],
        components: {
            Treeselect
        },
       
        data() {
            return {
                //value: null,
                visibility: null,
                options: [{
                        id: 'followers',
                        label: 'Followers',
                        isDisabled:false,
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
                }],
            }
        },
        methods: {
            ...mapMutations(['updateValue']),
        },
        computed: {
            ...mapState(['value']),
        },
        watch: {
            visibility: function (val) {
                if (val== "public") {
                    this.$store.commit('updateValueNull')
                }
            }
        }
    }
</script>
<style>
    .labelFix {
        display: inline-block;
        width: 180px;
        text-align: right;
        margin-top:7px;
    }
    .flex-container {
        display: flex;
        flex-wrap: nowrap;
        margin: 15px 0 15px 0;
    }
    .multiTierDp{
        margin-left:5px;
        width:300px;
    }
    .label-disabled{
        color:lightgray;
    }
</style>
<template>
    <div class="container" style="height:200px;">
        <div class="flex-container">
             <div><label class="labelFix">{{label}} :</label></div>
             <div>
                <treeselect 
                            v-model="value" 
                            :multiple="true" 
                            :options="options" 
                            class="multiTierDp"
                            :disable-branch-nodes="true"
                            search-nested/>
             </div>
        </div>
        <div v-if="value">
            <span>{{value}}</span>
        </div>
    </div>
</template>
<script>
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'

    export default {
        props:["label"],
        components: {
            Treeselect
        },
        data() {
            return {
                value: null,
                options: [{
                    id: 'a',
                    label: 'Gold Level',
                    children: [{
                        id: 'aa',
                        label: 'aa',
                    }, {
                        id: 'ab',
                        label: 'ab',
                    }],
                }, {
                    id: 'b',
                    label: 'Silver Level',
                    children: [{
                         id: 'ba',
                         label: 'ba',
                     }, {
                         id: 'bb',
                         label: 'bb',
                     }],
                }, {
                    id: 'c',
                    label: 'Studen Package',
                    children: [{
                          id: 'ca',
                          label: 'ca',
                    }, {
                         id: 'cb',
                         label: 'cb',
                    }],
                }],
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
    }
    .multiTierDp{
        margin-left:5px;
        width:300px;
    }
</style>
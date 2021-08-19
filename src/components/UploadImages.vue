<template>
    <div>
        <h2>Upload Images</h2>
        <div>
            <button style="width:150px;height:150px;" @click="onPickImage">
                <div>
                    <span class="iconify" data-icon="akar-icons:plus" style="color: gray;" data-width="30" data-height="30"></span>
                </div>
            </button>
            <div>
                <span v-for="(image,index) in images" :key="index"> 
                    <!--<img :src="imageUrl" width="150" height="150" />-->
                    {{image.name}}
                </span>
            </div>
            <input type="file"
                   name="images"
                   style="display:none;"
                   ref="files"
                   accept="image/*"
                   @change="onImagePicked" 
                   multiple/>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imageUrl: '',
                images:[]
            }
        },
        methods: {
            onPickImage() {
                this.$refs.files.click()
            },
            onImagePicked() {
                //console.log(event)
                //const files = event.target.files
                //let imagename = files[0].name
                //if (imagename.lastIndexOf('.') <= 0) {
                //    return alert('Please add a valid file!')
                //}
                //const fileReader = new FileReader()
                //fileReader.addEventListener('load', () => {
                //    this.imageUrl = fileReader.result
                //})
                //fileReader.readAsDataURL(files[0])
                //this.image = files[0]

                for (let i = 0; i < this.$refs.files.files.length; i++) {

                    this.images.push(this.$refs.files.files[i]);
                    console.log(this.images);
                }
            }
        }
    }
</script>
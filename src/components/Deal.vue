<template>
    <div>
        <div>
            <!--<div   class="container" style="background-color:#ededed;width:150px;height:150px;border:1px dashed gray;"> <span class="iconify" data-icon="ic:outline-add-photo-alternate" style="color: gray" data-width="70" data-height="70"></span> </div>-->
            <div v-if="imageUrl" @click="deleteImage"> X </div>
            <div v-if="imageUrl"> <img :src="imageUrl" width="150" height="150" /></div>
        </div>
            <button style="width:150px;height:150px;" @click="onPickImage" v-if="!imageUrl">
                <div>
                    <!--<span class="iconify" data-icon="akar-icons:plus" style="color: gray;" data-width="30" data-height="30"></span>-->
                    <span class="iconify" data-icon="ic:outline-add-photo-alternate" style="color: gray" data-width="50" data-height="50"></span>
                </div>
            </button>

            <input type="file"
                   name="images"
                   value=""
                   style="display:none;"
                   ref="imageInput"
                   accept="image/*"
                   @change="onImagePicked" />

    </div>
</template>
<script>
    export default {
        data() {
            return {
                imageUrl: '',
                image:null
            }
        },
        methods: {
            onPickImage() {
                this.$refs.imageInput.click()
            },
            onImagePicked(event) {
                const files = event.target.files
                let imagename = files[0].name
                if (imagename.lastIndexOf('.') <= 0) {
                    return alert('Please add a valid file!')
                }
                const fileReader = new FileReader()
                fileReader.addEventListener('load', () => {
                    this.imageUrl = fileReader.result
                })
                fileReader.readAsDataURL(files[0])
                this.image = files[0]
            },
            deleteImage() {
                this.imageUrl=''
            }
        }
    }
</script>
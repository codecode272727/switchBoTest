<template>
    <div class="container">
        <div v-if="featureImage">
            <div class="flex-container">
                <div>
                    <div v-for="(imageUrl, index) in imageUrls" :key="index" style="display:inline-block;margin:10px;">
                        <div @click="deleteImage(index)" style="text-align:center"><span class="iconify" data-icon="akar-icons:cross" style="color: gray;" data-width="22" data-height="22"></span> </div>
                        <img :src="imageUrl" width="150" height="150" />
                    </div>
                </div>
                <div>
                    <button style="width:150px;height:150px;margin:35px 5px 0px 5px" @click="onPickImage">
                        <div>
                            <span class="iconify" data-icon="ic:outline-add-photo-alternate" style="color: gray" data-width="50" data-height="50"></span>
                            <p>300 X 300</p>
                        </div>
                    </button>
                </div>
            </div>
            <input type="file"
                   name="images"
                   value=""
                   style="display:none;"
                   ref="imageInput"
                   accept="image/*"
                   @change="onImagePicked"
                   @click="onInputClick" />
        </div>
        <div v-if="productImage">
            <div class="flex-container">
                <div >
                    <div v-for="(imageUrl, index) in imageUrls" :key="index" style="display:inline-block;margin:10px;">
                        <div @click="deleteImage(index)" style="text-align:center"><span class="iconify" data-icon="akar-icons:cross" style="color: gray;" data-width="22" data-height="22"></span> </div>
                        <img :src="imageUrl" width="300" height="150" />
                    </div>
                </div>
                <div >
                    <button style="width:300px;height:150px;margin:35px 5px 0px 5px" @click="onPickImage">
                        <div>
                            <span class="iconify" data-icon="ic:outline-add-photo-alternate" style="color: gray" data-width="50" data-height="50"></span>
                            <p>1500 X 300</p>
                        </div>
                    </button>
                </div>
            </div>
            <input type="file"
                   name="images"
                   value=""
                   style="display:none;"
                   ref="imageInput"
                   accept="image/*"
                   @change="onProductImagePicked"
                   @click="onInputClick" />
        </div>
    </div>
</template>
<script>
    export default {
        props: ["featureImage" , "productImage"],

        data() {
            return {
                imageUrls: [],
                images: [],
                count: 0
            }
        },
        methods: {
            onPickImage() {
                this.$refs.imageInput.click()
            },
            onImagePicked(event) {
                if (this.count < 3) {
                    this.count++
                    const files = event.target.files
                    let imagename = files[0].name
                    console.log(imagename)
                    if (imagename.lastIndexOf('.') <= 0) {
                        return alert('Please add a valid file!')
                    }
                    const fileReader = new FileReader()
                    fileReader.addEventListener('load', () => {
                        this.imageUrls.push(fileReader.result)
                    })
                    fileReader.readAsDataURL(files[0])
                    this.images.push(files[0])
                    console.log(this.count)
                } else {
                    alert("Maximum upload 3 photos.")
                }
                
            },
            onProductImagePicked(event) {
                if (this.count < 2) {
                    this.count++
                    const files = event.target.files
                    let imagename = files[0].name
                    console.log(imagename)
                    if (imagename.lastIndexOf('.') <= 0) {
                        return alert('Please add a valid file!')
                    }
                    const fileReader = new FileReader()
                    fileReader.addEventListener('load', () => {
                        this.imageUrls.push(fileReader.result)
                    })
                    fileReader.readAsDataURL(files[0])
                    this.images.push(files[0])
                    console.log(this.count)
                } else {
                    alert("Maximum upload 2 photos.")
                }

            },
            deleteImage(index) {
                this.imageUrls.splice(index, 1);
                this.images.splice(index, 1);
                this.count--
                console.log(this.count)
            },
            onInputClick(event) {
                event.target.value = ''
            }
        }
    }
</script>
<style>
    .flex-container {
        display: flex;
        flex-wrap: wrap;
    }

</style>
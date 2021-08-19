<template>
    <div class="container">
        <div v-if="featureImage">
            <div class="flex-container">
                <div>
                    <div v-for="(imageUrl, index) in imageUrls" :key="index" style="display:inline-block;margin:10px;">
                        <div @click="deleteImage(index)" style="text-align:center"><span class="iconify" data-icon="akar-icons:cross" style="color: gray;" data-width="15" data-height="15"></span> </div>
                        <img :src="imageUrl" width="150" height="150" />
                    </div>
                </div>
                <div v-if="count < 3">
                    <button style="width:150px;height:150px;margin:30px 5px 0px 5px" @click="onPickImage">
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
                        <div @click="deleteImage(index)" style="text-align:center"><span class="iconify" data-icon="akar-icons:cross" style="color: gray;" data-width="15" data-height="15"></span> </div>
                        <img :src="imageUrl" width="300" height="150" />
                    </div>
                </div>
                <div v-if="count < 2">
                    <button style="width:300px;height:150px;margin:30px 5px 0px 5px" @click="onPickImage">
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
    const MAX_COUNT_FEATURE = 3;
    const MAX_COUNT_PRODUCT = 2;
    const MAX_WIDTH_FEATURE = 300;
    const MAX_WIDTH_PRODUCT = 1500;
    const MAX_HEIGHT = 300;

    export default {
        props: ["featureImage" , "productImage"],

        data() {
            return {
                imageUrls: [],
                images: [],
                count: 0,
                image: {
                    size: '',
                    height: '',
                    width:''
                },
            }
        },
        methods: {
            onPickImage() {
                this.$refs.imageInput.click()
            },
            onImagePicked() {
                if (this.count < MAX_COUNT_FEATURE) {
                    //const files = event.target.files
                    //let imagename = files[0].name
       
                    //if (imagename.lastIndexOf('.') <= 0) {
                    //    return alert('Please add a valid file!')
                    //}
                    //const fileReader = new FileReader()
                    //fileReader.addEventListener('load', () => {
                    //    this.imageUrls.push(fileReader.result)
                    //})
                    //fileReader.readAsDataURL(files[0])
                    //this.images.push(files[0])
                    //console.log(this.count)
                    let file = this.$refs.imageInput.files[0];
                    if (!file || file.type.indexOf('image/') !== 0) return;

                    this.image.size = file.size;

                    let reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = evt => {
                        let img = new Image();
                        img.onload = () => {
                            this.image.width = img.width;
                            this.image.height = img.height;

                            if (this.image.height > MAX_HEIGHT || this.image.width > MAX_WIDTH_FEATURE) {
                                alert(`The image width x height is (${this.image.width}x${this.image.height}), exceed the maximum of (${MAX_WIDTH_FEATURE}x${MAX_HEIGHT}).`)
                            } else {
                                this.count++
                                this.imageUrls.push(reader.result)
                                this.images.push(file)
                            }
                        }
                        img.src = evt.target.result;
                    }
                   
                } else {
                    alert("Maximum upload 3 photos.")
                }
                
            },
            onProductImagePicked() {
                if (this.count < MAX_COUNT_PRODUCT) {
                    //this.count++
                    //const files = event.target.files
                    //let imagename = files[0].name
                    //console.log(imagename)
                    //if (imagename.lastIndexOf('.') <= 0) {
                    //    return alert('Please add a valid file!')
                    //}
                    //const fileReader = new FileReader()
                    //fileReader.addEventListener('load', () => {
                    //    this.imageUrls.push(fileReader.result)
                    //})
                    //fileReader.readAsDataURL(files[0])
                    //this.images.push(files[0])
                    //console.log(this.count)
                    let file = this.$refs.imageInput.files[0];
                    if (!file || file.type.indexOf('image/') !== 0) return;

                    this.image.size = file.size;

                    let reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = evt => {
                        let img = new Image();
                        img.onload = () => {
                            this.image.width = img.width;
                            this.image.height = img.height;

                            if (this.image.height > MAX_HEIGHT || this.image.width > MAX_WIDTH_PRODUCT) {
                                alert(`The image width x height is (${this.image.width}x${this.image.height}), exceed the maximum of (${MAX_WIDTH_PRODUCT}x${MAX_HEIGHT}).`)
                            } else {
                                this.count++
                                this.imageUrls.push(reader.result)
                                this.images.push(file)
                            }
                        }
                        img.src = evt.target.result;
                    }
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
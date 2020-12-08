<template>
  <div class="flex items-center">
    <!-- slot for parent component to activate the file changer -->
    <div>
      <slot name="activator"></slot>
    </div>
    <!-- image input: style is set to hidden and assigned a ref so that it can be triggered -->
    <input
      ref="file"
      type="file"
      :name="uploadFieldName"
      style="display: none"
      @change="onFileChange($event.target.name, $event.target.files)"
    />

    <button
      type="button"
      class="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
      @click="launchFilePicker()"
    >
      Wijzig
    </button>
  </div>
</template>

<script>
export default {
  name: 'ImageInput',
  props: {
    // Use "value" to enable using v-model
    value: Object,
  },
  data: () => ({
    uploadFieldName: 'file',
    maxSize: 1024,
  }),
  methods: {
    launchFilePicker() {
      this.$refs.file.click()
    },
    onFileChange(fieldName, file) {
      const { maxSize } = this
      const imageFile = file[0]
      if (file.length > 0) {
        const size = imageFile.size / maxSize / maxSize
        if (!imageFile.type.match('image.*')) {
          // check whether the upload is an image
          this.errorDialog = true
          this.errorText = 'Please choose an image file'
        } else if (size > 1) {
          // check whether the size is greater than the size limit
          this.errorDialog = true
          this.errorText =
            'Your file is too big! Please select an image under 1MB'
        } else {
          // Append file into FormData and turn file into image URL
          const formData = new FormData()
          const imageURL = URL.createObjectURL(imageFile)
          formData.append(fieldName, imageFile)
          // Emit the FormData and image URL to the parent component
          this.$emit('input', { formData, imageURL })
        }
      }
    },
  },
}
</script>

<style></style>

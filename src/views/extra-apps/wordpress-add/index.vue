<template>
  <div>
    <div class="air__utils__heading">
      <h5>Wordpress Add</h5>
    </div>
    <a-form class="mt-3" :form="form">
      <div class="form-group">
        <div class="row">
          <div class="col-lg-6">
            <a-form-item label="Title">
              <a-input v-decorator="['username']"
                       placeholder="Post Title"
              />
            </a-form-item>
          </div>
        </div>
      </div>
      <div class="form-group">
        <a-form-item label="Type">
          <a-checkbox-group name="radioGroup" v-decorator="['type', { initialValue: ['Text'] }]">
            <a-checkbox value="Text">Text</a-checkbox>
            <a-checkbox value="Video">Video</a-checkbox>
            <a-checkbox value="Image">Image</a-checkbox>
            <a-checkbox value="Audio">Audio</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-6">
              <a-form-item label="Category">
                <a-select mode="multiple" style="width: 100%" placeholder="Please select tags"
                          v-decorator="['category', { initialValue: ['lifestyle', 'blog'] }]">
                  <a-select-option value="lifestyle">Lifestyle</a-select-option>
                  <a-select-option value="blog">Blog</a-select-option>
                  <a-select-option value="nature">Nature</a-select-option>
                  <a-select-option value="relax">Relax</a-select-option>
                  <a-select-option value="travel">Travel</a-select-option>
                </a-select>
              </a-form-item>
            </div>
          </div>
        </div>
        <div class="form-group">
          <a-form-item label="Content">
            <div :class="$style.editor">
              <quill-editor></quill-editor>
            </div>
          </a-form-item>
        </div>
        <div class="form-group">
          <a-form-item>
            <a-upload-dragger name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/"
                              @change="handleChange">
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox"/>
              </p>
              <p class="ant-upload-text">Click or drag file to this area to upload</p>
              <p class="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading
                company data or other band files</p>
            </a-upload-dragger>
          </a-form-item>
        </div>
        <a-form-item>
          <button class="btn btn-success btn-with-addon text-nowrap" type="submit">
            <span class="btn-addon">
              <i class="btn-addon-icon fe fe-plus-circle"></i>
            </span>
            Add Post
          </button>
        </a-form-item>
      </div>
    </a-form>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      form: this.$form.createForm(this),
    }
  },
  methods: {
    handleChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
  },
}
</script>
<style lang="scss" module>
  @import "./style.module.scss";
</style>

<template>
  <div class="g-upload-com">

    <vueDraggable
      class="img-draggable"
      v-model="fileList"
      :disabled="!draggable"
      animation="400"
    >

      <!--图片-->
      <template v-if="uploadType === 'img'">
        <div
            class="upload-com-item"
            v-for="(item, index) in fileList"
            :key="index"
        >

          <img :src="item" alt="" @click="previewImg(index)">

          <i class="el-icon-error" @click.stop="handleRemove(index)" />

        </div>
      </template>

      <!--视频-->
      <template v-else-if="uploadType === 'video'">
        <div
            class="upload-com-item"
            v-for="(item, index) in fileList"
            :key="index"
        >

          <video
            :src="item"
            controls
            :ref="`gUpload${index}`"
            :disablePictureInPicture="true"
            class="g-upload-video"
          />

          <i class="el-icon-error" @click.stop="handleRemove(index)" />

          <div
            class="video-play-content"
            @click="playVideo(`gUpload${index}`, item)"
          >
            <GIcon
                class="video-play-icon"
                :class="{ 'icon-Pause': playStatus.includes(item) }"
                :icon="playStatus.includes(item) ? 'icon-Pause' : 'icon-bofang'"
            />
          </div>

        </div>
      </template>

      <div
        :disabled="true"
      >
        <Upload
            v-if="fileList.length < limit"
            class="upload-com"
            ref="singleImg"
            :disabled="uploadLoad"
            :action="ossUpload"
            :before-upload="onBeforeUpLoad"
            :on-success="successHandle"
            :multiple="multiple"
            :show-file-list="false"
            :on-remove="handleRemove"
        >

          <div v-show="uploadLoad">
            <div class="upload-loading" v-loading="true" />
          </div>

          <i class="el-icon-plus" />

        </Upload>
      </div>

    </vueDraggable>


    <ElImageViewer
      v-if="isShowImgViewer"
      :zIndex="4000"
      :on-close="closeViewer"
      :initialIndex="previewIndex"
      :url-list="fileList"
    />

  </div>
</template>

<script>
import vueDraggable from 'vuedraggable'
import { ossUpload } from '@/api/public'
import { Upload } from 'element-ui'
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
  name: "SingleImg",
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    uploadType: {
      type: String,
      default: 'img',
    },
    draggable: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  components: {
    vueDraggable,
    ElImageViewer,
    Upload
  },
  watch: {
    value: {
      handler: function () {
        this.init()
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      ossUpload,
      isShowImgViewer: false,
      uploadLoad: false,
      dialogVisible: false,
      fileList: [],
      previewIndex: 0,
      playStatus: []
    }
  },
  methods: {
    init() {
      const defaultValue = JSON.parse(JSON.stringify(this.value))
      this.fileList = Array.isArray(defaultValue) ? [...defaultValue] : [defaultValue].filter(v => v);
    },
    onBeforeUpLoad(file) {
      const fileType = ['image/jpeg', 'image/gif', 'image/png', 'image/bmp', 'video/mp4']

      if ((this.uploadType === 'img') && !fileType.includes(file.type)) {
        this.$message.error('上传图片只能是 JPG/PNG/BMP/GIF 格式!');
        return false;
      }

      if (this.uploadType === 'video' && file.type !== "video/mp4" ) {
        this.$message.error("上传视频格式只能是 mp4 格式!");
        return false;
      }
      this.uploadLoad = true
    },
    // 上传成功
    successHandle(response) {
      if (this.fileList.length < this.limit) {
        this.fileList = [...this.fileList, response.url]
        this.updateValue()
      } else {
        this.$message.warning(`最多只能上传${this.limit}${this.uploadType === 'img' ? '张图片' : '个视频'}`)
      }
      this.uploadLoad = false
    },

    handleRemove(index) {
      this.fileList.splice(index, 1)
      this.updateValue()
    },
    updateValue() {
      const newValue = Array.isArray(this.value) ? this.fileList : this.fileList[0]
      this.$emit('input', newValue)
    },
    previewImg(index) {
      this.previewIndex = index
      this.isShowImgViewer = true;
    },
    closeViewer() {
      this.previewIndex = 0
      this.isShowImgViewer = false;
    },
    playVideo(ref, video) {
      if (this.playStatus.includes(video)) {
        this.$refs[ref][0].pause()
        this.playStatus.splice(this.playStatus.findIndex(v => v === video), 1)
      } else {
        this.$refs[ref][0].play()
        this.playStatus.push(video)
      }
    }
  },
};
</script>

<style scoped lang="scss">
  .g-upload-com{
    .img-draggable{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    .upload-com{
      margin: 0 12px 12px 0;
      background-color: #fbfdff;
      border: 1px dashed #c0ccda;
      border-radius: 6px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 120px;
      height: 120px;
      line-height: 120px;
      text-align: center;
      vertical-align: top;
      position: relative;
      ::v-deep{
        .el-icon-plus{
          font-size: 24px;
          color: #606266;
          font-weight: bold;
        }
      }
    }
    .upload-loading{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      ::v-deep{
        .el-loading-spinner{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 0;
          margin-top: 0;
        }
      }
    }
    .upload-com-item{
      position: relative;
      width: 120px;
      height: 120px;
      cursor: pointer;
      display: inline-block;
      margin: 0 12px 12px 0;
      video,img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        overflow: hidden;
      }
      .el-icon-error{
        font-size: 18px;
        position: absolute;
        right: -9px;
        top: -9px;
        color: #333;
        z-index: 10000;
      }
      .video-play-content{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: calc(100% - 20px);
        display: flex;
        justify-content: center;
        .video-play-icon{
          margin-top: 46px;
          font-size: 30px;
          color: #fff;
        }
        .icon-Pause{
          opacity: 0;
          transition: all .3s;
        }
        &:hover{
          .icon-Pause{
            opacity: 1;
          }
        }
      }
    }
  }
  ::v-deep{
    .g-upload-video::-webkit-media-controls-panel{
      width: 100%;
      height: 20px;
      position: absolute;
      bottom: 0;
      background-size: auto 20px;
    }
    .g-upload-video::-webkit-media-controls-timeline{
      padding: 0 16px 10px;
    }
  }
</style>

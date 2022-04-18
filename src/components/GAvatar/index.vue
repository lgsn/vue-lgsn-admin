<!--上传图片-->
<template>
  <!--只读模式-->
  <div v-if="readOnly" class="read-only-avatar">
    <div
      :class="`g-avatar-${shape}`"
      :style="{ width: `${size}px`, height: `${size}px` }"
    >
      <img v-if="value" :src="value" alt="" />

      <slot v-else />
    </div>
  </div>

  <!--可编辑-->
  <div
    v-else
    class="g-upload-img"
    :class="`g-avatar-${shape}`"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  >
    <div loading v-if="uploadLoad" class="uploader-loading" />

    <Upload
      name="image"
      :action="ossUpload"
      :show-file-list="false"
      :before-upload="beforeUpload"
      :accept="accept"
      @change="uploadImg"
    >
      <!--上传标示-->
      <div v-if="!uploadLoad" class="upload-model">
        <GIcon icon="icon-xiangji" />
      </div>

      <img
        v-if="value"
        class="g-upload-square"
        :src="value"
        :style="{
          width: `${size}px`,
          height: `${size}px`,
        }"
      />

      <Avatar
        v-else-if="!value"
        :size="size"
        :shape="shape"
        :style="{
          background: 'rgb(33, 133, 240)',
          color: '#fff',
          fontWeight: 'bold',
        }"
      >
        <slot />
      </Avatar>
    </Upload>
  </div>
</template>

<script>
import { Avatar, Upload } from "element-ui";
import { ossUpload } from "@/api/public";
export default {
  name: "GAvatar",
  components: {
    Avatar,
    Upload,
  },
  props: {
    // 图片地址
    value: {
      type: String,
      default: "",
    },
    // 是否只读
    readOnly: {
      type: Boolean,
      default: false,
    },
    // 形状
    shape: {
      type: String,
      default: "square",
    },
    // 大小
    size: {
      type: Number,
      default: 28,
    },
    // 文件类型
    accept: {
      type: String,
      default: "image/png,image/jpeg",
    },
    // 文件大小
    fileSize: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      ossUpload,
      uploadLoad: false,
    };
  },
  methods: {
    // 上传完成
    uploadImg(info) {
      if (info.file.status === "uploading") this.uploadLoad = true;
      if (info.file.status === "done") {
        const { response } = info.file;
        if (response && response.success) {
          this.uploadLoad = false;
          this.$emit("input", response.data.url);
          this.$emit("success", response.data.url);
        }
      }
    },
    // 校验文件类型 or 大小
    beforeUpload(file) {
      const fileTypes = this.accept.split(",");
      const checkFormat = fileTypes.includes(file.type);
      if (!checkFormat) {
        this.$message.error(`请选择${this.accept}格式`);
      }
      const checkSize = file.size / 1024 < this.fileSize;
      if (!checkSize) {
        this.$message.error(`图片必须小于${this.fileSize}KB！`);
      }
      return checkFormat && checkSize;
    },
  },
};
</script>

<style lang="scss" scoped>
.g-upload-img {
  position: relative;
  margin: 0;
  cursor: pointer;
  overflow: hidden;
  border: 1px #f3f3f3 solid;

  &:hover {
    .upload-model {
      display: flex;
    }
  }

  .upload-model {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 10;

    .icon {
      font-size: 40px;
    }
  }
  .uploader-loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: no-drop;
    z-index: 11;
  }
  .g-upload-square {
    width: 100%;
    height: 100%;
  }
  .upload-text {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: var(--titleColor);
  }
}
.avatar-com-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.read-only-avatar {
  & > div {
    background: rgb(33, 133, 240);
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.g-avatar-circle {
  border-radius: 50%;
}
.g-avatar-square {
  border-radius: 8px;
}
</style>

<template>
  <div class="register d-flex justify-content-center align-items-center">
    <div class="content">
      <h2>注册</h2>
      <form class="bg-white text-center">
        <div class="item mb-3 text-start">
          <label class="form-label">邮箱：</label>
          <ValidateInput :rules="emailRules" v-model="emailValue" type="text" placeholder="请输入邮箱"></ValidateInput>
        </div>
        <div class="item mb-3 text-start">
          <label class="form-label">密码：</label>
          <ValidateInput :rules="passwordRules" v-model="passwordValue" type="password" placeholder="请输入密码"></ValidateInput>
        </div>
        <div class="item mb-3 text-start mb-3">
          <label class="form-label">确认密码：</label>
          <ValidateInput :rules="passwordAgainRules" v-model="passwordAgainValue" type="password" placeholder="请确认密码"></ValidateInput>
        </div>
        <button type="submit" class="btn btn-primary">提交</button>
      </form>
    </div>
    <div class="default w-100 h-100 position-absolute"></div>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '@/components/register/ValidateInput.vue'

export default defineComponent({
  name: 'register',
  inheritAttrs: false,
  components: {
    ValidateInput
  },
  setup () {
    const emailValue = ref(null)
    const passwordValue = ref(null)
    const passwordAgainValue = ref(null)
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '请输入邮箱'
      },
      {
        type: 'email',
        message: '请输入正确的邮箱格式'
      }
    ]

    const passwordRules: RulesProp = [
      {
        type: 'required',
        message: '请输入密码'
      }
    ]

    const passwordAgainRules: RulesProp = [
      {
        type: 'required',
        message: '请再次输入密码'
      }
    ]

    return {
      emailRules,
      emailValue,
      passwordRules,
      passwordValue,
      passwordAgainRules,
      passwordAgainValue
    }
  }
})
</script>

<style scoped lang="less">
.register {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/background-image.png);
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    width: 400px;
    height: 470px;
    background-color: #FFF;
    padding: 0 30px;

    .item {
      height: 95px;
    }

    .form-text {
      color: red;
    }
  }

  h2 {
    text-align: center;
    margin: 20px 0;
  }
}

.default {
  background-color: #b8e5f8;
  z-index: -1;
}
</style>

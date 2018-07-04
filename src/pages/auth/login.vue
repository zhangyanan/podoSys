<template>
  <f7-page>
    <v-header title="登录" no-menu>
    </v-header>
    <f7-input type="text" :value="form.username" @input="form.username = $event.target.value"></f7-input>
    <form class="login" v-on:submit.prevent="submit" no-hairlines-md>
      <f7-list>
        <f7-list-item class="text-center b-0">
          <div v-show="btn && (!form.username || !form.password)" class="err-message">
            <div v-show="btn && !form.username">邮箱 / 手机不能为空</div>
            <div v-show="btn && !form.password">密码不能为空</div>
          </div>
        </f7-list-item>
        <f7-list-item class="text-center b-0">
          <h1>欢迎您回家</h1>
        </f7-list-item>
        <f7-list-item>
          <f7-input type="text" :value="form.username" @input="form.username = $event.target.value"></f7-input>
        </f7-list-item>

        <f7-list-item>
          <f7-input type="password" dir="rtl" placeholder="密码" :value="form.password" @input="form.password = $event.target.value" clear-button></f7-input>
        </f7-list-item>

        <f7-list-item class="item-content-button">
          <f7-button class="submit-button" big round fill @click="submit">登录</f7-button>
        </f7-list-item>
      </f7-list>
    </form>
  </f7-page>
</template>
<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '@/store/modules/user'
export default {
  data () {
    return {
      btn: false, // true 已经提交过， false没有提交过
      form: {
        username: 'fdfd',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    submit () {
      this.btn = true
      if (!this.form.username || !this.form.password) return
      this.USER_SIGNIN(this.form)
      this.$f7router.back('/dashboard/', { force: true })
      // this.$router.replace({ path: '/home' })
    }
  }
}
</script>
<style lang="scss">
  .md .login .list {
      margin: 0px;
  }
  .login {
    padding: 20px;
    text-align: center;

    .b-0 {
      .item-content {
        border: 0px;
      }
    }

    h1 {
      font-weight: normal;
      font-size: 1.5rem;
      margin: 5px auto 30px;
    }

    .err-message {
      background-color: #ff9da4;
      color: #fff;
      font-size: .9rem;
      padding: 5px 25px;
      border-radius: 35px;
      margin: 0 auto;
    }

    .line {
      padding: 5px;

      input {
        padding: 0 10px;
        line-height: 28px;
      }
    }
    .item-content {
      border: 1px solid #eee;
      margin-bottom: 10px;
    }
    .item-content-button {
      .item-content {
        margin-top: 30px;
        border: 0px;
      }
    }
    .button, .button.button-fill, .button.button-fill.active-state {
      background-color: #3cc8b4;
    }
    .submit-button {
      width: 100%;
      font-size: 1.2rem;
    }
  }
  .md .list ul:before, .md .list ul:after, .md .item-input-wrap:after, .md .list .item-inner:after {
    background-color: transparent;
  }
</style>

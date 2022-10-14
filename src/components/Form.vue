<template>
  <div class="row justify-content-center">
    <div class="col-6 text-center">
      <Form @submit="register" class="card card-form" :validation-schema="schema">
        <h1 class="text-center">Register</h1>

        <div class="m-2">
          <label class="form-label" for="name">Full Name</label>
          <Field name="name" v-model="form.name" id="name" type="text" class="form-control" />
          <ErrorMessage name="name"></ErrorMessage>
        </div>

        <div class="m-2">
          <label class="form-label" for="username">Username</label>
          <Field name="username" v-model="form.username" id="username" type="text" class="form-control" />
          <ErrorMessage name="username"></ErrorMessage>
        </div>

        <div class="m-2">
          <label class="form-label" for="email">Email</label>
          <Field name="email" v-model="form.email" id="email" type="text" class="form-control" />
          <ErrorMessage name="email"></ErrorMessage>
        </div>

        <div class="m-2">
          <label class="form-label" for="password">Password</label>
          <Field name="password" v-model="form.password" id="password" type="password" class="form-control" />
          <ErrorMessage name="password"></ErrorMessage>
        </div>

        <div class="m-2">
          <label class="form-label" for="avatar">
            Avatar
            <div v-if="avatarPreview">
              <img :src="avatarPreview" class="avatar-xlarge">
            </div>
          </label>
          <Field name="avatar" v-show="!avatarPreview" id="avatar" type="file" class="form-control"
            @change="handleImageUpload" accept="image/*" />
          <ErrorMessage name="avatar"></ErrorMessage>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary m-3">Register</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup'
import { reactive, ref } from 'vue';

const form = reactive({
  form: {
    name: '',
    username: '',
    email: '',
    password: '',
    avatar: ''
  }
})

const MIN = 8;

const SUPPORTED_FORMATS = ['image/jpeg']

const schema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(MIN),
  avatar: yup.mixed().required().test('format', 'Unsupported file format', value => { console.log(value); return value && SUPPORTED_FORMATS.includes(value.type) })
})

const avatarPreview = ref(null)

function register() {
  console.log('registrato')
}
</script>
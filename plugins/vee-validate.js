import { extend } from 'vee-validate'
import { required, alpha, email, confirmed } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Dit is een verplicht veld',
})

extend('alpha', {
  ...alpha,
  message: 'Alleen alfabetische karakters toegestaan',
})
extend('email', {
  ...email,
  message: 'Dit is geen geldig e-mailadres',
})
extend('confirmed', {
  ...confirmed,
  message: 'De velden komen niet overeen',
})

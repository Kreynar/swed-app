/**
 * Created by Martynas on 2018-03-15.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    nationalIdentificationNumber: null,
    monthlyIncome: null,
    loanSize: null,
    didAgreeToTermsAndConditions: null
  })
})

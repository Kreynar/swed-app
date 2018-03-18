<template>
  <!--<div id="app">-->
    <!--<v-app id="inspire">-->
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="step > 1">{{ step1.header }}</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="step > 2">{{ step2.header }}</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" :complete="step > 3">{{ step3.header }}</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="4" :complete="step > 4">{{ step4.header }}</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="5" :complete="step > 5">{{ step5.header }}</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="6">{{ step6.header }}</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-5" flat>
              <v-card-media
                :src="require('../assets/coinLogo.jpg')"
                height="200px"
              >
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ step1.title }}</h3>
                  <div>{{ step1.msg }}</div>
                </div>
              </v-card-title>
            </v-card>
            <v-layout row justify-space-between>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click.native="step++">Toliau</v-btn>
            </v-layout>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card flat class="mb-5">
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs12 sm4 md3 lg2 xl1>
                    <br/>
                    {{ step2.label }}
                  </v-flex>
                  <v-flex xs12 sm6 md7 lg8 xl9>
                    <v-text-field
                      mask="###########"
                      v-model="step2.nationalIdentificationNumber"
                      :rules="[validateNationalIdentificationNumber]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
            <v-layout row justify-space-between>
              <v-btn @click.native="step--">Atgal</v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="step2.isInputValid" color="primary" @click.native="step++">Toliau</v-btn>
              <v-btn v-if="!(step2.isInputValid)" disabled color="primary" @click.native="step++">Toliau</v-btn>
            </v-layout>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card flat class="mb-5">
              <v-card-text>
                <v-layout row wrap>
                  <!--<v-layout row sm10>-->
                  <v-flex xs12 sm4 md3 lg2 xl1>
                    <br/>
                    {{ step3.label }}
                  </v-flex>
                  <v-flex xs12 sm6 md7 lg8 xl9>
                      <v-text-field
                        append-icon="euro_symbol"
                        mask="###############"
                        v-model="step3.monthlyIncome"
                        :rules="[validateMonthlyIncome]"
                      ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
            <v-layout row justify-space-between>
              <v-btn @click.native="step--">Atgal</v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="step3.isInputValid" color="primary" @click.native="step++">Toliau</v-btn>
              <v-btn v-if="!(step3.isInputValid)" disabled color="primary" @click.native="step++">Toliau</v-btn>
            </v-layout>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-card flat class="mb-5">
              <v-card-text>
                <v-layout row wrap>
                  <!--<v-layout row sm10>-->
                  <v-flex xs12 sm4 md3 lg2 xl1>
                    <br/>
                    {{ step4.label }}
                  </v-flex>
                  <v-flex xs12 sm6 md7 lg8 xl9>
                    <v-slider
                      v-model="step4.loanSize"
                      thumb-label
                      :max="step4.maxLoanSize"
                      persistent-hint
                    ></v-slider>
                  </v-flex>
                  <!--</v-layout>-->
                  <v-flex xs12 sm2>
                    <v-text-field
                      append-icon="euro_symbol"
                      mask="###"
                      v-model="step4.loanSize"
                      :rules="[validateLoan]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
            <v-layout row justify-space-between>
              <v-btn @click.native="step--">Atgal</v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="step4.isInputValid" color="primary" @click.native="step++">Toliau</v-btn>
              <v-btn v-if="!(step4.isInputValid)" disabled color="primary" @click.native="step++">Toliau</v-btn>
            </v-layout>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-card flat class="mb-5">
              <v-card-text>
                <v-text-field
                  :label="step5.label"
                  v-model="step5.additionalInfo"
                  :counter="step5.counter"
                  :rules="[validateAdditionalInfo]"
                  textarea
                ></v-text-field>
              </v-card-text>
            </v-card>
            <v-layout row justify-space-between>
              <v-btn @click.native="step--">Atgal</v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="step5.isInputValid" color="primary" @click.native="step++">Toliau</v-btn>
              <v-btn v-if="!(step5.isInputValid)" disabled color="primary" @click.native="step++">Toliau</v-btn>
            </v-layout>
          </v-stepper-content>

          <v-stepper-content step="6">
            <v-card flat class="mb-5">
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs12 sm5 md4 lg3 xl2>{{ step2.label }}:</v-flex>
                  <v-flex xs12 sm5 md6 lg7 xl8>{{ step2.nationalIdentificationNumber }}</v-flex>
                </v-layout>
                <br/>
                <v-layout row wrap>
                  <v-flex xs12 sm5 md4 lg3 xl2>{{ step3.label }}:</v-flex>
                  <v-flex xs12 sm5 md6 lg7 xl8>{{ step3.monthlyIncome }}</v-flex>
                </v-layout>
                <br/>
                <v-layout row wrap>
                  <v-flex xs12 sm5 md4 lg3 xl2>{{ step4.label }}:</v-flex>
                  <v-flex xs12 sm5 md6 lg7 xl8>{{ step4.loanSize }}</v-flex>
                </v-layout>
                <br/>
                <v-layout row wrap>
                  <v-flex xs12 sm5 md4 lg3 xl2>{{ step5.label }}:</v-flex>
                  <v-flex xs12 sm5 md6 lg7 xl8>{{ step5.additionalInfo }}</v-flex>
                </v-layout>
                <br/>
                <br/>
                <div style="text-align: center;">
                  {{ step6.label }}
                </div>
                <v-layout row>
                  <v-flex offset-xs6>
                    <v-checkbox style="text-align: center;" v-model="step6.didUserConfirm"></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
            <v-layout row justify-space-between>
              <v-btn @click.native="step--">Atgal</v-btn>
              <v-spacer></v-spacer>
              <v-btn v-if="step6.didUserConfirm" color="primary">Siųsti</v-btn>
              <v-btn v-if="!(step6.didUserConfirm)" disabled color="primary">Siųsti</v-btn>
            </v-layout>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    <!--</v-app>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'VartojamosiosPaskolosParaiska',
  data () {
    return {
      step: 0,
      step1: {
        header: 'Aprašymas',
        title: 'Vartojamosios paskolos paraiška',
        msg: `Lorem ipsum dolor sit amet, te vel stet voluptatum omittantur, mei ea habeo velit equidem. Clita antiopam sit an, labore dolorum repudiandae no mel. Eu solum corpora mei. No libris nostrud scribentur pro, luptatum dissentias duo cu, sed cu iudico luptatum suscipiantur. Mel cu quis copiosae reprehendunt. Ei pro esse quaeque.
        Sea purto aeterno at. Pri ferri labitur ea, soleat prompta vocibus sea no, usu ne illum moderatius. Nihil oporteat singulis at mel, at nibh aliquam tractatos pro, id feugait fierent sea. Qui eu maiorum dolores, magna libris nominavi eu pri. Cu ius tibique comprehensam.
        `
      },
      step2: {
        header: 'Asmeniniai duomenys',
        label: 'Asmens kodas',
        nationalIdentificationNumber: null,
        isInputValid: false
      },
      step3: {
        header: 'Pajamos',
        label: 'Mėnesinės pajamos atskaičius mokesčius',
        monthlyIncome: null,
        minMonthlyIncome: 500,
        isInputValid: false
      },
      step4: {
        header: 'Paskola',
        label: 'Vartojamosios paskolos dydis',
        loanSize: null,
        minLoanSize: 50,
        maxLoanSize: 999,
        isInputValid: false
      },
      step5: {
        header: 'Kita informacija',
        label: 'Papildoma informacija',
        additionalInfo: null,
        counter: 300,
        isInputValid: true
      },
      step6: {
        header: 'Siuntimas',
        label: 'Patvirtinu, kad pateikti duomenys yra teisingi ir atsakau pagal LR įstatymus',
        didUserConfirm: false
      }
    }
  },
  methods: {
    validateNationalIdentificationNumber (value) {
      /*
      Normally this would fully check LT asmens kodas validity (https://lt.wikipedia.org/wiki/Asmens_kodas),
      but for the sake of this test app, it will just check the length of it.
       */
      if (value === null) {
        this.step2.isInputValid = false
        return true
      } else if (value.toString().length === 11) {
        this.step2.isInputValid = true
        return true
      } else {
        this.step2.isInputValid = false
        // return 'Įveskite savo tikrą asmens kodą'
        return true
      }
    },
    validateMonthlyIncome (value) {
      if (value >= this.step3.minMonthlyIncome) {
        this.step3.isInputValid = true
        return true
      } else {
        this.step3.isInputValid = false
        return `Vartojamoji paskola neteikiama, jei pajamos nesiekia ${this.step3.minMonthlyIncome} Eur`
      }
    },
    validateLoan (value) {
      console.log('validateLoan (value)', value)
      if (value === null || value === '' || parseInt(value, 10) === 0) {
        this.step4.isInputValid = false
        return true
      } else if (parseInt(value, 10) < this.step4.minLoanSize) {
        this.step4.isInputValid = false
        return `Mažesnės nei ${this.step4.minLoanSize} Eur vartojamosios paskolos neišduodamos`
      } else if (parseInt(value, 10) > this.step4.maxLoanSize) {
        this.step4.isInputValid = false
        return `Didesnės nei ${this.step4.maxLoanSize} Eur vartojamosios paskolos neišduodamos`
      } else if (parseInt(value, 10) <= this.step3.monthlyIncome) {
        this.step4.isInputValid = true
        return true
      } else {
        this.step4.isInputValid = false
        return 'Vartojamosios paskolos dydis negali viršyti vieno mėnesio pajamų'
      }
    },
    validateAdditionalInfo (value) {
      if (value === null) {
        this.step5.isInputValid = true
        return true
      } else if (value.toString().length <= this.step5.counter) {
        this.step5.isInputValid = true
        return true
      } else {
        this.step5.isInputValid = false
        return 'Pranešimas negali būti ilgesnis nei ' + this.step5.counter + ' simbolių'
      }
    }
  }
}
</script>

<style scoped>
  .slider__thumb--label__container {
    display: initial !important;
    transition: none !important;
  }
</style>

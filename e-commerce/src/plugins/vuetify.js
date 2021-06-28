import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary200: '#BBB7FF',
          primary400: '#7278FA',
          primary500: '#5865F2',
          primary700: '#4C3BCC',
					success100:'#DCFCDO',
					success200:'#CEF8C3',
					success500:'#77DD77',
					info100:'#CBE4FE',
					info200:'#B9DAFD',
					info500:'#5F8FE8',
					error100:'#FFCECD',
					error200:'#FFBEBC',
					error500:'#FF6961',
        	warning100: '#FFF9CE',         
        	warning200: '#FFF8BD',
					warning500: '#FFD863',
					charcoal50: '#FCFCFC',
          charcoal100: '#E7E6E6',
          charcoal200: '#D2CFCF',
          charcoal400: '#8E8A8A',
          charcoal900: '#2E2B2B',
        },
      },
      options: {
        customProperties: true
      },
    },
  })

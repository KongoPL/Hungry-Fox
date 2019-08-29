import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
	.use( initReactI18next ) // passes i18n down to react-i18next
	.init( {
		resources: {
			pl: {
				translation: {
					"Order": "Zamów"
				}
			}
		},
		lng: "pl",

		interpolation: {
			escapeValue: false
		}
	} );
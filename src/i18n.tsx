import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
	.use( initReactI18next ) // passes i18n down to react-i18next
	.init( {
		resources: {
			en: {
				translation: {
					"LANGUAGE_NAME": "English"
				}
			},

			pl: {
				translation: {
					"LANGUAGE_NAME": "Polski",

					"Order": "Zamów",
					"Coupons": "Promocje",
					"Staff": "Zespół",
					"Partners": "Partnerzy",
					"Job": "Praca",
					"Contact": "Kontakt",
					"Order by phone": "Zamów przez telefon",
					"Github project": "Projekt github",
					"Our menu": "Nasze menu",
					"Your cart is empty": "Twój koszyk jest pusty",
					"Your order": "Twoje zamówienie",
					"Total": "Suma",
					"To apply just send us your CV at": "Aby aplikować, wyślij swoje CV na",
					"More info": "Więcej informacji",
					"Add": "Dodaj",
					"Page not found :(": "Nie znaleziono strony :(",
					"Sorry, that sometimes happens.": "Przykro nam, to się czasem zdarza",
					"If you think it shouldn't, contact with us": "Jeśli uważasz, że nie powinno, skontaktuj się z nami",
					"Order summary": "Podsumowanie zamówienia",
					"Order details": "Szczegóły zamówienia",
					"Name": "Imię",
					"Phone number": "Numer telefonu",
					"Street": "Ulica",
					"Building no.": "Nr. budynku",
					"Apartment no.": "Nr. mieszkania",
					"Payment method": "Metoda płatności",
					"Online transfer": "Przelew online",
					"Cash": "Gotówka",
					"Payment card": "Karta płatnicza",
					"Comments to order": "Komentarze do zamówienia",
					"Your cart is empty! Please order something first!": "Twój koszyk jest pusty! Najpierw dodaj coś do niego!",
					"Thank you for your order!": "Dziękujemy za twoje zamówienie!",
					"Approximated waiting time": "Przybliżony czas oczekiwania",
					"Order ID": "ID zamówienia",
					"If your order doesn't arrive within given time,": "Jeśli twoje zamówienie nie dotrze wciągu podanego czasu,",
					"or make a call": "lub zadzwoń",
					"However, take into account that I'm just a mock page.": "Jednakże weź pod uwagę, że jestem po prostu fałszywą stroną",
					"Email address": "Adres email",
					"Your name": "Twoje imię",
					"Message": "Wiadomość",
					"Send message": "Wyślij wiadomość",
					"Thank you for your message, we will contact with you soon!": "Dziękujemy za twoją wiadomość, skontaktujemy się z tobą wkrótce!"
				}
			}
		},

		lng: sessionStorage.getItem( 'language' ) || 'en',
		keySeparator: '>',
		nsSeparator: '|',

		interpolation: {
			escapeValue: false
		}
	} );
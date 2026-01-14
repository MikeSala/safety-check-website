export const ERROR_MESSAGES = {
  FORM_SUBMISSION_ERROR:
    "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie. Jeśli problem będzie się powtarzał, skontaktuj się z nami bezpośrednio pod adresem info@przegladinstalacji.com",
  FORM_SUBMISSION_SUCCESS: "Dziękujemy za kontakt! Wkrótce się z Tobą skontaktujemy.",
  INVALID_EMAIL: "Proszę podać poprawny adres email",
  REQUIRED_FIELD: (fieldName: string) => `Proszę podać ${fieldName}`,
} as const;

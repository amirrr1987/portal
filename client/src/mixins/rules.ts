export const validationRules = {
  required: (value: string) => !!value || "این فیلد الزامی است",
  en: (value: string) => {
    const enRegex = /^[A-Za-z\s]+$/gi;
    return enRegex.test(value) || "فقط انگلیسی مجاز است";
  },
  enNum: (value: string) => {
    const enNumRegex = /^[0-9]+$/gi;
    return enNumRegex.test(value) || "فقط اعداد انگلیسی مجاز است";
  },
  enCharNum: (value: string) => {
    const enCharNumRegex = /^[A-Za-z0-9]+$/gi;
    return enCharNumRegex.test(value) || "فقط انگلیسی و اعداد مجاز است";
  },
  faChar: (value: string) => {
    const faRegex = /^[آ-ی ء چ\s]+$/;
    return faRegex.test(value) || "فقط حروف فارسی مجاز است";
  },
  faCharNum: (value: string) => {
    const faCharNumRegex = /^[۰-۹ آ-ی ء چ\s]+$/;
    return faCharNumRegex.test(value) || "فقط فارسی و اعداد مجاز است";
  },
  mobile: (value: string) => {
    const numRegex = /^[0-9]+$/gi;
    return (
      (numRegex.test(value) && value.length === 11) ||
      "شماره همراه باید ۱۱ رقم باشد"
    );
  },
  nationalCode: (value: string) =>
    value.length === 10 || "کد ملی باید ۱۰ کاراکتر باشد",
  passwordMin: (value: string) =>
    value.length >= 8 || "رمز عبور باید حداقل ۸ کاراکتر باشد",
  email: (value: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value) || "پست الکترونیک صحیح نمی‌باشد";
  },
  persianAlpha: (value: string) => {
    const persianAlphaRegex = /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC\s]+$/;
    return persianAlphaRegex.test(value) || "فقط حروف فارسی مجاز است";
  },
  persianNumber: (value: string) => {
    const persianNumberRegex = /^[\u06F0-\u06F9]+$/;
    return persianNumberRegex.test(value) || "فقط اعداد فارسی مجاز است";
  },
};

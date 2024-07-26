export default class PhoneUtils {
    static format(phone: string): string {
        if (!phone) return ''
        const phoneNumbers = this.unformat(phone)
        return phoneNumbers.length <= 10
            ? this.replaceNumbers(phoneNumbers, '(xx) xxxx-xxxx')
            : this.replaceNumbers(phoneNumbers, '(xx) xxxxx-xxxx')
    }

    static unformat(phone: string): string {
        if (!phone) return ''
        return phone.replace(/\D/g, '').slice(0, 11)
    }

    private static replaceNumbers(phone: string, ref: string): string {
        let formatedPhone = phone
            .split('')
            .reduce((phone, phoneNum) => {
                return phone.replace('x', phoneNum)
            }, ref)
            .replace(/x/g, '')
        if (phone.length <= 2) formatedPhone = formatedPhone.replace(')', '').replace(' ', '')
        if (phone.length <= 6) formatedPhone = formatedPhone.replace('-', '')
        return formatedPhone
    }
}

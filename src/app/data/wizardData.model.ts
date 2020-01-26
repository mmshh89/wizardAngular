
export class WizardData {
    id: number;
    name: string = '';
    owner: string = '';
    customer: string = '';
    email: string = '';
    phone: string = '';
    webSite: string = '';
    language: string = '';
    time: string = '';
    communicationEmail: Boolean = false; 
    communicationSms: Boolean = false; 
    communicationPhone: Boolean = false; 
    address1: string = '';
    address2: string = '';
    postCode: string = '';
    state: string = '';
    country: string = '';
    city: string = '';

    clear() {
        this.name = '';
        this.owner = '';
        this.customer = '';
        this.email = '';
        this.phone = '';
        this.webSite = '';
        this.language = '';
        this.time = '';
        this.communicationEmail = false;
        this.communicationSms = false;
        this.communicationPhone = false;
        this.address1= '';
        this.address2= '';
        this.postCode= '';
        this.city = '';
        this.state= '';
        this.country = '';
    }
}


export class ProjectDetails {
    name: string = '';
    owner: string = '';
    customer: string = '';
    email: string = '';
    phone: string = '';
    webSite: string = '';
}


export class ProjectSettings {
    language: string = '';
    time: string = '';
    communicationEmail: Boolean = false; 
    communicationSms: Boolean = false; 
    communicationPhone: Boolean = false; 
}


export class DeliveryDetails {
    address1: string = '';
    address2: string = '';
    postCode: string = '';
    city: string = '';
    state: string = '';
    country: string = '';
}
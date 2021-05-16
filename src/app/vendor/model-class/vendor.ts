export class Vendor {
    vendorId:string;
    vendorName:string;
    emailId:string;
    website:string;
    location:string;
    vendorType:string;
    cuisinType:string;
    status:string;
    registrationStatus:string;
    transactionId:string;
    password:string;

    constructor(vendorId:string, vendorName:string, emailId:string, website:string, location:string,
        vendorType:string,cuisinType:string){
        this.vendorId = vendorId;
        this.vendorName = vendorName;
        this.emailId = emailId;
        this.website = website;
        this.location = location;
        this.cuisinType = cuisinType;
        this.vendorType = vendorType;
      }
}
